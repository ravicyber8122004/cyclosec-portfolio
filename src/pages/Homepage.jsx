import { FaShieldAlt, FaLock, FaSatelliteDish, FaCode, FaNetworkWired, FaUserShield } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

// Import images from Assets/images (WebP format)
import heroBg from '../Assets/images/hero-bg.webp';
import circuitPattern from '../Assets/images/circuit-pattern.webp';
import threatDetectionBg from '../Assets/images/threat-detection-bg.webp';
import zeroTrustBg from '../Assets/images/zero-trust-bg.webp';
import aiInsightsBg from '../Assets/images/ai-insights-bg.webp';
import vulnerabilityBg from '../Assets/images/vulnerability-bg.webp';
import networkSecurityBg from '../Assets/images/network-security-bg.webp';
import employeeTrainingBg from '../Assets/images/employee-training-bg.webp';
import partner1 from '../Assets/images/partner1.webp';
import partner2 from '../Assets/images/partner2.webp';
import partner3 from '../Assets/images/partner3.webp';
import partner4 from '../Assets/images/partner4.webp';
import partner5 from '../Assets/images/partner5.webp';
import partner6 from '../Assets/images/partner6.webp';
import partner7 from '../Assets/images/partner7.webp';
import statsBg from '../Assets/images/stats-bg.webp';
import avatar1 from '../Assets/images/avatar1.webp';
import avatar2 from '../Assets/images/avatar2.webp';
import avatar3 from '../Assets/images/avatar3.webp';
import ctaBg from '../Assets/images/cta-bg.webp';

export default function Homepage() {
  const features = [
    {
      icon: FaShieldAlt,
      title: "Real-time Threat Detection",
      desc: "Our advanced monitoring systems use AI to detect and neutralize threats instantly, ensuring your infrastructure remains secure 24/7.",
      bgImage: threatDetectionBg,
    },
    {
      icon: FaLock,
      title: "Zero-Trust Architecture",
      desc: "Implement strict identity verification for every user and device, securing access across your network with end-to-end encryption.",
      bgImage: zeroTrustBg,
    },
    {
      icon: FaSatelliteDish,
      title: "AI-Driven Insights",
      desc: "Leverage machine learning to gain real-time, actionable intelligence, helping you stay ahead of sophisticated cyber threats.",
      bgImage: aiInsightsBg,
    },
    {
      icon: FaCode,
      title: "Vulnerability Scanning",
      desc: "Automated scans identify and prioritize vulnerabilities in your systems, providing detailed reports for quick remediation.",
      bgImage: vulnerabilityBg,
    },
    {
      icon: FaNetworkWired,
      title: "Network Security",
      desc: "Protect your network with advanced firewalls, intrusion detection, and secure VPNs tailored to your business needs.",
      bgImage: networkSecurityBg,
    },
    {
      icon: FaUserShield,
      title: "Employee Training",
      desc: "Empower your team with cybersecurity training to recognize phishing, social engineering, and other common attack vectors.",
      bgImage: employeeTrainingBg,
    },
  ];

  const partners = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
  ];

  const testimonials = [
    {
      name: "Anita Sharma",
      quote: "This platform transformed our security operations, providing unmatched visibility and control.",
      avatar: avatar1,
      role: "CISO, TechCorp",
    },
    {
      name: "Rajeev Menon",
      quote: "The AI-driven alerts cut through the noise, letting us focus on critical threats.",
      avatar: avatar2,
      role: "IT Director, SecureNet",
    },
    {
      name: "Sonia Patel",
      quote: "Seamless deployment and powerful monitoring have made this our go-to solution.",
      avatar: avatar3,
      role: "Security Analyst, DataSafe",
    },
  ];

  const stats = [
    { value: "99.9%", label: "Threat Detection Accuracy", icon: FaShieldAlt },
    { value: "24/7", label: "Monitoring & Support", icon: FaSatelliteDish },
    { value: "500K+", label: "Threats Blocked Daily", icon: FaLock },
    { value: "95%", label: "Customer Satisfaction", icon: FaUserShield },
  ];

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-background text-text">
      {/* Hero Section */}
      <section
        className="relative px-4 py-24 text-center md:py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${circuitPattern})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{ opacity: [0.2, 0.25, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold md:text-6xl lg:text-7xl text-primary relative z-10"
        >
          Your Trusted Cybersecurity Partner
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 mx-auto max-w-2xl text-lg md:text-xl relative z-10"
        >
          Proactive, AI-driven solutions to protect against threats, hackers, and vulnerabilities.
        </motion.p>
        <div className="mt-10 flex justify-center gap-4 relative z-10">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl bg-accent px-8 py-3 font-medium text-background shadow-md hover:shadow-lg"
          >
            Get Started
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-xl border border-primary px-8 py-3 font-medium text-primary hover:bg-primary/10"
          >
            Watch Demo
          </motion.button>
        </div>
      </section>

      {/* Partners Section */}
      <section className="px-4 py-16 bg-primary/5">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold text-primary mb-8">Trusted by Industry Leaders</h2>
          <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-scroll-left">
              {partners.concat(partners).map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Partner ${index + 1} logo`}
                  className="inline-block mx-6 h-12 grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition duration-300"
                  onError={(e) => e.target.src = '/images/fallback.webp'}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 bg-background">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-primary">Comprehensive Cybersecurity Solutions</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, desc, bgImage }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative rounded-xl bg-white/5 p-6 backdrop-blur-md shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-10 bg-cover bg-center"
                  style={{ backgroundImage: `url(${bgImage})` }}
                />
                <div className="relative z-10">
                  <Icon className="mb-4 h-12 w-12 text-accent" />
                  <h3 className="mb-2 text-xl font-bold text-primary">{title}</h3>
                  <p className="text-sm text-text leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="px-4 py-20 bg-primary/10 relative">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${statsBg})` }}
        />
        <div className="mx-auto max-w-6xl text-center relative z-10">
          <h2 className="text-3xl font-extrabold text-primary mb-12">Why Choose Us?</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(({ value, label, icon: Icon }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6"
              >
                <Icon className="mx-auto h-10 w-10 text-accent mb-4" />
                <h3 className="text-4xl font-bold text-accent">{value}</h3>
                <p className="mt-2 text-text">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-20 bg-background">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-extrabold text-primary mb-12">What Our Clients Say</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map(({ name, quote, avatar, role }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="rounded-xl bg-white/5 p-6 text-sm text-text shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={avatar}
                  alt={`${name} avatar`}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  onError={(e) => e.target.src = '/images/fallback-avatar.webp'}
                />
                <p className="mb-4 italic">"{quote}"</p>
                <p className="font-bold text-secondary">{name}</p>
                <p className="text-xs text-text/80">{role}</p>
              </motion.div>
            ))}
          </div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 rounded-lg bg-accent px-6 py-2 text-background hover:bg-accent/90"
          >
            View More Testimonials
          </motion.button>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section
        className="px-4 py-20 text-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
        <div className="relative z-10">
          <h2 className="text-3xl font-extrabold text-primary md:text-4xl">
            Ready to Secure Your Future?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text">
            Join thousands of businesses protected by our enterprise-grade cybersecurity solutions.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="rounded-lg px-4 py-3 bg-white/10 text-text placeholder:text-text/50 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <button
              type="submit"
              className="rounded-lg bg-accent px-6 py-3 font-semibold text-background hover:bg-accent/90"
            >
              Request Demo
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}