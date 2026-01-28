"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Scale, Thermometer, GlassWater, Lock, RefreshCcw, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function MAPStandardPage() {
    const { t } = useLanguage();

    const operatingRules = [
        {
            icon: Truck,
            title: t("ms.rules.r1.title"),
            description: t("ms.rules.r1.desc")
        },
        {
            icon: ShieldCheck,
            title: t("ms.rules.r2.title"),
            description: t("ms.rules.r2.desc")
        },
        {
            icon: Thermometer,
            title: t("ms.rules.r3.title"),
            description: t("ms.rules.r3.desc")
        },
        {
            icon: RefreshCcw,
            title: t("ms.rules.r4.title"),
            description: t("ms.rules.r4.desc")
        },
        {
            icon: GlassWater,
            title: t("ms.rules.r5.title"),
            description: t("ms.rules.r5.desc")
        },
        {
            icon: Lock,
            title: t("ms.rules.r6.title"),
            description: t("ms.rules.r6.desc")
        },
        {
            icon: Scale,
            title: t("ms.rules.r7.title"),
            description: t("ms.rules.r7.desc")
        }
    ];

    return (
        <main className="min-h-screen bg-white font-montserrat">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-28 md:pt-40 lg:pt-48 pb-16 md:pb-24 bg-[#1a1a1a] text-white">
                <div className="container px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#4f6f19] text-white text-[10px] font-black uppercase tracking-[0.3em] mb-10"
                        >
                            {t("ms.badge")}
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black text-white mb-10 leading-none tracking-tight"
                        >
                            {t("ms.title").split(' ').map((word, i) => (
                                word === "MAP" || word === "MAP" ? <span key={i} className="text-[#4f6f19]">{word} </span> : word + " "
                            ))}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-white/60 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto font-medium"
                        >
                            {t("ms.subtitle")}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Core Philosophy */}
            <section className="py-32 border-y border-gray-100">
                <div className="container px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-black mb-16 uppercase tracking-widest">{t("ms.philosophy.title")}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-xl leading-relaxed text-gray-600">
                                    {t("ms.philosophy.p1")}
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-xl leading-relaxed text-gray-600">
                                    {t("ms.philosophy.p2")}
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
                            {t("ms.viewTransparency")}
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
                            {t("ms.ethics.quote")}
                        </h4>
                        <p className="text-gray-400 font-bold uppercase tracking-[0.4em] text-sm">
                            {t("ms.ethics.tagline")}
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
