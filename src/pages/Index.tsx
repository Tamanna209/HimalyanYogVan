
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Leaf, Zap } from "lucide-react";
import YogaCard from "@/components/YogaCard";
import TestimonialCard from "@/components/TestimonialCard";

const Index = () => {
  // Mock data for classes
  const featuredClasses = [
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

  // Mock data for testimonials
  const testimonials = [
    {
      quote: "GreenWave Yoga has completely transformed my relationship with my body and mind. The instructors are so knowledgeable and supportive!",
      author: "Jessica K.",
      role: "Member for 2 years",
    },
    {
      quote: "I've tried many yoga studios, but none compare to the peaceful atmosphere and expert guidance at GreenWave. It's truly a sanctuary in the city.",
      author: "Robert M.",
      role: "Member for 1 year",
    },
    {
      quote: "As a complete beginner, I was nervous to start yoga, but the instructors made me feel so welcome. Now I can't imagine my week without it!",
      author: "Priya S.",
      role: "Member for 6 months",
    },
  ];
  return (
    <div className="pt-20" >
      {/* Hero Section */}
      <section className="relative bg-yoga-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-green-gradient opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-white animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
                Find Your Balance, <br />
                <span className="text-yoga-green-light">Nourish Your Soul</span>
              </h1>
              <p className="text-yoga-green-pale text-lg mb-8 max-w-md">
                Join our community and transform your mind, body, and spirit through the 
                ancient practice of yoga in a modern, welcoming environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-yoga-green-light hover:bg-yoga-green-light/90 text-yoga-black font-medium"
                >
                  <Link to="/classes">
                    Explore Classes
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-yoga-green-light text-yoga-green-light hover:bg-yoga-green-light/10"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block rounded-2xl overflow-hidden shadow-2xl  transform translate-y-4 rotate-3 animate-[fade-in_1s_ease-in-out]">
              <img
                src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
                alt="Yoga pose"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-yoga-green-dark mb-4">
              Benefits of Yoga Practice
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Yoga offers numerous physical and mental benefits that contribute to 
              overall well-being and a balanced lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-yoga-green-pale p-8 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="bg-yoga-green-light/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-yoga-green-dark" />
              </div>
              <h3 className="text-xl font-semibold text-yoga-green-dark mb-3">
                Improved Health
              </h3>
              <p className="text-gray-700">
                Regular practice enhances flexibility, builds muscle strength, and 
                improves respiratory and cardiovascular health.
              </p>
            </div>

            <div className="bg-yoga-green-pale p-8 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="bg-yoga-green-light/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-yoga-green-dark" />
              </div>
              <h3 className="text-xl font-semibold text-yoga-green-dark mb-3">
                Stress Reduction
              </h3>
              <p className="text-gray-700">
                Yoga combines physical postures, breathing exercises, and meditation to 
                help reduce stress and promote relaxation.
              </p>
            </div>

            <div className="bg-yoga-green-pale p-8 rounded-lg text-center hover:shadow-md transition-shadow lg:col-span-1 md:col-span-2 md:mx-auto md:max-w-md lg:max-w-none">
              <div className="bg-yoga-green-light/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-yoga-green-dark" />
              </div>
              <h3 className="text-xl font-semibold text-yoga-green-dark mb-3">
                Mental Clarity
              </h3>
              <p className="text-gray-700">
                Practicing mindfulness during yoga helps improve focus, mental clarity, 
                and promotes a positive outlook on life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Classes Section */}
      <section className="section-padding bg-gradient-to-b from-white to-yoga-green-pale">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-yoga-green-dark mb-4">
                Featured Classes
              </h2>
              <p className="text-gray-600 max-w-2xl">
                Discover our most popular classes designed for all experience levels.
              </p>
            </div>
            <Button 
              asChild
              className="mt-4 md:mt-0 bg-yoga-green-dark hover:bg-yoga-green-light text-white"
            >
              <Link to="/classes">
                View All Classes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredClasses.map((yogaClass, index) => (
              <YogaCard
                key={index}
                {...yogaClass}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-yoga-green-dark mb-4">
              What Our Members Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our community about how GreenWave Yoga has transformed their lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-yoga-green-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-green-gradient opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Yoga Journey?
          </h2>
          <p className="text-yoga-green-pale text-lg mb-8 max-w-2xl mx-auto">
            Join our community today and transform your mind, body, and spirit. 
            Your first class is on us!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-yoga-green-light hover:bg-yoga-green-light/90 text-yoga-black font-medium"
            >
              <Link to="/classes">
                Join Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-yoga-green-light text-yoga-green-light hover:bg-yoga-green-light/10"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
