"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";

export default function BlogPreview() {
    return (
        <section className="bg-gradient-to-b from-[#f8faf5] to-white py-12 md:py-16">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Blog Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2"
                    >
                        <div className="relative group overflow-hidden rounded-xl">
                            <Image
                                src="/images/others/blog.png"
                                alt="Madugai Delivery Team"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Category Badge */}
                            <div className="absolute top-4 left-4 bg-[#4f6f19] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2">
                                Behind the Scenes
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2"
                    >
                        {/* Section Badge */}
                        <span className="inline-block bg-[#4f6f19]/10 text-[#4f6f19] font-bold text-xs uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6">
                            From Our Blog
                        </span>

                        {/* Title */}
                        <h2 className="text-xl md:text-2xl lg:text-4xl font-montserrat font-bold text-gray-900 mb-6 leading-tight">
                            The Delivery Team Behind Madugai&apos;s Daily Glass Bottles
                        </h2>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4 text-[#4f6f19]" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Team Madugai</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-[#4f6f19]" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">02 October 2025</span>
                            </div>
                        </div>

                        {/* Excerpt */}
                        <p className="text-gray-500 font-montserrat text-base leading-relaxed mb-10">
                            Discover the dedicated team that ensures fresh milk reaches your doorstep every morning.
                            From our farmers to our delivery partners, every person plays a vital role in our mission.
                        </p>

                        {/* CTA Button */}
                        <Link
                            href="/blog/the-delivery-team-behind-madugais-daily-milk-bottles"
                            className="inline-flex items-center gap-3 text-[#4f6f19] font-bold font-montserrat text-lg hover:gap-5 transition-all group"
                        >
                            Read Full Article
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
