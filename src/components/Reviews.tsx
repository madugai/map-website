"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const reviews = [
    {
        name: "reviews.r1.name",
        text: "reviews.r1.text",
        image: "/images/others/avatar-male.png",
        rating: 5
    },
    {
        name: "reviews.r2.name",
        text: "reviews.r2.text",
        image: "/images/others/avatar-female.png",
        rating: 5
    },
    {
        name: "reviews.r3.name",
        text: "reviews.r3.text",
        image: "/images/others/avatar-male.png",
        rating: 5
    },
    {
        name: "reviews.r4.name",
        text: "reviews.r4.text",
        image: "/images/others/avatar-female.png",
        rating: 5
    }
];

export default function Reviews() {
    const { t } = useLanguage();

    return (
        <section className="py-12 md:py-16">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="inline-block bg-[#4f6f19]/10 text-[#4f6f19] font-bold text-xs uppercase tracking-[0.2em] px-5 py-2 mb-6">
                        {t("reviews.badge")}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-gray-900 leading-tight">
                        {t("reviews.title")}
                    </h2>
                    <p className="text-gray-500 font-montserrat mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
                        {t("reviews.subtitle1")}<span className="text-[#4f6f19] font-bold">{t("reviews.subtitle2")}</span>{t("reviews.subtitle3")}
                    </p>
                </motion.div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col h-full"
                        >
                            {/* Quote Icon */}
                            <Quote className="w-10 h-10 text-[#4f6f19]/10 mb-8 rotate-180" />

                            {/* Star Rating */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-500 font-montserrat text-lg leading-relaxed flex-grow mb-10 italic">
                                &quot;{t(review.text)}&quot;
                            </p>

                            {/* Reviewer Info */}
                            <div className="flex items-center gap-4 pt-8 border-t border-gray-100">
                                <div className="relative">
                                    <Image
                                        src={review.image}
                                        alt={t(review.name)}
                                        width={50}
                                        height={50}
                                        className="grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#4f6f19] border-2 border-white flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white" />
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-montserrat font-bold text-gray-900 text-sm">
                                        {t(review.name)}
                                    </h5>
                                    <span className="text-[10px] text-[#4f6f19] font-bold uppercase tracking-widest">{t("reviews.verified")}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    <Link
                        href="/reviews"
                        className="inline-flex items-center gap-3 text-[#4f6f19] font-bold font-montserrat text-lg hover:gap-5 transition-all group"
                    >
                        {t("reviews.readMore")}
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
