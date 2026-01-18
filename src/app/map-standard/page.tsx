"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Scale, Thermometer, GlassWater, Lock, RefreshCcw, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const operatingRules = [
    {
        icon: Truck,
        title: "Selected Local Farms",
        description: "Milk is collected only from selected local farms that meet defined handling and hygiene expectations. Volume is secondary. Consistency is mandatory."
    },
    {
        icon: ShieldCheck,
        title: "SS 304 Food-Grade Cans",
        description: "Milk is collected and transported exclusively in SS 304 food-grade stainless steel milk cans. This prevents contamination and avoids chemical interaction."
    },
    {
        icon: Thermometer,
        title: "Immediate Chilling",
        description: "Milk is chilled immediately after collection. There is no prolonged exposure, no waiting period, and no unnecessary movement to preserve natural quality."
    },
    {
        icon: RefreshCcw,
        title: "No Industrial Shortcuts",
        description: "Milk is not processed for extended shelf life or mass circulation. The MAP Standard does not allow shortcuts designed for convenience."
    },
    {
        icon: GlassWater,
        title: "Glass Bottle Delivery",
        description: "Milk is delivered only in reusable glass bottles. Plastic contact is avoided by design. Glass preserves integrity and enables controlled circulation."
    },
    {
        icon: Lock,
        title: "Controlled Supply",
        description: "Supply is intentionally limited. Customer onboarding stops when capacity is reached to ensure consistency, accountability, and quality control."
    },
    {
        icon: Scale,
        title: "Daily Enforcement",
        description: "The MAP Standard is enforced daily. Not selectively, not seasonally, not when convenient. These are not features; these are operating rules."
    }
];

export default function MAPStandardPage() {
    return (
        <main className="min-h-screen bg-white font-montserrat">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-28 md:pt-40 lg:pt-48 pb-16 md:pb-24 bg-[#fafafa]">
                <div className="container px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-6 py-2.5 bg-black text-white text-[10px] font-black uppercase tracking-[0.3em] mb-10"
                        >
                            Internal Operating Discipline
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black text-gray-900 mb-10 leading-none tracking-tight"
                        >
                            The <span className="text-[#4f6f19]">MAP</span> Standard
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-500 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto font-medium"
                        >
                            The MAP Standard defines how milk and food products are handled at Madugai.
                            It is an internal operating discipline — <span className="text-gray-900 border-b-2 border-[#4f6f19]/30 italic">not a marketing claim.</span>
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Core Philosophy */}
            <section className="py-32 border-y border-gray-100">
                <div className="container px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-black mb-16 uppercase tracking-widest">The Core Principle</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-xl leading-relaxed text-gray-600">
                                    Milk quality is not determined at the shelf. It is determined by how strictly it is handled before it reaches the customer.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-xl leading-relaxed text-gray-600">
                                    The MAP Standard exists to remove shortcuts, excess handling, and compromises that dilute integrity. Every decision follows this standard without exception.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Operating Rules Grid */}
            <section className="py-32 bg-white">
                <div className="container px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {operatingRules.map((rule, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`p-10 border border-gray-100 hover:border-[#4f6f19]/20 transition-all group ${idx === 6 ? 'lg:col-span-3 bg-zinc-950 text-white border-none' : 'bg-white'
                                    }`}
                            >
                                <div className={`w-14 h-14 ${idx === 6 ? 'bg-white/10' : 'bg-[#4f6f19]/5'} flex items-center justify-center mb-10`}>
                                    <rule.icon className={`w-7 h-7 ${idx === 6 ? 'text-[#4f6f19]' : 'text-[#4f6f19]'}`} />
                                </div>
                                <h3 className={`text-xl font-bold mb-6 ${idx === 6 ? 'text-white' : 'text-gray-900'}`}>{rule.title}</h3>
                                <p className={`leading-relaxed ${idx === 6 ? 'text-white/60 text-lg max-w-2xl' : 'text-gray-500 text-sm'}`}>
                                    {rule.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <Link
                            href="/transparency"
                            className="inline-flex items-center gap-4 text-black font-black text-sm uppercase tracking-[0.3em] hover:text-[#4f6f19] transition-colors group"
                        >
                            View Transparency
                            <div className="w-10 h-10 border border-black flex items-center justify-center group-hover:border-[#4f6f19] group-hover:bg-[#4f6f19] group-hover:text-white transition-all duration-300">
                                <Scale className="w-5 h-5" />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final Ethics Note */}
            <section className="py-40 bg-[#fafafa]">
                <div className="container px-8 text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-16 h-1 bg-[#4f6f19] mx-auto mb-16" />
                        <h4 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 leading-tight">
                            "If it isn't pure enough for our families, it isn't pure enough for yours."
                        </h4>
                        <p className="text-gray-400 font-bold uppercase tracking-[0.4em] text-sm">
                            Madugai. Milk, made right.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
