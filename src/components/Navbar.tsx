import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white bg-opacity-95 backdrop-blur-sm fixed w-full z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <span className="text-yoga-green-dark text-2xl font-bold">
                                Himalayan
                                <span className="text-yoga-green-light">
                                YogVan
                                </span>
                            </span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className={cn(
                                "text-gray-800 hover:text-yoga-green-dark transition-colors",
                                location.pathname === "/" &&
                                    "text-yoga-green-dark font-medium"
                            )}
                        >
                            Home
                        </Link>
                        <Link
                            to="/classes"
                            className={cn(
                                "text-gray-800 hover:text-yoga-green-dark transition-colors",
                                location.pathname === "/classes" &&
                                    "text-yoga-green-dark font-medium"
                            )}
                        >
                            Classes
                        </Link>
                        <Link
                            to="/yoga-types"
                            className={cn(
                                "text-gray-800 hover:text-yoga-green-dark transition-colors",
                                location.pathname === "/yoga-types" &&
                                    "text-yoga-green-dark font-medium"
                            )}
                        >
                            Yoga Types
                        </Link>
                        <Link
                            to="/contact"
                            className={cn(
                                "text-gray-800 hover:text-yoga-green-dark transition-colors",
                                location.pathname === "/contact" &&
                                    "text-yoga-green-dark font-medium"
                            )}
                        >
                            Contact
                        </Link>
                        <Link to="/join-now">
                            <Button
                                className={cn(
                                    "bg-yoga-green-dark hover:bg-yoga-green-light text-white",
                                    location.pathname === "/join-now" &&
                                        "bg-yoga-green-light"
                                )}
                                size="sm"
                            >
                                Join Now
                            </Button>
                        </Link>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-yoga-green-dark hover:text-yoga-green-light focus:outline-none"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={cn(
                    "md:hidden bg-white",
                    isMenuOpen ? "block animate-fade-in" : "hidden"
                )}
            >
                <div className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
                    <Link
                        to="/"
                        className={cn(
                            "block py-2 text-base font-medium text-gray-800 hover:text-yoga-green-dark",
                            location.pathname === "/" && "text-yoga-green-dark"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/classes"
                        className={cn(
                            "block py-2 text-base font-medium text-gray-800 hover:text-yoga-green-dark",
                            location.pathname === "/classes" &&
                                "text-yoga-green-dark"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Classes
                    </Link>
                    <Link
                        to="/yoga-types"
                        className={cn(
                            "block py-2 text-base font-medium text-gray-800 hover:text-yoga-green-dark",
                            location.pathname === "/yoga-types" &&
                                "text-yoga-green-dark"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Yoga Types
                    </Link>
                    <Link
                        to="/contact"
                        className={cn(
                            "block py-2 text-base font-medium text-gray-800 hover:text-yoga-green-dark",
                            location.pathname === "/contact" &&
                                "text-yoga-green-dark"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </Link>
                    <Link to="/join-now" onClick={() => setIsMenuOpen(false)}>
                        <Button
                            className={cn(
                                "mt-2 w-full bg-yoga-green-dark hover:bg-yoga-green-light text-white",
                                location.pathname === "/join-now" &&
                                    "bg-yoga-green-light"
                            )}
                        >
                            Join Now
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
