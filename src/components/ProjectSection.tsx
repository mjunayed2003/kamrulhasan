// components/ProjectSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

// Sample data for projects
const projects = [
  {
    imageSrc: "/p1.jpg",
    category: "NETWORK",
    duration: "4 weeks",
    title: "GNS3 Multi-Router WAN/LAN Network Topology Diagram",
    link: "#",
  },
  {
    imageSrc: "/p2.jpg",
    category: "NETWORK",
    duration: "4 weeks",
    title: "Hierarchical Network Topology with Two Routers Connecting Four LANs",
    link: "#",
  },
  {
    imageSrc: "/p3.jpg",
    category: "NETWORK",
    duration: "4 weeks",
    title: "Troubleshooting network connectivity: Comparing failed and successful ping tests",
    link: "#",
  },
];

// Project card component
const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.15 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
    >
      <Link href={project.link}>
        {/* Project Image */}
        <div className="overflow-hidden">
          <Image
            src={project.imageSrc}
            alt={project.title}
            width={400}
            height={250}
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="flex justify-between items-center text-xs mb-3">
            <p className="font-bold uppercase text-pink-600">{project.category}</p>
            <div className="flex items-center gap-1 text-gray-500">
              <Clock className="w-4 h-4" />
              <span>{project.duration}</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
            {project.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
};

// Main project section
export function ProjectSection() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <section className="w-full bg-slate-100 py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-pink-600 mb-2">
            Check my latest work and projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            My Projects
          </h2>
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
