"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Header */}
            <section className="bg-[#1a1a1a] pt-28 md:pt-40 lg:pt-48 pb-16 md:pb-20">
                <div className="container">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-black text-white mb-4">
                        Privacy Policy
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
                            Madugai respects your privacy and is committed to protecting your personal information.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Madugai may collect the following information:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-10">
                            <li>Name</li>
                            <li>Phone number</li>
                            <li>Email address</li>
                            <li>Delivery address</li>
                            <li>Subscription and service-related details</li>
                        </ul>

                        <h2 className="text-xl font-bold text-gray-900 mb-4">Use of Information</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Collected information is used only to:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-10">
                            <li>Process subscriptions and deliveries</li>
                            <li>Communicate service-related updates</li>
                            <li>Respond to enquiries and support requests</li>
                            <li>Comply with legal and regulatory requirements</li>
                        </ul>

                        <h2 className="text-xl font-bold text-gray-900 mb-4">Data Protection</h2>
                        <p className="text-gray-600 leading-relaxed mb-10">
                            Madugai takes reasonable measures to protect personal information against unauthorised access, misuse, alteration, or disclosure.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mb-4">Data Sharing</h2>
                        <p className="text-gray-600 leading-relaxed mb-10">
                            Madugai does not sell or rent personal information. Data may be shared only with service providers necessary for operations or when required by law.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mb-4">Communication Consent</h2>
                        <p className="text-gray-600 leading-relaxed mb-10">
                            If you opt in, Madugai may send service-related or informational communication through digital channels. You may opt out of such communication at any time.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mb-4">Policy Updates</h2>
                        <p className="text-gray-600 leading-relaxed">
                            This Privacy Policy may be updated periodically. Any changes will be reflected on this page.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
