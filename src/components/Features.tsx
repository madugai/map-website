"use client";
import React, { useLayoutEffect, useRef } from "react";
import { Milk, Package, Leaf, Truck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";

const commitments = [
    { icon: Leaf, title: "features.pure.title", text: "features.pure.text" },
    { icon: Milk, title: "features.fresh.title", text: "features.fresh.text" },
    { icon: Package, title: "features.glass.title", text: "features.glass.text" },
    { icon: Truck, title: "features.local.title", text: "features.local.text" }
];

export default function Features() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Stagger animation for feature items
            gsap.from(".feature-item", {
                opacity: 0,
                y: 50,
                scale: 0.9,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });

            // Icon bounce animation
            gsap.from(".feature-icon", {
                scale: 0,
                rotation: -180,
                duration: 0.6,
                stagger: 0.15,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#4f6f19] py-14 overflow-hidden">
            <div className="container">
                <div className="flex flex-wrap justify-between">
                    {commitments.map((item, index) => (
                        <div key={index} className="feature-item w-1/2 lg:w-auto lg:flex-1 text-center py-6 lg:py-0 lg:border-r lg:border-dashed lg:border-white/20 last:border-r-0 px-4">
                            <item.icon className="feature-icon w-10 h-10 mx-auto mb-4 text-white/80" strokeWidth={1.5} />
                            <h3 className="text-xl font-bold text-white mb-2 font-montserrat">{t(item.title)}</h3>
                            <p className="text-white/70 text-sm max-w-[200px] mx-auto font-montserrat">{t(item.text)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
