
import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";

interface ProfileHeaderProps {
  name: string;
  email: string;
  onEdit: () => void;
}

export default function ProfileHeader({
  name,
  email,
  onEdit,
}: ProfileHeaderProps) {
  const initial = name ? name.charAt(0).toUpperCase() : "U";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-center justify-between p-6 rounded-lg profile-neon bg-card"
    >
      <div className="flex items-center gap-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative p-1 rounded-full profile-avatar"
        >
          <Avatar className="w-20 h-20 border-2 border-background">
            <AvatarFallback className="text-3xl font-bold text-primary-foreground bg-transparent">
              {initial}
            </AvatarFallback>
          </Avatar>
        </motion.div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-foreground">{name}</h2>
          <p className="text-muted-foreground">{email}</p>
        </div>
      </div>
      <Button
        onClick={onEdit}
        className="mt-4 md:mt-0 btn-neon focus-outline"
        aria-label="Edit Profile"
      >
        <Edit className="mr-2 h-4 w-4" /> Edit Profile
      </Button>
    </motion.div>
  );
}
