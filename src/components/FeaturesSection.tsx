// components/FeaturesSection.tsx

"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react"; // Example icon for network-related feature

// Features data for a Network Engineer
const featuresData = [
  {
    title: "Network Design",
    description:
      "Designing scalable and secure network architectures for businesses of all sizes.",
  },
  {
    title: "Routing & Switching",
    description:
      "Expertise in configuring and managing routers, switches, and VLANs for optimized network traffic.",
  },
  {
    title: "Network Security",
    description:
      "Implementing firewalls, VPNs, and access controls to ensure secure data flow and compliance.",
  },
  {
    title: "Server & Data Center",
    description:
      "Setting up and maintaining servers, data centers, and virtualization solutions for high availability.",
  },
  {
    title: "Cloud Networking",
    description:
      "Integrating cloud services and hybrid networks to enhance flexibility and business continuity.",
  },
  {
    title: "Monitoring & Troubleshooting",
    description:
      "Proactively monitoring network performance and troubleshooting issues to minimize downtime.",
  },
];

// Component for a single feature card
const FeatureCard = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  // Variants for animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1, // slight delay for each card
      },
    },
  };

  return (
    <motion.div
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col gap-6 text-left"
      variants={cardVariants}
    >
      {/* Icon wrapper */}
      <div className="w-16 h-16 rounded-full border-2 border-blue-600 flex items-center justify-center">
        <Cpu className="w-8 h-8 text-blue-600" />
      </div>

      {/* Feature title */}
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>

      {/* Feature description */}
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

// Features Section Component
export function FeaturesSection() {
  return (
    <section className="w-full bg-slate-50 py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">
            Features
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What I Do
          </h2>
        </motion.div>

        {/* Features grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
