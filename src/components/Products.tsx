"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const products = [
    {
        title: "Pure Cow Milk",
        image: "/images/products/milk.png",
        href: "/our-milk",
        description: "Collected daily from selected local farms. Chilled immediately and delivered fresh every morning in reusable glass bottles.",
        badge: "Best Seller"
    },
    {
        title: "Pure Cow Ghee",
        image: "/images/products/ghee.jpg",
        href: "/our-products/pure-cow-ghee",
        description: "Prepared from carefully handled milk under controlled conditions. No artificial additives. No enhancement. No shortcuts. Clarity and consistency over volume.",
        badge: null
    },
    {
        title: "Fresh Paneer",
        image: "/images/panner_img.png",
        href: "/our-products/fresh-paneer",
        description: "Prepared in small batches and handled under clean, controlled conditions. Freshness and hygiene are prioritised at every step.",
        badge: "New"
    },
    {
        title: "Tender Coconut",
        image: "/images/coconut.png",
        href: "/our-products/tender-coconut",
        description: "Sourced fresh and delivered as-is. No processing. No alteration. No intervention.",
        badge: "Seasonal"
    }
];

export default function Products() {
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animating products on scroll
            const productCards = gsap.utils.toArray<HTMLElement>(".product-card-gsap");

            productCards.forEach((card) => {
                gsap.from(card, {
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="pb-24 pt-0 overflow-hidden">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-20">

                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={product.title}
                            className="product-card-gsap group"
                        >
                            <Link href={product.href} className="flex flex-col h-full">
                                {/* Product Image Container */}
                                <div className="relative mb-10 flex justify-center items-center h-80 bg-transparent group/image">
                                    {/* Removed shadow under the bottle for cleaner look */}
                                    <div className="absolute inset-0 bg-transparent group-hover/image:bg-[#4f6f19]/5 transition-colors duration-700" />

                                    <div className="product-bottle-gsap relative w-64 h-64">
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            fill
                                            className="object-contain transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Subtle brand glow on hover */}
                                    <div className="absolute inset-0 bg-radial-gradient from-[#4f6f19]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                </div>

                                {/* Product Info */}
                                <div className="flex flex-col flex-grow px-4">
                                    <div className="flex items-center justify-between mb-5">
                                        <h3 className="text-2xl font-bold font-montserrat text-gray-900 group-hover:text-[#4f6f19] transition-colors leading-tight">
                                            {product.title}
                                        </h3>
                                        {product.badge && (
                                            <span className="text-[9px] font-black uppercase tracking-widest text-[#4f6f19] bg-[#4f6f19]/10 px-4 py-1.5">
                                                {product.badge}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-500 font-montserrat text-base leading-relaxed mb-10 flex-grow">
                                        {product.description}
                                    </p>

                                    <div className="pt-8 border-t border-gray-100">
                                        <span className="inline-flex items-center gap-4 text-[#4f6f19] font-bold text-[10px] uppercase tracking-[0.2em] group-hover:gap-6 transition-all">
                                            View Details
                                            <ArrowRight className="w-5 h-5" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="mt-24 text-center">
                    <Link
                        href="/our-products"
                        className="inline-flex items-center gap-5 bg-black text-white font-bold px-12 py-6 hover:bg-zinc-800 transition-all group text-sm uppercase tracking-widest"
                    >
                        Explore All Products
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
