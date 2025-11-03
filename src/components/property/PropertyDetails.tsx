import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Bed, CalendarCheck } from "lucide-react";
import buildingExterior from "@/assets/building-exterior.jpg";
import kitchenArea from "@/assets/kitchen-area.jpg";
import mountainView from "@/assets/mountain-view.jpg";

interface PropertyDetailsProps {
  description: string;
  propertyType: string;
  maxGuests: number;
  floor: number;
  availableFrom: string;
}

export const PropertyDetails = ({
  description,
  propertyType,
  maxGuests,
  floor,
  availableFrom,
}: PropertyDetailsProps) => {
  const images = [buildingExterior, kitchenArea, mountainView];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-foreground">About This Property</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
          
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <Building2 className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Property Type</p>
                  <p className="font-semibold text-foreground">{propertyType}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Capacity</p>
                  <p className="font-semibold text-foreground">{maxGuests} Guests</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <Bed className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Floor</p>
                  <p className="font-semibold text-foreground">{floor}th Floor</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <CalendarCheck className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Available From</p>
                  <p className="font-semibold text-foreground">{availableFrom}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Property view ${idx + 1}`}
              className={`rounded-lg object-cover shadow-lg ${idx === 0 ? 'col-span-2 h-64' : 'h-48'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
