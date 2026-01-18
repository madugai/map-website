"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, Users, BarChart } from "lucide-react";

const benefits = [
    {
        title: "Predictable Collection",
        description: "Allows us to source only what is needed, ensuring zero wastage and maximum freshness.",
        icon: Calendar
    },
    {
        title: "Immediate Handling",
        description: "Strict timelines for chilling and bottling without any industrial delays.",
        icon: CheckCircle
    },
    {
        title: "Controlled Volumes",
        description: "We only handle what we can manage perfectly. Quality over quantity.",
        icon: BarChart
    },
    {
        title: "Consistent Quality",
        description: "The same high standards every single morning. Not seasonally, not selectively.",
        icon: Users
    }
];

export default function Subscription() {
    return (
        <section id="subscription" className="py-24 md:py-32 overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="text-[#89b441] font-black text-[10px] uppercase tracking-[0.3em] mb-6 block">Our Model</span>
                        <h2 className="text-4xl md:text-5xl font-montserrat font-black text-white leading-tight mb-8">
                            Why We Use <span className="text-[#89b441]">Subscription</span>
                        </h2>
                        <p className="text-white/70 font-montserrat text-lg leading-relaxed mb-10">
                            Madugai operates on a subscription model by design. This allows us to control sourcing, handling, and delivery without compromise. Quality cannot be maintained through spot buying or irregular demand.
                        </p>

                        <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 md:p-12">
                            <h3 className="text-2xl font-bold mb-6 text-white">Limited Households</h3>
                            <p className="text-white/60 mb-8 leading-relaxed">
                                Madugai serves a limited number of households. Not because we can't grow — but because we refuse to lower standards. When capacity is full, onboarding stops.
                            </p>
                            <button className="bg-[#4f6f19] text-white font-bold py-4 px-10 hover:bg-[#89b441] transition-all text-sm uppercase tracking-widest">
                                Join the Waitlist
                            </button>
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
                                <h4 className="text-lg font-bold font-montserrat text-white mb-4">{benefit.title}</h4>
                                <p className="text-white/60 font-montserrat text-sm leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}

                        <div className="sm:col-span-2 bg-white/5 backdrop-blur-sm p-10 border border-white/10">
                            <h4 className="text-xl font-bold font-montserrat text-white mb-6">Madugai is for households that value:</h4>
                            <ul className="space-y-4">
                                {[
                                    { title: "Discipline over convenience", text: "Subscription ensures predictable handling." },
                                    { title: "Consistency over variety", text: "We focus on a small, perfect range." },
                                    { title: "Quality over discounts", text: "Integrity cannot be discounted." }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <div className="w-5 h-5 bg-[#4f6f19] flex-shrink-0 mt-1 flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white rounded-full" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-white block">{item.title}</span>
                                            <span className="text-white/60 text-sm">{item.text}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-8 text-sm text-white/40 italic">
                                * If you are looking for occasional or ad-hoc purchases, Madugai may not be the right choice.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
