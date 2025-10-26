import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Award, Calendar, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user") || '{"name": "Demo User", "email": "demo@example.com"}');
  
  const userStats = {
    age: 25,
    height: 175,
    weight: 75,
    goal: "Maintain Weight",
    gender: "Male",
  };

  const accountStats = [
    { label: "Total Workouts", value: "156", icon: Award },
    { label: "Member Since", value: "Jan 2024", icon: Calendar },
    { label: "Current Streak", value: "7 days", icon: TrendingUp },
  ];

  return (
    <Layout title="Profile">
      <div className="space-y-6">
        {/* User Info Card */}
        <Card className="glass-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-6">
              <Avatar className="w-24 h-24">
                <AvatarFallback className="text-3xl bg-gradient-primary text-white">
                  {user.name?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1">{user.name}</h3>
                <p className="text-muted-foreground mb-4">{user.email}</p>
                <Button className="gradient-primary text-white">Edit Profile</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Body Stats */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Body Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground mb-1">Age</p>
                <p className="text-2xl font-bold">{userStats.age}</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground mb-1">Height</p>
                <p className="text-2xl font-bold">{userStats.height} cm</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground mb-1">Weight</p>
                <p className="text-2xl font-bold">{userStats.weight} kg</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground mb-1">Goal</p>
                <p className="text-lg font-bold">{userStats.goal}</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground mb-1">Gender</p>
                <p className="text-lg font-bold">{userStats.gender}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {accountStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="glass-card">
                <CardContent className="pt-6">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <p className="text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
