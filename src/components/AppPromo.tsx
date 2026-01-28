"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Star, Smartphone, Mail, ChevronRight, Bell, Clock, Truck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AppPromo() {
    const { t } = useLanguage();

    return (
        <section className="bg-zinc-950 py-16 md:py-24 overflow-hidden relative">
            <div className="container relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
                    {/* Left - App Mockup with Feature Cards */}
                    <div className="lg:w-1/2 flex justify-center relative">
                        <div className="relative">
                            {/* App Mockup */}
                            <Image
                                src="/images/others/appmockup.png"
                                alt="Madugai App"
                                width={320}
                                height={450}
                                className="max-w-full h-auto relative z-10"
                                priority
                            />

                            {/* Floating Card - Left */}
                            <div className="absolute -left-4 md:-left-16 top-20 bg-white p-4 shadow-2xl z-20 hidden md:block">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[#4f6f19]/10 flex items-center justify-center">
                                        <Truck className="w-5 h-5 text-[#4f6f19]" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-montserrat">{t("app.float1.label")}</p>
                                        <p className="text-sm font-bold text-gray-900 font-montserrat">{t("app.float1.value")}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Card - Right */}
                            <div className="absolute -right-4 md:-right-12 top-48 bg-[#4f6f19] p-4 shadow-2xl z-20 hidden md:block">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/20 flex items-center justify-center">
                                        <Bell className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/70 font-montserrat">{t("app.float2.label")}</p>
                                        <p className="text-sm font-bold text-white font-montserrat">{t("app.float2.value")}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Card - Bottom */}
                            <div className="absolute -left-4 md:-left-8 bottom-16 bg-zinc-900 border border-white/10 p-4 shadow-2xl z-20 hidden md:block">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-[#4f6f19]" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/50 font-montserrat">{t("app.float3.label")}</p>
                                        <p className="text-sm font-bold text-white font-montserrat">{t("app.float3.value")}</p>
                                    </div>
                                </div>
                            </div>
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
                            <span className="text-[#4f6f19]">{t("app.title2")}</span>
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
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4f6f19] transition-all duration-300">
                                        <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-[#4f6f19] group-hover:text-white transition-colors" />
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
                                <Link href="https://play.google.com/store/apps/details?id=com.madugai.user&hl=en_IN" target="_blank" className="hover:scale-110 transition-transform opacity-60 hover:opacity-100">
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
                                        {t("app.social")}
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
