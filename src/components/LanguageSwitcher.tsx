"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center bg-zinc-100/80 rounded-full p-1 border border-zinc-200/50">
            <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1.5 text-xs font-bold font-montserrat rounded-full transition-all ${language === "en"
                        ? "bg-white text-zinc-900 shadow-sm"
                        : "text-zinc-500 hover:text-zinc-700"
                    }`}
            >
                EN
            </button>
            <button
                onClick={() => setLanguage("ta")}
                className={`px-3 py-1.5 text-xs font-bold font-montserrat rounded-full transition-all ${language === "ta"
                        ? "bg-white text-zinc-900 shadow-sm"
                        : "text-zinc-500 hover:text-zinc-700"
                    }`}
            >
                தமிழ்
            </button>
        </div>
    );
}
