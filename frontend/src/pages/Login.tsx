import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "lucide-react";
import { toast } from "sonner";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        const user = { id: data.userId, name: data.name, email: data.email };
        localStorage.setItem("user", JSON.stringify(user));
        toast.success("Login successful!");
        navigate("/dashboard");
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Invalid credentials. Please try again.");
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="stripe-bg"></div>
      </div>

      <Card className="w-full max-w-md glass-card relative z-10">
        <CardHeader className="space-y-4 text-center">
          <Link to="/" className="mx-auto w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
            <Activity className="w-10 h-10 text-primary-foreground" />
          </Link>
          <div>
            <CardTitle className="text-3xl font-bold">Welcome Back</CardTitle>
            <CardDescription className="text-base text-muted-foreground mt-2">
              Sign in to continue to EchoBody
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-muted-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-11 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-muted-foreground">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-11 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
              />
            </div>
            <Button
              type="submit"
              className="w-full h-11 bg-primary text-primary-foreground font-medium holographic-sheen"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Login"}
            </Button>
          </form>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
      <style jsx>{`
        .stripe-bg {
          display: none;
        }

        @keyframes sweep {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .stripe-bg {
            animation: none;
            background: linear-gradient(
              -45deg,
              transparent 30%,
              hsl(var(--primary) / 0.1) 45%,
              hsl(var(--secondary) / 0.1) 55%,
              transparent 70%
            );
          }
        }
      `}</style>
    </div>
  );
};


