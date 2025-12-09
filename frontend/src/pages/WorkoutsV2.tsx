import React, { useState } from "react";
import { motion } from "framer-motion";
import WorkoutToolbar from "../components/workouts/WorkoutToolbar";
import WorkoutList from "../components/workouts/WorkoutList";
import WorkoutDetailModal from "../components/workouts/WorkoutDetailModal";
import WorkoutChart from "../components/workouts/WorkoutChart";
import WorkoutFormModal from "../components/workouts/WorkoutFormModal"; // Import Form Modal
import "../styles/workouts.css";
// import { useCurrentUser } from "../hooks/useCurrentUser"; // Not strictly needed if API handles auth
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { workoutService, Workout } from "@/services/workoutService";
import { toast } from "sonner";

export default function WorkoutsV2() {
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false); // State for Form Modal

  // Fetch Workouts
  const { data: workouts = [], isLoading } = useQuery({
    queryKey: ['workouts'],
    queryFn: workoutService.getAll,
  });

  // Delete Mutation
  const deleteMutation = useMutation({
    mutationFn: workoutService.delete,
    onSuccess: () => {
      toast.success("Workout deleted");
      queryClient.invalidateQueries({ queryKey: ['workouts'] });
      queryClient.invalidateQueries({ queryKey: ['dashboardSummary'] });
    },
    onError: () => toast.error("Failed to delete workout"),
  });

  // Filter Logic
  const filteredWorkouts = workouts.filter((workout: Workout) => {
    const matchesSearch = workout.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === "all" || workout.muscleGroup.toLowerCase().includes(filterType.toLowerCase());
    return matchesSearch && matchesFilter;
  });

  const handleSearch = (query: string) => setSearchQuery(query);
  const handleFilter = (filter: string) => setFilterType(filter);

  const handleNewWorkout = () => {
    setIsFormModalOpen(true);
  };

  const handleSelectWorkout = (workoutId: string) => {
    const workout = workouts.find((w: Workout) => w.id === workoutId);
    if (workout) {
      setSelectedWorkout(workout);
      setIsDetailModalOpen(true);
    }
  };

  const handleEditWorkout = (workoutId: string) => {
    // For now, reuse form modal or generic edit (Implement Edit later if complex)
    // To handle Edit properly, we'd pass 'selectedWorkout' to FormModal and set mode to 'edit'
    toast.info("Edit feature coming next!");
  };

  const handleDeleteWorkout = (workoutId: string) => {
    deleteMutation.mutate(workoutId);
  };

  // Pagination mock
  const handleLoadMore = () => { };

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
            loading={isLoading}
            onLoadMore={handleLoadMore}
            hasMore={false}
          />
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-1 hidden lg:block space-y-8"
        >
          <WorkoutChart workouts={workouts} />
        </motion.div>
      </div>

      <WorkoutDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        workout={selectedWorkout as any} // Temporary cast if detail modal types are strict
        onEdit={handleEditWorkout}
      />

      <WorkoutFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
      />
    </motion.div>
  );
}
