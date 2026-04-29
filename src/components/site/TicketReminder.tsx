import { Link } from "react-router-dom";

type Props = {
  headline?: string;
  cta?: string;
};

const TicketReminder = ({
  headline = "Still here? The tickets aren't going to buy themselves.",
  cta = "Fine. I'll Get Tickets.",
}: Props) => (
  <section className="bg-yellow">
    <div className="container py-20 text-center">
      <h2 className="font-display text-4xl md:text-6xl text-navy text-balance max-w-4xl mx-auto">
        {headline}
      </h2>
      <Link
        to="/tickets"
        className="mt-10 inline-flex items-center rounded-full bg-primary text-white font-bold px-8 py-4 text-lg hover:bg-navy transition-colors"
      >
        {cta}
      </Link>
    </div>
  </section>
);

export default TicketReminder;
