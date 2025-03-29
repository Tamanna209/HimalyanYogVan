
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const YogaTypes = () => {
  const yogaTypes = [
    {
      title: "Hatha Yoga",
      description: "A gentle practice that focuses on static poses and is great for beginners. Hatha is all about the basics and is a slower-paced class that requires you to hold each pose for a few breaths.",
      image: "https://images.pexels.com/photos/6293249/pexels-photo-6293249.jpeg?auto=compress&cs=tinysrgb&w=600",
      benefits: ["Improves flexibility", "Builds strength", "Reduces stress", "Perfect for beginners"],
    },
    {
      title: "Vinyasa Yoga",
      description: "A dynamic practice that connects movement with breath. Vinyasa classes are known for their fluid, movement-intensive practices. Each movement is synchronized to a breath.",
      image:"https://images.pexels.com/photos/5201524/pexels-photo-5201524.jpeg?auto=compress&cs=tinysrgb&w=600",
      benefits: ["Builds cardiovascular strength", "Improves coordination", "Enhances mind-body connection", "Great for intermediate practitioners"],
    },
    {
      title: "Ashtanga Yoga",
      description: "A rigorous style that follows a specific sequence of poses. Ashtanga is physically demanding and consists of a set series of poses always performed in the same order.",
      image: "https://images.pexels.com/photos/6193612/pexels-photo-6193612.jpeg?auto=compress&cs=tinysrgb&w=600",
      benefits: ["Builds core strength", "Improves stamina", "Detoxifies the body", "Ideal for disciplined practitioners"],
    },
    {
      title: "Yin Yoga",
      description: "A slow-paced style with poses held for longer periods. Yin yoga targets the deep connective tissues and fascia in the body. It's a perfect complement to more active yoga practices.",
      image: "https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=600",
      benefits: ["Increases flexibility", "Improves joint mobility", "Reduces stress and anxiety", "Suitable for all levels"],
    },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-yoga-green-dark text-white py-16 md:py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-green-gradient opacity-20"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Different Types of Yoga</h1>
          <p className="text-yoga-green-pale text-lg max-w-2xl mx-auto">
            Explore the diverse world of yoga practices and find the style that resonates with your mind, body, and spirit.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-16">
            {yogaTypes.map((yogaType, index) => (
              <div 
                key={index} 
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div 
                  className={`rounded-lg overflow-hidden h-80 ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <img 
                    src={yogaType.image} 
                    alt={yogaType.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h2 className="text-2xl md:text-3xl font-bold text-yoga-green-dark mb-4">
                    {yogaType.title}
                  </h2>
                  <p className="text-gray-700 mb-6">
                    {yogaType.description}
                  </p>
                  <div className="mb-6">
                    <h3 className="font-semibold text-yoga-green-dark mb-3">Key Benefits:</h3>
                    <ul className="space-y-2">
                      {yogaType.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-yoga-green-dark mr-2">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/classes">
                    <Button 
                      className="bg-yoga-green-dark hover:bg-yoga-green-light text-white"
                    >
                      Find Classes <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-yoga-green-dark mb-6">
              Ready to Start Your Yoga Journey?
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Whether you're a complete beginner or looking to deepen your practice, we have classes suitable for all levels and interests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/classes">
                <Button 
                  className="bg-yoga-green-dark hover:bg-yoga-green-light text-white w-full sm:w-auto"
                >
                  Browse Classes
                </Button>
              </Link>
              <Link to="/join-now">
                <Button 
                  variant="outline" 
                  className="border-yoga-green-dark text-yoga-green-dark hover:bg-yoga-green-pale w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YogaTypes;
