"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube, ArrowUp, Smartphone, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const XIcon = ({ size = 24 }: { size?: number | string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

export default function Footer() {
    const { t } = useLanguage();
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
                    {t("footer.returnTop")}
                </button>
            </div>

            {/* Main Footer */}
            <div className="container py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* About Column */}
                    <div>
                        <Image
                            src="/images/others/logo.png"
                            alt="Madugai Logo"
                            width={180}
                            height={60}
                            className="h-16 w-auto mb-6"
                        />
                        <p className="text-white/70 font-montserrat leading-relaxed mb-6">
                            {t("footer.about")}
                        </p>
                        <Image
                            src="/images/footer_brand_logo.png"
                            alt="Milk, made right"
                            width={150}
                            height={50}
                            className="h-12 w-auto mb-2"
                        />
                        <div className="text-[#a4d45d] font-bold text-lg font-montserrat italic">
                            {t("footer.tagline")}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h5 className="text-white text-lg font-bold font-montserrat mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-gradient-to-r from-[#4f6f19] to-[#a4d45d]" />
                            {t("footer.quickLinks")}
                        </h5>
                        <ul className="space-y-3 font-montserrat text-sm">
                            {[
                                { name: "nav.home", href: "/" },
                                { name: "nav.mapStandard", href: "/map-standard" },
                                { name: "nav.products", href: "/our-products" },
                                { name: "nav.howWeWork", href: "/how-we-work" },
                                { name: "nav.store", href: "https://madugai.trakop.com/", external: true },
                                { name: "nav.transparency", href: "/transparency" },
                                { name: "nav.faq", href: "/faq" },
                                { name: "nav.subscription", href: "/subscription" },
                                { name: "nav.contact", href: "/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        target={(link as any).external ? "_blank" : undefined}
                                        className="text-white/70 hover:text-white hover:pl-2 transition-all inline-flex items-center gap-2"
                                    >
                                        {t(link.name)}
                                        {(link as any).external && <span className="text-xs">↗</span>}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h5 className="text-white text-lg font-bold font-montserrat mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-gradient-to-r from-[#4f6f19] to-[#a4d45d]" />
                            {t("footer.connect")}
                        </h5>

                        {/* Social Icons */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {/* WhatsApp */}
                            <Link
                                href="https://whatsapp.com/channel/0029Vb9AmBI4inotDBsoZP0z"
                                target="_blank"
                                className="w-10 h-10 flex items-center justify-center text-white transition-all hover:scale-110"
                                style={{ backgroundColor: "#25d366" }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </Link>
                            {/* Other Social Icons */}
                            {[
                                { href: "https://www.facebook.com/madugaimilk", color: "#1877f2", icon: Facebook },
                                { href: "https://x.com/madugaimilk", color: "#000000", icon: XIcon },
                                { href: "https://www.linkedin.com/company/madugaimilk", color: "#0077b5", icon: Linkedin },
                                { href: "https://www.instagram.com/madugaimilk", color: "#c13584", icon: Instagram },
                                { href: "https://www.youtube.com/@madugaimilk", color: "#ed1d24", icon: Youtube },
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
                            <Link href="https://play.google.com/store/apps/details?id=com.madugai.user&hl=en_IN" target="_blank" className="hover:scale-105 transition-transform">
                                <Image src="/images/get-it-on-google-play.png" alt="Get it on Google Play" width={135} height={40} className="h-10 w-auto" />
                            </Link>
                            <Link href="https://apps.apple.com/in/app/madugai" target="_blank" className="hover:scale-105 transition-transform">
                                <Image src="/images/download_on_the_app_store_badge-logo_brandlogos.net_zyp2x.png" alt="Download on App Store" width={120} height={40} className="h-10 w-auto" />
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
                            © {new Date().getFullYear()} Madugai MAP. {t("footer.rights")}
                        </p>
                        <div className="flex items-center gap-6 text-white/50 text-sm">
                            <Link href="/legal/tou" className="hover:text-white transition-colors">{t("footer.terms")}</Link>
                            <Link href="/legal/privacy" className="hover:text-white transition-colors">{t("footer.privacy")}</Link>
                            <Link href="/legal/refund" className="hover:text-white transition-colors">{t("footer.refund")}</Link>
                            <Link href="/legal/delivery" className="hover:text-white transition-colors">{t("footer.delivery")}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
