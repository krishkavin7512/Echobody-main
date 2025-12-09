package com.echobody.controller;

import com.echobody.model.MoodEntry;
import com.echobody.service.MoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mood")
public class MoodController {
    @Autowired
    private MoodService moodService;

    @GetMapping
    public List<MoodEntry> getMoodEntries(Authentication authentication) {
        return moodService.getMoodEntries(authentication.getName());
    }

    @PostMapping
    public MoodEntry addMoodEntry(@RequestBody MoodEntry entry, Authentication authentication) {
        return moodService.addMoodEntry(entry, authentication.getName());
    }

    @DeleteMapping("/{id}")
    public void deleteMoodEntry(@PathVariable String id) {
        moodService.deleteMoodEntry(id);
    }
}
