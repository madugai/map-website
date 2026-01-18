"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Users, Milk, Store, MapPin } from "lucide-react";

const stats = [
    {
        value: 10000,
        suffix: "+",
        label: "Happy Customers",
        icon: Users,
        image: "/images/others/home/group.png"
    },
    {
        value: 7000,
        suffix: "+",
        label: "Liters Daily",
        icon: Milk,
        image: "/images/others/home/trolley.png"
    },
    {
        value: 45,
        suffix: "+",
        label: "Trusted Dealers",
        icon: Store,
        image: "/images/others/home/man.png"
    },
    {
        value: 190,
        suffix: "+",
        label: "Areas Covered",
        icon: MapPin,
        image: "/images/others/home/location.png"
    },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const duration = 2000;
            const steps = 60;
            const increment = value / steps;
            let current = 0;
            const timer = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);
            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <span ref={ref} className="stats-number">
            {count.toLocaleString()}{suffix}
        </span>
    );
}

export default function Stats() {
    return (
        <section className="relative bg-gradient-to-br from-[#1a2e0d] via-[#2a4a15] to-[#1a2e0d] py-16 md:py-24 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#77a533]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#a4d45d]/5 rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="inline-block bg-white/10 text-[#a4d45d] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4 backdrop-blur-sm">
                        Our Impact
                    </span>
                    <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white">
                        Growing Together with Chennai
                    </h2>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center border border-white/10 hover:bg-white/10 hover:border-[#77a533]/30 transition-all duration-300">
                                {/* Icon */}
                                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 bg-gradient-to-br from-[#77a533]/30 to-[#a4d45d]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Image
                                        src={stat.image}
                                        alt={stat.label}
                                        width={40}
                                        height={40}
                                        className="opacity-90"
                                    />
                                </div>

                                {/* Animated Number */}
                                <div className="mb-2">
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                </div>

                                {/* Label */}
                                <div className="text-white/70 font-medium font-montserrat text-sm md:text-base">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
