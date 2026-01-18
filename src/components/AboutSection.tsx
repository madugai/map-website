"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Text content slide in from left
            gsap.from(textRef.current, {
                x: -100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none none"
                }
            });

            // Split text animation for heading
            gsap.from(".about-heading", {
                opacity: 0,
                y: 80,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none none"
                }
            });

            // Paragraph fade in
            gsap.from(".about-paragraph", {
                opacity: 0,
                y: 40,
                duration: 0.8,
                delay: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none none"
                }
            });

            // Quote box slide up
            gsap.from(".about-quote", {
                opacity: 0,
                y: 60,
                scale: 0.95,
                duration: 0.8,
                delay: 0.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none none"
                }
            });

            // Image parallax and scale effect
            gsap.from(imageRef.current, {
                x: 100,
                opacity: 0,
                scale: 0.8,
                rotation: 5,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none none"
                }
            });

            // Floating animation for image
            gsap.to(".about-image", {
                y: -20,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-12 md:py-16 overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div ref={textRef}>
                        <h2 className="about-heading text-3xl md:text-4xl lg:text-[42px] font-montserrat font-bold text-gray-900 leading-tight mb-8">
                            Milk today is designed for scale, shelf life, and convenience — <span className="text-[#4f6f19]">not integrity.</span>
                        </h2>

                        <p className="about-paragraph text-gray-600 text-lg md:text-xl leading-relaxed font-montserrat mb-8">
                            Madugai exists to do the opposite. We operate with discipline and restraint,
                            because real quality cannot be rushed, diluted, or industrialized.
                        </p>

                        <div className="about-quote bg-[#4f6f19]/5 border-l-4 border-[#4f6f19] p-6 mb-8">
                            <p className="text-[#4f6f19] font-bold text-lg font-montserrat italic">
                                "Try Madugai once. Let the quality speak for itself."
                            </p>
                        </div>
                    </div>

                    {/* Right - Product Image */}
                    <div ref={imageRef} className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md">
                            <Image
                                src="/images/products/Product.png"
                                alt="Madugai Products"
                                width={700}
                                height={700}
                                className="about-image object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
