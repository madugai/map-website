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

            gsap.from(".pricing-card", {
                opacity: 0,
                y: 60,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".pricing-cards",
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 md:py-28 overflow-hidden">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Left - Image Only */}
                    <div className="pricing-left lg:w-[35%] flex items-start justify-center">
                        <Image
                            src="/images/product.png"
                            alt="Madugai Pure Milk"
                            width={500}
                            height={600}
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Right - Pricing Cards */}
                    <div className="lg:w-[65%]">
                        <div className="pricing-cards grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Card 1 - Half Litre */}
                            <div className="pricing-card bg-white border border-gray-200 overflow-hidden">
                                {/* Header */}
                                <div className="p-6 border-b-4 border-[#4f6f19]">
                                    <h3 className="text-xl font-bold font-montserrat text-gray-900 mb-1">
                                        {t("pricing.card1.title")}
                                    </h3>
                                    <p className="text-gray-500 text-sm font-montserrat">
                                        {t("pricing.card1.subtitle")}
                                    </p>
                                </div>

                                {/* Price */}
                                <div className="p-6 bg-gray-50">
                                    <div className="flex items-start">
                                        <span className="text-[#4f6f19] text-xl font-medium mt-1">₹</span>
                                        <span className="text-6xl md:text-7xl font-black text-[#4f6f19] font-montserrat leading-none">
                                            {t("pricing.card1.price")}
                                        </span>
                                    </div>
                                    <p className="text-gray-500 text-sm font-montserrat mt-2">
                                        {t("pricing.card1.monthly")}
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="p-6">
                                    <ul className="space-y-4 mb-6">
                                        {features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                                <Check className="w-5 h-5 text-[#4f6f19] flex-shrink-0" strokeWidth={2.5} />
                                                <span className="text-gray-700 font-montserrat text-sm">
                                                    {t(feature)}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href="/subscription"
                                        className="block w-full bg-[#4f6f19] text-white font-bold py-4 text-center rounded-full hover:bg-[#3d5614] transition-all font-montserrat text-sm"
                                    >
                                        {t("pricing.cta")}
                                    </Link>
                                </div>
                            </div>

                            {/* Card 2 - Full Litre */}
                            <div className="pricing-card bg-white border border-gray-200 overflow-hidden relative">

                                {/* Header */}
                                <div className="p-6 border-b-4 border-[#4f6f19]">
                                    <h3 className="text-xl font-bold font-montserrat text-gray-900 mb-1">
                                        {t("pricing.card2.title")}
                                    </h3>
                                    <p className="text-gray-500 text-sm font-montserrat">
                                        {t("pricing.card2.subtitle")}
                                    </p>
                                </div>

                                {/* Price */}
                                <div className="p-6 bg-gray-50">
                                    <div className="flex items-start">
                                        <span className="text-[#4f6f19] text-xl font-medium mt-1">₹</span>
                                        <span className="text-6xl md:text-7xl font-black text-[#4f6f19] font-montserrat leading-none">
                                            {t("pricing.card2.price")}
                                        </span>
                                    </div>
                                    <p className="text-gray-500 text-sm font-montserrat mt-2">
                                        {t("pricing.card2.monthly")}
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="p-6">
                                    <ul className="space-y-4 mb-6">
                                        {features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                                <Check className="w-5 h-5 text-[#4f6f19] flex-shrink-0" strokeWidth={2.5} />
                                                <span className="text-gray-700 font-montserrat text-sm">
                                                    {t(feature)}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href="/subscription"
                                        className="block w-full bg-[#4f6f19] text-white font-bold py-4 text-center rounded-full hover:bg-[#3d5614] transition-all font-montserrat text-sm"
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
                </div>
            </div>
        </section>
    );
}
