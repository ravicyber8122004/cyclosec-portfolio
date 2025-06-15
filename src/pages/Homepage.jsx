import { FaShieldAlt, FaLock, FaSatelliteDish } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Homepage() {
  const features = [
    {
      icon: FaShieldAlt,
      title: "Real-time Threat Detection",
      desc: "Leverage continuous monitoring to identify and neutralise attacks as they happen, not after the damage is done.",
    },
    {
      icon: FaLock,
      title: "Zero-Trust Architecture",
      desc: "Every request is verified. Our layered controls safeguard devices, identities, and workloads end-to-end.",
    },
    {
      icon: FaSatelliteDish,
      title: "AI-Driven Insights",
      desc: "Machine-learning powered analytics deliver actionable intelligence so you can respond in minutes, not hours.",
    },
  ];

  const partners = [
    "/partner1.png",
    "/partner2.png",
    "/partner3.png",
    "/partner4.png",
    "/partner5.png",
  ];

  const services = [
    "Threat Intelligence",
    "Security Information & Event Management (SIEM)",
    "Endpoint Detection & Response (EDR)",
    "Incident Response",
    "Compliance & Risk Assessment",
  ];

  const testimonials = [
    {
      name: "Anita Sharma",
      quote:
        "This platform gives us the visibility we never had before. It's a game-changer for our security ops.",
    },
    {
      name: "Rajeev Menon",
      quote:
        "Frustrated with alerts before, now we focus only on what matters. Their AI is impressive.",
    },
    {
      name: "Sonia Patel",
      quote:
        "From deployment to daily monitoring, the experience is seamless and impactful.",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-text selection:bg-primary selection:text-background">
      {/* ---------------- Hero --------------- */}
      <section className="relative flex flex-col items-center justify-center px-4 pb-32 pt-24 text-center lg:pt-36">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl text-primary drop-shadow-md"
        >
          Protecting&nbsp;Digital&nbsp;Frontiers
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, delay: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-secondary"
        >
          Next-generation cyber-defence platform that anticipates, detects, and
          eliminates threats – before they disrupt your business.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, delay: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-2xl bg-primary px-8 py-3 font-semibold text-background shadow-lg hover:shadow-primary/50 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:ring-offset-2"
        >
          Get a Demo
        </motion.button>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,theme(colors.accent)/40_0%,transparent_70%)]"
        />
      </section>

      {/* ----------- Partners Carousel ------------ */}
      <section className="py-10 bg-primary/5">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-scroll-left">
            {partners.concat(partners).map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Partner ${index + 1} Logo`}
                className="inline-block mx-8 h-12 grayscale opacity-80 hover:opacity-100 transition duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* -------------- Features ------------- */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} 
              className="rounded-2xl bg-primary/10 p-6 backdrop-blur-md shadow-lg"
            >
              <Icon className="h-10 w-10 text-accent" />
              <h3 className="mt-4 text-xl font-bold text-primary">{title}</h3>
              <p className="mt-2 text-sm text-secondary leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ------------ Services ------------- */}
      <section className="px-4 py-20 text-center">
        <h2 className="text-3xl font-extrabold text-primary mb-10">
          Our Services
        </h2>
        <ul className="mx-auto max-w-4xl grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <li
              key={idx}
              className="rounded-xl bg-primary/10 px-6 py-4 text-secondary backdrop-blur-sm shadow-md hover:shadow-accent/20"
            >
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* ------------ Testimonials ------------- */}
      <section className="px-4 py-20 bg-primary/5">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-extrabold text-primary mb-8">
            What Our Clients Say
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map(({ name, quote }) => (
              <div
                key={name}
                className="rounded-xl bg-white/5 p-6 text-sm text-secondary shadow-md"
              >
                <p className="mb-4 italic">"{quote}"</p>
                <p className="font-bold text-primary">– {name}</p>
              </div>
            ))}
          </div>
          <button className="mt-10 rounded-lg bg-accent px-6 py-2 text-background hover:bg-accent/90">
            View More Testimonials
          </button>
        </div>
      </section>

      {/* -------------- CTA stripe ------------- */}
      <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_center,theme(colors.accent)/30_0%,transparent_80%)] py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl text-primary">
            Ready to Secure Your Future?
          </h2>
          <p className="mx-auto mt-4 max-w-prose text-secondary">
            Discover why organisations worldwide trust our unified SOC platform
            to stay a step ahead of evolving cyber threats.
          </p>
          <button className="mt-8 rounded-2xl bg-accent px-10 py-3 font-semibold text-background shadow-md hover:shadow-accent/50 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2">
            Request a Quote
          </button>
        </div>
      </section>
    </main>
  );
}

