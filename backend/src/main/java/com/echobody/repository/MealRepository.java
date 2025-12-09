package com.echobody.repository;

import com.echobody.model.Meal;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface MealRepository extends MongoRepository<Meal, String> {
    List<Meal> findByUserId(String userId);

    List<Meal> findByUserIdOrderByDateTimeDesc(String userId);
}
