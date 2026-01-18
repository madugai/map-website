"use client";
import React from "react";
import { motion } from "framer-motion";
import { Truck, RotateCcw, ShieldCheck, Zap, ThermometerSnowflake } from "lucide-react";

const steps = [
    {
        title: "Daily Collection",
        description: "Milk is collected daily from selected local farms in SS 304 food-grade stainless steel cans.",
        icon: Truck
    },
    {
        title: "Immediate Chilling",
        description: "Chilled immediately after collection. No prolonged exposure, no waiting periods.",
        icon: ThermometerSnowflake
    },
    {
        title: "Clean Handling",
        description: "Handled under strict, clean, and controlled conditions. No industrial shortcuts.",
        icon: ShieldCheck
    },
    {
        title: "Glass Delivery",
        description: "Delivered fresh every morning exclusively in reusable glass bottles. No plastic contact.",
        icon: Zap
    },
    {
        title: "Empty Collection",
        description: "Empty bottles are collected during the next delivery for cleaning and reuse.",
        icon: RotateCcw
    }
];

export default function HowWeWork() {
    return (
        <section id="how-we-work" className="bg-white py-24 md:py-32 overflow-hidden">
            <div className="container">
                <div className="text-center mb-20">
                    <span className="text-[#4f6f19] font-black text-[10px] uppercase tracking-[0.3em] mb-6 block">Our Process</span>
                    <h2 className="text-4xl md:text-5xl font-montserrat font-black text-gray-900 leading-tight">
                        How We <span className="text-[#4f6f19]">Work</span>
                    </h2>
                    <p className="text-gray-500 font-montserrat mt-8 max-w-2xl mx-auto text-lg">
                        A defined operating discipline Governed by the MAP Standard. Every single day.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-[#fafafa] p-8 text-center group hover:bg-[#4f6f19] transition-colors duration-500"
                        >
                            <div className="w-16 h-16 bg-[#4f6f19]/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-white transition-colors duration-500">
                                <step.icon className="w-8 h-8 text-[#4f6f19]" />
                            </div>
                            <h3 className="text-xl font-bold font-montserrat text-gray-900 mb-4 group-hover:text-white transition-colors duration-500">
                                {step.title}
                            </h3>
                            <p className="text-gray-500 font-montserrat text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
