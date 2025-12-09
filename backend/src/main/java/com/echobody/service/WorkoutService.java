package com.echobody.service;

import com.echobody.model.Workout;
import com.echobody.repository.WorkoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class WorkoutService {

    @Autowired
    private WorkoutRepository workoutRepository;

    public List<Workout> getUserWorkouts(String userId) {
        return workoutRepository.findByUserIdOrderByDateDesc(userId);
    }

    public Workout logWorkout(Workout workout, String userId) {
        workout.setUserId(userId);
        if (workout.getDate() == null) {
            workout.setDate(LocalDateTime.now());
        }
        return workoutRepository.save(workout);
    }

    public Workout updateWorkout(String id, Workout workout, String userId) {
        return workoutRepository.findById(id)
                .map(existingWorkout -> {
                    if (existingWorkout.getUserId().equals(userId)) {
                        existingWorkout.setName(workout.getName());
                        existingWorkout.setMuscleGroup(workout.getMuscleGroup());
                        existingWorkout.setSets(workout.getSets());
                        existingWorkout.setReps(workout.getReps());
                        existingWorkout.setWeight(workout.getWeight());
                        existingWorkout.setCaloriesBurned(workout.getCaloriesBurned());
                        existingWorkout.setNotes(workout.getNotes());
                        return workoutRepository.save(existingWorkout);
                    }
                    return null;
                })
                .orElse(null);
    }

    public void deleteWorkout(String id) {
        workoutRepository.deleteById(id);
    }
}
