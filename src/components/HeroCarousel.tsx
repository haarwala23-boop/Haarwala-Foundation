import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const heroSlides = [
  {
    id: 1,
    title: "Caring for Devotion, Caring for Nature",
    subtitle: "Recycling sacred floral waste from temples, homes and religious practices since 2018",
    image: "https://images.unsplash.com/photo-1703250347337-489efcb90620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
  },
  {
    id: 2,
    title: "Honoring Sacred Traditions",
    subtitle: "Transforming devotional waste into environmental blessings",
    image: "https://images.unsplash.com/photo-1679841665700-2c962e7e652a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
  },
  {
    id: 3,
    title: "Community-Driven Impact",
    subtitle: "Join us in creating a sustainable devotional ecosystem",
    image: "https://images.unsplash.com/photo-1758599669016-acedd3942ca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-3xl text-white animate-slide-up">
              <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center mb-6 backdrop-blur-sm">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6c0 4.314 6 10 6 10s6-5.686 6-10a6 6 0 00-6-6zm0 9a3 3 0 110-6 3 3 0 010 6z" />
                </svg>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
                {slide.title}
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl">
                {slide.subtitle}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white font-semibold">
                  <NavLink to="/about">Learn More</NavLink>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                  <NavLink to="/process">Our Work</NavLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 500);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
