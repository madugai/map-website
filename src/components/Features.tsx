"use client";
import React from "react";
import { Milk, Package, Leaf, Truck } from "lucide-react";

const commitments = [
    { icon: Leaf, title: "100% Pure", text: "Direct from farms, no additives or preservatives" },
    { icon: Milk, title: "Daily Fresh", text: "Collected, chilled, and delivered within 24 hours" },
    { icon: Package, title: "Glass Only", text: "Traditional glass bottles for the purest taste" },
    { icon: Truck, title: "Local First", text: "Supporting selected small-scale ethical farms" }
];

export default function Features() {
    return (
        <section className="bg-[#4f6f19] py-14">
            <div className="container">
                <div className="flex flex-wrap justify-between">
                    {commitments.map((item, index) => (
                        <div key={index} className="w-1/2 lg:w-auto lg:flex-1 text-center py-6 lg:py-0 lg:border-r lg:border-dashed lg:border-white/20 last:border-r-0 px-4">
                            <item.icon className="w-10 h-10 mx-auto mb-4 text-white/80" strokeWidth={1.5} />
                            <h3 className="text-xl font-bold text-white mb-2 font-montserrat">{item.title}</h3>
                            <p className="text-white/70 text-sm max-w-[200px] mx-auto font-montserrat">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
