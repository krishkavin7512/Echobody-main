package com.echobody.controller;

import com.echobody.model.Meal;
import com.echobody.service.MealService;
import com.echobody.security.JwtTokenProvider;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@RestController
@RequestMapping("/api/meals")
public class MealController {

    @Autowired
    private MealService mealService;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @GetMapping
    public List<Meal> getMeals(@RequestHeader("Authorization") String token) {
        String userId = getUserIdFromToken(token);
        return mealService.getUserMeals(userId);
    }

    @PostMapping
    public Meal createMeal(@RequestHeader("Authorization") String token, @RequestBody Meal meal) {
        String userId = getUserIdFromToken(token);
        return mealService.logMeal(meal, userId);
    }

    @PutMapping("/{id}")
    public Meal updateMeal(@RequestHeader("Authorization") String token, @PathVariable String id,
            @RequestBody Meal meal) {
        String userId = getUserIdFromToken(token);
        return mealService.updateMeal(id, meal, userId);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteMeal(@PathVariable String id) {
        mealService.deleteMeal(id);
        return ResponseEntity.ok().build();
    }

    private String getUserIdFromToken(String token) {
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
        return jwtTokenProvider.getUserIdFromJWT(token);
    }
}
