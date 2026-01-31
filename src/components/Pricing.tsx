"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";

const features = [
    "pricing.feature1",
    "pricing.feature2",
    "pricing.feature3",
    "pricing.feature4"
];

export default function Pricing() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from(".pricing-left", {
                opacity: 0,
                x: -80,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });

            gsap.fromTo(".pricing-card",
                {
                    opacity: 0,
                    y: 60,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 md:py-28 overflow-hidden">
            <div className="container px-6 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {/* Left - Image */}
                    <div className="pricing-left flex items-center justify-center">
                        <div className="relative w-full h-full min-h-[400px]">
                            <Image
                                src="/images/pricing.png"
                                alt="Madugai Pure Milk"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Pricing Cards */}
                    {/* Card 1 - Half Litre */}
                    <div className="pricing-card group bg-white overflow-hidden transition-all duration-500  border border-gray-200 flex flex-col">
                        {/* Gradient Accent Bar */}
                        <div className="h-1.5 bg-gradient-to-r from-[#4f6f19] via-[#6b8f2a] to-[#4f6f19]" />

                        {/* Header */}
                        <div className="p-8 md:p-10 pb-6 md:pb-8">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4f6f19]/10 mb-4">
                                <div className="w-2 h-2 rounded-full bg-[#4f6f19] animate-pulse" />
                                <span className="text-[#4f6f19] text-xs font-semibold uppercase tracking-wider font-montserrat">Popular</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold font-montserrat text-gray-900 mb-2">
                                {t("pricing.card1.title")}
                            </h3>
                            <p className="text-gray-500 text-sm font-montserrat">
                                {t("pricing.card1.subtitle")}
                            </p>
                        </div>

                        {/* Price */}
                        <div className="px-8 md:px-10 py-6 bg-gradient-to-br from-gray-50 to-white">
                            <div className="flex items-baseline gap-1">
                                <span className="text-[#4f6f19] text-2xl font-semibold">₹</span>
                                <span className="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-br from-[#4f6f19] to-[#6b8f2a] bg-clip-text text-transparent font-montserrat leading-none tracking-tight">
                                    {t("pricing.card1.price")}
                                </span>
                            </div>
                            <p className="text-gray-500 text-sm font-montserrat mt-3 font-medium">
                                {t("pricing.card1.monthly")}
                            </p>
                        </div>

                        {/* Features */}
                        <div className="p-8 md:p-10 pt-6 md:pt-8 flex-1 flex flex-col">
                            <ul className="space-y-4 mb-8 flex-1">
                                {features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-4 group/item">
                                        <div className="w-6 h-6 rounded-full bg-[#4f6f19]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-[#4f6f19]/20 transition-colors">
                                            <Check className="w-3.5 h-3.5 text-[#4f6f19]" strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-600 font-montserrat text-sm md:text-base leading-relaxed">
                                            {t(feature)}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/subscription"
                                className="block w-full bg-gradient-to-r from-[#4f6f19] to-[#5d7f22] text-white font-bold py-4 text-center hover:from-[#3d5614] hover:to-[#4f6f19] transition-all duration-300 font-montserrat text-sm uppercase tracking-widest"
                            >
                                {t("pricing.cta")}
                            </Link>
                        </div>
                    </div>

                    {/* Card 2 - Full Litre */}
                    <div className="pricing-card group bg-white overflow-hidden transition-all duration-500  border border-gray-200 flex flex-col">
                        {/* Gradient Accent Bar */}
                        <div className="h-1.5 bg-gradient-to-r from-[#6b8f2a] via-[#4f6f19] to-[#6b8f2a]" />

                        {/* Header */}
                        <div className="p-8 md:p-10 pb-6 md:pb-8">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#4f6f19] to-[#6b8f2a] mb-4">
                                <span className="text-white text-xs font-semibold uppercase tracking-wider font-montserrat">Best Value</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold font-montserrat text-gray-900 mb-2">
                                {t("pricing.card2.title")}
                            </h3>
                            <p className="text-gray-500 text-sm font-montserrat">
                                {t("pricing.card2.subtitle")}
                            </p>
                        </div>

                        {/* Price */}
                        <div className="px-8 md:px-10 py-6 bg-gradient-to-br from-gray-50 to-white">
                            <div className="flex items-baseline gap-1">
                                <span className="text-[#4f6f19] text-2xl font-semibold">₹</span>
                                <span className="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-br from-[#4f6f19] to-[#6b8f2a] bg-clip-text text-transparent font-montserrat leading-none tracking-tight">
                                    {t("pricing.card2.price")}
                                </span>
                            </div>
                            <p className="text-gray-500 text-sm font-montserrat mt-3 font-medium">
                                {t("pricing.card2.monthly")}
                            </p>
                        </div>

                        {/* Features */}
                        <div className="p-8 md:p-10 pt-6 md:pt-8 flex-1 flex flex-col">
                            <ul className="space-y-4 mb-8 flex-1">
                                {features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-4 group/item">
                                        <div className="w-6 h-6 rounded-full bg-[#4f6f19]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-[#4f6f19]/20 transition-colors">
                                            <Check className="w-3.5 h-3.5 text-[#4f6f19]" strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-600 font-montserrat text-sm md:text-base leading-relaxed">
                                            {t(feature)}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/subscription"
                                className="block w-full bg-gradient-to-r from-[#4f6f19] to-[#5d7f22] text-white font-bold py-4 text-center hover:from-[#3d5614] hover:to-[#4f6f19] transition-all duration-300 font-montserrat text-sm uppercase tracking-widest"
                            >
                                {t("pricing.cta")}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Note */}
                <p className="text-center text-gray-500 font-montserrat mt-8 text-sm">
                    {t("pricing.bottom")}
                </p>
            </div>
        </section>
    );
}
