import { Wifi, Waves, Trees, ShieldCheck, Utensils, Wind, Tv, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Amenity {
  icon: React.ReactNode;
  label: string;
}

export const AmenitiesSection = () => {
  const buildingAmenities: Amenity[] = [
    { icon: <ShieldCheck className="w-6 h-6" />, label: "24/7 Concierge" },
    { icon: <Waves className="w-6 h-6" />, label: "Swimming Pool" },
    { icon: <Trees className="w-6 h-6" />, label: "Garden" },
    { icon: <Sparkles className="w-6 h-6" />, label: "Modern Facilities" },
  ];

  const unitAmenities: Amenity[] = [
    { icon: <Utensils className="w-6 h-6" />, label: "Full Kitchen" },
    { icon: <Wind className="w-6 h-6" />, label: "Air Conditioning" },
    { icon: <Tv className="w-6 h-6" />, label: "Entertainment" },
    { icon: <Wifi className="w-6 h-6" />, label: "High-Speed WiFi" },
  ];

  return (
    <div className="bg-secondary/50 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Amenities & Features</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Building Amenities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {buildingAmenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-foreground">
                    <div className="text-primary">{amenity.icon}</div>
                    <span>{amenity.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-foreground">In-Unit Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {unitAmenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-foreground">
                    <div className="text-primary">{amenity.icon}</div>
                    <span>{amenity.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
