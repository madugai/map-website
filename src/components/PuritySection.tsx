"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, Heart, ShieldCheck, Truck, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const features = [
    {
        title: "purity.f1.title",
        description: "purity.f1.desc",
        icon: Leaf
    },
    {
        title: "purity.f2.title",
        description: "purity.f2.desc",
        icon: ShieldCheck
    },
    {
        title: "purity.f3.title",
        description: "purity.f3.desc",
        icon: Truck
    },
    {
        title: "purity.f4.title",
        description: "purity.f4.desc",
        icon: Heart
    },
    {
        title: "purity.f5.title",
        description: "purity.f5.desc",
        icon: ShieldCheck
    }
];

const badges = [
    { label: "purity.badge1.label", sublabel: "purity.badge1.sub" },
    { label: "purity.badge2.label", sublabel: "purity.badge2.sub" },
    { label: "purity.badge3.label", sublabel: "purity.badge3.sub" }
];

export default function PuritySection() {
    const { t } = useLanguage();

    return (
        <section className="py-12 md:py-20 overflow-hidden">
            <div className="container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-[#4f6f19] font-medium text-sm uppercase tracking-widest mb-4">
                        {t("purity.badge")}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
                        {t("purity.title")}
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto font-montserrat mb-10">
                        {t("purity.subtitle")}
                    </p>
                    <Link
                        href="/map-standard"
                        className="inline-flex items-center justify-center gap-2 bg-[#4f6f19] text-white font-bold py-3 px-8 hover:bg-[#324a10] transition-all text-base"
                    >
                        {t("purity.cta")}
                    </Link>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#4f6f19]/30 to-transparent -translate-x-1/2 hidden md:block" />

                    {/* Timeline Items */}
                    <div className="space-y-12 md:space-y-16">
                        {features.map((feature, index) => {
                            const isEven = index % 2 === 0;
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="relative grid grid-cols-1 md:grid-cols-2"
                                >
                                    {/* Center Node - Absolutely centered on the line */}
                                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                        <div className="w-12 h-12 bg-white border-2 border-[#4f6f19]/20 flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-[#4f6f19]" />
                                        </div>
                                    </div>

                                    {/* Left Side Content */}
                                    <div className={`${isEven ? 'md:block' : 'md:hidden'} order-2 md:order-1`}>
                                        <div className={`md:pr-20 md:text-right ${!isEven ? 'hidden' : 'block'}`}>
                                            <MobileHeader title={t(feature.title)} icon={Icon} />
                                            <DesktopHeader title={t(feature.title)} />
                                            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                                                {t(feature.description)}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right Side Content */}
                                    <div className={`${!isEven ? 'md:block' : 'md:hidden md:invisible'} md:col-start-2 order-2 md:order-2`}>
                                        <div className={`md:pl-20 md:text-left ${isEven ? 'hidden' : 'block'}`}>
                                            <MobileHeader title={t(feature.title)} icon={Icon} />
                                            <DesktopHeader title={t(feature.title)} />
                                            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                                                {t(feature.description)}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/transparency"
                        className="text-[#4f6f19] font-bold text-lg hover:underline inline-flex items-center gap-2"
                    >
                        {t("purity.viewTransparency")}
                        <ChevronRight size={20} />
                    </Link>
                </motion.div>

                {/* Bottom Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-8 md:gap-16 mt-20 pt-12 border-t border-gray-200"
                >
                    {badges.map((badge, index) => (
                        <div key={index} className="text-center">
                            <p className="text-[#4f6f19] font-semibold">{t(badge.label)}</p>
                            <p className="text-gray-400 text-sm">{t(badge.sublabel)}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function MobileHeader({ title, icon: Icon }: { title: string, icon: any }) {
    return (
        <div className="flex md:hidden items-center gap-4 mb-3">
            <div className="w-10 h-10 bg-white border border-[#4f6f19]/20 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-[#4f6f19]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 font-montserrat">
                {title}
            </h3>
        </div>
    );
}

function DesktopHeader({ title }: { title: string }) {
    return (
        <h3 className="text-xl font-bold text-gray-900 mb-3 hidden md:block font-montserrat">
            {title}
        </h3>
    );
}
