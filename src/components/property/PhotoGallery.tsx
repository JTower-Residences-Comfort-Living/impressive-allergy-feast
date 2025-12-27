import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, Grid3X3 } from "lucide-react";

// Import all property images
import heroProperty from "@/assets/hero-property.jpg";
import buildingExterior from "@/assets/building-exterior.jpg";
import kitchenArea from "@/assets/kitchen-area.jpg";
import mountainView from "@/assets/mountain-view.jpg";
import frontDesk from "@/assets/front-desk.jpg";
import hallway from "@/assets/hallway.jpg";
import interiorView from "@/assets/interior-view.jpg";
import livingArea2 from "@/assets/living-area-2.jpg";
import bathroom from "@/assets/bathroom-new.jpg";
import diningArea from "@/assets/dining-area.jpg";
import bedroom from "@/assets/bedroom.jpg";
import livingRoom from "@/assets/living-room.jpg";
import bedroomWorkspace from "@/assets/bedroom-workspace.jpg";
import livingRoom2 from "@/assets/living-room-2.jpg";
import tvArea from "@/assets/tv-area.jpg";

const galleryImages = [
  { src: heroProperty, alt: "Bedroom with Mountain View" },
  { src: bedroom, alt: "Bedroom" },
  { src: bedroomWorkspace, alt: "Bedroom with Workspace" },
  { src: livingRoom, alt: "Living Room" },
  { src: livingRoom2, alt: "Living Area" },
  { src: tvArea, alt: "TV & Entertainment Area" },
  { src: diningArea, alt: "Dining Area" },
  { src: kitchenArea, alt: "Kitchen" },
  { src: mountainView, alt: "Mountain View" },
  { src: livingArea2, alt: "Living Space" },
  { src: interiorView, alt: "Interior Overview" },
  { src: bathroom, alt: "Bathroom" },
  { src: buildingExterior, alt: "Building Entrance" },
  { src: frontDesk, alt: "Front Desk" },
  { src: hallway, alt: "Elevator Hallway" },
];

export const PhotoGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") setLightboxOpen(false);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-foreground">Photo Gallery</h2>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Grid3X3 className="w-5 h-5" />
          <span>{galleryImages.length} photos</span>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {galleryImages.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm font-medium">{image.alt}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent 
          className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none"
          onKeyDown={handleKeyDown}
        >
          <div className="relative w-full h-[85vh] flex items-center justify-center">
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Previous button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevImage}
              className="absolute left-4 z-50 text-white hover:bg-white/20 h-12 w-12"
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            {/* Current image */}
            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className="max-w-full max-h-full object-contain"
            />

            {/* Next button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={nextImage}
              className="absolute right-4 z-50 text-white hover:bg-white/20 h-12 w-12"
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            {/* Image counter and caption */}
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="text-lg font-medium mb-1">{galleryImages[currentIndex].alt}</p>
              <p className="text-sm text-white/70">
                {currentIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="bg-black/80 p-4 overflow-x-auto">
            <div className="flex gap-2 justify-center">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden transition-all ${
                    index === currentIndex 
                      ? "ring-2 ring-primary opacity-100" 
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
