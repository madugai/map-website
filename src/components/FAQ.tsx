"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqCategories = [
    {
        category: "About Madugai",
        faqs: [
            {
                question: "What is Madugai?",
                answer: "Madugai is a farm-to-home milk delivery service that delivers fresh, pure cow milk in reusable glass bottles. We follow a strict operating discipline to ensure every litre of milk reaches you exactly as it should be — without dilution, without preservatives, and without industrial shortcuts."
            },
            {
                question: "Where does Madugai operate?",
                answer: "We currently operate in select areas of Vellore district, Tamil Nadu. Our delivery is limited to ensure we maintain full control over quality and freshness."
            },
            {
                question: "Is Madugai certified?",
                answer: "Yes. Madugai operates under a valid FSSAI license (Lic. No: 12425030000917). We follow all regulatory guidelines for milk handling and delivery."
            }
        ]
    },
    {
        category: "Milk & Quality",
        faqs: [
            {
                question: "Where does the milk come from?",
                answer: "Our milk is collected daily from selected small-scale local farms that meet our sourcing criteria. We do not source from large dairy cooperatives or bulk tankers."
            },
            {
                question: "Is the milk pasteurised or homogenised?",
                answer: "Madugai milk is gently heated — not subjected to high-temperature pasteurisation or UHT processing. The milk is not homogenised, so you will notice a layer of cream on top — this is natural and a sign of real, unprocessed milk."
            },
            {
                question: "How fresh is the milk?",
                answer: "Our milk is collected in the early morning and delivered to your doorstep the same day. The time from milking to delivery is typically under 6 hours."
            },
            {
                question: "How should I store the milk?",
                answer: "Refrigerate the milk immediately upon delivery. Consume within 2–3 days for the best taste and freshness. Always keep the bottle sealed when not in use."
            }
        ]
    },
    {
        category: "Delivery",
        faqs: [
            {
                question: "What time is the milk delivered?",
                answer: "Milk is delivered early every morning, typically between 5:30 AM and 7:30 AM, depending on your location."
            },
            {
                question: "Can I pause or skip deliveries?",
                answer: "Yes. You can pause your subscription or skip specific days directly from the Madugai app. Changes must be made before 9 PM the previous night."
            },
            {
                question: "Do you deliver on Sundays or holidays?",
                answer: "Yes, we deliver every day of the year. Milk is a daily essential, and our operations do not take breaks."
            }
        ]
    },
    {
        category: "Payments",
        faqs: [
            {
                question: "How do I pay for my subscription?",
                answer: "Payments are made through the Madugai app wallet. You can recharge using UPI, debit/credit cards, or net banking. The daily cost is automatically deducted from your wallet balance."
            },
            {
                question: "What happens if my wallet balance is low?",
                answer: "You will receive a notification when your balance is running low. If the balance reaches zero, deliveries will be paused until the wallet is recharged."
            }
        ]
    },
    {
        category: "Glass Bottles",
        faqs: [
            {
                question: "Why do you use glass bottles?",
                answer: "Glass is inert, reusable, and does not leach chemicals into the milk. It preserves taste and quality better than plastic or tetra packs and is environmentally sustainable."
            },
            {
                question: "How does the bottle return system work?",
                answer: "When we deliver fresh milk, we collect the empty bottles from your previous delivery. Please rinse the bottles before returning. Bottles in good condition are sanitised and reused."
            },
            {
                question: "What if I lose or break a bottle?",
                answer: "A replacement fee will be charged for lost or broken bottles. The amount will be deducted from your wallet. Please handle bottles with care."
            }
        ]
    }
];

export default function FAQ() {
    const [activeCategory, setActiveCategory] = useState(0);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-16 md:py-24">
            <div className="container">
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
                        Everything you need to know about Madugai milk and services.
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {faqCategories.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setActiveCategory(idx);
                                setActiveIndex(null);
                            }}
                            className={`px-5 py-2.5 text-sm font-montserrat font-medium transition-all ${
                                activeCategory === idx
                                    ? "bg-[#4f6f19] text-white"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                        >
                            {cat.category}
                        </button>
                    ))}
                </div>

                {/* FAQ List */}
                <div className="max-w-3xl mx-auto">
                    <div className="border-t border-gray-200">
                        {faqCategories[activeCategory].faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="border-b border-gray-200 overflow-hidden"
                            >
                                <button
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between py-6 text-left transition-colors group"
                                >
                                    <span className={`text-base md:text-lg font-montserrat font-bold transition-colors pr-4 ${
                                        activeIndex === index ? 'text-[#4f6f19]' : 'text-gray-900 group-hover:text-[#4f6f19]'
                                    }`}>
                                        {faq.question}
                                    </span>
                                    <ChevronDown className={`w-5 h-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                                        activeIndex === index ? 'rotate-180 text-[#4f6f19]' : ''
                                    }`} />
                                </button>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="pb-6">
                                                <p className="text-gray-500 font-montserrat text-base leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-500 font-montserrat">
                        Still have questions?{" "}
                        <a href="/contact" className="text-[#4f6f19] font-bold hover:underline transition-colors uppercase tracking-widest text-xs">
                            Contact our support team
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
