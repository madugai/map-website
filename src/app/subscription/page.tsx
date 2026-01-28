"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Subscription from "@/components/Subscription";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function SubscriptionPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-white font-montserrat">
            <Navbar />

            {/* Page Header */}
            <section className="pt-28 md:pt-40 lg:pt-48 pb-16 md:pb-20 bg-[#fff] text-white px-6 md:px-8">
                <div className="container max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black mb-8"
                    >
                        {t("sub_page.title").split(' ').map((word, i) => (
                            word === "Subscription" || word === "சந்தா" ? <span key={i} className="text-[#4f6f19]">{word} </span> : word + " "
                        ))}
                    </motion.h1>
                    <p className="text-black/60 text-lg md:text-xl leading-relaxed">
                        {t("sub_page.desc")}
                    </p>
                </div>
            </section>

            <div className="bg-[#1a1a1a]">
                <Subscription />
            </div>

            {/* Testimonial or Note */}
            <section className="py-24 bg-white">
                <div className="container max-w-2xl mx-auto text-center">
                    <div className="w-12 h-1 bg-[#4f6f19] mx-auto mb-10" />
                    <p className="text-2xl font-bold text-gray-900 leading-relaxed italic mb-10">
                        {t("sub_page.note")}
                    </p>
                    <button className="bg-[#1a1a1a] text-white font-bold py-6 px-12 hover:bg-zinc-800 transition-all text-sm uppercase tracking-widest">
                        {t("sub_page.checkAvailability")}
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
