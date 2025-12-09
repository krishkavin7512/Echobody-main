package com.echobody.dto;

import lombok.Data;

@Data
public class ProgressSummaryDTO {
    private long totalWorkouts;
    private int totalCaloriesBurned;
    private int longestStreak;
    private int avgEchoScore;
}
