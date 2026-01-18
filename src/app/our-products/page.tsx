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
            <section className="pt-28 md:pt-40 lg:pt-48 pb-16 md:pb-20 bg-[#1a1a1a] text-white px-6 md:px-8">
                <div className="container max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black mb-8"
                    >
                        Our <span className="text-[#4f6f19]">Products</span>
                    </motion.h1>
                    <p className="text-white/60 text-lg md:text-xl leading-relaxed">
                        Madugai handles a small range of daily-consumption food products. Each product follows the same discipline of sourcing, handling, and delivery defined by the MAP Standard.
                    </p>
                </div>
            </section>

            <Products />

            <Footer />
        </main>
    );
}
