
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MoodToolbar from "../components/mood/MoodToolbar";
import MoodList from "../components/mood/MoodList";
import MoodDetailModal from "../components/mood/MoodDetailModal";
import "../styles/mood.css";
import { useCurrentUser } from "../hooks/useCurrentUser"; // Assuming this hook exists

// Placeholder for mood data and API calls
const mockMoodEntries = [
  {
    id: "1",
    date: "2025-10-30",
    mood: "Great",
    energy: 9,
    notes: "Had a very productive day at work and a good workout.",
  },
  {
    id: "2",
    date: "2025-10-29",
    mood: "Good",
    energy: 7,
    notes: "Feeling positive, but a bit tired from yesterday.",
  },
  {
    id: "3",
    date: "2025-10-28",
    mood: "Okay",
    energy: 5,
    notes: "Just a normal day. Nothing special happened.",
  },
  {
    id: "4",
    date: "2025-10-27",
    mood: "Low",
    energy: 3,
    notes: "Feeling a bit down, struggling with motivation.",
  },
];

export default function MoodV2() {
  const { user, loading: userLoading } = useCurrentUser();
  const [moodEntries, setMoodEntries] = useState(mockMoodEntries);
  const [filteredMoodEntries, setFilteredMoodEntries] = useState(mockMoodEntries);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [listLoading, setListLoading] = useState(false);

  // In a real app, you'd fetch data here
  useEffect(() => {
    // Example fetch call (replace with actual API endpoint and auth)
    // const token = localStorage.getItem("token");
    // if (token) {
    //   fetch("/api/mood", {
    //     headers: { "Authorization": `Bearer ${token}` }
    //   })
    //     .then(res => res.json())
    //     .then(data => {
    //       setMoodEntries(data);
    //       setFilteredMoodEntries(data);
    //     })
    //     .catch(err => console.error("Failed to fetch mood entries:", err));
    // }
  }, []);

  const handleLogMood = () => {
    setSelectedEntry(null);
    setIsDetailModalOpen(true);
  };

  const handleSaveMood = (newEntry: any) => {
    if (newEntry.id && moodEntries.some(e => e.id === newEntry.id)) {
      // Edit existing entry
      setMoodEntries(moodEntries.map(e => (e.id === newEntry.id ? newEntry : e)));
      setFilteredMoodEntries(filteredMoodEntries.map(e => (e.id === newEntry.id ? newEntry : e)));
    } else {
      // Add new entry
      setMoodEntries([newEntry, ...moodEntries]);
      setFilteredMoodEntries([newEntry, ...filteredMoodEntries]);
    }
    // In a real app, you'd send this to your backend API
    console.log("Saving mood entry:", newEntry);
  };

  const handleSelectEntry = (entryId: string) => {
    const entry = moodEntries.find((e) => e.id === entryId);
    setSelectedEntry(entry);
    setIsDetailModalOpen(true);
  };

  const handleEditEntry = (entryId: string) => {
    const entry = moodEntries.find((e) => e.id === entryId);
    setSelectedEntry(entry);
    setIsDetailModalOpen(true);
  };

  const handleDeleteEntry = (entryId: string) => {
    if (window.confirm("Are you sure you want to delete this mood entry?")) {
      setMoodEntries(moodEntries.filter((entry) => entry.id !== entryId));
      setFilteredMoodEntries(filteredMoodEntries.filter((entry) => entry.id !== entryId));
      // In a real app, you'd send a DELETE request to your backend API
      console.log("Deleting mood entry:", entryId);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 md:p-8"
    >
      <MoodToolbar onLogMood={handleLogMood} />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-8"
      >
        <h2 className="text-2xl font-bold text-foreground mb-4">Mood History</h2>
        <MoodList
          entries={filteredMoodEntries}
          onSelect={handleSelectEntry}
          onEdit={handleEditEntry}
          onDelete={handleDeleteEntry}
          loading={listLoading}
        />
      </motion.div>

      <MoodDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        onSave={handleSaveMood}
        initialEntry={selectedEntry}
      />
    </motion.div>
  );
}
