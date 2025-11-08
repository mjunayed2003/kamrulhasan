"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

// ডেটা: Footer লিঙ্কস
const quickLinks = [
  { name: "About", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Services", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "#" },
];

const resourcesLinks = [
  { name: "Authentication", href: "#" },
  { name: "System Status", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Over Right", href: "#" },
];

const developersLinks = [
  { name: "Documentation", href: "#" },
  { name: "Authentication", href: "#" },
  { name: "API Reference", href: "#" },
  { name: "Support", href: "#" },
  { name: "Open Source", href: "#" },
];

// 🔘 Social Button Component
const SocialButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    target="_blank"
    className="w-10 h-10 bg-white border border-gray-200 shadow-sm rounded-full flex items-center justify-center text-gray-700 hover:text-pink-600 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
  >
    {children}
  </Link>
);

// 🔗 Link Column Component
const LinkColumn = ({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) => (
  <div>
    <h3 className="text-sm font-bold uppercase tracking-widest text-pink-600 mb-6">
      {title}
    </h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="text-gray-600 hover:text-pink-600 transition-colors"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* 🌀 Logo & Socials */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/ka2.jpg"
                alt="Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
              <span className="font-bold text-2xl text-gray-800">KAMRUL</span>
            </div>
            <div className="flex gap-3">
              <SocialButton href="#">
                <FaFacebookF />
              </SocialButton>
              <SocialButton href="#">
                <FaTwitter />
              </SocialButton>
              <SocialButton href="#">
                <FaLinkedinIn />
              </SocialButton>
            </div>
          </div>

          {/* 🔗 Link Columns */}
          <LinkColumn title="Quick Link" links={quickLinks} />
          <LinkColumn title="Resources" links={resourcesLinks} />
          <LinkColumn title="Developers" links={developersLinks} />
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-200 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()}. All rights reserved by{" "}
            <span className="text-pink-600 font-medium">Rainbow-Themes</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
