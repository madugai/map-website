"use client";
import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import gsap from "gsap";
import { useLanguage } from "@/context/LanguageContext";
import { getProducts } from "@/lib/strapi";

const STATIC_PRODUCTS = [
    {
        title: "products.milk.title",
        image: "/images/product.jpg",
        href: "/our-products",
        description: "products.milk.desc",
        badge: "products.badge.bestSeller"
    },
    {
        title: "products.ghee.title",
        image: "/images/products/ghee.jpg",
        href: "/our-products/pure-cow-ghee",
        description: "products.ghee.desc",
        badge: null
    },
    {
        title: "products.paneer.title",
        image: "/images/panner_img.png",
        href: "/our-products/fresh-paneer",
        description: "products.paneer.desc",
        badge: "products.badge.new"
    },
    {
        title: "products.coconut.title",
        image: "/images/coconut.png",
        href: "/our-products/tender-coconut",
        description: "products.coconut.desc",
        badge: "products.badge.seasonal"
    }
];

interface ProductData {
    id: string | number;
    title: string;
    image: string;
    href: string;
    description: string;
    badge: string | null;
}

export default function Products() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const [products, setProducts] = useState<ProductData[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadProducts() {
            try {
                const strapiData = await getProducts();
                if (strapiData && strapiData.length > 0) {
                    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

                    const formattedProducts = strapiData.map((item: any) => {
                        const attrs = item.attributes || item; // Handle both v4 (attributes) and v5 (flat)
                        const imageData = attrs.image?.data?.[0] || attrs.image?.[0] || attrs.image;
                        const imageUrl = imageData?.attributes?.url || imageData?.url || "/images/product.jpg";

                        return {
                            id: item.id,
                            title: attrs.name || attrs.title,
                            description: attrs.description,
                            image: imageUrl.startsWith("http") ? imageUrl : `${baseUrl}${imageUrl}`,
                            href: attrs.slug ? `/our-products/${attrs.slug}` : "/our-products",
                            badge: attrs.about || attrs.badge || null
                        };
                    });
                    setProducts(formattedProducts);
                } else {
                    // Fallback to static if no data in Strapi
                    const fallback = STATIC_PRODUCTS.map((p, i) => ({
                        ...p,
                        id: `static-${i}`,
                        title: t(p.title),
                        description: t(p.description),
                        badge: p.badge ? t(p.badge) : null
                    }));
                    setProducts(fallback);
                }
            } catch (error) {
                console.error("Failed to fetch products from Strapi:", error);
                // Fallback to static on error
                const fallback = STATIC_PRODUCTS.map((p, i) => ({
                    ...p,
                    id: `static-${i}`,
                    title: t(p.title),
                    description: t(p.description),
                    badge: p.badge ? t(p.badge) : null
                }));
                setProducts(fallback);
            } finally {
                setIsLoading(false);
            }
        }

        loadProducts();
    }, [t]);

    useLayoutEffect(() => {
        if (isLoading || products.length === 0) return;

        const ctx = gsap.context(() => {
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
    }, [isLoading, products]);

    return (
        <section ref={containerRef} className="pb-24 pt-0 overflow-hidden min-h-[400px]">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-20">
                    {/* Header content if any */}
                </div>

                {/* Loading State */}
                {isLoading ? (
                    <div className="flex justify-center items-center py-20">
                        <Loader2 className="w-10 h-10 animate-spin text-[#4f6f19]" />
                    </div>
                ) : (
                    /* Products Grid */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="product-card-gsap group"
                            >
                                <Link href={product.href} className="flex flex-col h-full">
                                    {/* Product Image Container */}
                                    <div className="relative mb-10 flex justify-center items-center h-80 bg-transparent group/image">
                                        <div className="absolute inset-0 bg-transparent group-hover/image:bg-[#4f6f19]/5 transition-colors duration-700" />

                                        <div className="product-bottle-gsap relative w-64 h-64">
                                            <Image
                                                src={product.image}
                                                alt={product.title}
                                                fill
                                                className="object-contain transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>

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
                                                {t("products.viewDetails")}
                                                <ArrowRight className="w-5 h-5" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}

                {/* CTA Button */}
                {!isLoading && (
                    <div className="mt-24 text-center">
                        <Link
                            href="/our-products"
                            className="inline-flex items-center gap-5 bg-black text-white font-bold px-12 py-6 hover:bg-zinc-800 transition-all group text-sm uppercase tracking-widest"
                        >
                            {t("products.exploreAll")}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
