"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, Users, BarChart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const benefits = [
    {
        title: "sub.b1.title",
        description: "sub.b1.desc",
        icon: Calendar
    },
    {
        title: "sub.b2.title",
        description: "sub.b2.desc",
        icon: CheckCircle
    },
    {
        title: "sub.b3.title",
        description: "sub.b3.desc",
        icon: BarChart
    },
    {
        title: "sub.b4.title",
        description: "sub.b4.desc",
        icon: Users
    }
];

export default function Subscription() {
    const { t } = useLanguage();

    return (
        <section id="subscription" className="py-24 md:py-32 overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="text-[#89b441] font-black text-[10px] uppercase tracking-[0.3em] mb-6 block">{t("sub.badge")}</span>
                        <h2 className="text-4xl md:text-5xl font-montserrat font-black text-white leading-tight mb-8">
                            {t("sub.title1")}<span className="text-[#89b441]">{t("sub.title2")}</span>
                        </h2>
                        <p className="text-white/70 font-montserrat text-lg leading-relaxed mb-10">
                            {t("sub.desc")}
                        </p>

                        <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 md:p-12">
                            <h3 className="text-2xl font-bold mb-6 text-white">{t("sub.limited.title")}</h3>
                            <p className="text-white/60 mb-8 leading-relaxed">
                                {t("sub.limited.desc")}
                            </p>
                            {/* <button className="bg-[#4f6f19] text-white font-bold py-4 px-10 hover:bg-[#89b441] transition-all text-sm uppercase tracking-widest">
                                {t("sub.waitlist")}
                            </button> */}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {benefits.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm p-10 border border-white/10"
                            >
                                <div className="w-12 h-12 bg-[#4f6f19]/30 flex items-center justify-center mb-6">
                                    <benefit.icon className="w-6 h-6 text-[#89b441]" />
                                </div>
                                <h4 className="text-lg font-bold font-montserrat text-white mb-4">{t(benefit.title)}</h4>
                                <p className="text-white/60 font-montserrat text-sm leading-relaxed">{t(benefit.description)}</p>
                            </motion.div>
                        ))}

                        <div className="sm:col-span-2 bg-white/5 backdrop-blur-sm p-10 border border-white/10">
                            <h4 className="text-xl font-bold font-montserrat text-white mb-6">{t("sub.valueTitle")}</h4>
                            <ul className="space-y-4">
                                {[
                                    { title: "sub.v1.title", text: "sub.v1.text" },
                                    { title: "sub.v2.title", text: "sub.v2.text" },
                                    { title: "sub.v3.title", text: "sub.v3.text" }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <div className="w-5 h-5 bg-[#4f6f19] flex-shrink-0 mt-1 flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white rounded-full" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-white block">{t(item.title)}</span>
                                            <span className="text-white/60 text-sm">{t(item.text)}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-8 text-sm text-white/40 italic">
                                {t("sub.note")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
