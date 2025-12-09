import { useState } from "react";
import { CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, TrendingUp, User, Ruler, Weight, Target, Edit2, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { userService, UserProfile } from "@/services/userService";
import { toast } from "sonner";
import { motion } from "framer-motion";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data: user, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: userService.getProfile,
    // Provide some default dummy data if backend is empty/failing during dev
    initialData: {
      id: "1",
      name: "User",
      email: "user@example.com",
      age: 25,
      height_cm: 175,
      weight_kg: 70,
      goal: "Build Muscle",
      gender: "Prefer not to say"
    } as UserProfile
  });

  const updateMutation = useMutation({
    mutationFn: userService.updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      toast.success("Profile updated successfully!");
      setOpen(false);
    },
    onError: () => toast.error("Failed to update profile"),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const updatedUser: UserProfile = {
      ...user,
      name: formData.get('name') as string,
      age: Number(formData.get('age')),
      height_cm: Number(formData.get('height')),
      weight_kg: Number(formData.get('weight')),
      goal: formData.get('goal') as string,
      gender: formData.get('gender') as string,
    };

    updateMutation.mutate(updatedUser);
  };

  const accountStats = [
    { label: "Account Type", value: "Premium", icon: Shield, color: "text-yellow-400" },
    { label: "Member Since", value: "Jan 2024", icon: Calendar, color: "text-blue-400" },
    { label: "Current Streak", value: "7 Days", icon: TrendingUp, color: "text-emerald-400" },
  ];

  if (isLoading) return <Layout><div className="text-white">Loading profile...</div></Layout>;

  return (
    <Layout>
      <div className="space-y-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card overflow-hidden relative rounded-3xl"
        >
          {/* Banner Bg */}
          <div className="h-32 bg-gradient-to-r from-blue-600/20 to-purple-600/20 w-full absolute top-0 left-0" />

          <CardContent className="pt-16 pb-8 relative z-10 px-8">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
              <Avatar className="w-32 h-32 border-4 border-black shadow-2xl ring-4 ring-primary/20">
                <AvatarFallback className="text-4xl bg-gradient-to-br from-primary to-accent text-white font-bold">
                  {user.name?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left space-y-2">
                <div>
                  <h1 className="text-3xl font-extrabold text-white tracking-tight">{user.name}</h1>
                  <p className="text-muted-foreground font-medium">{user.email}</p>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                    {user.goal || "No Goal Set"}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20">
                    {user.gender || "Human"}
                  </span>
                </div>
              </div>

              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-md transition-all">
                    <Edit2 className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </DialogTrigger>
                <DialogContent className="glass-card border-white/10 text-white sm:max-w-lg backdrop-blur-xl">
                  <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2 col-span-2">
                        <Label>Full Name</Label>
                        <Input name="name" defaultValue={user.name} className="bg-black/40 border-white/10" required />
                      </div>
                      <div className="space-y-2">
                        <Label>Age</Label>
                        <Input name="age" type="number" defaultValue={user.age} className="bg-black/40 border-white/10" />
                      </div>
                      <div className="space-y-2">
                        <Label>Gender</Label>
                        <Select name="gender" defaultValue={user.gender}>
                          <SelectTrigger className="bg-black/40 border-white/10">
                            <SelectValue placeholder="Gender" />
                          </SelectTrigger>
                          <SelectContent className="bg-black/90 border-white/10">
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                            <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Height (cm)</Label>
                        <Input name="height" type="number" defaultValue={user.height_cm} className="bg-black/40 border-white/10" />
                      </div>
                      <div className="space-y-2">
                        <Label>Weight (kg)</Label>
                        <Input name="weight" type="number" defaultValue={user.weight_kg} className="bg-black/40 border-white/10" />
                      </div>
                      <div className="space-y-2 col-span-2">
                        <Label>Primary Goal</Label>
                        <Select name="goal" defaultValue={user.goal}>
                          <SelectTrigger className="bg-black/40 border-white/10">
                            <SelectValue placeholder="Select Goal" />
                          </SelectTrigger>
                          <SelectContent className="bg-black/90 border-white/10">
                            <SelectItem value="Lose Weight">Lose Weight</SelectItem>
                            <SelectItem value="Build Muscle">Build Muscle</SelectItem>
                            <SelectItem value="Maintain Weight">Maintain Weight</SelectItem>
                            <SelectItem value="Improve Endurance">Improve Endurance</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button type="submit" disabled={updateMutation.isPending} className="w-full bg-primary text-black font-bold hover:bg-primary/90 mt-4">
                      {updateMutation.isPending ? "Saving..." : "Save Changes"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </motion.div>

        {/* Body Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="glass-card p-5 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
            <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 mb-2">
              <User className="w-5 h-5" />
            </div>
            <div className="text-2xl font-bold text-white group-hover:scale-110 transition-transform">{user.age}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Years Old</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="glass-card p-5 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-500 mb-2">
              <Ruler className="w-5 h-5" />
            </div>
            <div className="text-2xl font-bold text-white group-hover:scale-110 transition-transform">{user.height_cm}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">cm Height</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="glass-card p-5 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
            <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-500 mb-2">
              <Weight className="w-5 h-5" />
            </div>
            <div className="text-2xl font-bold text-white group-hover:scale-110 transition-transform">{user.weight_kg}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">kg Weight</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="glass-card p-5 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 mb-2">
              <Target className="w-5 h-5" />
            </div>
            <div className="text-sm font-bold text-white mt-1 mb-1 line-clamp-1">{user.goal}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Primary Goal</div>
          </motion.div>
        </div>

        {/* Account Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {accountStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 rounded-2xl flex items-center gap-4 group"
              >
                <div className={`p-4 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors ${stat.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
