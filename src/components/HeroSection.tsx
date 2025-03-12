
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated background effect */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(40deg,transparent_25%,rgba(0,102,255,0.2)_50%,transparent_75%)] animate-gradient-x"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-eco to-primary bg-clip-text text-transparent">
            Powering the Future of EV Charging
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Connecting EV charging providers with prime locations through AI-powered intelligence
          </p>

          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg group"
          >
            Join the EV Revolution
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Animated visual */}
        <div className="mt-16 relative w-full max-w-3xl mx-auto">
          <div className="aspect-video rounded-xl bg-gradient-to-r from-primary/20 to-eco/20 backdrop-blur-sm p-8 animate-float">
            {/* Add more visual content here */}
          </div>
        </div>
      </div>
    </div>
  );
};
