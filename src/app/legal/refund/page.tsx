"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RefundPolicy() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Header */}
            <section className="bg-[#1a1a1a] pt-28 md:pt-40 lg:pt-48 pb-16 md:pb-20">
                <div className="container">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-black text-white mb-4">
                        Refund & Cancellation Policy
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
                            Madugai products are perishable and handled for daily consumption. Refunds and cancellations are governed accordingly.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mb-4">Refunds</h2>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-10">
                            <li>Refunds are not applicable for delivered milk or other perishable products.</li>
                            <li>Once a product is delivered, it is considered fulfilled.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-gray-900 mb-4">Cancellations & Pauses</h2>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-10">
                            <li>Subscription cancellations or pauses must be requested in advance, in accordance with the communicated cut-off time.</li>
                            <li>Requests made after the cut-off time may not be applicable for the next delivery cycle.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-gray-900 mb-4">Missed Deliveries</h2>
                        <p className="text-gray-600 leading-relaxed mb-10">
                            Madugai is not responsible for failed deliveries due to incorrect address details, restricted access, customer unavailability, or circumstances beyond operational control.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mb-4">Service Adjustments</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Madugai reserves the right to modify delivery schedules or temporarily suspend services due to operational constraints, safety concerns, or unforeseen events.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
