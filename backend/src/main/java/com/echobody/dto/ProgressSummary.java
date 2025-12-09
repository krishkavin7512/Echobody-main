package com.echobody.dto;

import java.util.List;

public class ProgressSummary {
    private long totalWorkouts;
    private long totalCalories;
    private int longestStreak;
    private int avgEchoScore;

    // Getters and Setter
    public long getTotalWorkouts() {
        return totalWorkouts;
    }

    public void setTotalWorkouts(long totalWorkouts) {
        this.totalWorkouts = totalWorkouts;
    }

    public long getTotalCalories() {
        return totalCalories;
    }

    public void setTotalCalories(long totalCalories) {
        this.totalCalories = totalCalories;
    }

    public int getLongestStreak() {
        return longestStreak;
    }

    public void setLongestStreak(int longestStreak) {
        this.longestStreak = longestStreak;
    }

    public int getAvgEchoScore() {
        return avgEchoScore;
    }

    public void setAvgEchoScore(int avgEchoScore) {
        this.avgEchoScore = avgEchoScore;
    }
}
