"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";

export default function FAQPage() {
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
                        Questions & <span className="text-[#4f6f19]">Answers</span>
                    </motion.h1>
                    <p className="text-white/60 text-lg md:text-xl leading-relaxed">
                        Clarity on how we maintain the MAP Standard and deliver integrity to your doorstep.
                    </p>
                </div>
            </section>

            <div className="py-20">
                <FAQ />
            </div>

            <Footer />
        </main>
    );
}
