"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Star, Smartphone, Mail, ChevronRight, Bell, Clock, Truck, Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AppPromo() {
    const { t } = useLanguage();

    return (
        <section className="bg-[#4b6e48] py-16 md:py-24 overflow-hidden relative">
            <div className="container relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
                    {/* Left - App Mockup with Feature Cards */}
                    <div className="lg:w-1/2 flex justify-center relative">
                        <div className="relative">
                            {/* App Mockup */}
                            <img
                                src="/images/products.png"
                                alt="Madugai App"

                                className="max-w-full h-auto relative z-10"

                            />
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4f6f19]/10 border border-[#4f6f19]/20 text-[#4f6f19] text-xs font-bold uppercase tracking-widest mb-6 md:mb-8">
                            <Smartphone className="w-4 h-4" />
                            {t("app.badge")}
                        </div>

                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6 md:mb-8 leading-[1.1]">
                            {t("app.title1")} <br className="hidden md:block" />
                            <span>{t("app.title2")}</span>
                        </h2>

                        <p className="text-white/60 font-montserrat text-base md:text-lg leading-relaxed mb-10 md:mb-12 max-w-xl">
                            {t("app.subtitle")}
                        </p>

                        {/* App Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
                            {[
                                { icon: Smartphone, title: "app.f1.title", desc: "app.f1.desc" },
                                { icon: MessageCircle, title: "app.f2.title", desc: "app.f2.desc" },
                                { icon: Mail, title: "app.f3.title", desc: "app.f3.desc" },
                                { icon: Star, title: "app.f4.title", desc: "app.f4.desc" },
                            ].map((feature, index) => (
                                <div key={index} className="flex items-start gap-4 group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white flex items-center justify-center flex-shrink-0  transition-all duration-300">
                                        <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-[#4b6e48]  transition-colors" />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold font-montserrat text-sm md:text-base mb-1 tracking-tight">{t(feature.title)}</div>
                                        <div className="text-white/40 text-xs md:text-sm font-montserrat leading-tight">{t(feature.desc)}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Download & Rating */}
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-wrap gap-8 items-center">
                                <Link href="https://play.google.com/store/apps/details?id=com.madugai.user" target="_blank" className="hover:scale-110 transition-transform opacity-60 hover:opacity-100">
                                    <Image src="/images/others/play_logo.png" alt="Play Store" width={160} height={50} className="h-12 w-auto object-contain" />
                                </Link>
                                <Link href="https://apps.apple.com/in/app/madugai/id6800743100" target="_blank" className="hover:scale-110 transition-transform opacity-60 hover:opacity-100">
                                    <Image src="/images/others/ios.png" alt="App Store" width={160} height={50} className="h-12 w-auto object-contain" />
                                </Link>

                                {/* AMCU Download Button */}
                                <a
                                    href="/Mobile AMCU.apk"
                                    download
                                    className="group flex items-center gap-3 bg-white/5 hover:bg-white text-white hover:text-[#4b6e48] border border-white/10 hover:border-white px-6 py-2.5 transition-all duration-300 backdrop-blur-sm"
                                >
                                    <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <div className="flex flex-col items-start leading-none text-left">
                                        <span className="text-[10px] uppercase tracking-wider mb-1 opacity-60 group-hover:opacity-80 transition-opacity">{t("app.directDownload")}</span>
                                        <span className="text-sm font-bold">{t("app.amcuDownload")}</span>
                                    </div>
                                </a>
                            </div>



                            {/* SMS Option */}
                            <div className="pt-4 border-t border-white/5">
                                <Link
                                    href="#sms"
                                    className="inline-flex items-center gap-2 text-white/40 hover:text-[#4f6f19] transition-colors text-sm font-montserrat group"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    <span>{t("app.sms")}</span>
                                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
