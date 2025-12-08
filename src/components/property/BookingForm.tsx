import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, DollarSign, Percent, Tag, Phone, Mail, ShieldCheck, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BookingFormProps {
  pricePerNight: number;
  cleaningFee?: number;
  weeklyDiscount?: number;
  monthlyDiscount?: number;
}

export const BookingForm = ({ 
  pricePerNight, 
  cleaningFee = 0,
  weeklyDiscount = 10,
  monthlyDiscount = 25
}: BookingFormProps) => {
  const { toast } = useToast();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  
  const getNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  };

  const getDiscount = (nights: number) => {
    if (nights >= 30) return { rate: monthlyDiscount, label: "Monthly stay" };
    if (nights >= 7) return { rate: weeklyDiscount, label: "Weekly stay" };
    return { rate: 0, label: "" };
  };
  
  const calculatePricing = () => {
    const nights = getNights();
    if (nights === 0) return null;
    
    const subtotal = nights * pricePerNight;
    const discount = getDiscount(nights);
    const discountAmount = Math.round(subtotal * (discount.rate / 100));
    const total = subtotal - discountAmount + cleaningFee;
    
    return {
      nights,
      subtotal,
      discountRate: discount.rate,
      discountLabel: discount.label,
      discountAmount,
      cleaningFee,
      total
    };
  };

  const generateBookingMessage = () => {
    const nights = getNights();
    const pricing = calculatePricing();
    const checkInDate = checkIn ? new Date(checkIn).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : '';
    const checkOutDate = checkOut ? new Date(checkOut).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : '';
    
    let message = `Hello! I would like to book JTower Residences.\n\n`;
    message += `📅 Check-in: ${checkInDate}\n`;
    message += `📅 Check-out: ${checkOutDate}\n`;
    message += `🌙 Nights: ${nights}\n`;
    message += `👥 Guests: ${guests}\n`;
    if (pricing) {
      message += `💰 Total: $${pricing.total}`;
      if (pricing.discountAmount > 0) {
        message += ` (${pricing.discountLabel} - ${pricing.discountRate}% off)`;
      }
    }
    message += `\n\nPlease let me know how to proceed with the payment and ID verification. Thank you!`;
    
    return encodeURIComponent(message);
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
    
    // Open Messenger with pre-filled booking details
    const message = generateBookingMessage();
    window.open(`https://m.me/gene.romblon?text=${message}`, '_blank');
    
    toast({
      title: "Redirecting to Messenger",
      description: "Please send your booking details to the host and await confirmation.",
    });
  };

  const pricing = calculatePricing();

  return (
    <Card className="sticky top-24 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <DollarSign className="w-6 h-6 text-primary" />
          ${pricePerNight}
          <span className="text-base font-normal text-muted-foreground">/ night</span>
        </CardTitle>
        <CardDescription>Book your stay at JTower Residences</CardDescription>
        
        {/* Discount badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          <Badge variant="secondary" className="text-xs">
            <Tag className="w-3 h-3 mr-1" />
            {weeklyDiscount}% off weekly
          </Badge>
          <Badge variant="secondary" className="text-xs">
            <Percent className="w-3 h-3 mr-1" />
            {monthlyDiscount}% off monthly
          </Badge>
        </div>
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
        
        {pricing && (
          <div className="pt-4 border-t space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">${pricePerNight} × {pricing.nights} nights</span>
              <span className="font-semibold">${pricing.subtotal}</span>
            </div>
            
            {pricing.discountAmount > 0 && (
              <div className="flex justify-between text-sm text-green-600">
                <span className="flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {pricing.discountLabel} ({pricing.discountRate}% off)
                </span>
                <span className="font-semibold">-${pricing.discountAmount}</span>
              </div>
            )}
            
            {cleaningFee > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Cleaning fee</span>
                <span className="font-semibold">${cleaningFee}</span>
              </div>
            )}
            
            <div className="flex justify-between text-lg font-bold pt-2 border-t">
              <span>Total</span>
              <span className="text-primary">${pricing.total}</span>
            </div>
            
            {pricing.discountAmount > 0 && (
              <p className="text-xs text-green-600 text-center font-medium">
                You're saving ${pricing.discountAmount} with the {pricing.discountLabel.toLowerCase()} discount!
              </p>
            )}
          </div>
        )}
        
        <Button 
          onClick={handleBooking}
          className="w-full text-lg py-6"
          size="lg"
        >
          Request Booking
        </Button>
        
        {/* ID Verification Notice */}
        <div className="bg-secondary/50 rounded-lg p-4 space-y-3">
          <div className="flex items-start gap-2">
            <ShieldCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">ID Verification Required</p>
              <p className="text-xs text-muted-foreground">
                Please have a valid government-issued ID ready for identity verification upon booking.
              </p>
            </div>
          </div>
          
          <div className="border-t pt-3 space-y-2">
            <p className="text-xs font-medium text-foreground">Contact host for payment arrangements:</p>
            <a 
              href="tel:+639177197258" 
              className="flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <Phone className="w-4 h-4" />
              +639177197258
            </a>
            <a 
              href="https://m.me/gene.romblon" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <MessageCircle className="w-4 h-4" />
              Messenger: gene brigz
            </a>
            <a 
              href="https://wa.me/34687196815" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <Phone className="w-4 h-4" />
              WhatsApp: +34687196815
            </a>
            <a 
              href="mailto:generomblon@gmail.com" 
              className="flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <Mail className="w-4 h-4" />
              generomblon@gmail.com
            </a>
          </div>
        </div>
        
        <p className="text-xs text-center text-muted-foreground">
          You won't be charged yet. Contact the host to finalize your booking.
        </p>
      </CardContent>
    </Card>
  );
};
