import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success(
            "Thank you for your message! We'll get back to you soon."
        );
    };

    return (
        <div className="pt-20">
            {/* Header */}
            <section className="bg-yoga-green-dark text-white py-16 md:py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-green-gradient opacity-20"></div>
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Contact Us
                    </h1>
                    <p className="text-yoga-green-pale text-lg max-w-2xl mx-auto">
                        We'd love to hear from you! Reach out with any questions
                        about our classes, schedules, or how to get started on
                        your yoga journey.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                        {/* Contact Form */}
                        <div className="animate-fade-up">
                            <h2 className="text-2xl md:text-3xl font-bold text-yoga-green-dark mb-6">
                                Send Us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Your Name</Label>
                                    <Input
                                        id="name"
                                        placeholder="Enter your name"
                                        required
                                        className="border-gray-300 focus:border-yoga-green-dark focus:ring-yoga-green-dark"
                                    />
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
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input
                                        id="subject"
                                        placeholder="What is this regarding?"
                                        required
                                        className="border-gray-300 focus:border-yoga-green-dark focus:ring-yoga-green-dark"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="How can we help you?"
                                        rows={5}
                                        required
                                        className="border-gray-300 focus:border-yoga-green-dark focus:ring-yoga-green-dark"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-yoga-green-dark hover:bg-yoga-green-light text-white"
                                >
                                    Send Message
                                    <Send className="ml-2 h-4 w-4" />
                                </Button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div
                            className="animate-fade-up"
                            style={{ animationDelay: "150ms" }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-yoga-green-dark mb-6">
                                Get In Touch
                            </h2>
                            <div className="bg-yoga-green-pale p-8 rounded-lg mb-8">
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="bg-yoga-green-light/30 p-3 rounded-full mr-4">
                                            <MapPin className="h-6 w-6 text-yoga-green-dark" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-yoga-green-dark mb-1">
                                                Our Location
                                            </h3>
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26997.52173206256!2d77.16652015026742!3d32.239506678500305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39048708163fd03f%3A0x8129a80ebe5076cd!2sManali%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1743235413274!5m2!1sen!2sin"
                                                className="max-w-2xl max-h-2xl border "></iframe>
                                            <p className="text-gray-700">
                                                Manali <br />
                                                Wellness City, 10001
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-yoga-green-light/30 p-3 rounded-full mr-4">
                                            <Mail className="h-6 w-6 text-yoga-green-dark" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-yoga-green-dark mb-1">
                                                Email Us
                                            </h3>
                                            <p className="text-gray-700">
                                                info@greenwaveyoga.com
                                            </p>
                                            <p className="text-gray-700">
                                                support@himalayanYogVan.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-yoga-green-light/30 p-3 rounded-full mr-4">
                                            <Phone className="h-6 w-6 text-yoga-green-dark" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-yoga-green-dark mb-1">
                                                Call Us
                                            </h3>
                                            <p className="text-gray-700">
                                                (555) 123-4567
                                            </p>
                                            <p className="text-gray-700">
                                                (555) 987-6543
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-semibold text-yoga-green-dark text-xl mb-4">
                                    Studio Hours
                                </h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">
                                            Monday - Friday
                                        </span>
                                        <span className="font-medium">
                                            6:00 AM - 9:00 PM
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">
                                            Saturday
                                        </span>
                                        <span className="font-medium">
                                            8:00 AM - 6:00 PM
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">
                                            Sunday
                                        </span>
                                        <span className="font-medium">
                                            8:00 AM - 2:00 PM
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="bg-yoga-green-pale py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-yoga-green-dark mb-6 text-center">
                        Find Us
                        
                    </h2>
                    <div className="rounded-lg overflow-hidden shadow-lg h-[400px] bg-white">
                        <div className="h-full w-full flex items-center justify-center bg-yoga-green-light/20"> 
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26997.52173206256!2d77.16652015026742!3d32.239506678500305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39048708163fd03f%3A0x8129a80ebe5076cd!2sManali%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1743235413274!5m2!1sen!2sin" className="h-full w-full"></iframe>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
