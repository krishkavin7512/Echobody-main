package com.echobody.repository;

import com.echobody.model.MoodEntry;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface MoodRepository extends MongoRepository<MoodEntry, String> {
    List<MoodEntry> findByUserIdOrderByDateDesc(String userId);
}
