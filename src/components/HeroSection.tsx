// components/HeroSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants  } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiInvision, SiSketch, SiFigma } from "react-icons/si";
import { Cpu, HardDrive, Server } from "lucide-react";

// একটি আইকন বাটনের জন্য ছোট কম্পোনেন্ট
const SocialButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-16 h-16 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg rounded-lg flex items-center justify-center text-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

export function HeroSection() {
  // Framer Motion ভেরিয়েন্ট
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

const imageVariants: Variants = {
  hidden: { x: 50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] } // cubic-bezier
  },
};

  return (
    <section className="w-full bg-slate-50 py-20 md:py-32">
      <motion.div
        className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* বাম দিকের কন্টেন্ট */}
        <div className="flex flex-col gap-8">
          <motion.p
            className="text-sm font-semibold uppercase tracking-widest text-gray-500"
            variants={itemVariants}
          >
            Welcome to my world
          </motion.p>
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
            variants={itemVariants}
          >
            Hi, I'm <span className="text-pink-600">Kamrul Hasan</span>
            <br />a Network Engineer.
          </motion.h1>
          <motion.p className="text-gray-600 max-w-lg" variants={itemVariants}>
            I design, implement, and maintain secure and efficient networks. Experienced in routing, switching, network
            security, and optimizing performance.
          </motion.p>

          {/* সোশ্যাল এবং স্কিল আইকন */}
          <div className="flex flex-col md:flex-row gap-12 mt-6">
            <motion.div className="flex flex-col gap-4" variants={itemVariants}>
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Find with me
              </p>
              <div className="flex gap-4">
                <SocialButton href="https://www.facebook.com/share/1F3X4m4Lqe/">
                  <FaFacebookF size={20} />
                </SocialButton>
                <SocialButton href="#">
                  <FaTwitter size={20} />
                </SocialButton>
                <SocialButton href="https://www.linkedin.com/in/kamrul-hasan-207279389/">
                  <FaLinkedinIn size={20} />
                </SocialButton>
              </div>
            </motion.div>
            <motion.div className="flex flex-col gap-4" variants={itemVariants}>
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Best skill on
              </p>
              <div className="flex gap-4">
                <SocialButton href="#">
                  <Cpu size={22} className="text-blue-600" />
                </SocialButton>
                <SocialButton href="#">
                  <Server size={22} className="text-green-600" />
                </SocialButton>
                <SocialButton href="#">
                  <HardDrive size={22} className="text-gray-800" />
                </SocialButton>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ডান দিকের ছবি */}
        <motion.div
          className="flex justify-center lg:justify-end"
          variants={imageVariants}
        >
          <div className="relative w-[300px] h-[380px] md:w-[400px] md:h-[500px] bg-white p-4 rounded-xl shadow-2xl">
            <Image
              src="/ka.jpg"
              alt="Jone Lee"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}