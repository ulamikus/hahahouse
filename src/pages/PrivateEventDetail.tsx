import { Link, useParams } from "react-router-dom";
import Layout from "@/components/site/Layout";
import Sticker from "@/components/site/Sticker";

type EventInfo = {
  slug: string;
  emoji: string;
  title: string;
  tagline: string;
  intro: string;
  perks: string[];
  capacity: string;
  duration: string;
  vibe: string;
  tint: string;
};

const EVENTS: EventInfo[] = [
  {
    slug: "birthdays",
    emoji: "🎂",
    title: "Birthdays",
    tagline: "Cake optional. Photos mandatory.",
    intro: "Kids who won't sit still. Adults who refuse to grow up. Grandmas who end up in the ball pit. We've seen it all. Bring the people, we'll bring the chaos.",
    perks: ["Private use of the venue or a section", "Decorations + signage with the birthday name", "Cake table and a place for gifts", "Optional photographer add-on"],
    capacity: "10–80 people",
    duration: "2–4 hours",
    vibe: "Loud. Sugary. Joyful.",
    tint: "bg-yellow/40",
  },
  {
    slug: "team-building",
    emoji: "🏆",
    title: "Team Building",
    tagline: "Your colleagues will laugh. Possibly together.",
    intro: "No trust falls. No 'icebreakers'. Just 40+ exhibits engineered to make people stop being weird around each other for a couple of hours.",
    perks: ["Whole-venue buyouts available", "Catering + drink packages on request", "Branded signage at the entrance", "Private guide / host"],
    capacity: "15–200 people",
    duration: "2–3 hours",
    vibe: "Smart. Silly. Surprisingly effective.",
    tint: "bg-turquoise/40",
  },
  {
    slug: "pregame-parties",
    emoji: "🎉",
    title: "Pregame Parties",
    tagline: "Start the night here.",
    intro: "We're a block from everywhere good. Warm up with us, then disappear into Zagreb. Whatever happens after isn't on us.",
    perks: ["Evening slots up to 21:00", "Drink packages available", "Group photo wall + Polaroids", "Coat check"],
    capacity: "10–60 people",
    duration: "1.5–2 hours",
    vibe: "Fast. Loud. The night hasn't even started.",
    tint: "bg-orange/30",
  },
  {
    slug: "bachelor-bachelorette",
    emoji: "💍",
    title: "Bachelor / Bachelorette",
    tagline: "Better than a club. Cheaper than therapy.",
    intro: "Sashes welcome. Veils welcome. Inflatable swords welcome. We've hosted brides, grooms, and everyone in between. Tell us how unhinged you want it.",
    perks: ["Custom signage with the name of the victim", "Polaroid station + props", "Drink packages", "Quiet corner for when someone needs five minutes"],
    capacity: "8–40 people",
    duration: "2–3 hours",
    vibe: "Unserious. Slightly menacing. Beautiful.",
    tint: "bg-red/25",
  },
  {
    slug: "music-videos-shoots",
    emoji: "🎬",
    title: "Music Videos & Shoots",
    tagline: "Yes, someone actually filmed a music video here.",
    intro: "Color, motion, and 40+ photogenic backdrops without a permit headache. Shoot at off-hours and have the whole space to yourself.",
    perks: ["Off-hours bookings (early AM / late PM)", "Full venue access for crew + cast", "Power + load-in details on request", "Quiet for sound, loud for fun"],
    capacity: "Crew up to 20",
    duration: "Half-day or full-day",
    vibe: "Production-friendly. Visually unhinged.",
    tint: "bg-green/40",
  },
  {
    slug: "brand-activations",
    emoji: "🏢",
    title: "Brand Activations",
    tagline: "Photogenic chaos for your launch.",
    intro: "Launches, pop-ups, PR stunts. Plug your brand into a space that's already engineered for shareability. Your guests will post. Promise.",
    perks: ["Custom signage + brand takeover options", "Catering + bar packages", "Press-friendly photo moments", "Co-branded ticketing available"],
    capacity: "30–200 guests",
    duration: "3–6 hours",
    vibe: "On-brand. Off-script. Very online.",
    tint: "bg-cream",
  },
  {
    slug: "retirements-divorces-whatever",
    emoji: "🧓",
    title: "Retirements. Divorces. Whatever.",
    tagline: "We don't ask questions. We just provide the ball pit.",
    intro: "Forty years at the same job? Finally signed the papers? Cult disbanded? Whatever you're closing the chapter on, we're here for it. No judgment, just confetti.",
    perks: ["Discreet booking — your event, your story", "Custom signage if you want it (we recommend it)", "Drink packages", "Cake or no cake, your call"],
    capacity: "10–80 people",
    duration: "2–3 hours",
    vibe: "Cathartic. Funny. A little bit unhinged.",
    tint: "bg-cool-gray/60",
  },
];

const PrivateEventDetail = () => {
  const { slug } = useParams();
  const event = EVENTS.find((e) => e.slug === slug);

  if (!event) {
    return (
      <Layout>
        <section className="container py-32 text-center">
          <h1 className="font-display text-5xl text-navy">Not a thing we do (yet).</h1>
          <p className="mt-6 text-navy/70">Head back and pick something we actually host.</p>
          <Link to="/private-events" className="mt-8 inline-block rounded-full bg-yellow px-6 py-3 font-bold text-navy hover:bg-red hover:text-white transition-colors">
            ← Back to private events
          </Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* HERO */}
      <section className="relative bg-white border-b border-navy/10">
        <div className="container py-16 md:py-24">
          <Link to="/private-events" className="text-sm text-primary hover:text-red transition-colors">
            ← All private events
          </Link>

          {/* UPLOAD IMAGE HEADER */}
          <div className={`mt-6 relative rounded-3xl ${event.tint} border-2 border-dashed border-primary/60 aspect-[16/7] grid place-items-center overflow-hidden`}>
            <div className="text-center">
              <div className="text-7xl md:text-8xl">{event.emoji}</div>
              <p className="mt-4 font-mono uppercase tracking-[0.25em] text-xs md:text-sm text-navy/60">
                Upload image
              </p>
            </div>
            <Sticker variant="starburst" color="red" rotate={-8} className="absolute -top-4 -right-4 w-24 h-24 text-[10px] z-10">
              BOOK<br/>THIS
            </Sticker>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="italic text-primary text-sm mb-3">{event.tagline}</p>
              <h1 className="font-display text-5xl md:text-7xl text-navy">{event.title}</h1>
              <p className="mt-6 text-navy text-lg md:text-xl leading-relaxed">{event.intro}</p>
            </div>

            <aside className="rounded-3xl bg-cream p-6 border-2 border-navy/10">
              <h3 className="font-display text-2xl text-navy mb-4">The basics</h3>
              <dl className="space-y-3 text-navy/80">
                <div><dt className="text-xs uppercase tracking-widest text-navy/50">Capacity</dt><dd>{event.capacity}</dd></div>
                <div><dt className="text-xs uppercase tracking-widest text-navy/50">Duration</dt><dd>{event.duration}</dd></div>
                <div><dt className="text-xs uppercase tracking-widest text-navy/50">Vibe</dt><dd>{event.vibe}</dd></div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 bg-white border-t border-navy/10">
        <div className="container">
          <p className="italic text-primary text-sm mb-3">what's in the box.</p>
          <h2 className="font-display text-4xl md:text-6xl text-navy mb-10">What's Included</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {event.perks.map((p) => (
              <li key={p} className="border-l-4 border-primary pl-5 py-2 text-navy/85 text-lg">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-white">
        <div className="container text-center">
          <h2 className="font-display text-4xl md:text-6xl text-balance">
            Pick a date. We'll do the rest.
          </h2>
          <p className="mt-4 text-white/70">We reply within 48 hours. Usually faster.</p>
          <Link
            to="/private-events#contact"
            className="mt-8 inline-block rounded-full bg-yellow px-8 py-4 font-bold text-navy hover:bg-red hover:text-white transition-colors"
          >
            Send an enquiry
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default PrivateEventDetail;
