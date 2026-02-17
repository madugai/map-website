class AppTranslations {
  static const Map<String, Map<String, String>> translations = {
    'en': _en,
    'ta': _ta,
  };

  static const Map<String, String> _en = {
    // Bottom Nav
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.pricing': 'Pricing',
    'nav.more': 'More',

    // Hero
    'hero.title1': 'Cow Milk.',
    'hero.title2': 'Without',
    'hero.title3': 'Industrial Shortcuts.',
    'hero.description':
        'Collected daily. Chilled immediately. Delivered fresh in glass bottles. No dilution. No preservatives. No mass processing.',
    'hero.cta': 'Request a Sample',

    // Features
    'features.pure.title': '100% Pure',
    'features.pure.text': 'Direct from farms, no additives or preservatives',
    'features.fresh.title': 'Daily Fresh',
    'features.fresh.text': 'Collected, chilled, and delivered within 24 hours',
    'features.glass.title': 'Glass Only',
    'features.glass.text': 'Traditional glass bottles for the purest taste',
    'features.local.title': 'Local First',
    'features.local.text': 'Supporting selected small-scale ethical farms',

    // About
    'about.heading1':
        'Milk today is designed for scale, shelf life, and convenience — ',
    'about.heading2': 'not integrity.',
    'about.body':
        'Madugai exists to do the opposite. We operate with discipline and restraint, because real quality cannot be rushed, diluted, or industrialized.',
    'about.quote': '"Try Madugai once. Let the quality speak for itself."',

    // Products
    'products.milk.title': 'Pure Cow Milk',
    'products.milk.desc':
        'Collected daily from selected local farms. Chilled immediately and delivered fresh every morning in reusable glass bottles.',
    'products.ghee.title': 'Pure Cow Ghee',
    'products.ghee.desc':
        'Prepared from carefully handled milk under controlled conditions. No artificial additives. No enhancement. No shortcuts.',
    'products.paneer.title': 'Fresh Paneer',
    'products.paneer.desc':
        'Prepared in small batches and handled under clean, controlled conditions. Freshness and hygiene are prioritised at every step.',
    'products.coconut.title': 'Tender Coconut',
    'products.coconut.desc':
        'Sourced fresh and delivered as-is. No processing. No alteration. No intervention.',
    'products.badge.bestSeller': 'Best Seller',
    'products.badge.new': 'New',
    'products.badge.seasonal': 'Seasonal',
    'products.viewDetails': 'View Details',
    'products.exploreAll': 'Explore All Products',
    'products.title': 'Our Products',
    'products.subtitle':
        'Each product follows the same discipline of sourcing, handling, and delivery defined by the MAP Standard.',

    // Pricing
    'pricing.title': 'Simple, Transparent Pricing',
    'pricing.subtitle': 'Premium milk, transparent pricing. No hidden charges.',
    'pricing.feature1': 'Free Home delivery',
    'pricing.feature2': 'Assured delivery by 7.30am',
    'pricing.feature3': '100% cow\'s milk',
    'pricing.feature4': 'Free from hormones',
    'pricing.card1.title': 'Half a litre. Full of goodness.',
    'pricing.card1.subtitle': 'Perfect for light users or solo sippers',
    'pricing.card1.price': '40',
    'pricing.card1.monthly': '~₹1240/month',
    'pricing.card2.title': 'One litre, full satisfaction.',
    'pricing.card2.subtitle': 'Ideal for families or daily milk lovers',
    'pricing.card2.price': '76',
    'pricing.card2.monthly': '~₹2356/month',
    'pricing.cta': 'Book a free trial',
    'pricing.bottom':
        'Subscriptions are prepaid and billed monthly. Simple, transparent, and flexible.',

    // How We Work
    'hww.badge': 'Our Process',
    'hww.title': 'How We Work',
    'hww.subtitle':
        'A defined operating discipline governed by the MAP Standard. Every single day.',
    'hww.s1.title': 'Daily Collection',
    'hww.s1.desc':
        'Milk is collected daily from selected local farms in SS 304 food-grade stainless steel cans.',
    'hww.s2.title': 'Immediate Chilling',
    'hww.s2.desc':
        'Chilled immediately after collection. No prolonged exposure, no waiting periods.',
    'hww.s3.title': 'Clean Handling',
    'hww.s3.desc':
        'Handled under strict, clean, and controlled conditions. No industrial shortcuts.',
    'hww.s4.title': 'Glass Delivery',
    'hww.s4.desc':
        'Delivered fresh every morning exclusively in reusable glass bottles. No plastic contact.',
    'hww.s5.title': 'Empty Collection',
    'hww.s5.desc':
        'Empty bottles are collected during the next delivery for cleaning and reuse.',

    // Subscription
    'sub.badge': 'Our Model',
    'sub.title': 'Why We Use Subscription',
    'sub.desc':
        'Madugai operates on a subscription model by design. This allows us to control sourcing, handling, and delivery without compromise.',
    'sub.limited.title': 'Limited Households',
    'sub.limited.desc':
        'Madugai serves a limited number of households. Not because we can\'t grow — but because we refuse to lower standards.',
    'sub.v1.title': 'Discipline over convenience',
    'sub.v1.text': 'Subscription ensures predictable handling.',
    'sub.v2.title': 'Consistency over variety',
    'sub.v2.text': 'We focus on a small, perfect range.',
    'sub.v3.title': 'Quality over discounts',
    'sub.v3.text': 'Integrity cannot be discounted.',

    // Purity / MAP Standard
    'purity.badge': 'Operating Discipline',
    'purity.title': 'The MAP Standard',
    'purity.subtitle':
        'Every litre of milk at Madugai follows a defined operating discipline governed by the MAP Standard.',
    'purity.f1.title': 'Daily Milk Collection',
    'purity.f1.desc': 'Freshly collected every day from selected local farms.',
    'purity.f2.title': 'Immediate Chilling',
    'purity.f2.desc': 'Milk is chilled immediately after collection.',
    'purity.f3.title': 'Glass Bottle Delivery',
    'purity.f3.desc': 'Delivered exclusively in reusable glass bottles.',
    'purity.f4.title': 'Controlled Supply',
    'purity.f4.desc':
        'Supply is intentionally limited to maintain consistency.',
    'purity.f5.title': 'Pure Integrity',
    'purity.f5.desc': 'No additives. No enhancement. No shortcuts.',

    // App Promo
    'app.badge': 'The Madugai App',
    'app.title': 'Control your daily milk subscription.',
    'app.subtitle':
        'Manage orders, track deliveries in real-time, and maintain your account with a tap.',
    'app.f1.title': 'Effortless Control',
    'app.f1.desc': 'Pause or adjust daily',
    'app.f2.title': 'Real-time Alerts',
    'app.f2.desc': 'Know when it arrives',
    'app.f3.title': 'Smart Billing',
    'app.f3.desc': 'Detailed digital receipts',
    'app.f4.title': 'Priority Support',
    'app.f4.desc': 'Dedicated help desk',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle':
        'Everything you need to know about Madugai milk and services.',
    'faq.q1': 'What is Madugai?',
    'faq.a1':
        'Madugai is a farm-to-home milk delivery service that delivers fresh, pure cow milk in reusable glass bottles.',
    'faq.q2': 'Where does Madugai operate?',
    'faq.a2':
        'We currently operate in select areas of Vellore district, Tamil Nadu.',
    'faq.q3': 'Is Madugai certified?',
    'faq.a3':
        'Yes. Madugai operates under a valid FSSAI license (Lic. No: 12425030000917).',
    'faq.q4': 'Is the milk pasteurized?',
    'faq.a4':
        'Madugai milk is chilled immediately after collection and delivered fresh. No UHT or extended-life pasteurization.',
    'faq.q5': 'How should I store the milk?',
    'faq.a5':
        'Refrigerate immediately. Consume within 2–3 days for best freshness.',
    'faq.q6': 'What time is milk delivered?',
    'faq.a6':
        'Milk is delivered between 5:30 AM and 7:30 AM, depending on your location.',
    'faq.q7': 'Can I pause my subscription?',
    'faq.a7':
        'Yes. You can pause through the Madugai app under subscription settings.',
    'faq.q8': 'How are payments handled?',
    'faq.a8':
        'Payments are handled via prepaid wallet. You can recharge using UPI, card, or net banking.',
    'faq.q9': 'Why glass bottles?',
    'faq.a9':
        'Glass preserves milk integrity, prevents chemical leaching, and is environmentally sustainable.',
    'faq.q10': 'What if I lose a bottle?',
    'faq.a10': 'A replacement fee will be charged for lost or broken bottles.',

    // Contact
    'contact.title': 'Get in Touch',
    'contact.desc':
        'Whether you want to request a sample, join the waitlist, or just say hello — we\'re here.',
    'contact.call': 'Call Us',
    'contact.email': 'Email Us',
    'contact.visit': 'Visit Us',
    'contact.whatsapp': 'WhatsApp Support',
    'contact.whatsapp.desc': 'Instant response for subscribers.',
    'contact.form.name': 'Full Name',
    'contact.form.phone': 'Phone',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.s1': 'Request a Sample',
    'contact.form.s2': 'Join the Waitlist',
    'contact.form.s3': 'General Inquiry',

    // Transparency
    'trans.title': 'Absolute Transparency',
    'trans.desc':
        'Real-time metrics and independent lab validation for every batch.',
    'trans.fat': 'Fat Content',
    'trans.snf': 'SNF (Solids-Not-Fat)',
    'trans.ph': 'pH Level',
    'trans.fssai': 'FSSAI Licensed Facility',

    // Footer
    'footer.tagline': '"Milk, made right."',
    'footer.about':
        'Madugai exists to provide pure, unadulterated cow milk without industrial shortcuts.',

    // General
    'general.readMore': 'Read More',
    'general.learnMore': 'Learn More',
    'general.viewAll': 'View All',
    'general.back': 'Back',
    'settings.title': 'Settings',
    'settings.language': 'Language',
    'settings.english': 'English',
    'settings.tamil': 'தமிழ்',
  };

  static const Map<String, String> _ta = {
    // Bottom Nav
    'nav.home': 'முகப்பு',
    'nav.products': 'பொருட்கள்',
    'nav.pricing': 'விலை',
    'nav.more': 'மேலும்',

    // Hero
    'hero.title1': 'பசுவின் பால்.',
    'hero.title2': 'எந்த',
    'hero.title3': 'கலப்படமும் இன்றி.',
    'hero.description':
        'தினமும் சேகரிக்கப்படுகிறது. உடனே குளிர்விக்கப்படுகிறது. கண்ணாடி பாட்டில்களில் ஃப்ரெஷ்ஷாக விநியோகிக்கப்படுகிறது.',
    'hero.cta': 'மாதிரி பாலுக்கு விண்ணப்பிக்கவும்',

    // Features
    'features.pure.title': '100% தூய்மையானது',
    'features.pure.text':
        'நேரடியாக பண்ணைகளில் இருந்து, செயற்கை சேர்க்கைகள் இல்லை',
    'features.fresh.title': 'தினமும் ஃப்ரெஷ்',
    'features.fresh.text':
        '24 மணி நேரத்திற்குள் சேகரிக்கப்பட்டு டெலிவரி செய்யப்படுகிறது',
    'features.glass.title': 'கண்ணாடி பாட்டில்கள்',
    'features.glass.text': 'தூய சுவைக்காக பாரம்பரிய கண்ணாடி பாட்டில்கள்',
    'features.local.title': 'உள்ளூர் பண்ணைகள்',
    'features.local.text': 'சிறிய அளவிலான தார்மீக பண்ணைகளை ஆதரிக்கிறோம்',

    // About
    'about.heading1':
        'இன்றைய பால் விநியோகம் விற்பனைக்காகவும், நீடித்த ஆயுளுக்காகவுமே வடிவமைக்கப்பட்டுள்ளது — ',
    'about.heading2': 'உண்மைக்காக அல்ல.',
    'about.body':
        'மதுகை இதற்கு நேர்மாறாக செயல்படுகிறது. உண்மையான தரத்தை அவசரப்படுத்தவோ, கலப்படம் செய்யவோ முடியாது.',
    'about.quote':
        '"ஒரு முறை மதுகையை முயற்சி செய்யுங்கள். அதன் தரம் உங்களிடம் பேசும்."',

    // Products
    'products.milk.title': 'தூய பசுவின் பால்',
    'products.milk.desc':
        'தேர்ந்தெடுக்கப்பட்ட உள்ளூர் பண்ணைகளில் இருந்து தினமும் சேகரிக்கப்படுகிறது.',
    'products.ghee.title': 'தூய பசு நெய்',
    'products.ghee.desc':
        'கட்டுப்படுத்தப்பட்ட நிலையில் கவனமாக கையாளப்பட்ட பாலில் இருந்து தயாரிக்கப்படுகிறது.',
    'products.paneer.title': 'ஃப்ரெஷ் பன்னீர்',
    'products.paneer.desc':
        'சிறிய தொகுப்புகளாக தயாரிக்கப்பட்டு சுகாதாரமான நிலையில் கையாளப்படுகிறது.',
    'products.coconut.title': 'இளநீர்',
    'products.coconut.desc': 'இயற்கையாக கிடைத்தது போலவே வழங்கப்படுகிறது.',
    'products.badge.bestSeller': 'அதிக விற்பனை',
    'products.badge.new': 'புதியது',
    'products.badge.seasonal': 'பருவகால',
    'products.viewDetails': 'கூடுதல் விவரங்கள்',
    'products.exploreAll': 'அனைத்து பொருட்களையும் பார்க்க',
    'products.title': 'எங்கள் பொருட்கள்',
    'products.subtitle':
        'ஒவ்வொரு தயாரிப்பும் MAP தரநிலையால் வரையறுக்கப்பட்ட அதே ஒழுக்கத்தைப் பின்பற்றுகிறது.',

    // Pricing
    'pricing.title': 'எளிமையான, வெளிப்படையான விலை',
    'pricing.subtitle': 'பிரீமியம் பால், வெளிப்படையான விலை.',
    'pricing.feature1': 'இலவச ஹோம் டெலிவரி',
    'pricing.feature2': 'காலை 7.30 மணிக்குள் டெலிவரி',
    'pricing.feature3': '100% பசுவின் பால்',
    'pricing.feature4': 'ஹார்மோன்கள் அற்றது',
    'pricing.card1.title': 'அரை லிட்டர். முழுமையான ஆரோக்கியம்.',
    'pricing.card1.subtitle': 'தனியாக இருப்பவர்களுக்கு ஏற்றது',
    'pricing.card1.price': '40',
    'pricing.card1.monthly': '~₹1240/மாதம்',
    'pricing.card2.title': 'ஒரு லிட்டர். முழு திருப்தி.',
    'pricing.card2.subtitle': 'குடும்பங்களுக்கு ஏற்றது',
    'pricing.card2.price': '76',
    'pricing.card2.monthly': '~₹2356/மாதம்',
    'pricing.cta': 'இலவசமாக பதிவு செய்யவும்',
    'pricing.bottom':
        'விற்பனைக்கு முந்தைய சந்தா முறை. வெளிப்படையானது மற்றும் நெகிழ்வானது.',

    // How We Work
    'hww.badge': 'எங்கள் செயல்முறை',
    'hww.title': 'நாங்கள் எப்படி செயல்படுகிறோம்',
    'hww.subtitle':
        'ஒவ்வொரு நாளும் MAP தரநிலையால் நிர்வகிக்கப்படும் ஒரு வரைமுறை.',
    'hww.s1.title': 'தினசரி சேகரிப்பு',
    'hww.s1.desc':
        'உள்ளூர் பண்ணைகளிலிருந்து தினமும் உணவு தரத்திலான கேன்களில் பால் சேகரிக்கப்படுகிறது.',
    'hww.s2.title': 'உடனடி குளிர்விப்பு',
    'hww.s2.desc': 'சேகரித்த சில நிமிடங்களிலேயே குளிர்விக்கப்படுகிறது.',
    'hww.s3.title': 'சுத்தமான கையாளுதல்',
    'hww.s3.desc': 'கடுமையான, சுத்தமான நிலையில் கையாளப்படுகிறது.',
    'hww.s4.title': 'ஃப்ரெஷ் விநியோகம்',
    'hww.s4.desc':
        'தினமும் காலையில் கண்ணாடி பாட்டில்களில் மட்டுமே விநியோகிக்கப்படுகிறது.',
    'hww.s5.title': 'காலி பாட்டில்கள்',
    'hww.s5.desc':
        'அடுத்த டெலிவரியின் போது காலி பாட்டில்கள் திரும்பப் பெறப்படுகின்றன.',

    // Subscription
    'sub.badge': 'எங்கள் முறை',
    'sub.title': 'நாங்கள் ஏன் சந்தா முறையைப் பயன்படுத்துகிறோம்',
    'sub.desc': 'மதுகை ஒரு திட்டமிட்ட சந்தா மாதிரியில் இயங்குகிறது.',
    'sub.limited.title': 'குறிப்பிட்ட குடும்பங்கள்',
    'sub.limited.desc':
        'மதுகை ஒரு குறிப்பிட்ட எண்ணிக்கையிலான குடும்பங்களுக்கு மட்டுமே சேவை செய்கிறது.',
    'sub.v1.title': 'வசதியை விட ஒழுக்கம்',
    'sub.v1.text': 'சந்தா முறை கணிசமான கையாளுதலை உறுதி செய்கிறது.',
    'sub.v2.title': 'பல்வகைமையை விட சீரான தன்மை',
    'sub.v2.text': 'நாங்கள் ஒரு சிறிய, சரியான வரம்பில் கவனம் செலுத்துகிறோம்.',
    'sub.v3.title': 'தள்ளுபடியை விட தரம்',
    'sub.v3.text': 'நேர்மையை தள்ளுபடி செய்ய முடியாது.',

    // Purity / MAP Standard
    'purity.badge': 'செயல்பாட்டு ஒழுக்கம்',
    'purity.title': 'MAP தரநிலை',
    'purity.subtitle':
        'மதுகையில் ஒவ்வொரு லிட்டர் பாலும் MAP தரநிலையால் நிர்வகிக்கப்படுகிறது.',
    'purity.f1.title': 'தினசரி பால் சேகரிப்பு',
    'purity.f1.desc':
        'தேர்ந்தெடுக்கப்பட்ட உள்ளூர் பண்ணைகளிலிருந்து தினமும் சேகரிக்கப்படுகிறது.',
    'purity.f2.title': 'உடனடி குளிர்விப்பு',
    'purity.f2.desc': 'சேகரிக்கப்பட்ட உடனேயே பால் குளிர்விக்கப்படுகிறது.',
    'purity.f3.title': 'கண்ணாடி பாட்டில் விநியோகம்',
    'purity.f3.desc':
        'மறுசுழற்சி செய்யக்கூடிய கண்ணாடி பாட்டில்களில் மட்டுமே விநியோகிக்கப்படுகிறது.',
    'purity.f4.title': 'கட்டுப்படுத்தப்பட்ட விநியோகம்',
    'purity.f4.desc':
        'சீரான தரத்தை பராமரிக்க அதன் அளவை மாற்றாமல் செயல்படுகிறோம்.',
    'purity.f5.title': 'தூய நேர்மை',
    'purity.f5.desc':
        'சேர்க்கைகள் இல்லை. மேம்படுத்தல்கள் இல்லை. குறுக்குவழிகள் இல்லை.',

    // App Promo
    'app.badge': 'மதுகை ஆப்',
    'app.title': 'உங்கள் தினசரி பால் சந்தாவை நிர்வகிக்கவும்.',
    'app.subtitle':
        'ஆர்டர்களை நிர்வகிக்கவும், டெலிவரியை உடனுக்குடன் கண்காணிக்கவும்.',
    'app.f1.title': 'எளிதான கட்டுப்பாடு',
    'app.f1.desc': 'தினமும் நிறுத்தவோ மாற்றவோ முடியும்',
    'app.f2.title': 'நேரடி அறிவிப்புகள்',
    'app.f2.desc': 'பால் வந்ததும் தெரிந்து கொள்ளலாம்',
    'app.f3.title': 'ஸ்மார்ட் பில்லிங்',
    'app.f3.desc': 'விரிவான டிஜிட்டல் ரசீதுகள்',
    'app.f4.title': 'முன்னுரிமை உதவி',
    'app.f4.desc': 'சிறப்பு உதவி மையம்',

    // FAQ
    'faq.title': 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
    'faq.subtitle':
        'மதுகை பால் மற்றும் சேவைகள் பற்றி நீங்கள் தெரிந்து கொள்ள வேண்டிய அனைத்தும்.',
    'faq.q1': 'மதுகை என்றால் என்ன?',
    'faq.a1':
        'மதுகை என்பது பண்ணையிலிருந்து நேரடியாக வீட்டிற்கு வரும் பால் விநியோக சேவையாகும்.',
    'faq.q2': 'மதுகை எங்கு செயல்படுகிறது?',
    'faq.a2': 'நாங்கள் தற்போது வேலூர் மாவட்டத்தில் செயல்படுகிறோம்.',
    'faq.q3': 'மதுகை சான்றளிக்கப்பட்டுள்ளதா?',
    'faq.a3': 'ஆம். மதுகை FSSAI உரிமத்தின் கீழ் செயல்படுகிறது.',
    'faq.q4': 'பால் பாஸ்டுரைஸ் செய்யப்படுகிறதா?',
    'faq.a4':
        'பால் சேகரிக்கப்பட்ட உடனேயே குளிர்விக்கப்பட்டு ஃப்ரெஷ்ஷாக வழங்கப்படுகிறது.',
    'faq.q5': 'பாலை எப்படி சேமிக்க வேண்டும்?',
    'faq.a5':
        'உடனடியாக குளிர்சாதனப்பெட்டியில் வைக்கவும். 2-3 நாட்களுக்குள் பயன்படுத்தவும்.',
    'faq.q6': 'பால் எத்தனை மணிக்கு வரும்?',
    'faq.a6': 'காலை 5:30 முதல் 7:30 மணிக்குள் வழங்கப்படுகிறது.',
    'faq.q7': 'சந்தாவை நிறுத்த முடியுமா?',
    'faq.a7': 'ஆம். மதுகை ஆப்பில் நிறுத்தலாம்.',
    'faq.q8': 'பணம் எப்படி செலுத்துவது?',
    'faq.a8':
        'ப்ரீபெய்ட் வாலட் மூலம். UPI, கார்டு அல்லது நெட் பேங்கிங் மூலம் ரீசார்ஜ் செய்யலாம்.',
    'faq.q9': 'ஏன் கண்ணாடி பாட்டில்கள்?',
    'faq.a9':
        'கண்ணாடி பாலின் தூய்மையைப் பாதுகாக்கிறது மற்றும் சுற்றுச்சூழலுக்கு ஏற்றது.',
    'faq.q10': 'பாட்டில் தொலைந்தால்?',
    'faq.a10':
        'தொலைந்த அல்லது உடைந்த பாட்டில்களுக்கு மாற்றுக் கட்டணம் வசூலிக்கப்படும்.',

    // Contact
    'contact.title': 'தொடர்பு கொள்ள',
    'contact.desc':
        'மாதிரி பாலைக் கோர விரும்பினாலும், காத்திருப்புப் பட்டியலில் சேர விரும்பினாலும் — நாங்கள் இங்கே இருக்கிறோம்.',
    'contact.call': 'அழையுங்கள்',
    'contact.email': 'மின்னஞ்சல்',
    'contact.visit': 'நேரில் வர',
    'contact.whatsapp': 'வாட்ஸ்அப் உதவி',
    'contact.whatsapp.desc': 'சந்தாதாரர்களுக்கான உடனடி பதில்.',
    'contact.form.name': 'முழு பெயர்',
    'contact.form.phone': 'தொலைபேசி',
    'contact.form.subject': 'பொருள்',
    'contact.form.message': 'செய்தி',
    'contact.form.send': 'செய்தி அனுப்பு',
    'contact.form.s1': 'மாதிரி பால் கோரிக்கை',
    'contact.form.s2': 'காத்திருப்புப் பட்டியலில் சேர',
    'contact.form.s3': 'பொதுவான விசாரணை',

    // Transparency
    'trans.title': 'முழுமையான வெளிப்படைத்தன்மை',
    'trans.desc':
        'ஒவ்வொரு பேட்சிற்கும் நிகழ்நேர அளவீடு மற்றும் சுயாதீன ஆய்வக சரிபார்ப்பு.',
    'trans.fat': 'கொழுப்புச் சத்து',
    'trans.snf': 'SNF (திடப் பொருட்கள்)',
    'trans.ph': 'pH அளவு',
    'trans.fssai': 'FSSAI உரிமம் பெற்ற வசதி',

    // Footer
    'footer.tagline': '"பால், சரியான முறையில்."',
    'footer.about':
        'தொழில்துறை குறுக்குவழிகள் இல்லாமல் தூய பாலை வழங்க மதுகை உள்ளது.',

    // General
    'general.readMore': 'மேலும் படிக்க',
    'general.learnMore': 'மேலும் அறிய',
    'general.viewAll': 'அனைத்தையும் பார்க்க',
    'general.back': 'பின்செல்',
    'settings.title': 'அமைப்புகள்',
    'settings.language': 'மொழி',
    'settings.english': 'English',
    'settings.tamil': 'தமிழ்',
  };
}
