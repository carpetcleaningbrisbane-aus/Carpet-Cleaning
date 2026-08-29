import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee-01-utils/marquee";

const reviews = [
  {
    name: "Sarah Jenkins",
    username: "@sjenkins_toorak",
    body: "“Carpet Cleaner transformed our living room carpet! We were considering replacing it, but after their steam clean, it looks brand new. Punctual and extremely professional.”",
    profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
  },
  {
    name: "Marcus Vance",
    username: "@marcus_brighton",
    body: "“Our new puppy had a few accidents on our wool rug. Carpet Cleaner used their enzyme treatment and the smell is 100% gone. Highly recommended!”",
    profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
  },
  {
    name: "Elena Rostova",
    username: "@elena_southyarra",
    body: "“Impeccable service. The team took extra care with our custom velvet armchairs. Soft, fragrant, and meticulously cleaned.”",
    profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
  },
  {
    name: "David Chen",
    username: "@david_hawthorn",
    body: "“Real estate passed our inspection with flying colors and returned the full bond immediately. Thank you Carpet Cleaner!”",
    profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
  },
  {
    name: "Claire Montgomery",
    username: "@claire_kew",
    body: "“The drying time was astonishingly fast. Cleaned at 10 AM and by 1 PM our carpets were completely dry and spotless.”",
    profile: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
  },
  {
    name: "Julian Hayes",
    username: "@julian_richmond",
    body: "“Professional serenity at its finest. No harsh chemical odors, just pure fresh cleanliness. Will book again every 6 months.”",
    profile: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  profile,
  name,
  username,
  body,
}: {
  profile: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <Card className="relative h-full w-80 cursor-pointer overflow-hidden border border-[#d7e4ec] bg-white shadow-none p-5 hover:shadow-md transition-shadow">
      <CardContent className="p-0 flex flex-col gap-3">
        <div className="flex flex-row items-center gap-3">
          <img
            className="rounded-full object-cover"
            width="38"
            height="38"
            alt={name}
            src={profile}
          />
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-[#001b31]">{name}</p>
            <p className="text-xs font-medium text-[#73777e]">
              {username}
            </p>
          </div>
        </div>
        <p className="text-sm text-[#43474d] leading-relaxed italic line-clamp-3">{body}</p>
      </CardContent>
    </Card>
  );
};

export default function TestimonialMarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-4">
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#FAFAF7] to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#FAFAF7] to-transparent z-10"></div>
    </div>
  );
}
