"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    imageSrc: "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/final-home-2nd-1.png",
    company: "TECHNET SOLUTIONS",
    name: "Alice Johnson",
    role: "IT Manager",
    projectTitle: "Corporate Network Setup",
    projectMeta: "via Direct Contract - Jan 5, 2021 - Mar 15, 2021",
    rating: 5,
    quote:
      "Alex designed our corporate network from scratch, ensuring high availability and secure connections. Their attention to detail and proactive support was outstanding.",
  },
  {
    imageSrc: "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/final-home-1st.png",
    company: "INNOVATIVE CLOUD INC",
    name: "Mark Thompson",
    role: "Cloud Architect",
    projectTitle: "Cloud Network Integration",
    projectMeta: "via Freelancer - Jun 10, 2021 - Oct 20, 2021",
    rating: 5,
    quote:
      "Alex seamlessly integrated our on-premises network with cloud services, improving flexibility and security. Communication and professionalism were top-notch.",
  },
  {
    imageSrc: "https://rainbowit.net/themes/inbio/wp-content/uploads/2022/04/final-home-3rd.png",
    company: "SECURE DATA CORP",
    name: "Samantha Lee",
    role: "Security Officer",
    projectTitle: "Network Security Audit",
    projectMeta: "via Upwork - Feb 1, 2022 - May 30, 2022",
    rating: 4,
    quote:
      "The security audit performed by Alex identified critical vulnerabilities and provided actionable recommendations. Very knowledgeable and thorough work.",
  },
];

const Rating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 transition-colors duration-200 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ))}
  </div>
);

export function TestimonialSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

useEffect(() => {
  if (!emblaApi) return;
  const onSelect = () => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };
  emblaApi.on("select", onSelect);
  return () => {
    emblaApi.off("select", onSelect);
  };
}, [emblaApi]);


  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-slate-100 py-24 md:py-32">
      <div className="container mx-auto px-4 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600 mb-3">
            What Clients Say
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Testimonials
          </h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Carousel */}
        <div className="mt-20 relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-[0_0_100%]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
                    {/* Left Card */}
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
                    >
                      <div className="relative w-48 h-48 mx-auto mb-6 rounded-xl overflow-hidden shadow-md">
                        <Image
                          src={testimonial.imageSrc}
                          alt={testimonial.name}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <p className="text-pink-600 text-xs font-bold uppercase tracking-widest">
                        {testimonial.company}
                      </p>
                      <h3 className="text-2xl font-semibold mt-2 text-gray-800">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </motion.div>

                    {/* Right Card */}
                    <div className="lg:col-span-3 bg-white p-10 rounded-2xl shadow-lg border border-gray-100 text-left relative overflow-hidden">
                      <Quote className="absolute top-8 left-8 w-20 h-20 text-gray-200/60" />
                      <div className="relative z-10">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-2xl font-bold text-gray-800 mb-1">
                              {testimonial.projectTitle}
                            </h4>
                            <p className="text-xs text-gray-500">
                              {testimonial.projectMeta}
                            </p>
                          </div>
                          <div className="bg-white border p-2 rounded-md shadow-sm">
                            <Rating rating={testimonial.rating} />
                          </div>
                        </div>
                        <hr className="my-6 border-gray-200" />
                        <p className="text-gray-600 leading-relaxed text-lg italic">
                          “{testimonial.quote}”
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons + Dots */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-14">
            <div className="flex gap-4">
              <button
                onClick={scrollPrev}
                className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-pink-50 hover:shadow-lg transition-all"
              >
                <ArrowLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={scrollNext}
                className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-pink-50 hover:shadow-lg transition-all"
              >
                <ArrowRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "w-6 bg-pink-500"
                      : "bg-gray-300 hover:bg-pink-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
