"use client";
import React, { useLayoutEffect, useRef } from "react";
import { Truck, RotateCcw, ShieldCheck, Zap, ThermometerSnowflake } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

            // Connecting line animation (for visual flow)
            gsap.from(".step-connector", {
                scaleX: 0,
                duration: 1.5,
                ease: "power2.inOut",
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
        <section ref={sectionRef} id="how-we-work" className="bg-white py-24 md:py-32 overflow-hidden">
            <div className="container">
                <div className="text-center mb-20">
                    <span className="hww-badge text-[#4f6f19] font-black text-[10px] uppercase tracking-[0.3em] mb-6 block">Our Process</span>
                    <h2 className="hww-title text-4xl md:text-5xl font-montserrat font-black text-gray-900 leading-tight">
                        How We <span className="text-[#4f6f19]">Work</span>
                    </h2>
                    <p className="hww-subtitle text-gray-500 font-montserrat mt-8 max-w-2xl mx-auto text-lg">
                        A defined operating discipline Governed by the MAP Standard. Every single day.
                    </p>
                </div>

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
                                {step.title}
                            </h3>
                            <p className="text-gray-500 font-montserrat text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                                {step.description}
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
