"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DeliveryPolicy() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Header */}
            <section className="bg-[#1a1a1a] pt-28 md:pt-40 lg:pt-48 pb-16 md:pb-20">
                <div className="container">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-black text-white mb-4">
                        Delivery Policy
                    </h1>
                    <p className="text-white/60 font-montserrat">
                        Last updated: 26 January 2026
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container max-w-4xl">
                    <div className="font-montserrat">
                        <p className="text-gray-600 text-lg leading-relaxed mb-10">
                            Madugai delivers perishable food products through a controlled, subscription-based delivery system. This Delivery Policy defines delivery practices and responsibilities.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mb-4">Delivery Schedule</h2>
                        <p className="text-gray-600 leading-relaxed mb-2">
                            Madugai delivers products once daily, during predefined morning delivery hours. Delivery timings may vary slightly based on route planning, weather, or operational conditions.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-10">
                            Specific delivery times are not guaranteed.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mb-4">Delivery Method</h2>
                        <p className="text-gray-600 leading-relaxed mb-2">
                            Products are delivered to the address provided at the time of subscription. Customers are responsible for ensuring clear access to the delivery location.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-10">
                            Madugai is not responsible for delays or failures caused by restricted access, incorrect address details, or unforeseen obstacles.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mb-4">Customer Availability</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Customers are expected to make necessary arrangements to receive deliveries.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-2">
                            If a customer is unavailable:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                            <li>Delivery may still be completed by placing the product at the designated location, or</li>
                            <li>Delivery may be skipped based on operational discretion</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed mb-10">
                            Missed deliveries due to customer unavailability are not eligible for refund.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mb-4">Delivery Confirmation</h2>
                        <p className="text-gray-600 leading-relaxed mb-2">
                            Once a product is delivered to the provided address, it is considered successfully delivered.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-10">
                            Madugai is not responsible for loss, damage, or spoilage after delivery.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mb-4">Subscription Pauses & Changes</h2>
                        <p className="text-gray-600 leading-relaxed mb-2">
                            Delivery pauses or changes must be requested in advance, as per the communicated cut-off time.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-10">
                            Requests received after the cut-off may not apply to the next delivery cycle.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mb-4">Glass Bottle Handling</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Milk is delivered in reusable glass bottles.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-2">
                            Customers are responsible for:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                            <li>Returning empty bottles during the next delivery</li>
                            <li>Handling bottles with reasonable care</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed mb-10">
                            Damaged or unreturned bottles may be charged as per communicated terms.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mb-4">Service Interruptions</h2>
                        <p className="text-gray-600 leading-relaxed mb-2">
                            Madugai reserves the right to temporarily suspend or modify deliveries due to:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                            <li>Operational constraints</li>
                            <li>Safety concerns</li>
                            <li>Weather conditions</li>
                            <li>Regulatory requirements</li>
                            <li>Unforeseen circumstances</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed mb-10">
                            Such interruptions do not automatically qualify for refunds.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mb-4">Policy Updates</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Madugai may update this Delivery Policy from time to time. Updates will be reflected on this page.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
