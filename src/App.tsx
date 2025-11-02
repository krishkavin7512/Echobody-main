import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import DashboardV2 from "./pages/DashboardV2"; // Import DashboardV2
import WorkoutsV2 from "./pages/WorkoutsV2";
import NutritionV2 from "./pages/NutritionV2";
import MoodV2 from "./pages/MoodV2";
import ProgressV2 from "./pages/ProgressV2";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage"; // Import HomePage
import Pricing from "./pages/Pricing"; // Import Pricing
import About from "./pages/About"; // Import About
import Layout from "./components/Layout"; // Import Layout

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Set HomePage as default */}
          <Route path="/home" element={<HomePage />} /> {/* Add /home route */}
          <Route path="/pricing" element={<Pricing />} /> {/* Add Pricing route */}
          <Route path="/about" element={<About />} /> {/* Add About route */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute><Layout><DashboardV2 /></Layout></ProtectedRoute>}
          />
          <Route
            path="/workouts"
            element={<ProtectedRoute><Layout><WorkoutsV2 /></Layout></ProtectedRoute>}
          />
          <Route
            path="/nutrition"
            element={<ProtectedRoute><Layout><NutritionV2 /></Layout></ProtectedRoute>}
          />
          <Route
            path="/mood"
            element={<ProtectedRoute><Layout><MoodV2 /></Layout></ProtectedRoute>}
          />
          <Route
            path="/progress"
            element={<ProtectedRoute><Layout><ProgressV2 /></Layout></ProtectedRoute>}
          />
          <Route
            path="/profile"
            element={<ProtectedRoute><Layout><Profile /></Layout></ProtectedRoute>}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;