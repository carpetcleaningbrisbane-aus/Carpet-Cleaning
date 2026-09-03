'use client';

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Sarah Mitchell",
    username: "Brisbane Northside",
    initials: "SM",
    color: "#00B8D9",
    body: "Honestly didn't think the carpet was salvageable. Steam clean brought it back — looks way better than I expected. Will definitely use again.",
    rating: 5,
    service: "Steam Carpet Cleaning",
  },
  {
    name: "James Nguyen",
    username: "Sunnybank Hills, QLD",
    initials: "JN",
    color: "#1261A0",
    body: "End of lease job done the day before inspection. Got the full bond back, no issues. Property manager didn't flag anything.",
    rating: 5,
    service: "End of Lease Cleaning",
  },
  {
    name: "Priya Sharma",
    username: "Chermside, Brisbane",
    initials: "PS",
    color: "#7c5cbf",
    body: "Dog kept going back to the same spot on the rug. After the treatment the smell is gone and he's stopped doing it. Didn't think that would actually work.",
    rating: 5,
    service: "Pet Odour Elimination",
  },
  {
    name: "Tom Gallagher",
    username: "New Farm, QLD",
    initials: "TG",
    color: "#b05a3a",
    body: "Red wine on a light carpet, I panicked. They came the next day and got it out completely. You genuinely can't see where it was.",
    rating: 5,
    service: "Stain Removal",
  },
  {
    name: "Linda Okafor",
    username: "Carindale, Brisbane",
    initials: "LO",
    color: "#2a7a4b",
    body: "Three bedrooms, hallway and stairs done in about 2.5 hours. Carpets were dry by the time we finished unpacking. No complaints.",
    rating: 5,
    service: "Steam Carpet Cleaning",
  },
  {
    name: "Michael Andersen",
    username: "Fortitude Valley, QLD",
    initials: "MA",
    color: "#c0624a",
    body: "Office carpets were a bit embarrassing for clients. They came after hours, no disruption to the business. Noticeable difference the next morning.",
    rating: 5,
    service: "Commercial Cleaning",
  },
  {
    name: "David Miller",
    username: "Paddington, Brisbane",
    initials: "DM",
    color: "#159A9C",
    body: "Our modular lounge had stubborn coffee and grease stains. The upholstery cleaning made it look brand new without fading the fabric.",
    rating: 5,
    service: "Couch & Upholstery Cleaning",
  },
  {
    name: "Emma Watson",
    username: "Ascot, QLD",
    initials: "EW",
    color: "#D97706",
    body: "Had a bad burn mark from an iron in the master bedroom. They patched it seamlessly using spare carpet from the closet. Can't even spot the repair!",
    rating: 5,
    service: "Carpet Repair",
  },
];

const ReviewCard = ({
  initials,
  color,
  name,
  username,
  body,
  rating,
  service,
}: {
  initials: string;
  color: string;
  name: string;
  username: string;
  body: string;
  rating: number;
  service: string;
}) => {
  return (
    <Card className="h-full w-full overflow-hidden border border-[#1261A0]/20 bg-white shadow-sm hover:shadow-md transition-all p-6 rounded-2xl flex flex-col justify-between">
      <CardContent className="p-0 flex flex-col gap-4">
        <div className="flex flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-bold shadow-sm"
              style={{ backgroundColor: color }}
            >
              {initials}
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-bold text-[#082B59] line-clamp-1">{name}</p>
              <p className="text-xs text-[#082B59]/60 line-clamp-1">{username}</p>
            </div>
          </div>
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#1261A0]/10 text-[#1261A0] shrink-0">
            {service}
          </span>
        </div>

        <div className="flex items-center gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#FFB020] text-[#FFB020]" />
          ))}
        </div>

        <p className="text-sm text-[#082B59]/80 leading-relaxed italic">
          "{body}"
        </p>
      </CardContent>
    </Card>
  );
};

export default function TestimonialSlider() {
  const [cardsToShow, setCardsToShow] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - cardsToShow);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, isHovered]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
  };

  const dotsCount = maxIndex + 1;

  return (
    <div
      className="relative w-full max-w-[1280px] mx-auto px-2 sm:px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slider Window */}
      <div
        className="overflow-hidden py-4 px-1 cursor-grab active:cursor-grabbing select-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
        >
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="shrink-0 px-2 sm:px-3"
              style={{ width: `${100 / cardsToShow}%` }}
            >
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>

      {/* Slider Controls */}
      <div className="flex items-center justify-between mt-6 px-2">
        <button
          onClick={prevSlide}
          aria-label="Previous review"
          className="p-2.5 rounded-full bg-white border border-[#1261A0]/20 text-[#082B59] hover:bg-[#1261A0] hover:text-white transition-all shadow-sm active:scale-95 flex items-center justify-center cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: dotsCount }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? 'w-8 bg-[#1261A0]'
                  : 'w-2.5 bg-[#1261A0]/30 hover:bg-[#1261A0]/60'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next review"
          className="p-2.5 rounded-full bg-white border border-[#1261A0]/20 text-[#082B59] hover:bg-[#1261A0] hover:text-white transition-all shadow-sm active:scale-95 flex items-center justify-center cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
