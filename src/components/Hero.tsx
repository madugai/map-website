"use client";
import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Pin Hero Section
            if (sectionRef.current) {
                ScrollTrigger.create({
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    pinSpacing: false
                });
            }

            // Parallax effect for video
            if (videoRef.current) {
                gsap.to(videoRef.current, {
                    yPercent: 15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true
                    }
                });
            }

            // Content Fade on Scroll
            if (contentRef.current) {
                gsap.to(contentRef.current, {
                    opacity: 0,
                    scale: 0.95,
                    y: -50,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true
                    }
                });
            }

            // Text stagger entrance
            gsap.from(".hero-animate", {
                opacity: 0,
                y: 60,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.3,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="hero-section relative min-h-[100vh] flex items-center overflow-hidden bg-white"
        >
            <div className="container mx-auto px-6 md:px-8 pt-24 pb-12 md:pt-0 md:pb-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div ref={contentRef} className="order-2 lg:order-1">


                        {/* Heading */}
                        <div className="overflow-hidden mb-8">
                            <h1 className="hero-animate text-3xl md:text-4xl xl:text-5xl font-montserrat font-black text-gray-900 leading-[1.1] tracking-tight flex flex-col">
                                <span>Cow Milk. <span className="text-[#4f6f19]">Without</span></span>
                                <span className="text-[#4f6f19]">Industrial Shortcuts.</span>
                            </h1>
                        </div>

                        {/* Description */}
                        <div className="hero-animate mb-10">
                            <p className="text-gray-600 text-lg md:text-xl font-montserrat leading-relaxed">
                                Collected daily. Chilled immediately. Delivered fresh in glass bottles. No dilution. No preservatives. No mass processing.
                            </p>
                        </div>

                        {/* Button */}
                        <div className="hero-animate">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 bg-[#4f6f19] text-white font-bold py-4 px-10 rounded-full hover:bg-[#324a10] hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm uppercase tracking-widest group"
                            >
                                Request a Sample
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Video */}
                    <div className="order-1 lg:order-2 relative flex items-center justify-center w-full">
                        <div
                            ref={videoRef}
                            className="relative w-full max-w-md lg:max-w-full rounded-3xl overflow-hidden"
                        >
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
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2">
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2"
                >
                    <div className="w-1.5 h-1.5 bg-[#4f6f19] rounded-full" />
                </motion.div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Scroll</span>
            </div>
        </section>
    );
}
