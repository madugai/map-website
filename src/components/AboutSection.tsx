"use client";
import React from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Play } from "lucide-react";

const familyImages = [
    "/images/others/avatar-male.png",
    "/images/others/avatar-female.png",
    "/images/others/avatar-male.png"
];

export default function AboutSection() {
    return (
        <section className="bg-[#fafafa] py-12 md:py-16">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-montserrat font-bold text-gray-900 leading-tight mb-8">
                            Milk today is designed for scale, shelf life, and convenience — <span className="text-[#4f6f19]">not integrity.</span>
                        </h2>

                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-montserrat mb-8">
                            Madugai exists to do the opposite. We operate with discipline and restraint,
                            because real quality cannot be rushed, diluted, or industrialized.
                        </p>

                        <div className="bg-[#4f6f19]/5 border-l-4 border-[#4f6f19] p-6 mb-8">
                            <p className="text-[#4f6f19] font-bold text-lg font-montserrat italic">
                                "Try Madugai once. Let the quality speak for itself."
                            </p>
                        </div>
                    </div>

                    {/* Right - Product Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md">
                            <Image
                                src="/images/products/Product.png"
                                alt="Madugai Products"
                                width={700}
                                height={700}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
