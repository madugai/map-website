"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
    { name: "The MAP Standard", href: "/map-standard" },
    { name: "Products", href: "/products" },
    { name: "How We Work", href: "/how-we-work" },
    { name: "Subscription", href: "/subscription" },
    { name: "Transparency", href: "/transparency" },
    { name: "FAQ", href: "/faq" },
    { name: "Shop", href: "https://madugai.trakop.com/", external: true },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-white py-4"
                }`}
        >
            <div className="container">
                <div className="flex items-center justify-between">
                    {/* Mobile Logo & Menu Button */}
                    <div className="lg:hidden flex items-center justify-between w-full">
                        <Link href="/" className="inline-block transition-transform duration-300 hover:scale-105">
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
                            className="p-3 text-zinc-900"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    {/* Desktop Navigation - CENTERED LOGO LAYOUT */}
                    <div className="hidden lg:flex items-center justify-between w-full">
                        {/* Left Side Links */}
                        <div className="flex items-center bg-zinc-100/50 rounded-full p-1.5 border border-zinc-200/50">
                            {navLinks.slice(0, 4).map((link) => (
                                <NavLink key={link.name} link={link} />
                            ))}
                        </div>

                        {/* Center Logo */}
                        <div className="flex-shrink-0 mx-8">
                            <Link href="/" className="inline-block transition-transform duration-300 hover:scale-105">
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

                        {/* Right Side Links & CTA */}
                        <div className="flex items-center gap-6">
                            <div className="flex items-center bg-zinc-100/50 rounded-full p-1.5 border border-zinc-200/50">
                                {navLinks.slice(4).map((link) => (
                                    <NavLink key={link.name} link={link} />
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

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden fixed inset-0 bg-white z-40 pt-24"
                    >
                        <div className="flex flex-col space-y-2 p-8">
                            <Link
                                href="/"
                                className="text-2xl font-montserrat font-bold text-zinc-900 py-4 border-b border-zinc-100"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    target={link.external ? "_blank" : undefined}
                                    rel={link.external ? "noopener noreferrer" : undefined}
                                    className="text-2xl font-montserrat font-bold text-zinc-900 py-4 border-b border-zinc-100 flex items-center justify-between"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-8">
                                <Link
                                    href="/contact"
                                    className="bg-zinc-900 text-white font-bold py-5 px-12 block text-center text-xl"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

function NavLink({ link }: { link: { name: string; href: string; external?: boolean } }) {
    return (
        <Link
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="group relative font-montserrat font-bold text-[13px] text-zinc-800 px-5 py-2 hover:bg-white hover:shadow-sm rounded-full transition-all flex items-center gap-1.5 whitespace-nowrap"
        >
            {link.name}
        </Link>
    );
}
