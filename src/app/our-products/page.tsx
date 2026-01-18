"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import { motion } from "framer-motion";

export default function OurProductsPage() {
    return (
        <main className="min-h-screen bg-white font-montserrat">
            <Navbar />

            {/* Page Header */}
            <section className="pt-[200px] pb-20 bg-black text-white px-8">
                <div className="container max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black mb-8"
                    >
                        Our <span className="text-[#4f6f19]">Selection</span>
                    </motion.h1>
                    <p className="text-white/60 text-lg md:text-xl leading-relaxed">
                        A small range of daily-consumption food products.
                        The range may evolve. The standards do not.
                    </p>
                </div>
            </section>

            <Products />

            {/* Note about standards */}
            <section className="py-24 bg-[#fafafa]">
                <div className="container max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-10 uppercase tracking-widest">The Core Principle</h2>
                    <p className="text-xl text-gray-500 leading-relaxed mb-12">
                        Every product handled by Madugai follows the same core principles: careful sourcing, disciplined handling, and controlled delivery. If it isn't pure enough for our families, it isn't pure enough for yours.
                    </p>
                    <div className="w-16 h-1 bg-[#4f6f19] mx-auto" />
                </div>
            </section>

            <Footer />
        </main>
    );
}
