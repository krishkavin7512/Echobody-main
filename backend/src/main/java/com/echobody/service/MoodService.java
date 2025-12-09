package com.echobody.service;

import com.echobody.model.MoodEntry;
import com.echobody.repository.MoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class MoodService {
    @Autowired
    private MoodRepository moodRepository;

    public List<MoodEntry> getMoodEntries(String userId) {
        return moodRepository.findByUserIdOrderByDateDesc(userId);
    }

    public MoodEntry addMoodEntry(MoodEntry entry, String userId) {
        entry.setUserId(userId);
        if (entry.getDate() == null) {
            entry.setDate(LocalDateTime.now());
        }
        return moodRepository.save(entry);
    }

    public void deleteMoodEntry(String id) {
        moodRepository.deleteById(id);
    }
}
