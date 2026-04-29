import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/site/Layout";
import Doodles from "@/components/site/Doodles";
import Sticker from "@/components/site/Sticker";
import TicketReminder from "@/components/site/TicketReminder";
import mrH from "@/assets/character-mrh.jpg";
import stickers from "@/assets/brand-stickers.jpg";
import founder from "@/assets/founder.jpg";
import g1 from "@/assets/exhibit-1.jpg";
import g2 from "@/assets/exhibit-2.jpg";
import g3 from "@/assets/exhibit-3.jpg";
import g4 from "@/assets/exhibit-4.jpg";

const characters = [
  { img: mrH, bg: "bg-orange", name: "Mr. H", desc: "Your guide. Sarcastic, reluctant, oddly irresistible. Cynicism is his default setting, irony is his mother tongue. Hates his job. Best at it." },
  { img: mrH, bg: "bg-turquoise", name: "Lady Lol", desc: "The brains. The chaos. Will outwit you before you finish your sentence. Don't try.", flip: true },
  { img: mrH, bg: "bg-red", name: "Bumble", desc: "The heart. Doesn't speak. Communicates exclusively in concerned eyebrows.", flip: true, hue: true },
];

const faqs = [
  { q: "What are your opening hours?", a: "09:00–21:00, every day. Yes, weekends too." },
  { q: "Where are you located?", a: "Gajeva 7/1, Zagreb. Right in the center. No excuses." },
  { q: "How much are tickets?", a: "Kids & disabled: €9. Regular: €12. Family (2+2): €35. Cheaper than pretending to have fun elsewhere." },
  { q: "Is it suitable for children?", a: "Yes. Also adults who secretly act like children." },
  { q: "Do I need to book in advance?", a: "Recommended. Life is unpredictable. So is our availability." },
  { q: "What are the rules?", a: "Laugh. Don't break things. Respect everyone in the room." },
  { q: "Is it accessible?", a: "Yes. Everyone's welcome. That's kind of the whole point." },
];

const gallery = [g1, g2, g3, g4, g1, g3, g2, g4, g3, g1];

const About = () => (
  <Layout>
    {/* HERO */}
    <section className="relative bg-green overflow-hidden">
      <Doodles variant="wallpaper" tone="light" />
      <Sticker variant="starburst" color="red" rotate={-15} className="absolute top-12 left-[8%] w-28 h-28 text-xs hidden md:grid z-10">
        SINCE<br/>2024
      </Sticker>
      <Sticker variant="circle" color="primary" rotate={12} className="absolute bottom-12 right-[8%] w-28 h-28 text-xs hidden md:grid z-10">
        SMILE,<br/>YOU'RE<br/>HERE
      </Sticker>
      <div className="container relative py-28 text-center">
        <h1 className="font-display text-5xl md:text-8xl text-navy text-balance max-w-4xl mx-auto">
          Meet the People Behind the Laughing.
        </h1>
        <p className="mt-6 text-navy/80 text-xl max-w-2xl mx-auto text-balance">
          We built a museum about humor. People laughed at the idea first. Now they pay to come in.
        </p>
      </div>
    </section>

    {/* CHARACTERS */}
    <section className="relative py-24 bg-primary text-white overflow-hidden">
      <Doodles variant="wallpaper" tone="dark" />
      <div className="container relative">
        <h2 className="font-display text-5xl md:text-7xl">Meet the Locals</h2>
        <p className="mt-3 text-white/70 italic">yes, we made a whole comic about them. yes, it was necessary.</p>
        <p className="mt-6 max-w-2xl text-white/85 text-lg">
          Our characters guide you through the Museum of Laughter and introduce you to every exhibit. They have opinions. Strong ones.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {characters.map((c, i) => (
            <div
              key={c.name}
              className="bg-white text-navy rounded-3xl overflow-hidden shadow-[0_10px_0_rgba(0,0,0,0.25)]"
              style={{ transform: `rotate(${i === 1 ? 1.5 : -1.5}deg)` }}
            >
              <div className={`aspect-square ${c.bg} grid place-items-center p-6 relative overflow-hidden`}>
                <Doodles variant="scatter" />
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="relative z-10 w-full h-full object-contain"
                  style={{
                    transform: c.flip ? "scaleX(-1)" : undefined,
                    filter: c.hue ? "hue-rotate(200deg) saturate(1.4)" : undefined,
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl">{c.name}</h3>
                <p className="mt-2 text-navy/75 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#comic" className="inline-flex rounded-full bg-yellow text-navy font-bold px-8 py-4 hover:bg-red hover:text-white transition-colors shadow-[0_8px_0_rgba(0,0,0,0.18)]">
            Read the Comic →
          </a>
        </div>
      </div>
    </section>

    {/* COMIC */}
    <section id="comic" className="py-24 bg-white">
      <div className="container">
        <h2 className="font-display text-5xl md:text-6xl text-navy">Peek Into Mr. H's World</h2>
        <p className="mt-3 text-muted-foreground italic">a few pages from the comic. just enough to get you hooked.</p>
      </div>
      <div className="mt-12 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 px-6">
        {[g1, g2, g3, g4, g1].map((src, i) => (
          <div key={i} className="snap-start shrink-0 w-[80vw] md:w-[420px] aspect-[3/4] rounded-2xl overflow-hidden bg-cool-gray">
            <img src={src} alt={`Comic page ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>

    {/* ANDREA */}
    <section className="py-24 bg-white">
      <div className="container grid gap-12 md:grid-cols-2 items-center">
        <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-cool-gray">
          <img src={founder} alt="Andrea Golubić" loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-primary font-bold uppercase tracking-widest text-sm">The Founder</p>
          <h2 className="mt-2 font-display text-5xl md:text-6xl text-navy">Andrea Golubić</h2>
          <p className="mt-6 text-lg text-navy/80 leading-relaxed">
            When other kids wanted to be astronauts, doctors, or politicians, Andrea always knew she
            wanted to make people laugh. They laughed at the idea. She built the museum anyway.
            She's enthusiastic, full of positive energy, and exactly as chaotic as HaHaHouse.
            We'd say more nice things about her, but she won't let us.
          </p>
        </div>
      </div>
    </section>

    {/* GALLERY */}
    <section className="py-24 bg-cool-gray">
      <div className="container">
        <h2 className="font-display text-5xl md:text-6xl text-navy">The Place, In Photos</h2>
        <div className="mt-12 columns-2 md:columns-3 lg:columns-4 gap-4 [&>*]:mb-4">
          {gallery.map((src, i) => (
            <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden bg-white">
              <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" className="w-full h-auto block" />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-24 bg-white">
      <div className="container max-w-3xl">
        <h2 className="font-display text-5xl md:text-6xl text-navy">Questions We've Been Asked.</h2>
        <p className="mt-3 text-muted-foreground italic">and some we anticipated.</p>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`f${i}`} className="border-b border-navy/10">
              <AccordionTrigger className="text-left font-display text-xl text-primary hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-navy/80 text-base pb-5">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* STICKERS */}
    <section className="py-24 bg-cool-gray">
      <div className="container">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="font-display text-5xl md:text-6xl text-navy">Stickers Are Real.</h2>
          <Sticker variant="arrow" color="green" rotate={-3} className="text-base">
            FREE WITH ENTRY
          </Sticker>
        </div>
        <p className="mt-3 text-muted-foreground italic">we hand them out. you stick them places. it's a whole thing.</p>
        <div className="mt-10 rounded-3xl overflow-hidden bg-white border-4 border-navy shadow-[0_10px_0_hsl(var(--navy))]">
          <img src={stickers} alt="HaHaHouse stickers" className="w-full h-auto block" />
        </div>
      </div>
    </section>

    {/* PARTNERS */}
    <section className="py-24 bg-white">
      <div className="container">
        <h2 className="font-display text-5xl md:text-6xl text-navy">People We Like.</h2>
        <p className="mt-3 text-muted-foreground italic">they believed in us before it was obvious.</p>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-16 rounded-xl bg-cool-gray grid place-items-center font-display text-navy/40 grayscale hover:grayscale-0 hover:text-primary transition"
            >
              LOGO {i + 1}
            </div>
          ))}
        </div>
      </div>
    </section>

    <TicketReminder
      headline="You've read this far. You clearly want to come."
      cta="Get Tickets Already."
    />
  </Layout>
);

export default About;
