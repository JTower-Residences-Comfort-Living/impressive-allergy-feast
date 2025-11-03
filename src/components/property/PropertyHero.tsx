import { MapPin, Star } from "lucide-react";
import heroProperty from "@/assets/hero-property.jpg";

interface PropertyHeroProps {
  title: string;
  location: string;
  rating?: number;
  reviewCount?: number;
}

export const PropertyHero = ({ title, location, rating, reviewCount }: PropertyHeroProps) => {
  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      <img 
        src={heroProperty} 
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{location}</span>
            </div>
            
            {rating && (
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{rating}</span>
                {reviewCount && <span className="text-white/80">({reviewCount} reviews)</span>}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
