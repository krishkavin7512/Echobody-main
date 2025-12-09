package com.echobody.controller;

import com.echobody.dto.DashboardSummary;
import com.echobody.model.Meal;
import com.echobody.model.Workout;
import com.echobody.service.MealService;
import com.echobody.service.WorkoutService;
import com.echobody.security.JwtTokenProvider;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @Autowired
    private WorkoutService workoutService;

    @Autowired
    private MealService mealService;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @GetMapping("/summary")
    public DashboardSummary getSummary(@RequestHeader("Authorization") String token) {
        String userId = getUserIdFromToken(token);
        DashboardSummary summary = new DashboardSummary();

        // Workouts Logic
        List<Workout> workouts = workoutService.getUserWorkouts(userId);

        long workoutsThisWeekCount = workouts.stream()
                .filter(w -> w.getDate() != null && w.getDate().toLocalDate().isAfter(LocalDate.now().minusDays(7)))
                .count();
        summary.setWorkoutsThisWeek(workoutsThisWeekCount);

        summary.setTotalWorkouts(workouts.size());

        int totalBurned = workouts.stream()
                .mapToInt(Workout::getCaloriesBurned)
                .sum();
        summary.setTotalCaloriesBurned(totalBurned);

        // Meals Logic
        List<Meal> meals = mealService.getUserMeals(userId);

        int caloriesToday = meals.stream()
                .filter(m -> m.getDateTime() != null && m.getDateTime().toLocalDate().isEqual(LocalDate.now()))
                .mapToInt(Meal::getCalories)
                .sum();
        summary.setCaloriesToday(caloriesToday);

        summary.setTotalMeals(meals.size());

        int totalConsumed = meals.stream()
                .mapToInt(Meal::getCalories)
                .sum();
        summary.setTotalCaloriesConsumed(totalConsumed);

        // Mock/Simulated for now until dedicated tracking exists
        summary.setStreakDays(5);
        summary.setEnergyLevel("High");

        return summary;
    }

    private String getUserIdFromToken(String token) {
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
        return jwtTokenProvider.getUserIdFromJWT(token);
    }
}
