package com.echobody.controller;

import com.echobody.dto.PersonalRecordDTO;
import com.echobody.dto.ProgressSummaryDTO;
import com.echobody.dto.TrendPointDTO;
import com.echobody.model.Workout;
import com.echobody.service.WorkoutService;
import com.echobody.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/progress")
public class ProgressController {

    @Autowired
    private WorkoutService workoutService;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @GetMapping("/summary")
    public ProgressSummaryDTO getSummary(@RequestHeader("Authorization") String token) {
        String userId = getUserIdFromToken(token);
        List<Workout> workouts = workoutService.getUserWorkouts(userId);

        ProgressSummaryDTO summary = new ProgressSummaryDTO();
        summary.setTotalWorkouts(workouts.size());

        int totalCalories = workouts.stream().mapToInt(Workout::getCaloriesBurned).sum();
        summary.setTotalCaloriesBurned(totalCalories);

        summary.setLongestStreak(calculateStreak(workouts));

        // Mock score logic: base 60 + (workouts/10) capped at 100
        int score = Math.min(100, 60 + (workouts.size() / 2));
        summary.setAvgEchoScore(score);

        return summary;
    }

    @GetMapping("/trend")
    public List<TrendPointDTO> getTrend(@RequestHeader("Authorization") String token) {
        String userId = getUserIdFromToken(token);
        List<Workout> workouts = workoutService.getUserWorkouts(userId);

        // Group by date and sum calories or count
        Map<String, Integer> dailyScore = new HashMap<>();

        for (Workout w : workouts) {
            if (w.getDate() == null)
                continue;
            String date = w.getDate().toLocalDate().toString();
            // Simple score: 10 points per workout + calories/10
            int points = 10 + (w.getCaloriesBurned() / 50);
            dailyScore.merge(date, points, Integer::sum);
        }

        return dailyScore.entrySet().stream()
                .sorted(Map.Entry.comparingByKey())
                .map(e -> new TrendPointDTO(e.getKey(), Math.min(100, e.getValue())))
                .collect(Collectors.toList());
    }

    @GetMapping("/records")
    public List<PersonalRecordDTO> getRecords(@RequestHeader("Authorization") String token) {
        String userId = getUserIdFromToken(token);
        List<Workout> workouts = workoutService.getUserWorkouts(userId);

        // Group by workout name, find max weight
        Map<String, Workout> maxLiftMap = new HashMap<>();

        for (Workout w : workouts) {
            // Normalize name
            if (w.getName() == null || w.getName().isEmpty())
                continue;
            String name = w.getName().trim();

            if (!maxLiftMap.containsKey(name) || w.getWeight() > maxLiftMap.get(name).getWeight()) {
                maxLiftMap.put(name, w);
            }
        }

        return maxLiftMap.values().stream()
                .map(w -> new PersonalRecordDTO(
                        w.getId(),
                        w.getName(),
                        w.getDate() != null ? w.getDate().toString() : "",
                        w.getWeight(),
                        "kg" // Assuming kg
                ))
                .collect(Collectors.toList());
    }

    private int calculateStreak(List<Workout> workouts) {
        if (workouts.isEmpty())
            return 0;

        List<LocalDate> dates = workouts.stream()
                .map(Workout::getDate)
                .filter(Objects::nonNull)
                .map(java.time.LocalDateTime::toLocalDate)
                .distinct()
                .sorted(Comparator.reverseOrder())
                .collect(Collectors.toList());

        if (dates.isEmpty())
            return 0;

        int currentStreak = 0;
        int maxStreak = 0;

        // Simple streak calculation (consecutive days)
        // This calculates longest streak ever
        List<LocalDate> sortedDates = dates.stream().sorted().collect(Collectors.toList());
        int tempStreak = 1;

        for (int i = 0; i < sortedDates.size() - 1; i++) {
            LocalDate d1 = sortedDates.get(i);
            LocalDate d2 = sortedDates.get(i + 1);

            if (d1.plusDays(1).equals(d2)) {
                tempStreak++;
            } else {
                maxStreak = Math.max(maxStreak, tempStreak);
                tempStreak = 1;
            }
        }
        maxStreak = Math.max(maxStreak, tempStreak);

        return maxStreak;
    }

    private String getUserIdFromToken(String token) {
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
        return jwtTokenProvider.getUserIdFromJWT(token);
    }
}
