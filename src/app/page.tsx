"use client";
import React, { useLayoutEffect, useRef } from "react";
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
    const mainRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Section reveal animations with stagger
            gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section, i) => {
                gsap.from(section, {
                    opacity: 0,
                    y: 80,
                    duration: 1.2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            });

            // Parallax effect for images
            gsap.utils.toArray<HTMLElement>(".gsap-parallax").forEach((el) => {
                gsap.to(el, {
                    yPercent: -20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: el,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1
                    }
                });
            });

            // Text reveal animations
            gsap.utils.toArray<HTMLElement>(".gsap-text-reveal").forEach((el) => {
                gsap.from(el, {
                    opacity: 0,
                    y: 60,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            });

            // Scale up animations
            gsap.utils.toArray<HTMLElement>(".gsap-scale-up").forEach((el) => {
                gsap.from(el, {
                    scale: 0.8,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            });

            // Horizontal slide from left
            gsap.utils.toArray<HTMLElement>(".gsap-slide-left").forEach((el) => {
                gsap.from(el, {
                    x: -100,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            });

            // Horizontal slide from right
            gsap.utils.toArray<HTMLElement>(".gsap-slide-right").forEach((el) => {
                gsap.from(el, {
                    x: 100,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            });

            // Stagger children animations
            gsap.utils.toArray<HTMLElement>(".gsap-stagger-container").forEach((container) => {
                const children = container.querySelectorAll(".gsap-stagger-item");
                gsap.from(children, {
                    opacity: 0,
                    y: 40,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: container,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                });
            });

            // Rotate in animation
            gsap.utils.toArray<HTMLElement>(".gsap-rotate-in").forEach((el) => {
                gsap.from(el, {
                    rotation: 10,
                    opacity: 0,
                    scale: 0.9,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            });

            // Counter animation for numbers
            gsap.utils.toArray<HTMLElement>(".gsap-counter").forEach((el) => {
                const target = parseInt(el.getAttribute("data-count") || "0");
                gsap.to(el, {
                    innerHTML: target,
                    duration: 2,
                    ease: "power2.out",
                    snap: { innerHTML: 1 },
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            });

        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={mainRef} className="min-h-screen relative overflow-hidden">
            <Navbar />
            <Hero />
            <div className="relative z-10 bg-white"><div className="reveal-section"><Features /></div></div>
            <div className="relative z-10 bg-[#f8f9fa]"><div className="reveal-section"><AboutSection /></div></div>
            <div className="relative z-10 bg-white"><div className="reveal-section"><Products /></div></div>
            <div className="relative z-10 bg-[#f8f9fa]"><div className="reveal-section"><HowWeWork /></div></div>
            <div className="relative z-10 bg-white"><div className="reveal-section"><Subscription /></div></div>
            <div className="relative z-10 bg-[#fafafa]"><div className="reveal-section"><PuritySection /></div></div>
            <div className="relative z-10 bg-white"><div className="reveal-section"><AppPromo /></div></div>
            <div className="relative z-10 bg-[#f8f9fa]"><div className="reveal-section"><Reviews /></div></div>
            <div className="relative z-10 bg-white"><div className="reveal-section"><FAQ /></div></div>
            <div className="relative z-10 bg-white"><Footer /></div>
        </main>
    );
}


