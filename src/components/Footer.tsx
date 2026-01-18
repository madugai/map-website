"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp, Smartphone, Mail, Phone } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer-gradient-border bg-gradient-to-b from-[#1a1f24] to-[#111418] text-white">
            {/* Return to Top */}
            <div className="py-6 text-center border-b border-white/10">
                <button
                    onClick={scrollToTop}
                    className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
                >
                    <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                    Return to Top
                </button>
            </div>

            {/* Main Footer */}
            <div className="container py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* About Column */}
                    <div>
                        <h5 className="text-white text-lg font-bold font-montserrat mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-gradient-to-r from-[#4f6f19] to-[#a4d45d]" />
                            About Us
                        </h5>
                        <p className="text-white/70 font-montserrat leading-relaxed mb-6">
                            Madugai exists to provide pure, unadulterated cow milk without industrial shortcuts. We believe in quality, integrity, and the sacred promise of purity.
                        </p>
                        <div className="text-[#a4d45d] font-bold text-lg font-montserrat mb-6 italic">
                            "Milk, made right."
                        </div>
                        <div className="flex items-center gap-3">
                            <Image
                                src="/images/others/logo.png"
                                alt="Madugai Logo"
                                width={150}
                                height={50}
                                className="h-12 w-auto grayscale brightness-200"
                            />
                            <div>
                                <div className="font-bold text-white font-montserrat text-xl">Madugai</div>
                                <div className="text-sm text-[#a4d45d]">Purity First</div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h5 className="text-white text-lg font-bold font-montserrat mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-gradient-to-r from-[#4f6f19] to-[#a4d45d]" />
                            Quick Links
                        </h5>
                        <ul className="space-y-3 font-montserrat text-sm">
                            {[
                                { name: "Home", href: "/" },
                                { name: "The MAP Standard", href: "/map-standard" },
                                { name: "Our Milk", href: "/our-milk" },
                                { name: "How We Work", href: "/how-we-work" },
                                { name: "Subscription", href: "/subscription" },
                                { name: "Transparency", href: "/transparency" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-white hover:pl-2 transition-all inline-flex items-center gap-2"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Know Our Milk */}
                    <div>
                        <h5 className="text-white text-lg font-bold font-montserrat mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-gradient-to-r from-[#4f6f19] to-[#a4d45d]" />
                            Know Our Milk
                        </h5>
                        <ul className="space-y-3 font-montserrat text-sm">
                            {[
                                { name: "Milk Meter", href: "/milk-meter" },
                                { name: "Customer Awareness", href: "/customer-awareness-program" },
                                { name: "Customer Policies", href: "/customer-policies" },
                                { name: "Areas We Serve", href: "/areas-we-serve" },
                                { name: "Refer & Earn", href: "/refer-and-earn" },
                                { name: "Bulk Milk", href: "/forms/bulk-milk", badge: true },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-white hover:pl-2 transition-all inline-flex items-center gap-2"
                                    >
                                        {link.name}
                                        {link.badge && (
                                            <span className="bg-[#4f6f19] text-white text-[10px] px-1.5 py-0.5 font-bold uppercase">
                                                NEW
                                            </span>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h5 className="text-white text-lg font-bold font-montserrat mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-gradient-to-r from-[#4f6f19] to-[#a4d45d]" />
                            Connect With Us
                        </h5>

                        {/* Social Icons */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {[
                                { href: "https://wa.me/918903535222", color: "#25d366", icon: Smartphone },
                                { href: "https://facebook.com/Madugai", color: "#1877f2", icon: Facebook },
                                { href: "https://twitter.com/Madugai", color: "#1da1f2", icon: Twitter },
                                { href: "https://linkedin.com/company/madugai/", color: "#0077b5", icon: Linkedin },
                                { href: "https://instagram.com/madugai/", color: "#c13584", icon: Instagram },
                                { href: "https://youtube.com/c/Madugai", color: "#ed1d24", icon: Youtube },
                            ].map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    className="w-10 h-10 flex items-center justify-center text-white transition-all hover:scale-110"
                                    style={{ backgroundColor: social.color }}
                                >
                                    <social.icon size={18} />
                                </Link>
                            ))}
                        </div>

                        {/* App Store Links */}
                        <div className="flex gap-3 mb-6">
                            <Link href="https://play.google.com/store/apps/details?id=com.madugai.app" target="_blank" className="hover:scale-105 transition-transform">
                                <Image src="/images/others/play_logo.png" alt="Play Store" width={120} height={36} className="h-10 w-auto" />
                            </Link>
                            <Link href="https://apps.apple.com/in/app/madugai" target="_blank" className="hover:scale-105 transition-transform">
                                <Image src="/images/others/ios.jpg" alt="App Store" width={120} height={36} className="h-10 w-auto" />
                            </Link>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-3 text-white/70 text-sm">
                            <div className="flex items-center gap-2">
                                <Phone size={14} className="text-[#4f6f19]" />
                                <span>+91 8903535222</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail size={14} className="text-[#4f6f19]" />
                                <span>support@madugai.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 py-6">
                <div className="container">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                        <p className="text-white/50 text-sm font-montserrat">
                            © {new Date().getFullYear()} Madugai. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-white/50 text-sm">
                            <Link href="/legal/tou" className="hover:text-white transition-colors">Terms of Use</Link>
                            <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="/legal/refund" className="hover:text-white transition-colors">Refund Policy</Link>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-white/40 text-xs">
                            Built with ❤️ by{" "}
                            <Link href="https://simplestweb.in" className="text-[#4f6f19] hover:underline">SimplestWeb.in</Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
