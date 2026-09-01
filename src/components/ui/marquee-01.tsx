import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee-01-utils/marquee";
import { Star } from "lucide-react";

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
    color: "#00B8D9",
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
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

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
    <Card className="relative h-full w-80 cursor-pointer overflow-hidden border border-[#1261A0]/20 bg-white shadow-none p-5 hover:shadow-md transition-shadow">
      <CardContent className="p-0 flex flex-col gap-3">
        <div className="flex flex-row items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white text-sm font-bold"
            style={{ backgroundColor: color }}
          >
            {initials}
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-bold text-[#082B59]">{name}</p>
            <p className="text-xs text-[#082B59]/60">{username}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-[#E9B949] text-[#E9B949]" />
          ))}
          <span className="text-[10px] text-[#082B59]/60 ml-1 font-medium">{service}</span>
        </div>
        <p className="text-sm text-[#082B59]/80 leading-relaxed">{body}</p>
      </CardContent>
    </Card>
  );
};

export default function TestimonialMarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-4">
      <Marquee pauseOnHover className="[--duration:35s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:35s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent z-10"></div>
    </div>
  );
}
