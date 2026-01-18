"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "The MAP Standard", href: "/map-standard" },
    { name: "Products", href: "/our-products" },
    { name: "How We Work", href: "/how-we-work" },
    { name: "Shop", href: "https://madugai.trakop.com/", external: true },
    { name: "Transparency", href: "/transparency" },
    { name: "FAQ", href: "/faq" },
    { name: "Subscription", href: "/subscription" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const closeMenu = () => setIsOpen(false);

    return (
        <div>
            <nav
                className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
                    scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white py-4"
                }`}
            >
                <div className="container">
                    <div className="flex items-center justify-between">
                        {/* Mobile Logo & Menu Button */}
                        <div className="lg:hidden flex items-center justify-between w-full">
                            <Link href="/" className="inline-block">
                                <Image
                                    src="/images/others/logo.png"
                                    alt="Madugai Logo"
                                    width={180}
                                    height={60}
                                    className="h-14 w-auto"
                                    priority
                                />
                            </Link>
                            <button
                                type="button"
                                className="p-3 text-zinc-900 bg-white rounded-md shadow-sm"
                                onClick={() => setIsOpen(true)}
                            >
                                <Menu size={28} />
                            </button>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center justify-between w-full">
                            <div className="flex items-center bg-zinc-100/50 rounded-full p-1.5 border border-zinc-200/50">
                                {navLinks.slice(0, 4).map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        target={link.external ? "_blank" : undefined}
                                        rel={link.external ? "noopener noreferrer" : undefined}
                                        className="font-montserrat font-bold text-[13px] text-zinc-800 px-5 py-2 hover:bg-white hover:shadow-sm rounded-full transition-all whitespace-nowrap"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            <div className="flex-shrink-0 mx-8">
                                <Link href="/" className="inline-block">
                                    <Image
                                        src="/images/others/logo.png"
                                        alt="Madugai Logo"
                                        width={220}
                                        height={73}
                                        className="h-20 w-auto"
                                        priority
                                    />
                                </Link>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="flex items-center bg-zinc-100/50 rounded-full p-1.5 border border-zinc-200/50">
                                    {navLinks.slice(4).map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="font-montserrat font-bold text-[13px] text-zinc-800 px-5 py-2 hover:bg-white hover:shadow-sm rounded-full transition-all whitespace-nowrap"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                                <Link
                                    href="/contact"
                                    className="bg-zinc-900 text-white font-bold py-3 px-8 rounded-full hover:bg-black transition-all shadow-lg text-sm"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="lg:hidden fixed inset-0 bg-white z-[99999]" style={{ overflow: 'auto' }}>
                    <div className="flex items-center justify-between p-4 border-b border-zinc-100">
                        <Link href="/" onClick={closeMenu}>
                            <Image
                                src="/images/others/logo.png"
                                alt="Madugai Logo"
                                width={140}
                                height={46}
                                className="h-12 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            className="p-3 text-zinc-900"
                            onClick={closeMenu}
                        >
                            <X size={28} />
                        </button>
                    </div>

                    <div className="p-6">
                        <Link
                            href="/"
                            className="block text-lg font-montserrat font-bold text-zinc-900 py-4 border-b border-zinc-100"
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                target={link.external ? "_blank" : undefined}
                                rel={link.external ? "noopener noreferrer" : undefined}
                                className="block text-lg font-montserrat font-bold text-zinc-900 py-4 border-b border-zinc-100"
                                onClick={closeMenu}
                            >
                                {link.name}
                                {link.external && (
                                    <span className="text-xs text-[#4f6f19] ml-2">↗</span>
                                )}
                            </Link>
                        ))}
                        <div className="pt-6">
                            <Link
                                href="/contact"
                                className="bg-[#4f6f19] text-white font-bold py-4 px-8 block text-center text-base"
                                onClick={closeMenu}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
