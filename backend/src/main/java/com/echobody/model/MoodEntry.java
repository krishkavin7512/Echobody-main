package com.echobody.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Document(collection = "mood_entries")
public class MoodEntry {
    @Id
    private String id;
    private String userId;
    private String mood; // Great, Good, Okay, Low, Bad
    private int energy; // 1-10
    private String notes;
    private LocalDateTime date;

    public MoodEntry() {
    }

    public MoodEntry(String userId, String mood, int energy, String notes, LocalDateTime date) {
        this.userId = userId;
        this.mood = mood;
        this.energy = energy;
        this.notes = notes;
        this.date = date;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getMood() {
        return mood;
    }

    public void setMood(String mood) {
        this.mood = mood;
    }

    public int getEnergy() {
        return energy;
    }

    public void setEnergy(int energy) {
        this.energy = energy;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }
}
