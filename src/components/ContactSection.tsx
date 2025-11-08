// components/ContactSection.tsx

"use client";

import Image from "next/image";
import { motion , Variants} from "framer-motion";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import  Link from 'next/link'

// Small component for social media buttons
const SocialButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    target="_blank"
    className="w-14 h-14 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg rounded-lg flex items-center justify-center text-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
  >
    {children}
  </Link>
);

export function ContactSection() {
  // Animation for left-side content
  const leftVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const rightVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };
  return (
    <section className="w-full bg-slate-100 py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-pink-600 mb-2">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Contact With Me
          </h2>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side: Contact Info */}
          <motion.div
            className="lg:col-span-4 bg-white p-8 rounded-2xl shadow-lg"
            initial="hidden"
            whileInView="visible"
            variants={leftVariants}
            viewport={{ once: true }}
          >
            {/* Image Section */}
            <div className="rounded-lg overflow-hidden mb-6">
              <Image
                src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/contact1.png" // Place your image inside the public folder
                alt="Contact"
                width={400}
                height={250}
                className="w-full object-cover"
              />
            </div>

            {/* Personal Info */}
            <h3 className="text-2xl font-bold text-gray-800">Nevine Acotanza</h3>
            <p className="text-gray-500 mb-4">Chief Operating Officer</p>
            <p className="text-gray-600 mb-6">
              I am available for freelance work. Connect with me via and call in to my account.
            </p>
            <p className="text-gray-700 mb-2">
              Phone:{" "}
              <Link href="+8801590016088" className="hover:text-pink-600">
                +8801590016088
              </Link>
            </p>
            <p className="text-gray-700 mb-8">
              Email:{" "}
              <Link href="kamrulhasan16088@gmail.com" className="hover:text-pink-600">
                kamrulhasan16088@gmail.com
              </Link>
            </p>

            {/* Social Links */}
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Find with me
            </p>
            <div className="flex gap-4">
              <SocialButton href="#"><FaTwitter /></SocialButton>
              <SocialButton href="#"><FaFacebookF /></SocialButton>
              <SocialButton href="#"><FaLinkedinIn /></SocialButton>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            className="lg:col-span-8 bg-white p-8 rounded-2xl shadow-lg"
            initial="hidden"
            whileInView="visible"
            variants={rightVariants}
            viewport={{ once: true }}
          >
            {/* Contact Form */}
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    className="block text-sm font-semibold uppercase text-gray-600 mb-2"
                    htmlFor="name"
                  >
                    Your Name
                  </label>
                  <input
                    className="w-full p-3 bg-slate-100 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    type="text"
                    id="name"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold uppercase text-gray-600 mb-2"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    className="w-full p-3 bg-slate-100 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    type="text"
                    id="phone"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="mb-6">
                <label
                  className="block text-sm font-semibold uppercase text-gray-600 mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full p-3 bg-slate-100 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  type="email"
                  id="email"
                />
              </div>

              {/* Subject Input */}
              <div className="mb-6">
                <label
                  className="block text-sm font-semibold uppercase text-gray-600 mb-2"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="w-full p-3 bg-slate-100 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  type="text"
                  id="subject"
                />
              </div>

              {/* Message Textarea */}
              <div className="mb-8">
                <label
                  className="block text-sm font-semibold uppercase text-gray-600 mb-2"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  className="w-full p-3 bg-slate-100 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  id="message"
                  rows={6}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-pink-600 text-white font-bold uppercase rounded-md shadow-lg hover:bg-pink-700 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
