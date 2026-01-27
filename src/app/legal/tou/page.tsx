"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfUse() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Header */}
            <section className="bg-[#1a1a1a] pt-28 md:pt-40 lg:pt-48 pb-16 md:pb-20">
                <div className="container">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-black text-white mb-4">
                        Terms of Use
                    </h1>
                    <p className="text-white/60 font-montserrat">
                        Last updated: 28-01-2026
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container max-w-4xl">
                    <div className="font-montserrat">
                        <p className="text-gray-600 text-lg leading-relaxed mb-10">
                            Welcome to Madugai. By accessing or using this website, products, or services, you agree to be bound by these Terms of Use.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mb-4">Use of Website</h2>
                        <p className="text-gray-600 leading-relaxed mb-10">
                            This website is intended to provide information about Madugai, its products, subscriptions, and operations. You agree not to misuse the website, attempt unauthorised access, interfere with its functionality, or use it for unlawful purposes.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mb-4">Products & Services</h2>
                        <p className="text-gray-600 leading-relaxed mb-10">
                            Madugai provides milk and food products through a controlled, subscription-based model. Product availability is subject to operational capacity and may vary from time to time. Madugai reserves the right to modify, suspend, or discontinue any product or service without prior notice.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mb-4">Subscriptions</h2>
                        <p className="text-gray-600 leading-relaxed mb-10">
                            Subscriptions are offered based on availability and capacity. Madugai may pause onboarding, adjust delivery schedules, or modify subscription terms to maintain quality, safety, and consistency.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                        <p className="text-gray-600 leading-relaxed mb-10">
                            All content on this website, including text, logos, images, and design elements, is the property of Madugai. No content may be copied, reproduced, distributed, or used without prior written permission.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                        <p className="text-gray-600 leading-relaxed mb-10">
                            Madugai shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or services, except where liability cannot be excluded under applicable law.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Madugai may update these Terms of Use from time to time. Continued use of the website constitutes acceptance of the revised terms.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
