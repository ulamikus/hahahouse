import { useState } from "react";
import { z } from "zod";
import Layout from "@/components/site/Layout";
import Doodles from "@/components/site/Doodles";
import Sticker from "@/components/site/Sticker";
import { toast } from "sonner";

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
      <section className="relative bg-primary text-white overflow-hidden">
        <Doodles variant="wallpaper" tone="dark" />
        <Sticker variant="circle" color="yellow" rotate={-10} className="absolute top-16 left-[6%] w-28 h-28 text-xs hidden md:grid z-10">
          BOOK<br/>THE<br/>WHOLE<br/>HOUSE
        </Sticker>
        <div className="container relative py-28 text-center">
          <h1 className="font-display text-5xl md:text-8xl text-balance">Let's Make It Weird. <br/><span className="text-yellow">In a Good Way.</span></h1>
          <p className="mt-6 text-xl text-white/85 max-w-2xl mx-auto text-balance">
            Birthdays. Team building. Pregame parties. If it involves people, we can help.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container grid gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            {infoBlocks.map((b) => (
              <div key={b.q} className="border-l-4 border-primary pl-6">
                <h3 className="font-display text-3xl text-navy">{b.q}</h3>
                <p className="mt-3 text-navy/80 text-lg">{b.a}</p>
              </div>
            ))}
          </div>

          <div className="bg-cool-gray rounded-3xl p-8 md:p-10">
            <h2 className="font-display text-4xl text-navy">Get In Touch</h2>

            <div className="mt-6 space-y-3">
              <a
                href="https://wa.me/385000000000"
                className="flex items-center justify-between rounded-2xl bg-green text-navy font-bold px-5 py-4 hover:opacity-90"
              >
                <span>💬 WhatsApp Us</span>
                <span className="text-sm font-normal italic">fastest. we actually check this.</span>
              </a>
              <a href="mailto:info@haha.house" className="flex items-center justify-between rounded-2xl bg-white text-navy font-bold px-5 py-4 hover:bg-yellow">
                <span>✉️ Email</span>
                <span className="text-sm font-normal italic">if you prefer typing formally for some reason.</span>
              </a>
            </div>

            <form onSubmit={onSubmit} className="mt-8 space-y-4">
              <input name="name" placeholder="Name" required maxLength={100} className="w-full rounded-xl border-2 border-navy/15 bg-white px-4 py-3 focus:border-primary outline-none" />
              <input name="email" type="email" placeholder="Email" required maxLength={255} className="w-full rounded-xl border-2 border-navy/15 bg-white px-4 py-3 focus:border-primary outline-none" />
              <select name="type" required defaultValue="Birthday" className="w-full rounded-xl border-2 border-navy/15 bg-white px-4 py-3 focus:border-primary outline-none">
                <option>Birthday</option>
                <option>Team Building</option>
                <option>Pregame Party</option>
                <option>Something Else</option>
              </select>
              <div className="grid grid-cols-2 gap-4">
                <input name="date" type="date" required className="w-full rounded-xl border-2 border-navy/15 bg-white px-4 py-3 focus:border-primary outline-none" />
                <input name="headcount" type="number" min={1} placeholder="Headcount" required className="w-full rounded-xl border-2 border-navy/15 bg-white px-4 py-3 focus:border-primary outline-none" />
              </div>
              <textarea name="message" placeholder="Message (optional)" maxLength={1000} rows={3} className="w-full rounded-xl border-2 border-navy/15 bg-white px-4 py-3 focus:border-primary outline-none" />
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
