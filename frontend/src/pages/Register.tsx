import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Activity } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Full Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
  confirmPassword: z.string().min(8, { message: "Confirm Password must be at least 8 characters." }),
  age: z.coerce.number().min(13, { message: "You must be at least 13 years old." }).max(120, { message: "Age seems too high." }),
  gender: z.enum(["Male", "Female", "Other"], { message: "Please select a gender." }),
  height_cm: z.coerce.number().min(50, { message: "Height must be at least 50 cm." }).max(250, { message: "Height seems too high." }),
  weight_kg: z.coerce.number().min(20, { message: "Weight must be at least 20 kg." }).max(300, { message: "Weight seems too high." }),
  goal: z.enum(["Lose Weight", "Maintain Weight", "Gain Weight"], { message: "Please select a goal." }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match.",
  path: ["confirmPassword"],
});

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      age: 0,
      gender: undefined,
      height_cm: 0,
      weight_kg: 0,
      goal: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);

    try {
      const { confirmPassword, ...registerData } = values;

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...registerData,
          age: registerData.age,
          height_cm: registerData.height_cm,
          weight_kg: registerData.weight_kg,
        }),
      });

      if (response.ok) {
        toast.success("Account created successfully", { description: "Please login to continue." });
        navigate("/login");
      } else {
        toast.error("Registration failed", { description: "Please try again with different credentials." });
      }
    } catch (error) {
      toast.error("An error occurred", { description: "Please check your network and try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-background">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              staggerChildren: 0.05,
            },
          },
        }}
        className="w-full max-w-2xl relative z-10"
      >
        <div className="glass-card rounded-2xl overflow-hidden p-1">
          <Card className="bg-transparent border-none shadow-none text-foreground">
            <CardHeader className="space-y-4 text-center pb-2">
              <motion.div variants={itemVariants} className="flex justify-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-neon">
                  <Activity className="w-8 h-8 text-black" />
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-1">
                <CardTitle className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white">Create Account</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Start your transformation journey today
                </CardDescription>
              </motion.div>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-black/20 border-white/10 focus:border-primary focus:ring-primary/20 transition-all" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" className="bg-black/20 border-white/10 focus:border-primary focus:ring-primary/20 transition-all" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="••••••••" className="bg-black/20 border-white/10 focus:border-primary focus:ring-primary/20 transition-all" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Confirm Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="••••••••" className="bg-black/20 border-white/10 focus:border-primary focus:ring-primary/20 transition-all" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="age"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Age</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="25" className="bg-black/20 border-white/10 focus:border-primary focus:ring-primary/20 transition-all" {...field} onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : 0)} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Gender</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-black/20 border-white/10 focus:border-primary focus:ring-primary/20 transition-all">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-black/90 border-white/10 backdrop-blur-xl">
                              <SelectItem value="Male">Male</SelectItem>
                              <SelectItem value="Female">Female</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="height_cm"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Height (cm)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="170" className="bg-black/20 border-white/10 focus:border-primary focus:ring-primary/20 transition-all" {...field} onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : 0)} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="weight_kg"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Weight (kg)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="70" className="bg-black/20 border-white/10 focus:border-primary focus:ring-primary/20 transition-all" {...field} onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : 0)} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="goal"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel className="text-muted-foreground">Goal</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-black/20 border-white/10 focus:border-primary focus:ring-primary/20 transition-all">
                                <SelectValue placeholder="Select your goal" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-black/90 border-white/10 backdrop-blur-xl">
                              <SelectItem value="Lose Weight">Lose Weight</SelectItem>
                              <SelectItem value="Maintain Weight">Maintain Weight</SelectItem>
                              <SelectItem value="Gain Weight">Gain Weight</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <motion.div variants={itemVariants} className="pt-4">
                    <Button
                      type="submit"
                      className="w-full h-11 bg-primary text-black font-bold text-lg hover:bg-primary/90 hover:scale-[1.02] transition-all shadow-neon"
                      disabled={loading}
                    >
                      {loading ? "Creating Account..." : "Create Account"}
                    </Button>
                  </motion.div>
                </form>
              </Form>
              <motion.div variants={itemVariants} className="mt-8 text-center text-sm">
                <p className="text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/login" className="font-semibold text-primary hover:text-primary/80 hover:underline transition-colors">
                    Login here
                  </Link>
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};