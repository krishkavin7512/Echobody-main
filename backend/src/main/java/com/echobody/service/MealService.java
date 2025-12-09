package com.echobody.service;

import com.echobody.model.Meal;
import com.echobody.repository.MealRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class MealService {

    @Autowired
    private MealRepository mealRepository;

    public List<Meal> getUserMeals(String userId) {
        return mealRepository.findByUserIdOrderByDateTimeDesc(userId);
    }

    public Meal logMeal(Meal meal, String userId) {
        meal.setUserId(userId);
        if (meal.getDateTime() == null) {
            meal.setDateTime(LocalDateTime.now());
        }
        return mealRepository.save(meal);
    }

    public Meal updateMeal(String id, Meal meal, String userId) {
        return mealRepository.findById(id)
                .map(existingMeal -> {
                    if (existingMeal.getUserId().equals(userId)) {
                        existingMeal.setTitle(meal.getTitle());
                        existingMeal.setCalories(meal.getCalories());
                        existingMeal.setProtein(meal.getProtein());
                        existingMeal.setCarbs(meal.getCarbs());
                        existingMeal.setFat(meal.getFat());
                        existingMeal.setType(meal.getType());
                        existingMeal.setNotes(meal.getNotes());
                        return mealRepository.save(existingMeal);
                    }
                    return null;
                })
                .orElse(null);
    }

    public void deleteMeal(String id) {
        mealRepository.deleteById(id);
    }
}
