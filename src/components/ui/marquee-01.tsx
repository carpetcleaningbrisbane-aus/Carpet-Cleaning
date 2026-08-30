import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee-01-utils/marquee";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Mitchell",
    username: "Brisbane Northside",
    initials: "SM",
    color: "#2d6675",
    body: "Carpet Cleaner completely transformed our lounge carpet. We were about to replace it, but after the steam clean it looks brand new. On time, professional, and no harsh smells.",
    rating: 5,
    service: "Steam Carpet Cleaning",
  },
  {
    name: "James Nguyen",
    username: "Sunnybank Hills, QLD",
    initials: "JN",
    color: "#0094B8",
    body: "Used them for end-of-lease and got our full bond back without a single issue. The property manager was impressed. Would absolutely recommend to anyone moving out.",
    rating: 5,
    service: "End of Lease Cleaning",
  },
  {
    name: "Priya Sharma",
    username: "Chermside, Brisbane",
    initials: "PS",
    color: "#7c5cbf",
    body: "Our dog had quite a few accidents on the rug. The enzyme treatment completely removed the smell — even our dog stopped going back to the same spot. Really happy.",
    rating: 5,
    service: "Pet Odour Elimination",
  },
  {
    name: "Tom Gallagher",
    username: "New Farm, QLD",
    initials: "TG",
    color: "#b05a3a",
    body: "Red wine on a cream carpet — I thought it was ruined. Carpet Cleaner came out the next morning and you honestly cannot tell anything happened. Incredible result.",
    rating: 5,
    service: "Stain Removal",
  },
  {
    name: "Linda Okafor",
    username: "Carindale, Brisbane",
    initials: "LO",
    color: "#2a7a4b",
    body: "Had the whole house done before moving in. Three bedrooms, hallway and stairs — all finished in under 3 hours and dry well before dinner. Very efficient team.",
    rating: 5,
    service: "Steam Carpet Cleaning",
  },
  {
    name: "Michael Andersen",
    username: "Fortitude Valley, QLD",
    initials: "MA",
    color: "#c0624a",
    body: "Our office carpets were embarrassingly dirty. They came after hours so we didn't have to close. The reception area looks completely refreshed — clients have commented on it.",
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
    <Card className="relative h-full w-80 cursor-pointer overflow-hidden border border-[#d7e4ec] bg-white shadow-none p-5 hover:shadow-md transition-shadow">
      <CardContent className="p-0 flex flex-col gap-3">
        <div className="flex flex-row items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white text-sm font-bold"
            style={{ backgroundColor: color }}
          >
            {initials}
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-bold text-[#001b31]">{name}</p>
            <p className="text-xs text-[#73777e]">{username}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-[#D5A85A] text-[#D5A85A]" />
          ))}
          <span className="text-[10px] text-[#73777e] ml-1 font-medium">{service}</span>
        </div>
        <p className="text-sm text-[#43474d] leading-relaxed">{body}</p>
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
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#FAFAF7] to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#FAFAF7] to-transparent z-10"></div>
    </div>
  );
}
