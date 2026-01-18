"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowWeWork from "@/components/HowWeWork";
import { motion } from "framer-motion";

export default function HowWeWorkPage() {
    return (
        <main className="min-h-screen bg-white font-montserrat">
            <Navbar />

            {/* Page Header */}
            <section className="pt-28 md:pt-40 lg:pt-48 pb-16 md:pb-20 bg-[#fafafa] px-6 md:px-8">
                <div className="container max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black mb-8"
                    >
                        How We <span className="text-[#4f6f19]">Work</span>
                    </motion.h1>
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
                        A defined operating discipline Governed by the MAP Standard.
                        Every litre of milk follows this routine daily.
                    </p>
                </div>
            </section>

            <HowWeWork showHeader={false} />

            {/* Note Section */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Discipline & Restraint</h2>
                    <p className="text-gray-500 leading-relaxed text-lg mb-10">
                        At Madugai, we don't rush. We don't dilute. We don't industrialize.
                        Our process is built on daily enforcement of hygiene and handling standards
                        that ensure you receive milk in its most natural state.
                    </p>
                    <div className="flex justify-center gap-10">
                        <div className="text-center">
                            <p className="text-[#4f6f19] font-bold text-3xl">0%</p>
                            <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Additives</p>
                        </div>
                        <div className="text-center">
                            <p className="text-[#4f6f19] font-bold text-3xl">SS 304</p>
                            <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Food Grade</p>
                        </div>
                        <div className="text-center">
                            <p className="text-[#4f6f19] font-bold text-3xl">100%</p>
                            <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Glass Bottles</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
