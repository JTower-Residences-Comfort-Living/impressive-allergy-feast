import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Users, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BookingFormProps {
  pricePerNight: number;
  cleaningFee?: number;
}

export const BookingForm = ({ pricePerNight, cleaningFee = 0 }: BookingFormProps) => {
  const { toast } = useToast();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  
  const calculateTotal = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return nights * pricePerNight + cleaningFee;
  };

  const handleBooking = () => {
    if (!checkIn || !checkOut) {
      toast({
        title: "Missing Information",
        description: "Please select check-in and check-out dates",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Booking Request Received!",
      description: "We'll send you a confirmation email shortly. Please sign up or log in to complete your booking.",
    });
  };

  const total = calculateTotal();
  const nights = checkIn && checkOut ? 
    Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)) : 0;

  return (
    <Card className="sticky top-24 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <DollarSign className="w-6 h-6 text-primary" />
          ${pricePerNight}
          <span className="text-base font-normal text-muted-foreground">/ night</span>
        </CardTitle>
        <CardDescription>Book your stay at JTower Residences</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="checkIn" className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Check-in
          </Label>
          <Input
            id="checkIn"
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="checkOut" className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Check-out
          </Label>
          <Input
            id="checkOut"
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            min={checkIn || new Date().toISOString().split('T')[0]}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="guests" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Guests
          </Label>
          <Input
            id="guests"
            type="number"
            min="1"
            max="4"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
          />
        </div>
        
        {total > 0 && (
          <div className="pt-4 border-t space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">${pricePerNight} × {nights} nights</span>
              <span className="font-semibold">${pricePerNight * nights}</span>
            </div>
            {cleaningFee > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Cleaning fee</span>
                <span className="font-semibold">${cleaningFee}</span>
              </div>
            )}
            <div className="flex justify-between text-lg font-bold pt-2 border-t">
              <span>Total</span>
              <span className="text-primary">${total}</span>
            </div>
          </div>
        )}
        
        <Button 
          onClick={handleBooking}
          className="w-full text-lg py-6"
          size="lg"
        >
          Request Booking
        </Button>
        
        <p className="text-xs text-center text-muted-foreground">
          You won't be charged yet. Create an account to complete your booking.
        </p>
      </CardContent>
    </Card>
  );
};
