import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/site/Layout";
import Sticker from "@/components/site/Sticker";
import TicketReminder from "@/components/site/TicketReminder";
import hahaWordmark from "@/assets/haha-wordmark.png";
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
    {/* HERO, matches homepage intro pattern */}
    <section className="relative bg-white border-b border-navy/10">
      <div className="container py-24 grid gap-12 md:gap-16 md:grid-cols-2 md:items-center">
        <div>
          <p className="font-display text-primary text-3xl md:text-4xl mb-6">The people behind</p>
          <img
            src={hahaWordmark}
            alt="HaHa House"
            className="w-64 md:w-80 h-auto mb-8"
          />
          <p className="text-navy text-lg md:text-xl leading-relaxed">
            We built a museum about humor. People laughed at the idea first. Now they pay to come in. Forty exhibits, three weird characters, one founder who refused to take no for an answer, and a small team that genuinely believes laughter is a basic human need. This is who we are and why this place exists.
          </p>
        </div>
        <div className="relative">
          <Sticker variant="starburst" color="red" rotate={-12} className="absolute -top-4 -right-2 w-28 h-28 text-xs z-10">
            SINCE<br/>2024
          </Sticker>
          <h1 className="font-display text-6xl md:text-8xl text-navy text-balance">
            Meet the People Behind the Laughing.
          </h1>
        </div>
      </div>
    </section>

    {/* SUB-STRIP */}
    <div className="bg-white border-b border-navy/10">
      <p className="container py-4 text-center font-mono uppercase tracking-[0.25em] text-xs md:text-sm text-navy font-bold">
        Built in Zagreb · Run by humans · Powered by laughter
      </p>
    </div>

    {/* CHARACTERS */}
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container">
        <p className="italic text-primary text-sm mb-3">yes, we made a whole comic about them.</p>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="font-display text-5xl md:text-7xl text-navy">Meet the Locals</h2>
          <Sticker variant="arrow" color="turquoise" rotate={-4} className="text-base">
            SCROLL →
          </Sticker>
        </div>
        <p className="mt-6 max-w-2xl text-navy/80 text-lg">
          Our characters guide you through the museum and introduce every exhibit. They have opinions. Strong ones.
        </p>

        <div className="mt-12 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6">
          {characters.map((c) => (
            <div key={c.name} className="snap-start shrink-0 w-[80vw] md:w-[380px]">
              <div className={`rounded-3xl overflow-hidden aspect-[4/3] ${c.bg} grid place-items-center p-6`}>
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="w-full h-full object-contain"
                  style={{
                    transform: c.flip ? "scaleX(-1)" : undefined,
                    filter: c.hue ? "hue-rotate(200deg) saturate(1.4)" : undefined,
                  }}
                />
              </div>
              <h3 className="mt-4 font-display text-2xl text-navy">{c.name}</h3>
              <p className="mt-2 text-navy/80">{c.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-muted-foreground italic">they're fictional. mostly.</p>
      </div>
    </section>
    {/* COMIC */}
    <section id="comic" className="py-24 bg-white border-t border-navy/10">
      <div className="container">
        <p className="italic text-primary text-sm mb-3">a few pages. just enough to get you hooked.</p>
        <h2 className="font-display text-5xl md:text-7xl text-navy">Peek Into Mr. H's World</h2>
        <p className="mt-6 max-w-2xl text-navy/80 text-lg leading-relaxed">
          A deadpan comic about a guy who finds everything mildly disappointing, including himself. Mr. H uses self-deprecation like a flashlight, pointing it at all the negativity we take way too seriously. The joke is on him. The joke is on us. Mostly it's just on us.
        </p>
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
    <section className="py-24 bg-white border-t border-navy/10">
      <div className="container grid gap-12 md:gap-16 md:grid-cols-2 md:items-center">
        <div className="rounded-3xl overflow-hidden aspect-[4/5]">
          <img src={founder} alt="Andrea Golubić" loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="italic text-primary text-sm mb-3">the one who wouldn't let it go.</p>
          <h2 className="font-display text-5xl md:text-7xl text-navy">Andrea Golubić</h2>
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
    <section className="py-24 bg-white border-t border-navy/10">
      <div className="container">
        <p className="italic text-primary text-sm mb-3">no filters. just chaos.</p>
        <h2 className="font-display text-5xl md:text-7xl text-navy">The Place, In Photos</h2>
        <div className="mt-12 columns-2 md:columns-3 lg:columns-4 gap-4 [&>*]:mb-4">
          {gallery.map((src, i) => (
            <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden bg-cool-gray">
              <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" className="w-full h-auto block" />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-24 bg-white border-t border-navy/10">
      <div className="container max-w-3xl">
        <p className="italic text-primary text-sm mb-3">and some we anticipated.</p>
        <h2 className="font-display text-5xl md:text-7xl text-navy">Questions We've Been Asked</h2>

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
    <section className="py-24 bg-white border-t border-navy/10">
      <div className="container">
        <p className="italic text-primary text-sm mb-3">we hand them out. you stick them places.</p>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="font-display text-5xl md:text-7xl text-navy">Stickers Are Real</h2>
          <Sticker variant="arrow" color="green" rotate={-3} className="text-base">
            FREE WITH ENTRY
          </Sticker>
        </div>
        <div className="mt-10 rounded-3xl overflow-hidden">
          <img src={stickers} alt="HaHaHouse stickers" className="w-full h-auto block" />
        </div>
      </div>
    </section>

    {/* TEAM */}
    <section className="py-24 bg-white border-t border-navy/10">
      <div className="container">
        <p className="italic text-primary text-sm mb-3">the humans who keep the lights on and the jokes running.</p>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="font-display text-5xl md:text-7xl text-navy">People We Like</h2>
          <Sticker variant="starburst" color="yellow" rotate={-6} className="w-24 h-24 text-[10px]">
            ON PAYROLL<br/>(MOSTLY)
          </Sticker>
        </div>
        <p className="mt-6 max-w-2xl text-navy/80 text-lg">
          Small team. Big opinions. Each one of them shows up every day to make sure you have a slightly better day than you walked in with.
        </p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Andrea Golubić", role: "Founder & Chief Joke Officer", bio: "Started it all. Refuses to stop." },
            { name: "Marko", role: "Operations & Vibes", bio: "Keeps the museum running. And the kettle on." },
            { name: "Iva", role: "Front of House", bio: "First face you see. Best one too." },
            { name: "Luka", role: "Workshop & Builds", bio: "If it spins, lights up, or makes a noise, that's him." },
            { name: "Petra", role: "Events & Collabs", bio: "Books the parties. Survives them. Mostly." },
            { name: "Tin", role: "Design & Comics", bio: "Draws Mr. H. Is also a little bit Mr. H." },
          ].map((p) => (
            <div key={p.name} className="border-t-4 border-navy pt-4">
              <h3 className="font-display text-2xl text-navy">{p.name}</h3>
              <p className="font-mono uppercase tracking-wider text-xs text-primary mt-1">{p.role}</p>
              <p className="mt-3 text-navy/80">{p.bio}</p>
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
