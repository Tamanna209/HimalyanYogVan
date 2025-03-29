
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  image,
  className,
  style,
}: TestimonialCardProps) => {
  return (
    <Card className={cn("h-full", className)} style={style}>
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex-grow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-10 w-10 text-yoga-green-light mb-4 opacity-50"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
          </svg>
          <p className="text-gray-700 italic mb-6">{quote}</p>
        </div>
        <div className="flex items-center mt-4">
          {image ? (
            <img
              src={image}
              alt={author}
              className="h-12 w-12 rounded-full object-cover mr-4"
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-yoga-green-pale flex items-center justify-center mr-4">
              <span className="text-yoga-green-dark font-medium text-lg">
                {author.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <h4 className="font-medium text-yoga-green-dark">{author}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
