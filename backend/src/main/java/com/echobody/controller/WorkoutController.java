package com.echobody.controller;

import com.echobody.model.Workout;
import com.echobody.service.WorkoutService;
import com.echobody.security.JwtTokenProvider;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@RestController
@RequestMapping("/api/workouts")
public class WorkoutController {

    @Autowired
    private WorkoutService workoutService;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @GetMapping
    public List<Workout> getWorkouts(@RequestHeader("Authorization") String token) {
        String userId = getUserIdFromToken(token);
        return workoutService.getUserWorkouts(userId);
    }

    @PostMapping
    public Workout createWorkout(@RequestHeader("Authorization") String token, @RequestBody Workout workout) {
        String userId = getUserIdFromToken(token);
        return workoutService.logWorkout(workout, userId);
    }

    @PutMapping("/{id}")
    public Workout updateWorkout(@RequestHeader("Authorization") String token, @PathVariable String id,
            @RequestBody Workout workout) {
        String userId = getUserIdFromToken(token);
        return workoutService.updateWorkout(id, workout, userId);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteWorkout(@PathVariable String id) {
        workoutService.deleteWorkout(id);
        return ResponseEntity.ok().build();
    }

    private String getUserIdFromToken(String token) {
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
        return jwtTokenProvider.getUserIdFromJWT(token); // Assuming subject is username/email, might need to look up
                                                         // User ID if they differ
    }
}
