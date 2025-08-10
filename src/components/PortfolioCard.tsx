"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface PortfolioCardProps {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl?: string;
  category: string;
}

export default function PortfolioCard({ 
  title, 
  description, 
  imageUrl, 
  demoUrl, 
  category 
}: PortfolioCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="relative overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
              {category}
            </span>
          </div>
        </div>
        
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          
          {demoUrl && (
            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-full"
              onClick={() => window.open(demoUrl, '_blank')}
            >
              View Live Demo
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}