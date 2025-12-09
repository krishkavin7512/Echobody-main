package com.echobody.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document(collection = "workouts")
public class Workout {
    @Id
    private String id;
    private String userId;
    private String name;
    private String muscleGroup;
    private int sets;
    private int reps;
    private double weight;
    private int caloriesBurned;
    private String notes;
    private LocalDateTime date;
}
