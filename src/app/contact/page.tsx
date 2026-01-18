"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white font-montserrat">
            <Navbar />

            {/* Page Header */}
            <section className="pt-28 md:pt-40 lg:pt-48 pb-16 md:pb-20 bg-[#fafafa] px-6 md:px-8">
                <div className="container max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black mb-8"
                    >
                        Get in <span className="text-[#4f6f19]">Touch</span>
                    </motion.h1>
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
                        Whether you want to request a sample, join the waitlist, or just say hello — we're here.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="container px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-black mb-12">Madugai Desk</h2>
                            <div className="space-y-10">
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 bg-[#4f6f19]/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-[#4f6f19]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">Call Us</p>
                                        <p className="text-xl font-bold">+91 8903535222</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 bg-[#4f6f19]/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-[#4f6f19]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">Email us</p>
                                        <p className="text-xl font-bold">support@madugai.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 bg-[#4f6f19]/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-[#4f6f19]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">Visit Us</p>
                                        <p className="text-xl font-bold">Madugai Agro Product</p>
                                        <p className="text-gray-600">No.176A, Padasalai Street, Padiyampakkam</p>
                                        <p className="text-gray-600">Walajapet, Ranipet, Tamil Nadu - 632513.</p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://wa.me/918903535222"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-16 p-8 bg-black text-white flex items-center justify-between hover:bg-zinc-800 transition-all cursor-pointer"
                            >
                                <div>
                                    <h4 className="font-bold mb-2">WhatsApp Support</h4>
                                    <p className="text-white/60 text-sm">Instant response for our subscribers.</p>
                                </div>
                                <MessageCircle className="w-10 h-10 text-[#25D366]" />
                            </a>
                        </div>

                        {/* Form */}
                        <div className="bg-white p-10 border border-gray-100">
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">FullName</label>
                                        <input type="text" className="w-full bg-[#fafafa] border-none p-5 focus:ring-2 focus:ring-[#4f6f19]" placeholder="Your name" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Phone</label>
                                        <input type="tel" className="w-full bg-[#fafafa] border-none p-5 focus:ring-2 focus:ring-[#4f6f19]" placeholder="Your phone" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
                                    <select className="w-full bg-[#fafafa] border-none p-5 focus:ring-2 focus:ring-[#4f6f19]">
                                        <option>Request a Sample</option>
                                        <option>Join the Waitlist</option>
                                        <option>General Inquiry</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                                    <textarea rows={5} className="w-full bg-[#fafafa] border-none p-5 focus:ring-2 focus:ring-[#4f6f19]" placeholder="How can we help?"></textarea>
                                </div>
                                <button className="w-full bg-black text-white font-black py-6 hover:bg-zinc-800 transition-all uppercase tracking-widest">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="relative">
                <div className="bg-[#4f6f19] py-12 px-8">
                    <div className="container max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Locate Us</h2>
                        <p className="text-white/80">
                            No.176A, Padasalai Street, Padiyampakkam, Walajapet, Ranipet, Tamil Nadu - 632513
                        </p>
                    </div>
                </div>
                <div className="w-full h-[500px]">
                    <iframe
                        src="https://www.google.com/maps?q=Padiyampakkam,+Walajapet,+Ranipet,+Tamil+Nadu+632513&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Madugai Location"
                    ></iframe>
                </div>
            </section>

            <Footer />
        </main>
    );
}
