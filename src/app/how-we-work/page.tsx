"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowWeWork from "@/components/HowWeWork";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function HowWeWorkPage() {
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
                        {t("hww_page.title").split(' ').map((word, i) => (
                            word === "Work" || word === "செய்முறை" || word === "செயல்படுகிறோம்" || word === "செயல்முறை" ? <span key={i} className="text-[#4f6f19]">{word} </span> : word + " "
                        ))}
                    </motion.h1>
                    <p className="text-white/60 text-lg md:text-xl leading-relaxed">
                        {t("hww_page.desc")}
                    </p>
                </div>
            </section>

            <HowWeWork showHeader={false} />

            {/* Note Section */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">{t("hww_page.discipline.title")}</h2>
                    <p className="text-gray-500 leading-relaxed text-lg mb-10">
                        {t("hww_page.discipline.desc")}
                    </p>
                    <div className="flex justify-center gap-10">
                        <div className="text-center">
                            <p className="text-[#4f6f19] font-bold text-3xl">0%</p>
                            <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">{t("hww_page.stats.additives")}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-[#4f6f19] font-bold text-3xl">SS 304</p>
                            <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">{t("hww_page.stats.foodGrade")}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-[#4f6f19] font-bold text-3xl">100%</p>
                            <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">{t("hww_page.stats.glassBottles")}</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
