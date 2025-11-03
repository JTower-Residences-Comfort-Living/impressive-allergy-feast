import { PropertyHero } from "@/components/property/PropertyHero";
import { PropertyDetails } from "@/components/property/PropertyDetails";
import { AmenitiesSection } from "@/components/property/AmenitiesSection";
import { BookingForm } from "@/components/property/BookingForm";
import { Button } from "@/components/ui/button";
import { MessageSquare, User } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">SkyView Studio</h1>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">
              <MessageSquare className="w-4 h-4 mr-2" />
              Contact Host
            </Button>
            <Button variant="default" size="sm">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {/* Hero Section */}
        <PropertyHero
          title="Mountain View Studio at JTower Residences"
          location="26th Floor, Mandaue City, Cebu"
          rating={4.9}
          reviewCount={0}
        />

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Property Details */}
            <div className="lg:col-span-2">
              <PropertyDetails
                description="Experience modern living in this newly furnished studio unit on the 26th floor of JTower Residences. Wake up to breathtaking mountain views and enjoy the convenience of being near SM JMall, the airport, and Cebu City Center. Perfect for both short-term stays and long-term rentals, this contemporary space offers comfort, style, and unbeatable location."
                propertyType="Studio Condo"
                maxGuests={2}
                floor={26}
                availableFrom="Nov 18, 2025"
              />
            </div>

            {/* Right Column - Booking Form */}
            <div className="lg:col-span-1">
              <BookingForm pricePerNight={85} cleaningFee={25} />
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        <AmenitiesSection />

        {/* Location & Info Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Prime Location</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="flex items-start gap-3">
                  <span className="text-primary font-bold">📍</span>
                  <span>5 minutes to SM JMall - Shopping, dining, and entertainment</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary font-bold">✈️</span>
                  <span>15 minutes to Mactan-Cebu International Airport</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary font-bold">🏙️</span>
                  <span>20 minutes to Cebu City Center - Business and cultural hub</span>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">House Rules</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>• Check-in: 3:00 PM | Check-out: 11:00 AM</p>
                <p>• Maximum 2 guests</p>
                <p>• No smoking inside the unit</p>
                <p>• No parties or events</p>
                <p>• Quiet hours: 10:00 PM - 7:00 AM</p>
                <p>• Pets not allowed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-secondary py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center text-muted-foreground">
            <p>© 2025 SkyView Studio at JTower Residences, Mandaue City</p>
            <p className="text-sm mt-2">Available for booking starting November 18, 2025</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
