"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, ClipboardList, Activity, FlaskConical, Beaker, CheckCircle2, Download, ChevronRight, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const compositionData = [
    { label: "Fat Content", value: "4.6%", desc: "Rich and creamy texture", icon: Beaker },
    { label: "SNF (Solids-Not-Fat)", value: "8.0%", desc: "Essential proteins & minerals", icon: Activity },
    { label: "pH Level", value: "6.7", desc: "Perfectly balanced alkalinity", icon: FlaskConical },
];

const safetyTests = [
    "Urea", "Nitrate", "Starch", "Sugar",
    "Glucose", "Salt", "Neutralizer", "Hydrogen Peroxide"
];

export default function TransparencyPage() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).replace(/\//g, '-');

    return (
        <main className="min-h-screen bg-white font-montserrat">
            <Navbar />

            {/* Page Header */}
            <section className="pt-28 md:pt-40 lg:pt-48 pb-16 md:pb-20 bg-zinc-950 text-white px-6 md:px-8">
                <div className="container max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#4f6f19]/20 text-[#6db33f] text-xs font-bold uppercase tracking-widest mb-8"
                    >
                        <ShieldCheck className="w-4 h-4" />
                        Verification Over Trust
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black mb-8"
                    >
                        Absolute <span className="text-[#4f6f19]">Transparency</span>
                    </motion.h1>
                    <p className="text-white/60 text-lg md:text-xl leading-relaxed">
                        We provide real-time metric and independent lab validation
                        for every batch we handle. Transparent operations are at the heart of the MAP Standard.
                    </p>
                </div>
            </section>

            {/* Dashboard Section */}
            <section className="py-24 bg-white">
                <div className="container px-8">
                    <div className="max-w-6xl mx-auto space-y-20">
                        {/* Milk Meter UI */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-zinc-50 border border-zinc-100 p-8 md:p-16 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-96 h-96 bg-[#4f6f19]/5 rounded-full blur-3xl -mr-48 -mt-48" />

                            <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
                                {/* The Gauge */}
                                <div className="text-center">
                                    <div className="relative w-56 h-56 mx-auto flex items-center justify-center">
                                        <div className="absolute inset-0 rounded-full border-[12px] border-zinc-100" />
                                        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90 relative z-10">
                                            <circle
                                                cx="50"
                                                cy="50"
                                                r="44"
                                                fill="none"
                                                stroke="#4f6f19"
                                                strokeWidth="12"
                                                strokeDasharray="276"
                                                strokeDashoffset="60"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <span className="text-5xl font-black text-zinc-900">PURE</span>
                                            <span className="text-[10px] text-[#4f6f19] font-black tracking-[0.2em] uppercase mt-1">Verified</span>
                                        </div>
                                    </div>
                                    <div className="mt-10">
                                        <div className="text-3xl font-black text-zinc-900">{formattedDate}</div>
                                        <div className="text-xs text-zinc-400 font-bold uppercase tracking-widest mt-2">Today's Batch Status</div>
                                    </div>
                                </div>

                                {/* Adulteration Tests Grid */}
                                <div className="flex-1 w-full">
                                    <div className="flex items-center justify-between mb-10 pb-6 border-b border-zinc-100">
                                        <h3 className="text-2xl font-black text-zinc-900">Adulteration Safety Suite</h3>
                                        <div className="flex items-center gap-2 text-[#4f6f19]">
                                            <CheckCircle2 className="w-5 h-5" />
                                            <span className="text-xs font-bold uppercase tracking-wider">All Tests Passed</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                        {safetyTests.map((test) => (
                                            <div key={test} className="bg-white p-5 text-center border border-zinc-100 hover:border-[#4f6f19]/20 transition-all duration-300 group/test">
                                                <div className="text-[10px] text-zinc-400 mb-2 font-bold uppercase tracking-widest">{test}</div>
                                                <div className="text-[11px] font-black text-[#4f6f19] flex items-center justify-center gap-1.5">
                                                    <div className="w-1.5 h-1.5 bg-[#4f6f19] rounded-full animate-pulse" />
                                                    NEGATIVE
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Composition Metrics */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {compositionData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white border border-zinc-100 p-12 hover:border-[#4f6f19]/20 transition-all group"
                                >
                                    <div className="w-14 h-14 bg-[#4f6f19]/5 flex items-center justify-center mb-10 group-hover:bg-[#4f6f19]/10 transition-colors">
                                        <item.icon className="w-7 h-7 text-[#4f6f19] group-hover:rotate-12 transition-transform" />
                                    </div>
                                    <div className="text-xs text-zinc-400 font-bold uppercase tracking-widest mb-3">{item.label}</div>
                                    <div className="text-5xl font-black text-zinc-900 mb-5">{item.value}</div>
                                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Lab Reports Section */}
            <section className="py-32 bg-zinc-50">
                <div className="container px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-black text-zinc-900 mb-6">Verification Reports</h2>
                        <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
                            We invite independent scrutiny. Every batch is tested both internally
                            and at third-party certified laboratories.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Internal Lab */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="mb-10 flex items-center justify-between">
                                <div>
                                    <span className="text-[10px] font-black text-[#4f6f19] uppercase tracking-[0.2em] bg-[#4f6f19]/10 px-4 py-1.5 rounded-full">Self Analysis</span>
                                    <h3 className="text-2xl font-black text-zinc-900 mt-5 uppercase">UB Internal Lab</h3>
                                </div>
                                <Shield className="w-8 h-8 text-zinc-200" />
                            </div>
                            <div className="relative aspect-[3/4] bg-white border border-zinc-100 overflow-hidden mb-12 group-hover:border-[#4f6f19]/30 transition-colors">
                                <Image
                                    src="/images/internal.jpg"
                                    alt="Internal Lab Report"
                                    fill
                                    className="object-contain p-8 group-hover:scale-[1.02] transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <Link
                                href="/images/internal.jpg"
                                target="_blank"
                                className="inline-flex items-center gap-3 text-[#4f6f19] font-black text-sm uppercase tracking-widest hover:gap-6 transition-all"
                            >
                                Open Detailed Analysis
                                <ChevronRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        {/* CTL Lab */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group"
                        >
                            <div className="mb-10 flex items-center justify-between">
                                <div>
                                    <span className="text-[10px] font-black text-[#4f6f19] uppercase tracking-[0.2em] bg-[#4f6f19]/10 px-4 py-1.5 rounded-full">External Audit</span>
                                    <h3 className="text-2xl font-black text-zinc-900 mt-5 uppercase">CTL Independent Lab</h3>
                                </div>
                                <Activity className="w-8 h-8 text-zinc-200" />
                            </div>
                            <div className="relative aspect-[3/4] bg-white border border-zinc-100 overflow-hidden mb-12 group-hover:border-[#4f6f19]/30 transition-colors">
                                <Image
                                    src="/images/report.jpg"
                                    alt="Independent Lab Report"
                                    fill
                                    className="object-contain p-8 group-hover:scale-[1.02] transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <Link
                                href="/images/report.jpg"
                                target="_blank"
                                className="inline-flex items-center gap-3 text-[#4f6f19] font-black text-sm uppercase tracking-widest hover:gap-6 transition-all"
                            >
                                View NABL Accreditation
                                <ChevronRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>

                    <div className="mt-32 text-center">
                        <Link
                            href="/reports/full-analysis.pdf"
                            className="inline-flex items-center gap-6 px-14 py-8 bg-zinc-900 text-white font-black text-sm uppercase tracking-[0.2em] hover:bg-black transition-all group active:scale-95"
                        >
                            <Download className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
                            Download Analysis Package
                        </Link>
                    </div>
                </div>
            </section>

            {/* FSSAI Note */}
            <section className="py-24 bg-white border-t border-zinc-100">
                <div className="container px-8 max-w-4xl mx-auto text-center">
                    <div className="w-20 h-20 bg-[#4f6f19]/10 flex items-center justify-center mx-auto mb-10">
                        <ShieldCheck className="w-10 h-10 text-[#4f6f19]" />
                    </div>
                    <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">FSSAI Licensed Facility</h2>
                    <p className="text-zinc-500 leading-relaxed text-lg">
                        Our storage and handling facility is fully licensed and follows strict
                        operating disciplines defined by the Food Safety and Standards Authority of India.
                        We maintain clean-handling and cold-chain integrity without exception.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
