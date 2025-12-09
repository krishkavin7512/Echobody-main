package com.echobody.dto;

import lombok.Data;

@Data
public class DashboardSummary {
    private long workoutsThisWeek;
    private int caloriesToday;
    private int streakDays;
    private String energyLevel;

    // New fields for dashboard stats
    private long totalWorkouts;
    private long totalMeals;
    private int totalCaloriesConsumed;
    private int totalCaloriesBurned;
}
