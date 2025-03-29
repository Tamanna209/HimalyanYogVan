
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Mail, Calendar, Phone, MessageSquare, CheckCircle } from "lucide-react";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const JoinNow = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    classInterest: "",
    message: "",
    acceptTerms: false,
  });
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({ ...formData, acceptTerms: checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptTerms) {
      toast.error("Please accept the terms and conditions");
      return;
    }
    
    // Handle form submission
    console.log("Form submitted:", formData);
    
    // Show success dialog
    setShowSuccessDialog(true);
  };

  const classOptions = [
    "Hatha Yoga",
    "Vinyasa Flow",
    "Ashtanga Yoga",
    "Yin Yoga",
    "Prenatal Yoga",
    "Kids Yoga",
    "Meditation",
    "Not sure yet"
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-yoga-green-dark text-white py-16 md:py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-green-gradient opacity-20"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Yoga Community</h1>
          <p className="text-yoga-green-pale text-lg max-w-2xl mx-auto">
            Get in touch with us to learn more about our classes and how we can help you begin or deepen your yoga practice.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-yoga-green-dark mb-6">
                Contact Us About Classes
              </h2>
              <p className="text-gray-700 mb-6">
                Interested in joining our yoga studio? Fill out the form below, and our team will get back to you with all the information you need to get started.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      required
                      className="border-gray-300 focus:border-yoga-green-dark focus:ring-yoga-green-dark"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
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
                    value={formData.email}
                    onChange={handleInputChange}
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
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                    className="border-gray-300 focus:border-yoga-green-dark focus:ring-yoga-green-dark"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="classInterest">Interested in Which Class?</Label>
                  <Select
                    value={formData.classInterest}
                    onValueChange={(value) => handleSelectChange("classInterest", value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a class type" />
                    </SelectTrigger>
                    <SelectContent>
                      {classOptions.map((option, index) => (
                        <SelectItem key={index} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message or Questions</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your yoga experience and any specific questions you might have"
                    className="h-32 border-gray-300 focus:border-yoga-green-dark focus:ring-yoga-green-dark"
                  />
                </div>
                
                <div className="flex items-start space-x-2 pt-2">
                  <Checkbox 
                    id="terms" 
                    checked={formData.acceptTerms}
                    onCheckedChange={handleCheckboxChange}
                  />
                  <Label htmlFor="terms" className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    I agree to the{" "}
                    <a href="#" className="text-yoga-green-dark underline hover:text-yoga-green-light">
                      terms and conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-yoga-green-dark underline hover:text-yoga-green-light">
                      privacy policy
                    </a>
                  </Label>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-yoga-green-dark hover:bg-yoga-green-light text-white"
                >
                  Submit Inquiry
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
            
            <div className="animate-fade-up" style={{ animationDelay: "150ms" }}>
              <Card className="bg-yoga-green-pale sticky top-24">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <User className="h-5 w-5 mr-2 text-yoga-green-dark" />
                    <CardTitle className="text-xl text-yoga-green-dark">Why Join Himalyan YogVan?</CardTitle>
                  </div>
                  <CardDescription>
                    Our yoga studio offers a welcoming environment for practitioners of all levels.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-white p-2 rounded-full mr-4">
                        <Calendar className="h-5 w-5 text-yoga-green-dark" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-yoga-green-dark">Flexible Schedule</h4>
                        <p className="text-gray-700 text-sm">
                          Morning, afternoon, and evening classes to fit your busy lifestyle.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-white p-2 rounded-full mr-4">
                        <User className="h-5 w-5 text-yoga-green-dark" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-yoga-green-dark">Expert Instructors</h4>
                        <p className="text-gray-700 text-sm">
                          Certified teachers with years of experience who genuinely care about your progress.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-white p-2 rounded-full mr-4">
                        <Mail className="h-5 w-5 text-yoga-green-dark" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-yoga-green-dark">Quick Response</h4>
                        <p className="text-gray-700 text-sm">
                          We aim to respond to all inquiries within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-yoga-green-dark/20 pt-4 mt-6">
                    <h4 className="font-semibold text-yoga-green-dark mb-2">Get in Touch Directly</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-yoga-green-dark" />
                        <span className="text-sm">+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-yoga-green-dark" />
                        <span className="text-sm">info@himalayanYogVan.com</span>
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-2 text-yoga-green-dark" />
                        <span className="text-sm">Available 9am-5pm EST</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-yoga-green-dark flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-yoga-green-dark" />
              Inquiry Submitted!
            </DialogTitle>
            <DialogDescription>
              Thank you for your interest in Himalyan YogVan.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-center text-gray-700">
              We've received your inquiry and will get back to you within 24 hours. We look forward to welcoming you to our yoga community!
            </p>
          </div>
          <DialogFooter>
            <Button 
              onClick={() => setShowSuccessDialog(false)}
              className="w-full bg-yoga-green-dark hover:bg-yoga-green-light text-white"
            >
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JoinNow;
