
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCurrentUser } from "../hooks/useCurrentUser";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileStatsGrid from "../components/profile/ProfileStatsGrid";
import ProfileSummaryCards from "../components/profile/ProfileSummaryCards";
import EditProfileModal from "../components/profile/EditProfileModal";
import "../styles/profile.css";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProfileV2() {
  const { user, loading, error, refetch } = useCurrentUser();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [localUser, setLocalUser] = useState(user);

  useEffect(() => {
    setLocalUser(user);
  }, [user]);

  const handleEditProfile = () => {
    setIsEditModalOpen(true);
  };

  const handleSaveProfile = (updatedUser: any) => {
    setLocalUser(updatedUser);
    // In a real app, you would refetch the user data after a successful update
    // refetch();
  };

  const mockSummaryStats = {
    totalWorkouts: 156,
    memberSince: "Jan 2023",
    currentStreak: 14,
  };

  if (loading) {
    return (
      <div className="p-4 md:p-8 space-y-8">
        <Skeleton className="h-32 w-full" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-32 w-full" />)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => <Skeleton key={i} className="h-32 w-full" />)}
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="p-4 md:p-8 text-red-500">Error loading profile: {error.message}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 md:p-8 space-y-8"
    >
      <ProfileHeader
        name={localUser?.name || "User"}
        email={localUser?.email || "user@example.com"}
        onEdit={handleEditProfile}
      />

      {localUser && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">Body Statistics</h2>
          <ProfileStatsGrid user={localUser} />
        </motion.div>
      )}

      {localUser && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">Summary</h2>
          <ProfileSummaryCards stats={mockSummaryStats} />
        </motion.div>
      )}

      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSaveProfile}
        currentUser={localUser}
      />
    </motion.div>
  );
}
