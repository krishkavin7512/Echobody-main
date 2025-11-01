import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Activity } from "lucide-react";
import { toast } from "sonner";

export const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    height_cm: "",
    weight_kg: "",
    goal: "",
    gender: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const { confirmPassword, ...registerData } = formData;
      
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...registerData,
          age: parseInt(registerData.age),
          height_cm: parseInt(registerData.height_cm),
          weight_kg: parseInt(registerData.weight_kg),
        }),
      });

      if (response.ok) {
        toast.success("Account created! Please login.");
        navigate("/login");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden flex items-center justify-center p-4">
      {/* Glowing background gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-[40%] right-[-20%] w-[700px] h-[700px] bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[30%] w-[500px] h-[500px] bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <Card className="w-full max-w-2xl bg-card border-border text-foreground relative z-10 my-8">
        <CardHeader className="space-y-4 text-center">
          <Link to="/" className="mx-auto w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
            <Activity className="w-10 h-10 text-foreground" />
          </Link>
          <div>
            <CardTitle className="text-3xl font-bold">Create Account</CardTitle>
            <CardDescription className="text-base text-muted-foreground mt-2">
              Join EchoBody and start your wellness journey
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-muted-foreground">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-muted-foreground">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-muted-foreground">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  required
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-muted-foreground">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => handleChange("confirmPassword", e.target.value)}
                  required
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age" className="text-muted-foreground">Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="25"
                  min="13"
                  max="120"
                  value={formData.age}
                  onChange={(e) => handleChange("age", e.target.value)}
                  required
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender" className="text-muted-foreground">Gender</Label>
                <Select onValueChange={(value) => handleChange("gender", value)} required>
                  <SelectTrigger className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border text-foreground">
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="height" className="text-muted-foreground">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="170"
                  value={formData.height_cm}
                  onChange={(e) => handleChange("height_cm", e.target.value)}
                  required
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight" className="text-muted-foreground">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="70"
                  value={formData.weight_kg}
                  onChange={(e) => handleChange("weight_kg", e.target.value)}
                  required
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="goal" className="text-muted-foreground">Goal</Label>
                <Select onValueChange={(value) => handleChange("goal", value)} required>
                  <SelectTrigger className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary">
                    <SelectValue placeholder="Select your goal" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border text-foreground">
                    <SelectItem value="Lose Weight">Lose Weight</SelectItem>
                    <SelectItem value="Maintain Weight">Maintain Weight</SelectItem>
                    <SelectItem value="Gain Weight">Gain Weight</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full h-11 bg-primary text-foreground font-medium mt-6"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </Button>
          </form>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes animate-blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        .animate-blob {
          animation: animate-blob 7s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};


