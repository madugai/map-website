"use client";
import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Handle scroll for overlay opacity
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const progress = Math.min(scrollY / (windowHeight * 0.5), 1);
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Text stagger entrance on load
            gsap.from(".hero-animate", {
                opacity: 0,
                y: 60,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.3,
            });

            // Scroll indicator fade
            gsap.to(".scroll-indicator", {
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "20vh top",
                    scrub: true
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section
                ref={sectionRef}
                className="hero-section fixed top-0 left-0 right-0 min-h-[100dvh] flex items-center overflow-hidden bg-white"
                style={{ zIndex: 0 }}
            >
                {/* Black Overlay - fades in on scroll */}
                <div
                    className="absolute inset-0 bg-black pointer-events-none"
                    style={{ opacity: scrollProgress * 0.7, zIndex: 22 }}
                />

                <div className="container mx-auto px-6 md:px-8 pt-24 pb-12 md:pt-0 md:pb-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                        {/* Left Content */}
                        <div className="order-2 lg:order-1 text-left lg:text-left">

                            {/* Heading */}
                            <div className="overflow-hidden mb-6 md:mb-8">
                                <h1 className="hero-animate text-[32px] sm:text-4xl md:text-5xl xl:text-6xl font-montserrat font-black text-gray-900 leading-[1.1] md:leading-[1.25] tracking-tight flex flex-col">
                                    <span>{t("hero.title1")} <span className="text-[#4f6f19]">{t("hero.title2")}</span></span>
                                    <span className="text-[#4f6f19]">{t("hero.title3")}</span>
                                </h1>
                            </div>

                            {/* Description */}
                            <div className="hero-animate mb-8 md:mb-10">
                                <p className="text-gray-600 text-base md:text-lg xl:text-xl font-montserrat leading-relaxed max-w-lg">
                                    {t("hero.description")}
                                </p>
                            </div>

                            {/* Button */}
                            <div className="hero-animate relative z-30">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-3 bg-[#4f6f19] text-white font-bold py-4 px-8 md:px-10 rounded-full hover:bg-[#324a10] hover:scale-105 hover:shadow-xl transition-all duration-300 text-xs md:text-sm uppercase tracking-widest group"
                                >
                                    {t("hero.cta")}
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Video */}
                        <div className="order-1 lg:order-2 relative flex items-center justify-center w-full">
                            <div className="relative w-full max-w-[320px] sm:max-w-md lg:max-w-full rounded-[2rem] overflow-hidden ">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-auto object-cover"
                                >
                                    <source src="https://ik.imagekit.io/bcol8qyjc/Untitled%20design%20(5).mp4" type="video/mp4" />
                                    Your browser does not support the video.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator - Hidden on mobile */}
                <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2">
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2"
                    >
                        <div className="w-1.5 h-1.5 bg-[#4f6f19] rounded-full" />
                    </motion.div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{t("hero.scroll")}</span>
                </div>
            </section>

            {/* Spacer - for scroll effect */}
            <div className="h-screen" style={{ zIndex: 1 }} />
        </>
    );
}
