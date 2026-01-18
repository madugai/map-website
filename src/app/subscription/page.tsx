"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Subscription from "@/components/Subscription";
import { motion } from "framer-motion";

export default function SubscriptionPage() {
    return (
        <main className="min-h-screen bg-white font-montserrat">
            <Navbar />

            {/* Page Header */}
            <section className="pt-60 pb-20 bg-black text-white px-8">
                <div className="container max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black mb-8"
                    >
                        Our <span className="text-[#4f6f19]">Subscription</span> Model
                    </motion.h1>
                    <p className="text-white/60 text-lg md:text-xl leading-relaxed">
                        Madugai exists for households that value discipline, consistency, and integrity over convenience.
                    </p>
                </div>
            </section>

            <Subscription />

            {/* Testimonial or Note */}
            <section className="py-24 bg-white">
                <div className="container max-w-2xl mx-auto text-center">
                    <div className="w-12 h-1 bg-[#4f6f19] mx-auto mb-10" />
                    <p className="text-2xl font-bold text-gray-900 leading-relaxed italic mb-10">
                        "Real quality cannot be maintained through spot buying or irregular demand."
                    </p>
                    <button className="bg-black text-white font-bold py-6 px-12 hover:bg-zinc-800 transition-all text-sm uppercase tracking-widest">
                        Check Availability in Your Area
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
