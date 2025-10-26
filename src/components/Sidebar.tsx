import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Dumbbell, 
  Utensils, 
  Heart, 
  TrendingUp, 
  User, 
  LogOut,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Sidebar = () => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user") || '{"name": "User"}');

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: Home },
    { path: "/workouts", label: "Workouts", icon: Dumbbell },
    { path: "/nutrition", label: "Nutrition", icon: Utensils },
    { path: "/mood", label: "Mood & Energy", icon: Heart },
    { path: "/progress", label: "Progress", icon: TrendingUp },
    { path: "/profile", label: "Profile", icon: User },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
          <Activity className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-sidebar-foreground">EchoBody</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-smooth ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 mb-3">
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">
              {user.name?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">
              {user.name || "User"}
            </p>
          </div>
        </div>
        <Button 
          onClick={handleLogout}
          variant="outline" 
          className="w-full justify-start gap-2 border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
