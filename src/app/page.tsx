"use client";
import React, { useLayoutEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AboutSection from "@/components/AboutSection";
import Products from "@/components/Products";
import PuritySection from "@/components/PuritySection";
import HowWeWork from "@/components/HowWeWork";
import Subscription from "@/components/Subscription";
import AppPromo from "@/components/AppPromo";
import Reviews from "@/components/Reviews";
import BlogPreview from "@/components/BlogPreview";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Reveal animations for all major sections
            const sections = [".reveal-section"];

            sections.forEach((selector) => {
                gsap.utils.toArray<HTMLElement>(selector).forEach((section) => {
                    gsap.from(section, {
                        opacity: 0,
                        y: 100,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                            toggleActions: "play none none none"
                        }
                    });
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <main className="min-h-screen relative">
            <Navbar />
            <Hero />
            <div className="relative z-10 bg-white"><div className="reveal-section"><Features /></div></div>
            <div className="relative z-10 bg-[#f8f9fa]"><div className="reveal-section"><AboutSection /></div></div>
            <div className="relative z-10 bg-white"><div className="reveal-section"><Products /></div></div>
            <div className="relative z-10 bg-[#f8f9fa]"><div className="reveal-section"><HowWeWork /></div></div>
            <div className="relative z-10 bg-white"><div className="reveal-section"><Subscription /></div></div>
            <div className="relative z-10 bg-[#4f6f19]"><div className="reveal-section"><PuritySection /></div></div>
            <div className="relative z-10 bg-white"><div className="reveal-section"><AppPromo /></div></div>
            <div className="relative z-10 bg-[#f8f9fa]"><div className="reveal-section"><Reviews /></div></div>
            <div className="relative z-10 bg-white"><div className="reveal-section"><FAQ /></div></div>
            <div className="relative z-10 bg-white"><Footer /></div>
        </main>
    );
}


