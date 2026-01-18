"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronDown,
    MapPin,
    ShieldCheck,
    Clock,
    TestTube,
    Zap,
    Trophy,
    MousePointerClick,
    Smartphone,
    CreditCard,
    Plane,
    HeartPulse
} from "lucide-react";

const faqs = [
    {
        question: "Where is Madugai milk sourced?",
        answer: "Our milk is collected daily from carefully selected local farms that strictly adhere to our MAP Standard. We maintain long-term partnerships with farmers who share our commitment to purity and animal welfare.",
        icon: MapPin
    },
    {
        question: "What defines Madugai as 'Real Milk'?",
        answer: "Real milk is milk in its most natural state. We don't dilute with water, we don't add preservatives, and we don't subject it to mass-homogenization. It's essentially farm-fresh milk, delivered as nature intended.",
        icon: ShieldCheck
    },
    {
        question: "How long does Madugai milk stay fresh?",
        answer: "Because we deliver within hours of milking and maintain a strict cold chain, our milk stays fresh for 2-3 days when properly refrigerated. We recommend keeping it at or below 4°C at all times.",
        icon: Clock
    },
    {
        question: "Is the milk certified and tested?",
        answer: "Yes, Madugai is FSSAI certified. More importantly, every batch of milk undergoes rigorous testing for fat content, solids-not-fat (SNF), and zero adulteration before it's approved for bottling.",
        icon: TestTube
    },
    {
        question: "Understanding Consistency: Why does natural milk vary?",
        answer: "Industrial milk is homogenized to look identical every day. Madugai is natural; its consistency and taste can vary slightly depending on the season and the natural diet of the cows. This is a sign of true purity.",
        icon: Zap
    },
    {
        question: "Madugai vs. Other Brands: What's the difference?",
        answer: "Our priority is integrity, not scale. We use eco-friendly glass bottles instead of plastic, enforce a zero-shortcut policy in our processing, and focus on delivering locally to ensure the shortest time from farm to home.",
        icon: Trophy
    },
    {
        question: "How do I start my Madugai subscription?",
        answer: "Getting started is easy. You can request a trial sample via our website CTA or download the Madugai App to set up a subscription that fits your daily needs.",
        icon: MousePointerClick
    },
    {
        question: "Is there an App to manage my deliveries?",
        answer: "Yes, the Madugai App is your command center. You can pause deliveries, change quantities, track your delivery partner, and manage your payments all in one place.",
        icon: Smartphone
    },
    {
        question: "What are the available payment methods?",
        answer: "We support all major payment methods including UPI, Credit/Debit cards, and Net Banking. You can easily recharge your in-app wallet for seamless, automated daily billing.",
        icon: CreditCard
    },
    {
        question: "Can I pause deliveries while I'm out of town?",
        answer: "Absolutely. Whether you're away for a day or a month, you can simply toggle the 'Vacation Mode' or pause your subscription through the app instantly.",
        icon: Plane
    },
    {
        question: "The Truth: Is this A1 or A2 milk?",
        answer: "Our focus is on the Purity and Integrity of the milk. We source from healthy, local breeds and focus on ensuring the milk remains unprocessed and free from industrial tweaks, providing a wholesome experience for all.",
        icon: HeartPulse
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="bg-[#fafafa] py-12 md:py-20">
            <div className="container max-w-4xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block bg-[#4f6f19]/10 text-[#4f6f19] font-bold text-[10px] uppercase tracking-[0.2em] px-4 py-1.5 mb-4">
                        Support
                    </span>
                    <h2 className="text-2xl md:text-4xl font-montserrat font-bold text-gray-900 leading-tight mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-500 font-montserrat text-base">
                        Everything you need to know about our milk and services.
                    </p>
                </motion.div>

                {/* FAQ List */}
                <div className="border-t border-gray-200">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="border-b border-gray-200 overflow-hidden"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between py-6 text-left transition-colors group"
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-10 h-10 flex items-center justify-center transition-all ${activeIndex === index ? 'bg-[#4f6f19] text-white' : 'bg-[#4f6f19]/5 text-[#4f6f19] group-hover:scale-110'}`}>
                                        <faq.icon className="w-4 h-4" />
                                    </div>
                                    <span className={`text-lg font-montserrat font-bold transition-colors ${activeIndex === index ? 'text-[#4f6f19]' : 'text-gray-900 group-hover:text-[#4f6f19]'}`}>
                                        {faq.question}
                                    </span>
                                </div>
                                <ChevronDown className={`w-4 h-4 text-gray-300 transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-[#4f6f19]' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="pb-8 pt-1">
                                            <div className="pl-16">
                                                <p className="text-gray-500 font-montserrat text-base leading-relaxed max-w-3xl">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-500 font-montserrat">
                        Still have questions? <a href="/contact" className="text-[#4f6f19] font-bold hover:underline transition-colors uppercase tracking-widest text-xs">Contact our support team</a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
