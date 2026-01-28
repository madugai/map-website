"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ta";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
    en: {
        // Navbar
        "nav.mapStandard": "The MAP Standard",
        "nav.products": "Products",
        "nav.howWeWork": "How We Work",
        "nav.store": "Store",
        "nav.transparency": "Transparency",
        "nav.faq": "FAQ",
        "nav.subscription": "Subscription",
        "nav.contact": "Contact",
        "nav.home": "Home",

        // Hero
        "hero.title1": "Cow Milk.",
        "hero.title2": "Without",
        "hero.title3": "Industrial Shortcuts.",
        "hero.description": "Collected daily. Chilled immediately. Delivered fresh in glass bottles. No dilution. No preservatives. No mass processing.",
        "hero.cta": "Request a Sample",
        "hero.scroll": "Scroll",

        // Pricing
        "pricing.feature1": "Free Home delivery",
        "pricing.feature2": "Assured delivery time by 7.30am",
        "pricing.feature3": "100% cow's milk",
        "pricing.feature4": "Free from hormones",
        "pricing.card1.title": "Half a litre. Full of goodness.",
        "pricing.card1.subtitle": "Perfect for light users or solo sippers",
        "pricing.card1.price": "40",
        "pricing.card1.monthly": "~₹1240/month",
        "pricing.card2.title": "One litre, full satisfaction.",
        "pricing.card2.subtitle": "Ideal for families or daily milk lovers",
        "pricing.card2.price": "76",
        "pricing.card2.monthly": "~₹2356/month",
        "pricing.cta": "Book a free trial",
        "pricing.bottom": "Subscriptions are prepaid and billed monthly. Simple, transparent, and flexible.",

        // Products
        "products.milk.title": "Pure Cow Milk",
        "products.milk.desc": "Collected daily from selected local farms. Chilled immediately and delivered fresh every morning in reusable glass bottles.",
        "products.ghee.title": "Pure Cow Ghee",
        "products.ghee.desc": "Prepared from carefully handled milk under controlled conditions. No artificial additives. No enhancement. No shortcuts. Clarity and consistency over volume.",
        "products.paneer.title": "Fresh Paneer",
        "products.paneer.desc": "Prepared in small batches and handled under clean, controlled conditions. Freshness and hygiene are prioritised at every step.",
        "products.coconut.title": "Tender Coconut",
        "products.coconut.desc": "Sourced fresh and delivered as-is. No processing. No alteration. No intervention.",
        "products.badge.bestSeller": "Best Seller",
        "products.badge.new": "New",
        "products.badge.seasonal": "Seasonal",
        "products.viewDetails": "View Details",
        "products.exploreAll": "Explore All Products",

        // About
        "about.heading1": "Milk today is designed for scale, shelf life, and convenience — ",
        "about.heading2": "not integrity.",
        "about.body": "Madugai exists to do the opposite. We operate with discipline and restraint, because real quality cannot be rushed, diluted, or industrialized.",
        "about.quote": "\"Try Madugai once. Let the quality speak for itself.\"",

        // Features
        "features.pure.title": "100% Pure",
        "features.pure.text": "Direct from farms, no additives or preservatives",
        "features.fresh.title": "Daily Fresh",
        "features.fresh.text": "Collected, chilled, and delivered within 24 hours",
        "features.glass.title": "Glass Only",
        "features.glass.text": "Traditional glass bottles for the purest taste",
        "features.local.title": "Local First",
        "features.local.text": "Supporting selected small-scale ethical farms",

        // Purity (MAP Standard)
        "purity.badge": "Operating Discipline",
        "purity.title": "The MAP Standard",
        "purity.subtitle": "Every litre of milk at Madugai follows a defined operating discipline governed by the MAP Standard.",
        "purity.cta": "View the MAP Standard",
        "purity.viewTransparency": "View Transparency",
        "purity.f1.title": "Daily Milk Collection",
        "purity.f1.desc": "Freshly collected every day from selected local farms that meet defined handling and hygiene expectations.",
        "purity.f2.title": "Immediate Chilling",
        "purity.f2.desc": "Milk is chilled immediately after collection. No prolonged exposure, no waiting period.",
        "purity.f3.title": "Glass Bottle Delivery",
        "purity.f3.desc": "Delivered exclusively in reusable glass bottles. No plastic contact by design.",
        "purity.f4.title": "Controlled Supply",
        "purity.f4.desc": "Supply is intentionally limited. Onboarding stops when capacity is full to maintain consistency.",
        "purity.f5.title": "Pure Integrity",
        "purity.f5.desc": "No additives. No enhancement. No shortcuts. These are not features, these are operating rules.",
        "purity.badge1.label": "FSSAI Licensed",
        "purity.badge1.sub": "Certified Facility",
        "purity.badge2.label": "Regular Testing",
        "purity.badge2.sub": "Quality Assured",
        "purity.badge3.label": "Cold-chain",
        "purity.badge3.sub": "Strict Discipline",

        // How We Work
        "hww.badge": "Our Process",
        "hww.title1": "How We ",
        "hww.title2": "Work",
        "hww.subtitle": "A defined operating discipline Governed by the MAP Standard. Every single day.",
        "hww.s1.title": "Daily Collection",
        "hww.s1.desc": "Milk is collected daily from selected local farms in SS 304 food-grade stainless steel cans.",
        "hww.s2.title": "Immediate Chilling",
        "hww.s2.desc": "Chilled immediately after collection. No prolonged exposure, no waiting periods.",
        "hww.s3.title": "Clean Handling",
        "hww.s3.desc": "Handled under strict, clean, and controlled conditions. No industrial shortcuts.",
        "hww.s4.title": "Glass Delivery",
        "hww.s4.desc": "Delivered fresh every morning exclusively in reusable glass bottles. No plastic contact.",
        "hww.s5.title": "Empty Collection",
        "hww.s5.desc": "Empty bottles are collected during the next delivery for cleaning and reuse.",

        // Stats
        "stats.badge": "Our Impact",
        "stats.title": "Growing Together with Chennai",
        "stats.customers": "Happy Customers",
        "stats.liters": "Liters Daily",
        "stats.dealers": "Trusted Dealers",
        "stats.areas": "Areas Covered",

        // Reviews
        "reviews.badge": "Testimonials",
        "reviews.title": "What Our Customers Say",
        "reviews.subtitle1": "Trusted by over ",
        "reviews.subtitle2": "50,000+",
        "reviews.subtitle3": " families who believe in quality without shortcuts.",
        "reviews.verified": "Verified Resident",
        "reviews.readMore": "Read More Testimonials",
        "reviews.r1.name": "Yuva Raj M",
        "reviews.r1.text": "Dedicated people who delivered milk even during lockdown without a miss. Highly recommended for families!",
        "reviews.r2.name": "Priyanka Siva",
        "reviews.r2.text": "On time delivery, milk quality is very good. Usually they deliver between 6 to 7 AM sharp.",
        "reviews.r3.name": "Vinoth Kumar",
        "reviews.r3.text": "Worth the price and having a smooth payment and order placement in the app too. Great experience!",
        "reviews.r4.name": "Lakshmi",
        "reviews.r4.text": "Milk quality is so good, my 2 year old baby loves it. It doesn't smell like other cow milk brands.",

        // FAQ
        "faq.badge": "Support",
        "faq.title": "Frequently Asked Questions",
        "faq.subtitle": "Everything you need to know about Madugai milk and services.",
        "faq.stillQuestions": "Still have questions? ",
        "faq.contactSupport": "Contact our support team",
        "faq.cat.about": "About Madugai",
        "faq.cat.quality": "Milk & Quality",
        "faq.cat.delivery": "Delivery",
        "faq.cat.payments": "Payments",
        "faq.cat.bottles": "Glass Bottles",
        // Subset of FAQs for brevity in this step, can add more if needed
        "faq.q1": "What is Madugai?",
        "faq.a1": "Madugai is a farm-to-home milk delivery service that delivers fresh, pure cow milk in reusable glass bottles. We follow a strict operating discipline to ensure every litre of milk reaches you exactly as it should be — without dilution, without preservatives, and without industrial shortcuts.",
        "faq.q2": "Where does Madugai operate?",
        "faq.a2": "We currently operate in select areas of Vellore district, Tamil Nadu. Our delivery is limited to ensure we maintain full control over quality and freshness.",
        "faq.q3": "Is Madugai certified?",
        "faq.a3": "Yes. Madugai operates under a valid FSSAI license (Lic. No: 12425030000917). We follow all regulatory guidelines for milk handling and delivery.",

        // App Promo
        "app.badge": "The Madugai App",
        "app.title1": "Control your daily ",
        "app.title2": "milk subscription.",
        "app.subtitle": "Experience the future of milk delivery. Manage orders, track deliveries in real-time, and maintain your account with a tap. Purity meets convenience.",
        "app.f1.title": "Effortless Control",
        "app.f1.desc": "Pause or adjust daily",
        "app.f2.title": "Real-time Alerts",
        "app.f2.desc": "Know when it arrives",
        "app.f3.title": "Smart Billing",
        "app.f3.desc": "Detailed digital receipts",
        "app.f4.title": "Priority Support",
        "app.f4.desc": "Dedicated help desk",
        "app.social": "Loved by 50,000+ households",
        "app.sms": "Get download link via SMS",
        "app.float1.label": "Today's Delivery",
        "app.float1.value": "Arriving by 7:30 AM",
        "app.float2.label": "Notification",
        "app.float2.value": "Milk delivered!",
        "app.float3.label": "Subscription",
        "app.float3.value": "Paused for tomorrow",

        // Subscription Section
        "sub.badge": "Our Model",
        "sub.title1": "Why We Use ",
        "sub.title2": "Subscription",
        "sub.desc": "Madugai operates on a subscription model by design. This allows us to control sourcing, handling, and delivery without compromise. Quality cannot be maintained through spot buying or irregular demand.",
        "sub.limited.title": "Limited Households",
        "sub.limited.desc": "Madugai serves a limited number of households. Not because we can't grow — but because we refuse to lower standards. When capacity is full, onboarding stops.",
        "sub.waitlist": "Join the Waitlist",
        "sub.valueTitle": "Madugai is for households that value:",
        "sub.v1.title": "Discipline over convenience",
        "sub.v1.text": "Subscription ensures predictable handling.",
        "sub.v2.title": "Consistency over variety",
        "sub.v2.text": "We focus on a small, perfect range.",
        "sub.v3.title": "Quality over discounts",
        "sub.v3.text": "Integrity cannot be discounted.",
        "sub.note": "* If you are looking for occasional or ad-hoc purchases, Madugai may not be the right choice.",
        "sub.b1.title": "Predictable Collection",
        "sub.b1.desc": "Allows us to source only what is needed, ensuring zero wastage and maximum freshness.",
        "sub.b2.title": "Immediate Handling",
        "sub.b2.desc": "Strict timelines for chilling and bottling without any industrial delays.",
        "sub.b3.title": "Controlled Volumes",
        "sub.b3.desc": "We only handle what we can manage perfectly. Quality over quantity.",
        "sub.b4.title": "Consistent Quality",
        "sub.b4.desc": "The same high standards every single morning. Not seasonally, not selectively.",

        // Footer
        "footer.returnTop": "Return to Top",
        "footer.about": "Madugai exists to provide pure, unadulterated cow milk without industrial shortcuts. We believe in quality, integrity, and the sacred promise of purity.",
        "footer.tagline": "\"Milk, made right.\"",
        "footer.quickLinks": "Quick Links",
        "footer.connect": "Connect With Us",
        "footer.rights": "All rights reserved.",
        "footer.terms": "Terms of Use",
        "footer.privacy": "Privacy Policy",
        "footer.refund": "Refund Policy",
        "footer.delivery": "Delivery Policy",

        // MAP Standard Page
        "ms.badge": "Internal Operating Discipline",
        "ms.title": "The MAP Standard",
        "ms.subtitle": "The MAP Standard defines how milk and food products are handled at Madugai. It is an internal operating discipline — not a marketing claim.",
        "ms.philosophy.title": "The Core Principle",
        "ms.philosophy.p1": "Milk quality is not determined at the shelf. It is determined by how strictly it is handled before it reaches the customer.",
        "ms.philosophy.p2": "The MAP Standard exists to remove shortcuts, excess handling, and compromises that dilute integrity. Every decision follows this standard without exception.",
        "ms.rules.r1.title": "Selected Local Farms",
        "ms.rules.r1.desc": "Milk is collected only from selected local farms that meet defined handling and hygiene expectations. Volume is secondary. Consistency is mandatory.",
        "ms.rules.r2.title": "SS 304 Food-Grade Cans",
        "ms.rules.r2.desc": "Milk is collected and transported exclusively in SS 304 food-grade stainless steel milk cans. This prevents contamination and avoids chemical interaction.",
        "ms.rules.r3.title": "Immediate Chilling",
        "ms.rules.r3.desc": "Milk is chilled immediately after collection. There is no prolonged exposure, no waiting period, and no unnecessary movement to preserve natural quality.",
        "ms.rules.r4.title": "No Industrial Shortcuts",
        "ms.rules.r4.desc": "Milk is not processed for extended shelf life or mass circulation. The MAP Standard does not allow shortcuts designed for convenience.",
        "ms.rules.r5.title": "Glass Bottle Delivery",
        "ms.rules.r5.desc": "Milk is delivered only in reusable glass bottles. Plastic contact is avoided by design. Glass preserves integrity and enables controlled circulation.",
        "ms.rules.r6.title": "Controlled Supply",
        "ms.rules.r6.desc": "Supply is intentionally limited. Customer onboarding stops when capacity is reached to ensure consistency, accountability, and quality control.",
        "ms.rules.r7.title": "Daily Enforcement",
        "ms.rules.r7.desc": "The MAP Standard is enforced daily. Not selectively, not seasonally, not when convenient. These are not features; these are operating rules.",
        "ms.viewTransparency": "View Transparency",
        "ms.ethics.quote": "\"If it isn't pure enough for our families, it isn't pure enough for yours.\"",
        "ms.ethics.tagline": "Madugai. Milk, made right.",

        // Our Products Page
        "op.title": "Our Products",
        "op.desc": "Madugai handles a small range of daily-consumption food products. Each product follows the same discipline of sourcing, handling, and delivery defined by the MAP Standard.",

        // How We Work Page
        "hww_page.title": "How We Work",
        "hww_page.desc": "A defined operating discipline Governed by the MAP Standard. Every litre of milk follows this routine daily.",
        "hww_page.discipline.title": "Discipline & Restraint",
        "hww_page.discipline.desc": "At Madugai, we don't rush. We don't dilute. We don't industrialize. Our process is built on daily enforcement of hygiene and handling standards that ensure you receive milk in its most natural state.",
        "hww_page.stats.additives": "Additives",
        "hww_page.stats.foodGrade": "Food Grade",
        "hww_page.stats.glassBottles": "Glass Bottles",

        // FAQ Page
        "faq_page.title": "Questions & Answers",
        "faq_page.desc": "Clarity on how we maintain the MAP Standard and deliver integrity to your doorstep.",

        // Contact Page
        "contact.title": "Get in Touch",
        "contact.desc": "Whether you want to request a sample, join the waitlist, or just say hello — we're here.",
        "contact.desk.title": "Madugai Desk",
        "contact.desk.call": "Call Us",
        "contact.desk.email": "Email us",
        "contact.desk.visit": "Visit Us",
        "contact.wa.title": "WhatsApp Support",
        "contact.wa.desc": "Instant response for our subscribers.",
        "contact.form.name": "FullName",
        "contact.form.namePlaceholder": "Your name",
        "contact.form.phone": "Phone",
        "contact.form.phonePlaceholder": "Your phone",
        "contact.form.subject": "Subject",
        "contact.form.s1": "Request a Sample",
        "contact.form.s2": "Join the Waitlist",
        "contact.form.s3": "General Inquiry",
        "contact.form.message": "Message",
        "contact.form.messagePlaceholder": "How can we help?",
        "contact.form.send": "Send Message",
        "contact.map.title": "Locate Us",

        // Transparency Page
        "trans.badge": "Verification Over Trust",
        "trans.title": "Absolute Transparency",
        "trans.desc": "We provide real-time metric and independent lab validation for every batch we handle. Transparent operations are at the heart of the MAP Standard.",
        "trans.dashboard.verified": "Verified",
        "trans.dashboard.batchStatus": "Today's Batch Status",
        "trans.dashboard.safetySuite": "Adulteration Safety Suite",
        "trans.dashboard.testsPassed": "All Tests Passed",
        "trans.dashboard.negative": "NEGATIVE",
        "trans.metrics.fat.label": "Fat Content",
        "trans.metrics.fat.desc": "Rich and creamy texture",
        "trans.metrics.snf.label": "SNF (Solids-Not-Fat)",
        "trans.metrics.snf.desc": "Essential proteins & minerals",
        "trans.metrics.ph.label": "pH Level",
        "trans.metrics.ph.desc": "Perfectly balanced alkalinity",
        "trans.reports.title": "Verification Reports",
        "trans.reports.desc": "We invite independent scrutiny. Every batch is tested both internally and at third-party certified laboratories.",
        "trans.reports.internal.badge": "Self Analysis",
        "trans.reports.internal.title": "UB Internal Lab",
        "trans.reports.internal.cta": "Open Detailed Analysis",
        "trans.reports.external.badge": "External Audit",
        "trans.reports.external.title": "CTL Independent Lab",
        "trans.reports.external.cta": "View NABL Accreditation",
        "trans.reports.download": "Download Analysis Package",
        "trans.fssai.title": "FSSAI Licensed Facility",
        "trans.fssai.desc": "Our storage and handling facility is fully licensed and follows strict operating disciplines defined by the Food Safety and Standards Authority of India. We maintain clean-handling and cold-chain integrity without exception.",

        // Subscription Page
        "sub_page.title": "Our Subscription Model",
        "sub_page.desc": "Madugai exists for households that value discipline, consistency, and integrity over convenience.",
        "sub_page.note": "\"Real quality cannot be maintained through spot buying or irregular demand.\"",
        "sub_page.checkAvailability": "Check Availability in Your Area",
    },
    ta: {
        // Navbar
        "nav.mapStandard": "MAP தரநிலை",
        "nav.products": "பொருட்கள்",
        "nav.howWeWork": "செயல்படுதல்",
        "nav.store": "கடை",
        "nav.transparency": "வெளிப்படைத்தன்மை",
        "nav.faq": "கேள்விகள்",
        "nav.subscription": "சந்தா",
        "nav.contact": "தொடர்பு",
        "nav.home": "முகப்பு",

        // Hero
        "hero.title1": "பசுவின் பால்.",
        "hero.title2": "எந்த",
        "hero.title3": "கலப்படமும் இன்றி.",
        "hero.description": "தினமும் சேகரிக்கப்படுகிறது. உடனே குளிர்விக்கப்படுகிறது. கண்ணாடி பாட்டில்களில் ஃப்ரெஷ்ஷாக விநியோகிக்கப்படுகிறது. கலப்படம் இல்லை. பாதுகாப்பிற்காக எந்த கெமிக்கலும் சேர்க்கப்படவில்லை.",
        "hero.cta": "மாதிரி பாலுக்கு விண்ணப்பிக்கவும்",
        "hero.scroll": "கீழே செல்லவும்",

        // Pricing
        "pricing.feature1": "இலவச ஹோம் டெலிவரி",
        "pricing.feature2": "காலை 7.30 மணிக்குள் டெலிவரி",
        "pricing.feature3": "100% பசுவின் பால்",
        "pricing.feature4": "ஹார்மோன்கள் அற்றது",
        "pricing.card1.title": "அரை லிட்டர். முழுமையான ஆரோக்கியம்.",
        "pricing.card1.subtitle": "தனியாக இருப்பவர்களுக்கு ஏற்றது",
        "pricing.card1.price": "40",
        "pricing.card1.monthly": "~₹1240/மாதம்",
        "pricing.card2.title": "ஒரு லிட்டர். முழு திருப்தி.",
        "pricing.card2.subtitle": "குடும்பங்களுக்கு ஏற்றது",
        "pricing.card2.price": "76",
        "pricing.card2.monthly": "~₹2356/மாதம்",
        "pricing.cta": "இலவசமாக பதிவு செய்யவும்",
        "pricing.bottom": "விற்பனைக்கு முந்தைய சந்தா முறை. வெளிப்படையானது மற்றும் நெகிழ்வானது.",

        // Products
        "products.milk.title": "தூய பசுவின் பால்",
        "products.milk.desc": "தேர்ந்தெடுக்கப்பட்ட உள்ளூர் பண்ணைகளில் இருந்து தினமும் சேகரிக்கப்படுகிறது. உடனே குளிர்விக்கப்பட்டு மறுசுழற்சி செய்யக்கூடிய கண்ணாடி பாட்டில்களில் விநியோகிப்படுகிறது.",
        "products.ghee.title": "தூய பசு நெய்",
        "products.ghee.desc": "கட்டுப்படுத்தப்பட்ட நிலையில் கவனமாக கையாளப்பட்ட பாலில் இருந்து தயாரிக்கப்படுகிறது. செயற்கை சேர்க்கைகள் இல்லை. எந்த குறுக்குவழியும் இல்லை.",
        "products.paneer.title": "ஃப்ரெஷ் பன்னீர்",
        "products.paneer.desc": "சிறிய தொகுப்புகளாக தயாரிக்கப்பட்டு சுகாதாரமான நிலையில் கையாளப்படுகிறது. ஒவ்வொரு அடியிலும் தூய்மைக்கே முன்னுரிமை அளிக்கப்படுகிறது.",
        "products.coconut.title": "இளநீர்",
        "products.coconut.desc": "இயற்கையாக கிடைத்தது போலவே வழங்கப்படுகிறது. எந்த மாற்றமும் செய்யப்படுவதில்லை.",
        "products.badge.bestSeller": "அதிக விற்பனை",
        "products.badge.new": "புதியது",
        "products.badge.seasonal": "பருவகால",
        "products.viewDetails": "கூடுதல் விவரங்கள்",
        "products.exploreAll": "அனைத்து பொருட்களையும் பார்க்க",

        // About
        "about.heading1": "இன்றைய பால் விநியோகம் விற்பனைக்காகவும், நீடித்த ஆயுளுக்காகவுமே வடிவமைக்கப்பட்டுள்ளது — ",
        "about.heading2": "உண்மைக்காக அல்ல.",
        "about.body": "மதுகை இதற்கு நேர்மாறாக செயல்படுகிறது. உண்மையான தரத்தை அவசரப்படுத்தவோ, கலப்படம் செய்யவோ அல்லது தொழில்துறை ரீதியாக மாற்றவோ முடியாது என்பதால் நாங்கள் ஒழுக்கத்துடன் செயல்படுகிறோம்.",
        "about.quote": "\"ஒரு முறை மதுகையை முயற்சி செய்யுங்கள். அதன் தரம் உங்களிடம் பேசும்.\"",

        // Features
        "features.pure.title": "100% தூய்மையானது",
        "features.pure.text": "நேரடியாக பண்ணைகளில் இருந்து, செயற்கை சேர்க்கைகள் இல்லை",
        "features.fresh.title": "தினமும் ஃப்ரெஷ்",
        "features.fresh.text": "24 மணி நேரத்திற்குள் சேகரிக்கப்பட்டு டெலிவரி செய்யப்படுகிறது",
        "features.glass.title": "கண்ணாடி பாட்டில்கள்",
        "features.glass.text": "தூய சுவைக்காக பாரம்பரிய கண்ணாடி பாட்டில்கள்",
        "features.local.title": "உள்ளூர் பண்ணைகள்",
        "features.local.text": "சிறிய அளவிலான தார்மீக பண்ணைகளை ஆதரிக்கிறோம்",

        // Purity (MAP Standard)
        "purity.badge": "செயல்பாட்டு ஒழுக்கம்",
        "purity.title": "MAP தரநிலை",
        "purity.subtitle": "மதுகையில் ஒவ்வொரு லிட்டர் பாலும் MAP தரநிலையால் நிர்வகிக்கப்படும் ஒரு குறிப்பிட்ட செயல்பாட்டு ஒழுக்கத்தைப் பின்பற்றுகிறது.",
        "purity.cta": "MAP தரநிலையைப் பார்க்க",
        "purity.viewTransparency": "வெளிப்படைத்தன்மையைப் பார்க்க",
        "purity.f1.title": "தினசரி பால் சேகரிப்பு",
        "purity.f1.desc": "நிர்ணயிக்கப்பட்ட சுகாதாரம் மற்றும் கையாளுதல் எதிர்பார்ப்புகளைப் பூர்த்தி செய்யும் தேர்ந்தெடுக்கப்பட்ட உள்ளூர் பண்ணைகளிலிருந்து தினமும் சேகரிக்கப்படுகிறது.",
        "purity.f2.title": "உடனடி குளிர்விப்பு",
        "purity.f2.desc": "சேகரிக்கப்பட்ட உடனேயே பால் குளிர்விக்கப்படுகிறது. நீண்ட நேரம் வெளியில் வைக்கப்படுவதில்லை.",
        "purity.f3.title": "கண்ணாடி பாட்டில் விநியோகம்",
        "purity.f3.desc": "மறுசுழற்சி செய்யக்கூடிய கண்ணாடி பாட்டில்களில் மட்டுமே விநியோகிக்கப்படுகிறது. பிளாஸ்டிக் பயன்பாடு முற்றிலும் தவிர்க்கப்படுகிறது.",
        "purity.f4.title": "கட்டுப்படுத்தப்பட்ட விநியோகம்",
        "purity.f4.desc": "விநியோகம் திட்டமிட்டபடி வரையறுக்கப்பட்டுள்ளது. சீரான தரத்தை பராமரிக்க அதன் அளவை மாற்றாமல் செயல்படுகிறோம்.",
        "purity.f5.title": "தூய நேர்மை",
        "purity.f5.desc": "சேர்க்கைகள் இல்லை. மேம்படுத்தல்கள் இல்லை. குறுக்குவழிகள் இல்லை. இது ஒரு அம்சம் அல்ல, எங்களின் விதி.",
        "purity.badge1.label": "FSSAI உரிமம்",
        "purity.badge1.sub": "சான்றளிக்கப்பட்ட நிறுவனம்",
        "purity.badge2.label": "வழக்கமான பரிசோதனை",
        "purity.badge2.sub": "தர உறுதி",
        "purity.badge3.label": "கோல்ட்-செயின்",
        "purity.badge3.sub": "கடுமையான கட்டுப்பாடு",

        // How We Work
        "hww.badge": "எங்கள் செயல்முறை",
        "hww.title1": "நாங்கள் எப்படி ",
        "hww.title2": "செயல்படுகிறோம்",
        "hww.subtitle": "ஒவ்வொரு நாளும் MAP தரநிலையால் நிர்வகிக்கப்படும் ஒரு வரைமுறை.",
        "hww.s1.title": "தினசரி சேகரிப்பு",
        "hww.s1.desc": "உள்ளூர் பண்ணைகளிலிருந்து தினமும் உணவு தரத்திலான துருப்பிடிக்காத எஃகு (SS 304) கேன்களில் பால் சேகரிக்கப்படுகிறது.",
        "hww.s2.title": "உடனடி குளிர்விப்பு",
        "hww.s2.desc": "சேகரித்த சில நிமிடங்களிலேயே குளிர்விக்கப்படுகிறது. நீண்ட காத்திருப்பு நேரங்கள் இல்லை.",
        "hww.s3.title": "சுத்தமான கையாளுதல்",
        "hww.s3.desc": "கடுமையான, சுத்தமான and கட்டுப்படுத்தப்பட்ட நிலையில் கையாளப்படுகிறது. தொழில்துறை குறுக்குவழிகள் இல்லை.",
        "hww.s4.title": "ஃப்ரெஷ் விநியோகம்",
        "hww.s4.desc": "தினமும் காலையில் கண்ணாடி பாட்டில்களில் மட்டுமே விநியோகிக்கப்படுகிறது. பிளாஸ்டிக் பயன்பாடு இல்லை.",
        "hww.s5.title": "காலி பாட்டில்கள்",
        "hww.s5.desc": "அடுத்த டெலிவரியின் போது காலி பாட்டில்கள் சுத்தம் செய்வதற்காக திரும்பப் பெறப்படுகின்றன.",

        // Stats
        "stats.badge": "எங்கள் தாக்கம்",
        "stats.title": "சென்னையுடன் இணைந்து வளர்கிறோம்",
        "stats.customers": "மகிழ்ச்சியான வாடிக்கையாளர்கள்",
        "stats.liters": "தினசரி லிட்டர்கள்",
        "stats.dealers": "நம்பகமான முகவர்கள்",
        "stats.areas": "உள்ளடக்கிய இடங்கள்",

        // Reviews
        "reviews.badge": "வாடிக்கையாளர் கருத்துக்கள்",
        "reviews.title": "எங்கள் வாடிக்கையாளர்கள் கூறுவது",
        "reviews.subtitle1": "",
        "reviews.subtitle2": "50,000+",
        "reviews.subtitle3": " க்கும் மேற்பட்ட குடும்பங்களால் நம்பப்படுகிறது.",
        "reviews.verified": "உறுதிப்படுத்தப்பட்ட வதிவிடவாசி",
        "reviews.readMore": "மேலும் கருத்துக்களைப் படிக்க",
        "reviews.r1.name": "யுவ ராஜ் M",
        "reviews.r1.text": "அர்ப்பணிப்புள்ள நபர்கள், லாக்டவுன் சமயத்தில் கூட ஒரு நாள் கூட தவறாமல் பால் வழங்கினார்கள். குடும்பங்களுக்கு மிகவும் பரிந்துரைக்கிறேன்!",
        "reviews.r2.name": "பிரியங்கா சிவா",
        "reviews.r2.text": "சரியான நேரத்திற்கு டெலிவரி, பால் தரம் மிகவும் நன்றாக இருக்கிறது. வழக்கமாக காலை 6 முதல் 7 மணிக்குள் டெலிவரி செய்கிறார்கள்.",
        "reviews.r3.name": "வினோத் குமார்",
        "reviews.r3.text": "விலைக்கு ஏற்ற தரம் மற்றும் ஆப் (App) மூலம் பணம் செலுத்துவது மற்றும் ஆர்டர் செய்வது மிகவும் எளிதாக இருக்கிறது. சிறந்த அனுபவம்!",
        "reviews.r4.name": "லட்சுமி",
        "reviews.r4.text": "பால் தரம் மிகவும் நன்றாக உள்ளது, எனது 2 வயது குழந்தைக்கு இது மிகவும் பிடிக்கும். மற்ற பிராண்டுகளைப் போல இதில் வாடை வராது.",

        // FAQ
        "faq.badge": "உதவி",
        "faq.title": "அடிக்கடி கேட்கப்படும் கேள்விகள்",
        "faq.subtitle": "மதுகை பால் மற்றும் சேவைகள் பற்றி நீங்கள் தெரிந்து கொள்ள வேண்டிய அனைத்தும்.",
        "faq.stillQuestions": "இன்னும் கேள்விகள் உள்ளதா? ",
        "faq.contactSupport": "எங்கள் உதவி மையத்தைத் தொடர்பு கொள்ளவும்",
        "faq.cat.about": "மதுகை பற்றி",
        "faq.cat.quality": "பால் மற்றும் தரம்",
        "faq.cat.delivery": "டெலிவரி",
        "faq.cat.payments": "பணம் செலுத்துதல்",
        "faq.cat.bottles": "கண்ணாடி பாட்டில்கள்",
        "faq.q1": "மதுகை என்றால் என்ன?",
        "faq.a1": "மதுகை என்பது பண்ணையிலிருந்து நேரடியாக வீட்டிற்கு வரும் பால் விநியோக சேவையாகும். நாங்கள் மறுசுழற்சி செய்யக்கூடிய கண்ணாடி பாட்டில்களில் தூய்மையான பசுவின் பாலை வழங்குகிறோம். நாங்கள் எந்த கலப்படமும் இன்றி, நேர்மையாக செயல்படுகிறோம்.",
        "faq.q2": "மதுகை எங்கு செயல்படுகிறது?",
        "faq.a2": "நாங்கள் தற்போது மேலூர் மற்றும் அதைச் சுற்றியுள்ள பகுதிகளில் செயல்படுகிறோம். எங்களது டெலிவரி வரம்புகள் விரிவடைந்து வருகின்றன.",
        "faq.q3": "மதுகை சான்றளிக்கப்பட்டுள்ளதா?",
        "faq.a3": "ஆம். மதுகை செல்லுபடியாகும் FSSAI உரிமத்தின் கீழ் செயல்படுகிறது. நாங்கள் அனைத்து தரக் கட்டுப்பாட்டு விதிகளையும் பின்பற்றுகிறோம்.",

        // App Promo
        "app.badge": "மதுகை ஆப் (App)",
        "app.title1": "உங்கள் தினசரி பால் ",
        "app.title2": "சந்தாவை நிர்வகிக்கவும்.",
        "app.subtitle": "பால் விநியோகத்தின் எதிர்காலத்தை அனுபவியுங்கள். ஆர்டர்களை நிர்வகிக்கவும், டெலிவரியை உடனுக்குடன் கண்காணிக்கவும் - அனைத்தும் ஒரே இடத்தில்.",
        "app.f1.title": "எளிதான கட்டுப்பாடு",
        "app.f1.desc": "தினமும் நிறுத்தவோ மாற்றவோ முடியும்",
        "app.f2.title": "நேரடி அறிவிப்புகள்",
        "app.f2.desc": "பால் வந்ததும் தெரிந்து கொள்ளலாம்",
        "app.f3.title": "ஸ்மார்ட் பில்லிங்",
        "app.f3.desc": "விரிவான டிஜிட்டல் ரசீதுகள்",
        "app.f4.title": "முன்னுரிமை உதவி",
        "app.f4.desc": "சிறப்பு உதவி மையம்",
        "app.social": "50,000+ குடும்பங்களால் விரும்பப்படுகிறது",
        "app.sms": "SMS மூலம் லிங்க் பெற",
        "app.float1.label": "இன்றைய டெலிவரி",
        "app.float1.value": "காலை 7:30 மணிக்குள் வரும்",
        "app.float2.label": "அறிவிப்பு",
        "app.float2.value": "பால் வழங்கப்பட்டது!",
        "app.float3.label": "சந்தா",
        "app.float3.value": "நாளை நிறுத்தப்பட்டுள்ளது",

        // Subscription Section
        "sub.badge": "எங்கள் முறை",
        "sub.title1": "நாங்கள் ஏன் ",
        "sub.title2": "சந்தா முறையைப் பயன்படுத்துகிறோம்",
        "sub.desc": "மதுகை ஒரு திட்டமிட்ட சந்தா மாதிரியில் இயங்குகிறது. இது சமரசம் செய்யாமல் பால் சேகரிப்பு, கையாளுதல் மற்றும் விநியோகத்தைக் கட்டுப்படுத்த அனுமதிக்கிறது. சீரற்ற தேவையால் தரத்தை பராமரிக்க முடியாது.",
        "sub.limited.title": "குறிப்பிட்ட குடும்பங்கள்",
        "sub.limited.desc": "மதுகை ஒரு குறிப்பிட்ட எண்ணிக்கையிலான குடும்பங்களுக்கு மட்டுமே சேவை செய்கிறது. எங்களால் வளர முடியாது என்பதால் அல்ல — மாறாக எங்களது தரத்தை குறைக்க நாங்கள் விரும்பவில்லை.",
        "sub.waitlist": "காத்திருப்புப் பட்டியலில் இணையுங்கள்",
        "sub.valueTitle": "மதுகை பின்வருவனவற்றை மதிக்கும் குடும்பங்களுக்கானது:",
        "sub.v1.title": "வசதியை விட ஒழுக்கம்",
        "sub.v1.text": "சந்தா முறை கணிசமான கையாளுதலை உறுதி செய்கிறது.",
        "sub.v2.title": "பல்வகைமையை விட சீரான தன்மை",
        "sub.v2.text": "நாங்கள் ஒரு சிறிய, சரியான வரம்பில் கவனம் செலுத்துகிறோம்.",
        "sub.v3.title": "தள்ளுபடியை விட தரம்",
        "sub.v3.text": "நேர்மையை தள்ளுபடி செய்ய முடியாது.",
        "sub.note": "* நீங்கள் எப்போதாவது ஒரு முறை பால் வாங்க விரும்பினால், மதுகை சரியான தேர்வாக இருக்காது.",
        "sub.b1.title": "திட்டமிட்ட சேகரிப்பு",
        "sub.b1.desc": "தேவையானதை மட்டும் சேகரிக்க அனுமதிக்கிறது, வீணாவதைத் தவிர்க்கிறது மற்றும் அதிகப்படியான தன்மையை உறுதி செய்கிறது.",
        "sub.b2.title": "உடனடி கையாளுதல்",
        "sub.b2.desc": "குளிர்வித்தல் மற்றும் பாட்டில் அடைப்பதற்கான கடுமையான காலக்கெடுக்கள்.",
        "sub.b3.title": "கட்டுப்படுத்தப்பட்ட அளவு",
        "sub.b3.desc": "எங்களால் கச்சிதமாக நிர்வகிக்கக்கூடியதை மட்டுமே நாங்கள் கையாளுகிறோம். அளவை விட தரமே முக்கியம்.",
        "sub.b4.title": "சீரான தரம்",
        "sub.b4.desc": "ஒவ்வொரு காலையிலும் அதே உயர்தரம். பருவகாலமாகவோ அல்லது தேர்ந்தெடுக்கப்பட்டோ அல்ல.",

        // Footer
        "footer.returnTop": "மேலே செல்ல",
        "footer.about": "தொழில்துறை குறுக்குவழிகள் இல்லாமல் தூய, கலப்படமற்ற பசுவின் பாலை வழங்க மதுகை உள்ளது. தரம், நேர்மை மற்றும் தூய்மையின் புனிதமான வாக்குறூதியை நாங்கள் நம்புகிறோம்.",
        "footer.tagline": "\"பால், சரியான முறையில்.\"",
        "footer.quickLinks": "முக்கிய இணைப்புகள்",
        "footer.connect": "எங்களுடன் இணையுங்கள்",
        "footer.rights": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
        "footer.terms": "பயன்பாட்டு விதிமுறைகள்",
        "footer.privacy": "தனியுரிமைக் கொள்கை",
        "footer.refund": "பணத்தைத் திரும்பப் பெறும் கொள்கை",
        "footer.delivery": "டெலிவரி கொள்கை",

        // MAP Standard Page
        "ms.badge": "உள் செயல்பாட்டு ஒழுக்கம்",
        "ms.title": "MAP தரநிலை",
        "ms.subtitle": "மதுகையில் பால் மற்றும் உணவுப் பொருட்கள் எவ்வாறு கையாளப்படுகின்றன என்பதை MAP தரநிலை வரையறுக்கிறது. இது ஒரு உள் செயல்பாட்டு ஒழுக்கம் — சந்தைப்படுத்தல் உரிமைகோரல் அல்ல.",
        "ms.philosophy.title": "அடிப்படை கொள்கை",
        "ms.philosophy.p1": "பால் தரம் கடையில் தீர்மானிக்கப்படுவதில்லை. வாடிக்கையாளரை சென்றடைவதற்கு முன்பு அது எவ்வளவு கண்டிப்பாக கையாளப்படுகிறது என்பதில் தான் தீர்மானிக்கப்படுகிறது.",
        "ms.philosophy.p2": "தூய்மையை குறைக்கும் குறுக்குவழிகள், அதிகப்படியான கையாளுதல் மற்றும் சமரசங்களை நீக்க MAP தரநிலை உள்ளது. ஒவ்வொரு முடிவும் விதிவிலக்கின்றி இந்த தரத்தைப் பின்பற்றுகிறது.",
        "ms.rules.r1.title": "தேர்ந்தெடுக்கப்பட்ட உள்ளூர் பண்ணைகள்",
        "ms.rules.r1.desc": "நிர்ணயிக்கப்பட்ட கையாளுதல் மற்றும் சுகாதார எதிர்பார்ப்புகளைப் பூர்த்தி செய்யும் தேர்ந்தெடுக்கப்பட்ட உள்ளூர் பண்ணைகளிலிருந்து மட்டுமே பால் சேகரிக்கப்படுகிறது. அளவை விட சீரான தரமே கட்டாயம்.",
        "ms.rules.r2.title": "SS 304 உணவு தர கேன்கள்",
        "ms.rules.r2.desc": "உணவு தரம் கொண்ட SS 304 துருப்பிடிக்காத எஃகு பால் கேன்களில் மட்டுமே பால் சேகரிக்கப்பட்டு கொண்டு செல்லப்படுகிறது. இது கலப்படத்தைத் தடுக்கிறது.",
        "ms.rules.r3.title": "உடனடி குளிர்விப்பு",
        "ms.rules.r3.desc": "சேகரிக்கப்பட்ட உடனேயே பால் குளிர்விக்கப்படுகிறது. இயற்கையான தரத்தைப் பாதுகாக்க நீண்ட நேரம் வெளியில் வைக்கப்படுவதில்லை.",
        "ms.rules.r4.title": "தொழில்துறை குறுக்குவழிகள் இல்லை",
        "ms.rules.r4.desc": "நீண்ட ஆயுளுக்காகவோ அல்லது அதிக விற்பனைக்காகவோ பால் பதப்படுத்தப்படுவதில்லை. MAP தரநிலை குறுக்குவழிகளை அனுமதிப்பதில்லை.",
        "ms.rules.r5.title": "கண்ணாடி பாட்டில் விநியோகம்",
        "ms.rules.r5.desc": "மறுசுழற்சி செய்யக்கூடிய கண்ணாடி பாட்டில்களில் மட்டுமே விநியோகிக்கப்படுகிறது. பிளாஸ்டிக் பயன்பாடு முற்றிலும் தவிர்க்கப்படுகிறது.",
        "ms.rules.r6.title": "கட்டுப்படுத்தப்பட்ட விநியோகம்",
        "ms.rules.r6.desc": "விநியோகம் திட்டமிட்டபடி வரையறுக்கப்பட்டுள்ளது. சீரான தரத்தை பராமரிக்க அதன் அளவை மாற்றாமல் செயல்படுகிறோம்.",
        "ms.rules.r7.title": "தினசரி அமலாக்கம்",
        "ms.rules.r7.desc": "MAP தரநிலை தினமும் அமல்படுத்தப்படுகிறது. பருவகாலமாகவோ அல்லது வசதிக்காகவோ அல்ல. இவை அம்சங்கள் அல்ல; இவை செயல்பாட்டு விதிகள்.",
        "ms.viewTransparency": "வெளிப்படைத்தன்மையைப் பார்க்க",
        "ms.ethics.quote": "\"அது எங்கள் குடும்பங்களுக்கு போதுமான அளவு தூய்மையாக இல்லையென்றால், அது உங்கள் குடும்பங்களுக்கும் போதுமானதாக இல்லை.\"",
        "ms.ethics.tagline": "மதுகை. பால், சரியான முறையில்.",

        // Our Products Page
        "op.title": "எங்கள் பொருட்கள்",
        "op.desc": "மதுகை அன்றாட நுகர்வுக்கான சிறிய அளவிலான உணவுப் பொருட்களைக் கையாளுகிறது. ஒவ்வொரு தயாரிப்பும் MAP தரநிலையால் வரையறுக்கப்பட்ட அதே ஒழுக்கத்தைப் பின்பற்றுகிறது.",

        // How We Work Page
        "hww_page.title": "நாங்கள் செயல்படும் விதம்",
        "hww_page.desc": "MAP தரநிலையால் நிர்வகிக்கப்படும் ஒரு வரையறுக்கப்பட்ட செயல்பாட்டு ஒழுக்கம். ஒவ்வொரு லிட்டர் பாலும் தினமும் இந்த வழக்கத்தைப் பின்பற்றுகிறது.",
        "hww_page.discipline.title": "ஒழுக்கம் மற்றும் கட்டுப்பாடு",
        "hww_page.discipline.desc": "மதுகையில் நாங்கள் அவசரப்படுவதில்லை. நாங்கள் நீர்த்துப்போகச் செய்வதில்லை. நாங்கள் தொழில்துறை மயமாக்குவதில்லை. எங்களது தூய்மையான நிலையை நீங்கள் பெறுவதை உறுதிசெய்யும் தரநிலைகளை நாங்கள் பின்பற்றுகிறோம்.",
        "hww_page.stats.additives": "சேர்க்கைகள்",
        "hww_page.stats.foodGrade": "உணவு தரம்",
        "hww_page.stats.glassBottles": "கண்ணாடி பாட்டில்கள்",

        // FAQ Page
        "faq_page.title": "கேள்விகள் மற்றும் பதில்கள்",
        "faq_page.desc": "நாங்கள் எவ்வாறு MAP தரநிலையை பராமரிக்கிறோம் மற்றும் உங்கள் வீட்டு வாசலில் நேர்மையை வழங்குகிறோம் என்பதில் தெளிவு.",

        // Contact Page
        "contact.title": "தொடர்பு கொள்ள",
        "contact.desc": "நீங்கள் ஒரு மாதிரி பாலைக் கோர விரும்பினாலும், காத்திருப்புப் பட்டியலில் சேர விரும்பினாலும் அல்லது எங்களை அழைக்க விரும்பினாலும் - நாங்கள் இங்கே இருக்கிறோம்.",
        "contact.desk.title": "மதுகை டெஸ்க்",
        "contact.desk.call": "அழையுங்கள்",
        "contact.desk.email": "மின்னஞ்சல்",
        "contact.desk.visit": "நேரில் வர",
        "contact.wa.title": "வாட்ஸ்அப் உதவி",
        "contact.wa.desc": "சந்தாதாரர்களுக்கான உடனடி பதில்.",
        "contact.form.name": "முழு பெயர்",
        "contact.form.namePlaceholder": "உங்கள் பெயர்",
        "contact.form.phone": "தொலைபேசி",
        "contact.form.phonePlaceholder": "உங்கள் எண்",
        "contact.form.subject": "பொருள்",
        "contact.form.s1": "மாதிரி பால் கோரிக்கை",
        "contact.form.s2": "காத்திருப்புப் பட்டியலில் சேர",
        "contact.form.s3": "பொதுவான விசாரணை",
        "contact.form.message": "செய்தி",
        "contact.form.messagePlaceholder": "நாங்கள் எப்படி உதவ முடியும்?",
        "contact.form.send": "செய்தி அனுப்பு",
        "contact.map.title": "இடம்",

        // Transparency Page
        "trans.badge": "நம்பிக்கையை விட சரிபார்ப்பு",
        "trans.title": "முழுமையான வெளிப்படைத்தன்மை",
        "trans.desc": "நாங்கள் கையாளும் ஒவ்வொரு பேட்சிற்கும் நிகழ்நேர அளவீடு மற்றும் சுயாதீன ஆய்வக சரிபார்ப்பை வழங்குகிறோம். வெளிப்படையான செயல்பாடுகளே MAP தரநிலையின் இதயம்.",
        "trans.dashboard.verified": "சரிபார்க்கப்பட்டது",
        "trans.dashboard.batchStatus": "இன்றைய பேட்ச் நிலை",
        "trans.dashboard.safetySuite": "கலப்பட பாதுகாப்பு தொகுப்பு",
        "trans.dashboard.testsPassed": "அனைத்து சோதனைகளும் வெற்றி",
        "trans.dashboard.negative": "நெகட்டிவ்",
        "trans.metrics.fat.label": "கொழுப்புச் சத்து",
        "trans.metrics.fat.desc": "Rich and creamy texture",
        "trans.metrics.snf.label": "SNF (திடப் பொருட்கள்)",
        "trans.metrics.snf.desc": "Essential proteins & minerals",
        "trans.metrics.ph.label": "pH அளவு",
        "trans.metrics.ph.desc": "Perfectly balanced alkalinity",
        "trans.reports.title": "சரிபார்ப்பு அறிக்கைகள்",
        "trans.reports.desc": "நாங்கள் சுயாதீன ஆய்வக சோதனைகளை வரவேற்கிறோம். ஒவ்வொரு பேட்சும் உள்நாட்டிலும் மற்றும் மூன்றாம் தரப்பு சான்றளிக்கப்பட்ட ஆய்வகங்களிலும் சோதிக்கப்படுகிறது.",
        "trans.reports.internal.badge": "சுய பகுப்பாய்வு",
        "trans.reports.internal.title": "UB உள் ஆய்வகம்",
        "trans.reports.internal.cta": "விரிவான பகுப்பாய்வைத் திற",
        "trans.reports.external.badge": "வெளிப்புற தணிக்கை",
        "trans.reports.external.title": "CTL சுயாதீன ஆய்வகம்",
        "trans.reports.external.cta": "NABL அங்கீகாரத்தைப் பார்க்க",
        "trans.reports.download": "பகுப்பாய்வு தொகுப்பைப் பதிவிறக்கம் செய்க",
        "trans.fssai.title": "FSSAI உரிமம் பெற்ற வசதி",
        "trans.fssai.desc": "எங்களது சேமிப்பு மற்றும் கையாளுதல் வசதி முற்றிலும் உரிமம் பெற்றது மற்றும் FSSAI வரையறுத்துள்ள கடுமையான செயல்பாட்டு விதிகளைப் பின்பற்றுகிறது. நாங்கள் விதிவிலக்கின்றி தூய்மை மற்றும் கோல்ட்-செயின் ஒருமைப்பாட்டைப் பேணுகிறோம்.",

        // Subscription Page
        "sub_page.title": "எங்கள் சந்தா முறை",
        "sub_page.desc": "வசதியை விட ஒழுக்கம், சீரான தன்மை மற்றும் நேர்மையை மதிக்கும் குடும்பங்களுக்காக மதுகை உள்ளது.",
        "sub_page.note": "\"உண்மையான தரத்தை சீரற்ற தேவையால் பராமரிக்க முடியாது.\"",
        "sub_page.checkAvailability": "உங்கள் பகுதியில் கிடைப்பதைப் பார்க்கவும்",
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem("madugai-language") as Language;
        if (saved && (saved === "en" || saved === "ta")) {
            setLanguageState(saved);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("madugai-language", lang);
    };

    const t = (key: string): string => {
        return translations[language][key] || key;
    };

    // Prevent hydration mismatch by returning a consistent initial state
    if (!mounted) {
        return (
            <LanguageContext.Provider value={{ language: "en", setLanguage, t: (key) => translations.en[key] || key }}>
                {children}
            </LanguageContext.Provider>
        );
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
