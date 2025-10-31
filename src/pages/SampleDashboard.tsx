import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Progress } from "@/components/ui/progress";
import { Dumbbell, Flame, Zap, ArrowLeft, Target, Trophy, Lightbulb, User, Calendar, Quote, Utensils, Heart } from 'lucide-react';

const SampleDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("Prarthana");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        if (parsedUser.name) {
          setUserName(parsedUser.name);
        } else if (parsedUser.email) {
          setUserName(parsedUser.email.split('@')[0]); // Use email prefix if name not available
        }
      } catch (error) {
        console.error("Failed to parse user data from localStorage", error);
      }
    }
  }, []);
  const slideInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const statCards = [
    { title: "Workouts this week", value: "3", icon: Dumbbell },
    { title: "Calories consumed", value: "2,100", icon: Flame },
    { title: "Consistency", value: "75%", icon: Zap },
  ];

  const goals = [
    { description: "Run 5k in under 30 minutes", progress: 60 },
    { description: "Lose 5kg by end of month", progress: 80 },
    { description: "Drink 2L water daily", progress: 90 },
  ];

  const achievements = [
    "Completed 30-day plank challenge",
    "Hit new personal best on squat",
    "Maintained calorie deficit for a week",
  ];

  const healthTips = [
    "Stay hydrated: Drink at least 8 glasses of water a day.",
    "Prioritize sleep: Aim for 7-9 hours of quality sleep each night.",
    "Incorporate strength training: Build muscle to boost metabolism.",
  ];

  const upcomingEvents = [
    { date: "Oct 28", event: "Yoga Class" },
    { date: "Oct 30", event: "Cardio Session" },
    { date: "Nov 05", event: "Nutrition Workshop" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white font-sans relative overflow-hidden p-8">
      {/* Glowing background gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-[40%] right-[-20%] w-[700px] h-[700px] bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[30%] w-[500px] h-[500px] bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <Link to="/">
          <Button variant="outline" className="bg-transparent text-white border-gray-600 hover:bg-white/10 hover:text-white mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <motion.h1
          className="text-4xl font-bold mb-8"
          variants={slideInUp}
          initial="hidden"
          animate="visible"
        >
          Welcome back, {userName} 👋
        </motion.h1>

        {/* User Profile / Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          <motion.div variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="lg:col-span-1">
            <Card className="bg-white/5 border-gray-700 h-full">
              <CardHeader className="flex flex-row items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center text-white text-xl font-bold">
                  DU
                </div>
                <div>
                  <CardTitle className="text-white">Demo User</CardTitle>
                  <p className="text-gray-400 text-sm">Level 10 Fitness Enthusiast</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start gap-2 bg-white/10 hover:bg-white/20 text-white"
                  onClick={() => navigate('/sample-log-workout')}
                >
                  <Dumbbell className="h-4 w-4" /> Log Workout
                </Button>
                <Button className="w-full justify-start gap-2 bg-white/10 hover:bg-white/20 text-white"
                  onClick={() => navigate('/sample-log-meal')}
                >
                  <Utensils className="h-4 w-4" /> Log Meal
                </Button>
                <Button className="w-full justify-start gap-2 bg-white/10 hover:bg-white/20 text-white"
                  onClick={() => navigate('/sample-log-mood')}
                >
                  <Heart className="h-4 w-4" /> Log Mood
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Echo Score Card */}
          <motion.div variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="lg:col-span-1">
            <Card className="bg-white/5 border-gray-700 h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Echo Score</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <div className="text-7xl font-bold text-[#8B5CF6]">82<span className="text-4xl text-gray-400">/100</span></div>
                <p className="text-gray-300 mt-2">Excellent work!</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Calories and Stats */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
              <Card className="bg-white/5 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Weekly Calories Burned</CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={65} className="h-4 [&>div]:bg-gradient-to-r [&>div]:from-[#0EA5E9] [&>div]:to-[#8B5CF6]" />
                  <p className="text-right text-gray-400 mt-2">4,550 / 7,000 kcal</p>
                </CardContent>
              </Card>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {statCards.map((card, index) => (
                <motion.div key={card.title} variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 0.6 + index * 0.2 }}>
                  <Card className="bg-white/5 border-gray-700">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium text-gray-300">{card.title}</CardTitle>
                      <card.icon className="h-5 w-5 text-gray-400" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-white">{card.value}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* New Row for Charts and Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Daily Activity Chart Placeholder */}
          <motion.div variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 1.2 }}>
            <Card className="bg-white/5 border-gray-700 h-full">
              <CardHeader>
                <CardTitle className="text-white">Daily Activity</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-48 text-gray-400">
                <p>Chart Placeholder (e.g., Bar Chart for Steps/Calories)</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Progress Chart Placeholder */}
          <motion.div variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 1.4 }}>
            <Card className="bg-white/5 border-gray-700 h-full">
              <CardHeader>
                <CardTitle className="text-white">Weight Trend</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-48 text-gray-400">
                <p>Line Chart Placeholder (e.g., Weight over time)</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* New Row for Goals, Achievements, Tips, Events, and Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Goals Section */}
          <motion.div variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 1.6 }}>
            <Card className="bg-white/5 border-gray-700 h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-white"><Target className="mr-2" /> Your Goals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {goals.map((goal, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{goal.description}</span>
                      <span className="font-medium text-gray-200">{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} className="h-2 [&>div]:bg-gradient-to-r [&>div]:from-[#0EA5E9] [&>div]:to-[#8B5CF6]" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Achievements */}
          <motion.div variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 1.8 }}>
            <Card className="bg-white/5 border-gray-700 h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-white"><Trophy className="mr-2" /> Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Upcoming Events */}
          <motion.div variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 2.0 }}>
            <Card className="bg-white/5 border-gray-700 h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-white"><Calendar className="mr-2" /> Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  {upcomingEvents.map((event, index) => (
                    <li key={index} className="flex items-center">
                      <span className="font-bold text-[#0EA5E9] w-16 flex-shrink-0">{event.date}:</span>
                      <span>{event.event}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Health Tips */}
          <motion.div variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 2.2 }}>
            <Card className="bg-white/5 border-gray-700 h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-white"><Lightbulb className="mr-2" /> Health Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {healthTips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Motivational Quote */}
          <motion.div variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 2.4 }} className="lg:col-span-2">
            <Card className="bg-white/5 border-gray-700 h-full flex flex-col justify-center">
              <CardContent className="text-center p-6">
                <Quote className="h-8 w-8 text-gray-400 mx-auto mb-4" />
                <p className="text-xl italic text-gray-200 mb-2">
                  "The only bad workout is the one that didn't happen."
                </p>
                <p className="text-gray-400">- Unknown</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
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

export default SampleDashboard;
