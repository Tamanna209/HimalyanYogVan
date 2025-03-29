
import React from "react";
import { Calendar, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface YogaCardProps {
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  instructor: string;
  duration: string;
  schedule: string;
  capacity: string;
  image: string;
  className?: string;
  style?: React.CSSProperties;
}

const YogaCard = ({
  title,
  description,
  level,
  instructor,
  duration,
  schedule,
  capacity,
  image,
  className,
  style,
}: YogaCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-lg", className)} style={style}>
      <div className="h-48 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
        <Badge 
          className={cn(
            "absolute top-4 right-4 font-medium", 
            getLevelColor(level)
          )}
        >
          {level}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-yoga-green-dark">{title}</CardTitle>
        <CardDescription>with {instructor}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <Clock size={16} className="mr-2 text-yoga-green-dark" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="mr-2 text-yoga-green-dark" />
            <span>{schedule}</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="mr-2 text-yoga-green-dark" />
            <span>{capacity}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-yoga-green-dark hover:bg-yoga-green-light text-white">
          Join Class
        </Button>
      </CardFooter>
    </Card>
  );
};

export default YogaCard;
