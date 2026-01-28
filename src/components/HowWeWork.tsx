"use client";
import React, { useLayoutEffect, useRef } from "react";
import { Truck, RotateCcw, ShieldCheck, Zap, ThermometerSnowflake } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";

const steps = [
    {
        title: "hww.s1.title",
        description: "hww.s1.desc",
        icon: Truck
    },
    {
        title: "hww.s2.title",
        description: "hww.s2.desc",
        icon: ThermometerSnowflake
    },
    {
        title: "hww.s3.title",
        description: "hww.s3.desc",
        icon: ShieldCheck
    },
    {
        title: "hww.s4.title",
        description: "hww.s4.desc",
        icon: Zap
    },
    {
        title: "hww.s5.title",
        description: "hww.s5.desc",
        icon: RotateCcw
    }
];

export default function HowWeWork({ showHeader = true }: { showHeader?: boolean }) {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Header animations
            gsap.from(".hww-badge", {
                opacity: 0,
                y: -30,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });

            gsap.from(".hww-title", {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });

            gsap.from(".hww-subtitle", {
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });

            // Step cards stagger animation with scale and rotation
            gsap.from(".step-card", {
                opacity: 0,
                y: 80,
                scale: 0.8,
                rotationY: 15,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".steps-container",
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });

            // Icon animations with bounce
            gsap.from(".step-icon", {
                scale: 0,
                rotation: -90,
                duration: 0.6,
                stagger: 0.1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: ".steps-container",
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="how-we-work" className="py-24 md:py-32 overflow-hidden">
            <div className="container">
                {showHeader && (
                    <div className="text-center mb-20">
                        <span className="hww-badge text-[#4f6f19] font-black text-[10px] uppercase tracking-[0.3em] mb-6 block">{t("hww.badge")}</span>
                        <h2 className="hww-title text-4xl md:text-5xl font-montserrat font-black text-gray-900 leading-tight">
                            {t("hww.title1")} <span className="text-[#4f6f19]">{t("hww.title2")}</span>
                        </h2>
                        <p className="hww-subtitle text-gray-500 font-montserrat mt-8 max-w-2xl mx-auto text-lg">
                            {t("hww.subtitle")}
                        </p>
                    </div>
                )}

                <div className="steps-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="step-card bg-[#fafafa] p-8 text-center group hover:bg-[#4f6f19] transition-colors duration-500 relative"
                        >
                            <div className="step-icon w-16 h-16 bg-[#4f6f19]/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-white transition-colors duration-500">
                                <step.icon className="w-8 h-8 text-[#4f6f19]" />
                            </div>
                            <h3 className="text-xl font-bold font-montserrat text-gray-900 mb-4 group-hover:text-white transition-colors duration-500">
                                {t(step.title)}
                            </h3>
                            <p className="text-gray-500 font-montserrat text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                                {t(step.description)}
                            </p>
                            {/* Step number */}
                            <div className="absolute top-4 right-4 w-8 h-8 bg-[#4f6f19]/5 flex items-center justify-center text-[#4f6f19] font-bold text-sm group-hover:bg-white/20 group-hover:text-white transition-colors duration-500">
                                {idx + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
