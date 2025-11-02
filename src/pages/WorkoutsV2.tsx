
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import WorkoutToolbar from "../components/workouts/WorkoutToolbar";
import WorkoutList from "../components/workouts/WorkoutList";
import WorkoutDetailModal from "../components/workouts/WorkoutDetailModal";
import WorkoutChart from "../components/workouts/WorkoutChart";
import "../styles/workouts.css";
import { useCurrentUser } from "../hooks/useCurrentUser"; // Assuming this hook exists

// Placeholder for workout data and API calls
const mockWorkouts = [
  {
    id: "1",
    date: "2025-10-26",
    name: "Full Body Strength",
    muscleGroup: "Full Body",
    sets: 3,
    reps: 10,
    weight: 50,
    caloriesBurned: 300,
    notes: "Felt strong today. Increased weight on squats.",
  },
  {
    id: "2",
    date: "2025-10-24",
    name: "Upper Body Focus",
    muscleGroup: "Upper Body",
    sets: 4,
    reps: 8,
    weight: 45,
    caloriesBurned: 250,
    notes: "Good pump on bicep curls.",
  },
  {
    id: "3",
    date: "2025-10-22",
    name: "Leg Day",
    muscleGroup: "Legs",
    sets: 3,
    reps: 12,
    weight: 60,
    caloriesBurned: 350,
    notes: "Legs are burning!",
  },
  {
    id: "4",
    date: "2025-10-20",
    name: "Cardio Blast",
    muscleGroup: "Cardio",
    sets: 1,
    reps: 30,
    weight: 0,
    caloriesBurned: 400,
    notes: "30 minutes on the treadmill.",
  },
];

export default function WorkoutsV2() {
  const { user, loading: userLoading } = useCurrentUser();
  const [workouts, setWorkouts] = useState(mockWorkouts);
  const [filteredWorkouts, setFilteredWorkouts] = useState(mockWorkouts);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [listLoading, setListLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredWorkouts(workouts);
      return;
    }
    setFilteredWorkouts(
      workouts.filter((workout) =>
        workout.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const handleFilter = (filter: string) => {
    if (filter === "all") {
      setFilteredWorkouts(workouts);
      return;
    }
    setFilteredWorkouts(
      workouts.filter((workout) =>
        workout.muscleGroup.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  const handleNewWorkout = () => {
    // Logic to open a form for new workout
    alert("Log New Workout clicked!");
  };

  const handleSelectWorkout = (workoutId: string) => {
    const workout = workouts.find((w) => w.id === workoutId);
    setSelectedWorkout(workout);
    setIsDetailModalOpen(true);
  };

  const handleEditWorkout = (workoutId: string) => {
    alert(`Edit workout ${workoutId}`);
    // Logic to open edit form
  };

  const handleDeleteWorkout = (workoutId: string) => {
    if (window.confirm("Are you sure you want to delete this workout?")) {
      setWorkouts(workouts.filter((workout) => workout.id !== workoutId));
      setFilteredWorkouts(filteredWorkouts.filter((workout) => workout.id !== workoutId));
    }
  };

  const handleLoadMore = () => {
    setListLoading(true);
    setTimeout(() => {
      setWorkouts((prev) => [...prev, ...mockWorkouts.map((w, i) => ({ ...w, id: `${prev.length + i + 1}` }))]);
      setFilteredWorkouts((prev) => [...prev, ...mockWorkouts.map((w, i) => ({ ...w, id: `${prev.length + i + 1}` }))]);
      setListLoading(false);
      setHasMore(workouts.length < 20); // Example: stop loading after 20 items
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 md:p-8"
    >
      <WorkoutToolbar
        onSearch={handleSearch}
        onFilter={handleFilter}
        onNewWorkout={handleNewWorkout}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <WorkoutList
            workouts={filteredWorkouts}
            onSelect={handleSelectWorkout}
            onEdit={handleEditWorkout}
            onDelete={handleDeleteWorkout}
            loading={listLoading}
            onLoadMore={handleLoadMore}
            hasMore={hasMore}
          />
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-1 hidden lg:block space-y-8"
        >
          <WorkoutChart />
          {/* Potentially add Quick Actions here as well */}
        </motion.div>
      </div>

      <WorkoutDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        workout={selectedWorkout}
        onEdit={handleEditWorkout}
      />
    </motion.div>
  );
}
