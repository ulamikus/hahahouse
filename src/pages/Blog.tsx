import { Link, useParams } from "react-router-dom";
import Layout from "@/components/site/Layout";
import Sticker from "@/components/site/Sticker";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  tint: string;
  emoji: string;
  body: string[];
};

const POSTS: Post[] = [
  {
    slug: "what-we-learned-from-1000-ball-pit-jumps",
    title: "What We Learned From 1,000 Ball Pit Jumps",
    excerpt: "Turns out adults scream louder than kids. And other findings from a year of data we definitely did not collect scientifically.",
    date: "MAY 20, 2026",
    readTime: "4 min read",
    tag: "Behind the Scenes",
    tint: "bg-yellow/40",
    emoji: "🟡",
    body: [
      "We opened HaHaHouse with one rule: if it makes people laugh, we keep it. A year in, the ball pit is still the most-photographed, most-screamed-in, most-fought-over corner of the museum.",
      "Here's what surprised us: the loudest screams come from adults in business attire. The longest sessions come from people who said 'I'll just watch'. And the worst injuries come from… nobody. Ball pits are basically the safest place on Earth.",
      "More to come. Probably with charts.",
    ],
  },
  {
    slug: "how-to-throw-an-office-party-people-actually-show-up-to",
    title: "How to Throw an Office Party People Actually Show Up To",
    excerpt: "Step one: don't call it an 'offsite'. Step two: keep reading.",
    date: "MAY 08, 2026",
    readTime: "5 min read",
    tag: "Private Events",
    tint: "bg-turquoise/40",
    emoji: "🏆",
    body: [
      "The first sign your team-building event has failed is the moment someone says 'so, what now?' Whatever happens in that silence is awful.",
      "The fix: give people something to do that isn't 'mingle'. Give them an obstacle, a costume, or a wall of washing machines. Suddenly Karen from accounting is your favorite person.",
      "We've hosted hundreds of these. Email us if you want the playbook.",
    ],
  },
  {
    slug: "five-zagreb-spots-to-hit-after-haha",
    title: "Five Zagreb Spots to Hit After HaHa",
    excerpt: "Because you'll be too giddy to go straight home.",
    date: "APR 28, 2026",
    readTime: "3 min read",
    tag: "Zagreb",
    tint: "bg-orange/30",
    emoji: "📍",
    body: [
      "We're on Gajeva 7/1, which is annoyingly close to most of the good places. Here's where to land afterwards.",
      "1. Tkalčićeva — the obvious one, but for a reason. 2. Booksa — quiet, cool, has cake. 3. Cafe U Dvorištu — secret garden vibes. 4. Mali Medo — beer. 5. Anywhere with a sidewalk and a chair.",
      "Don't go home yet.",
    ],
  },
  {
    slug: "the-economics-of-a-ball-pit",
    title: "The Economics of a Ball Pit",
    excerpt: "How many balls does it take? How often do we wash them? Should you be asking? Yes.",
    date: "APR 14, 2026",
    readTime: "4 min read",
    tag: "Behind the Scenes",
    tint: "bg-red/25",
    emoji: "🔴",
    body: [
      "A regulation HaHaHouse ball pit contains 32,000 plastic balls. We know because we counted twice and argued about it once.",
      "They get cleaned weekly with a process we are legally not allowed to describe but which involves a leaf blower, industrial soap, and one very patient employee named Marko.",
      "We replace ~5% of the balls every month — mostly the ones that get smuggled out in pockets. To whoever has 47 of our balls in a drawer at home: we forgive you.",
    ],
  },
  {
    slug: "why-laughter-is-the-best-kpi",
    title: "Why Laughter Is the Best KPI",
    excerpt: "We tried measuring engagement. Then we tried measuring smiles. Then we just listened.",
    date: "APR 02, 2026",
    readTime: "6 min read",
    tag: "Private Events",
    tint: "bg-green/40",
    emoji: "📈",
    body: [
      "Most team-building events end with a survey. Ours end with people too out of breath to fill one out. We're calling that a win.",
      "After 200+ corporate bookings, the pattern is clear: the teams who laugh together in week one are still talking to each other in month six. We have zero data to back this up. We're going with our gut.",
      "If your KPI dashboard doesn't have a 'laughs per quarter' column, your dashboard is wrong.",
    ],
  },
  {
    slug: "things-people-have-left-behind",
    title: "Things People Have Left Behind",
    excerpt: "A running list of items recovered from the lost & found. Some of them are concerning.",
    date: "MAR 20, 2026",
    readTime: "2 min read",
    tag: "Behind the Scenes",
    tint: "bg-cool-gray/60",
    emoji: "🧦",
    body: [
      "An incomplete inventory: 14 single socks. 3 wedding rings (all returned, all with stories). A monocle. A tooth (we hope it was a baby tooth). One full sourdough starter named Geoffrey.",
      "Top theory: the ball pit is a portal. We have no evidence. We also have no other explanation for the monocle.",
      "If you've lost something, email us. If you've lost Geoffrey, please come collect him. He is thriving but it's been a while.",
    ],
  },
];


const BlogIndex = () => (
  <Layout>
    <section className="bg-white border-b border-navy/10">
      <div className="container py-20 md:py-28 relative">
        <Sticker variant="circle" color="yellow" rotate={-8} className="absolute top-10 right-6 w-24 h-24 text-[10px] hidden md:grid">
          NEW<br/>POSTS<br/>WEEKLY
        </Sticker>
        <p className="font-display text-primary text-3xl md:text-4xl mb-4">Field Notes</p>
        <h1 className="font-display text-6xl md:text-8xl text-navy text-balance">
          Stuff We've <span className="text-primary">Noticed.</span>
        </h1>
        <p className="mt-6 text-navy/80 text-lg max-w-2xl">
          Stories from the museum. Lessons from hosting too many bachelor parties. Occasionally a guide to Zagreb. Mostly nonsense.
        </p>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="container grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((p) => (
          <Link key={p.slug} to={`/blog/${p.slug}`} className="group block">
            <div className={`rounded-3xl ${p.tint} aspect-[4/3] grid place-items-center text-7xl border-2 border-primary border-dashed relative overflow-hidden`}>
              <div className="text-center">
                <div>{p.emoji}</div>
                <p className="mt-3 font-mono uppercase tracking-[0.2em] text-[10px] text-navy/60">Upload image</p>
              </div>
            </div>
            <p className="mt-5 font-mono uppercase tracking-[0.2em] text-xs text-primary">{p.tag} · {p.date}</p>
            <h3 className="mt-2 font-display text-2xl text-navy group-hover:text-primary transition-colors">{p.title}</h3>
            <p className="mt-2 text-navy/80">{p.excerpt}</p>
            <p className="mt-3 text-sm text-navy/50">{p.readTime}</p>
          </Link>
        ))}
      </div>
    </section>
  </Layout>
);

const BlogPost = () => {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) {
    return (
      <Layout>
        <section className="container py-32 text-center">
          <h1 className="font-display text-5xl text-navy">Post not found.</h1>
          <Link to="/blog" className="mt-8 inline-block rounded-full bg-yellow px-6 py-3 font-bold text-navy">← Back to the blog</Link>
        </section>
      </Layout>
    );
  }
  return (
    <Layout>
      <article className="bg-white">
        <div className="container py-16 md:py-24 max-w-3xl">
          <Link to="/blog" className="text-sm text-primary hover:text-red">← All posts</Link>
          <p className="mt-6 font-mono uppercase tracking-[0.2em] text-xs text-primary">{post.tag} · {post.date} · {post.readTime}</p>
          <h1 className="mt-3 font-display text-5xl md:text-7xl text-navy text-balance">{post.title}</h1>
          <div className={`mt-10 rounded-3xl ${post.tint} aspect-[16/8] grid place-items-center border-2 border-primary border-dashed`}>
            <div className="text-center">
              <div className="text-7xl">{post.emoji}</div>
              <p className="mt-3 font-mono uppercase tracking-[0.2em] text-xs text-navy/60">Upload image</p>
            </div>
          </div>
          <div className="mt-10 space-y-6 text-navy text-lg leading-relaxed">
            {post.body.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export { BlogIndex, BlogPost };
export default BlogIndex;
