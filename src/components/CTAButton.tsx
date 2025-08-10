import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "whatsapp";
  className?: string;
}

export default function CTAButton({ 
  children, 
  onClick, 
  variant = "primary", 
  className = "" 
}: CTAButtonProps) {
  const baseClasses = "font-semibold rounded-full px-8 py-3 transition-all duration-300 transform hover:scale-105";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-lg hover:shadow-xl",
    secondary: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
    whatsapp: "bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl"
  };

  return (
    <Button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </Button>
  );
}