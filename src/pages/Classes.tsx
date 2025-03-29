
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import YogaCard from "@/components/YogaCard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const Classes = () => {
  const [activeTab, setActiveTab] = useState("classes");

  // Mock data for classes
  const yogaClasses = [
    {
      title: "Hatha Yoga",
      description: "A gentle introduction to the basic yoga postures and breathing techniques.",
      level: "Beginner" as const,
      instructor: "Sarah Johnson",
      duration: "60 minutes",
      schedule: "Mon, Wed, Fri - 9:00 AM",
      capacity: "15 students",
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    },
    {
      title: "Vinyasa Flow",
      description: "A dynamic style that links movement with breath as you flow through sequences.",
      level: "Intermediate" as const,
      instructor: "Michael Chen",
      duration: "75 minutes",
      schedule: "Tue, Thu - 6:00 PM",
      capacity: "12 students",
      image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Yin Yoga",
      description: "A slow-paced style where poses are held for longer periods to target connective tissues.",
      level: "All Levels" as const,
      instructor: "Emily Wilson",
      duration: "90 minutes",
      schedule: "Wed, Sat - 10:30 AM",
      capacity: "15 students",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Power Yoga",
      description: "Vigorous, fitness-based approach that emphasizes strength and flexibility.",
      level: "Advanced" as const,
      instructor: "David Kim",
      duration: "60 minutes",
      schedule: "Mon, Fri - 5:30 PM",
      capacity: "10 students",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Restorative Yoga",
      description: "Gentle, slow, and supportive practice focusing on relaxation and healing.",
      level: "Beginner" as const,
      instructor: "Lisa Thompson",
      duration: "75 minutes",
      schedule: "Tue, Sun - 7:00 PM",
      capacity: "12 students",
      image: "https://images.pexels.com/photos/7663038/pexels-photo-7663038.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Meditation",
      description: "Guided sessions to cultivate mindfulness and inner peace through meditation practices.",
      level: "All Levels" as const,
      instructor: "Amanda Lee",
      duration: "45 minutes",
      schedule: "Sat, Sun - 8:30 AM",
      capacity: "20 students",
      image: "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for signing up! We'll contact you with further details.");
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-yoga-green-dark text-white py-16 md:py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-green-gradient opacity-20"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Yoga Classes</h1>
          <p className="text-yoga-green-pale text-lg max-w-2xl mx-auto">
            Explore our diverse range of yoga classes designed for all experience levels,
            from complete beginners to advanced practitioners.
          </p>
        </div>
      </section>

      {/* Classes Tabs Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <Tabs
            defaultValue="classes"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger
                value="classes"
                className="text-lg py-3 data-[state=active]:bg-yoga-green-dark data-[state=active]:text-white"
              >
                Browse Classes
              </TabsTrigger>
              <TabsTrigger
                value="join"
                className="text-lg py-3 data-[state=active]:bg-yoga-green-dark data-[state=active]:text-white"
              >
                Join a Class
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="classes" className="pt-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {yogaClasses.map((yogaClass, index) => (
                  <YogaCard
                    key={index}
                    {...yogaClass}
                    className="animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="join" className="pt-4">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="animate-fade-up">
                  <h2 className="text-2xl md:text-3xl font-bold text-yoga-green-dark mb-6">
                    Join a Yoga Class
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Fill out the form below to register for a class. Our team will contact 
                    you to confirm your registration and provide additional information.
                  </p>
                  
                  <form onSubmit={handleJoinSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                          required
                          className="border-gray-300 focus:border-yoga-green-dark focus:ring-yoga-green-dark"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                          required
                          className="border-gray-300 focus:border-yoga-green-dark focus:ring-yoga-green-dark"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="border-gray-300 focus:border-yoga-green-dark focus:ring-yoga-green-dark"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        required
                        className="border-gray-300 focus:border-yoga-green-dark focus:ring-yoga-green-dark"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="classSelect">Select Class</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a class" />
                        </SelectTrigger>
                        <SelectContent>
                          {yogaClasses.map((yogaClass, index) => (
                            <SelectItem key={index} value={yogaClass.title}>
                              {yogaClass.title} with {yogaClass.instructor}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="experience">Yoga Experience</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner (0-1 year)</SelectItem>
                          <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                          <SelectItem value="advanced">Advanced (3+ years)</SelectItem>
                          <SelectItem value="none">No Experience</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="notes">Special Requirements or Notes</Label>
                      <Textarea
                        id="notes"
                        placeholder="Any injuries, health conditions, or other information we should know?"
                        className="border-gray-300 focus:border-yoga-green-dark focus:ring-yoga-green-dark"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-yoga-green-dark hover:bg-yoga-green-light text-white"
                    >
                      Submit Registration
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
                
                <div className="animate-fade-up" style={{ animationDelay: "150ms" }}>
                  <div className="bg-yoga-green-pale p-8 rounded-lg mb-8 sticky top-24">
                    <h3 className="text-xl font-bold text-yoga-green-dark mb-6 flex items-center">
                      <Calendar className="mr-2 h-5 w-5" />
                      Class Schedule
                    </h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-yoga-green-dark mb-2">Monday</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex justify-between">
                            <span>Hatha Yoga (Beginner)</span>
                            <span>9:00 AM</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Power Yoga (Advanced)</span>
                            <span>5:30 PM</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-yoga-green-dark mb-2">Tuesday</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex justify-between">
                            <span>Vinyasa Flow (Intermediate)</span>
                            <span>6:00 PM</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Restorative Yoga (Beginner)</span>
                            <span>7:00 PM</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-yoga-green-dark mb-2">Wednesday</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex justify-between">
                            <span>Hatha Yoga (Beginner)</span>
                            <span>9:00 AM</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Yin Yoga (All Levels)</span>
                            <span>10:30 AM</span>
                          </li>
                        </ul>
                      </div>
                      
                      <Button
                        variant="outline"
                        className="w-full border-yoga-green-dark text-yoga-green-dark hover:bg-yoga-green-dark hover:text-white"
                        onClick={() => setActiveTab("classes")}
                      >
                        View All Classes
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Classes;
