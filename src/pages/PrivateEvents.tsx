import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import Layout from "@/components/site/Layout";
import Sticker from "@/components/site/Sticker";
import hahaWordmark from "@/assets/haha-wordmark.png";
import { toast } from "sonner";

const eventTypes = [
  { slug: "birthdays", emoji: "🎂", title: "Birthdays", desc: "Kids. Adults. Adults pretending to be kids. All welcome." },
  { slug: "team-building", emoji: "🏆", title: "Team Building", desc: "Your colleagues will laugh. Possibly together. No trust falls." },
  { slug: "pregame-parties", emoji: "🎉", title: "Pregame Parties", desc: "Start the night here. Whatever happens after isn't on us." },
  { slug: "bachelor-bachelorette", emoji: "💍", title: "Bachelor / Bachelorette", desc: "Better than a club. Cheaper than therapy." },
  { slug: "music-videos-shoots", emoji: "🎬", title: "Music Videos & Shoots", desc: "Yes, someone actually filmed a music video here. It slapped." },
  { slug: "brand-activations", emoji: "🏢", title: "Brand Activations", desc: "Photogenic chaos for your launch, popup, or PR stunt." },
  { slug: "retirements-divorces-whatever", emoji: "🧓", title: "Retirements. Divorces. Whatever.", desc: "Forty years at the same job? Finally signed the papers? Cult disbanded? Book it. We don't ask questions. We just provide the ball pit." },
];

const infoBlocks = [
  { q: "How long does it take?", a: "We confirm availability within 24–48 hours. Sometimes faster. We have lives too." },
  { q: "When are we available?", a: "Generally 09:00–21:00. Drop us a message and we'll figure it out." },
  { q: "What happens next?", a: "We check the date. We get back to you. You plan something actually fun for once." },
];

const formSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  type: z.string().min(1),
  date: z.string().min(1, "Pick a date"),
  headcount: z.coerce.number().min(1).max(500),
  message: z.string().max(1000).optional(),
});

const PrivateEvents = () => {
  const [submitText, setSubmitText] = useState("Send It");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = formSchema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    toast.success("Sent. We'll get back to you.");
    e.currentTarget.reset();
  };

  return (
    <Layout>
      {/* HERO, matches homepage intro pattern */}
      <section className="relative bg-white border-b border-navy/10">
        <div className="container py-24 grid gap-12 md:gap-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-display text-primary text-3xl md:text-4xl mb-6">Book out</p>
            <img
              src={hahaWordmark}
              alt="HaHa House"
              className="w-64 md:w-80 h-auto mb-8"
            />
            <p className="text-navy text-lg md:text-xl leading-relaxed">
              Birthdays. Bachelor parties. Team building. Brand launches. Someone even shot a music video here once. If it involves people in a room having a weirdly good time, we can probably host it. Whole house bookings, half-day, evenings, daytime, just ask.
            </p>
          </div>
          <div className="relative">
            <Sticker variant="circle" color="yellow" rotate={-10} className="absolute -top-4 -right-2 w-28 h-28 text-xs z-10">
              BOOK<br/>THE<br/>WHOLE<br/>HOUSE
            </Sticker>
            <h1 className="font-display text-6xl md:text-8xl text-navy text-balance">
              Let's Make It Weird. <span className="text-primary">In a Good Way.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* SUB-STRIP */}
      <div className="bg-white border-b border-navy/10">
        <p className="container py-4 text-center font-mono uppercase tracking-[0.25em] text-xs md:text-sm text-navy font-bold">
          Up to 200 people · Whole venue buyouts · Reply within 48h
        </p>
      </div>

      {/* EVENT TYPES, like exhibits scroller */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="container">
          <p className="italic text-primary text-sm mb-3">we've hosted weirder. probably.</p>
          <h2 className="font-display text-5xl md:text-7xl text-navy">What You Can Host Here</h2>

          <div className="relative mt-10">
            <Sticker
              variant="arrow"
              color="turquoise"
              rotate={-4}
              className="absolute -top-4 right-0 md:right-2 text-base z-10"
            >
              SCROLL →
            </Sticker>

            <div className="mt-12 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6">
              {eventTypes.map((e, i) => {
                const tints = [
                  "bg-yellow/40",
                  "bg-turquoise/40",
                  "bg-orange/30",
                  "bg-red/25",
                  "bg-green/40",
                  "bg-cream",
                  "bg-cool-gray/60",
                ];
                return (
                  <Link
                    key={e.title}
                    to={`/private-events/${e.slug}`}
                    className="snap-start shrink-0 w-[80vw] md:w-[380px] group"
                  >
                    <div className={`relative rounded-3xl ${tints[i % tints.length]} aspect-[4/3] grid place-items-center border-2 border-primary border-dashed overflow-hidden transition-transform group-hover:-translate-y-1`}>
                      <div className="text-center">
                        <div className="text-7xl md:text-8xl">{e.emoji}</div>
                        <p className="mt-3 font-mono uppercase tracking-[0.25em] text-[10px] md:text-xs text-navy/60">
                          Upload image
                        </p>
                      </div>
                    </div>
                    <h3 className="mt-4 font-display text-2xl text-navy group-hover:text-primary transition-colors">{e.title} →</h3>
                    <p className="mt-2 text-navy/80">{e.desc}</p>
                  </Link>
                );
              })}
            </div>
          </div>
          <p className="mt-6 text-muted-foreground italic">if it's not on the list, ask anyway. we say yes a lot.</p>
        </div>
      </section>

      {/* INFO + FORM */}
      <section id="contact" className="py-24 bg-white border-t border-navy/10 scroll-mt-24">
        <div className="container grid gap-16 lg:grid-cols-2">
          <div>
            <p className="italic text-primary text-sm mb-3">the boring but useful part.</p>
            <h2 className="font-display text-5xl md:text-6xl text-navy mb-10">How It Works</h2>
            <div className="space-y-8">
              {infoBlocks.map((b) => (
                <div key={b.q} className="border-l-4 border-primary pl-6">
                  <h3 className="font-display text-3xl text-navy">{b.q}</h3>
                  <p className="mt-3 text-navy/80 text-lg">{b.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="italic text-primary text-sm mb-3">tell us what you're planning.</p>
            <h2 className="font-display text-5xl md:text-6xl text-navy mb-10">Get In Touch</h2>

            <div className="space-y-3">
              <a
                href="https://wa.me/385000000000"
                className="flex items-center justify-between border-t-4 border-navy pt-4"
              >
                <span className="font-display text-2xl text-navy">💬 WhatsApp</span>
                <span className="text-sm italic text-navy/60">fastest. we actually check this.</span>
              </a>
              <a href="mailto:info@haha.house" className="flex items-center justify-between border-t-4 border-navy pt-4 hover:text-primary">
                <span className="font-display text-2xl text-navy">✉️ Email</span>
                <span className="text-sm italic text-navy/60">if you prefer typing formally.</span>
              </a>
            </div>

            <form onSubmit={onSubmit} className="mt-8 space-y-4">
              <input name="name" placeholder="Name" required maxLength={100} className="w-full rounded-xl border-2 border-navy/15 bg-white px-4 py-3 focus:border-primary outline-none" />
              <input name="email" type="email" placeholder="Email" required maxLength={255} className="w-full rounded-xl border-2 border-navy/15 bg-white px-4 py-3 focus:border-primary outline-none" />
              <select name="type" required defaultValue="Birthday" className="w-full rounded-xl border-2 border-navy/15 bg-white px-4 py-3 focus:border-primary outline-none">
                <option>Birthday</option>
                <option>Team Building</option>
                <option>Pregame Party</option>
                <option>Bachelor / Bachelorette</option>
                <option>Music Video / Shoot</option>
                <option>Brand Activation</option>
                <option>Something Else</option>
              </select>
              <div className="grid grid-cols-2 gap-4">
                <input name="date" type="date" required className="w-full rounded-xl border-2 border-navy/15 bg-white px-4 py-3 focus:border-primary outline-none" />
                <input name="headcount" type="number" min={1} placeholder="Headcount" required className="w-full rounded-xl border-2 border-navy/15 bg-white px-4 py-3 focus:border-primary outline-none" />
              </div>
              <textarea name="message" placeholder="Tell us what you're planning (optional)" maxLength={1000} rows={3} className="w-full rounded-xl border-2 border-navy/15 bg-white px-4 py-3 focus:border-primary outline-none" />
              <button
                type="submit"
                onMouseEnter={() => setSubmitText("we'll read it, promise.")}
                onMouseLeave={() => setSubmitText("Send It")}
                className="w-full rounded-full bg-yellow text-navy font-bold px-6 py-4 hover:bg-red hover:text-white transition-colors"
              >
                {submitText}
              </button>
            </form>
            <p className="mt-4 text-sm text-navy/60 italic">No commitment. No deposit upfront. Just a conversation.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivateEvents;
