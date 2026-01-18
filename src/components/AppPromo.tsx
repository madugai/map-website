"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Play, MessageCircle, Star, Smartphone, Mail, ChevronRight } from "lucide-react";

export default function AppPromo() {
    return (
        <section className="bg-zinc-950 py-12 md:py-20 overflow-hidden relative">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4f6f19]/10 rounded-full blur-[120px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4f6f19]/5 rounded-full blur-[120px] -ml-64 -mb-64" />

            <div className="container relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* App Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 flex justify-center relative"
                    >
                        <div className="relative group">
                            {/* Decorative Glow */}
                            <div className="absolute inset-0 bg-[#4f6f19]/20 rounded-full blur-3xl group-hover:bg-[#4f6f19]/30 transition-colors duration-500" />

                            <div className="animate-float-gentle relative">
                                <Image
                                    src="/images/others/appmockup.png"
                                    alt="Madugai App"
                                    width={380}
                                    height={500}
                                    className="max-w-full h-auto"
                                    priority
                                />
                            </div>

                            {/* Interactive Play Indicator */}
                            <Link
                                href="https://www.youtube.com/watch?v=zZ9Ph_8gXqY"
                                target="_blank"
                                className="absolute inset-0 flex items-center justify-center group/play"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                                >
                                    <div className="w-14 h-14 bg-white flex items-center justify-center">
                                        <Play className="w-6 h-6 text-[#4f6f19] fill-[#4f6f19] ml-1" />
                                    </div>
                                </motion.div>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4f6f19]/10 border border-[#4f6f19]/20 text-[#4f6f19] text-xs font-bold uppercase tracking-widest mb-8">
                            <Smartphone className="w-4 h-4" />
                            The Madugai App
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-8 leading-[1.1]">
                            Control your daily <br />
                            <span className="text-[#4f6f19]">milk subscription.</span>
                        </h2>

                        <p className="text-white/60 font-montserrat text-lg leading-relaxed mb-12 max-w-xl">
                            Experience the future of milk delivery. Manage orders, track deliveries in real-time,
                            and maintain your account with a tap. Purity meets convenience.
                        </p>

                        {/* App Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                            {[
                                { icon: Smartphone, title: "Effortless Control", desc: "Pause or adjust daily" },
                                { icon: MessageCircle, title: "Real-time Alerts", desc: "Know when it arrives" },
                                { icon: Mail, title: "Smart Billing", desc: "Detailed digital receipts" },
                                { icon: Star, title: "Priority Support", desc: "Dedicated help desk" },
                            ].map((feature, index) => (
                                <div key={index} className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4f6f19] transition-all duration-300">
                                        <feature.icon className="w-5 h-5 text-[#4f6f19] group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold font-montserrat text-base mb-1 tracking-tight">{feature.title}</div>
                                        <div className="text-white/40 text-sm font-montserrat">{feature.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Download & Rating */}
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-wrap gap-8 items-center">
                                <Link href="https://play.google.com/store/apps/details?id=com.madugai.app" target="_blank" className="hover:scale-110 transition-transform opacity-60 hover:opacity-100">
                                    <Image src="/images/others/play_logo.png" alt="Play Store" width={160} height={50} className="h-12 w-auto object-contain" />
                                </Link>
                                <Link href="https://apps.apple.com/in/app/madugai" target="_blank" className="hover:scale-110 transition-transform opacity-60 hover:opacity-100">
                                    <Image src="/images/others/ios.png" alt="App Store" width={160} height={50} className="h-12 w-auto object-contain" />
                                </Link>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center overflow-hidden">
                                            <div className="text-[10px] text-white/40">{i}0k+</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm">
                                    <div className="flex text-yellow-500 mb-1">
                                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3 h-3 fill-current" />)}
                                    </div>
                                    <div className="text-white/60 font-montserrat tracking-wide">
                                        Loved by <span className="text-white font-bold">50,000+</span> households
                                    </div>
                                </div>
                            </div>

                            {/* SMS Option */}
                            <div className="pt-4 border-t border-white/5">
                                <Link
                                    href="#sms"
                                    className="inline-flex items-center gap-2 text-white/40 hover:text-[#4f6f19] transition-colors text-sm font-montserrat group"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    <span>Get download link via SMS</span>
                                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
