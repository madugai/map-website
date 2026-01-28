"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQPage() {
    const { t } = useLanguage();

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
                        {t("faq_page.title").split(' ').map((word, i) => (
                            word === "Answers" || word === "பதில்கள்" ? <span key={i} className="text-[#4f6f19]">{word} </span> : word + " "
                        ))}
                    </motion.h1>
                    <p className="text-white/60 text-lg md:text-xl leading-relaxed">
                        {t("faq_page.desc")}
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
