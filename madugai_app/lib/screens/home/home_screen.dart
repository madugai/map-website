import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:url_launcher/url_launcher.dart';
import '../../core/l10n/language_provider.dart';
import '../../core/theme/app_colors.dart';
import '../../core/constants/app_constants.dart';
import '../contact/contact_screen.dart';
import '../faq/faq_screen.dart';
import '../transparency/transparency_screen.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final lang = context.watch<LanguageProvider>();
    final greeting = _getGreeting();

    return Scaffold(
      backgroundColor: AppColors.surface,
      body: SafeArea(
        child: SingleChildScrollView(
          physics: const BouncingScrollPhysics(),
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const SizedBox(height: 20),

                // ── Top Bar ──
                Row(
                  children: [
                    // Logo + greeting
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            children: [
                              Container(
                                width: 36,
                                height: 36,
                                decoration: BoxDecoration(
                                  color: AppColors.primary,
                                  borderRadius: BorderRadius.circular(10),
                                ),
                                child: const Center(
                                  child: Text(
                                    'M',
                                    style: TextStyle(
                                      color: Colors.white,
                                      fontWeight: FontWeight.w900,
                                      fontSize: 18,
                                    ),
                                  ),
                                ),
                              ),
                              const SizedBox(width: 12),
                              Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    greeting,
                                    style: TextStyle(
                                      fontSize: 12,
                                      color: AppColors.textTertiary,
                                      fontWeight: FontWeight.w500,
                                    ),
                                  ),
                                  const Text(
                                    'Madugai',
                                    style: TextStyle(
                                      fontSize: 20,
                                      fontWeight: FontWeight.w900,
                                      color: AppColors.textPrimary,
                                    ),
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                    // Language toggle
                    GestureDetector(
                      onTap: () => lang.toggleLanguage(),
                      child: Container(
                        padding: const EdgeInsets.symmetric(
                          horizontal: 14,
                          vertical: 8,
                        ),
                        decoration: BoxDecoration(
                          color: AppColors.primary.withValues(alpha: 0.1),
                          borderRadius: BorderRadius.circular(20),
                        ),
                        child: Text(
                          lang.isEnglish ? 'தமிழ்' : 'EN',
                          style: const TextStyle(
                            fontSize: 12,
                            fontWeight: FontWeight.w800,
                            color: AppColors.primary,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),

                const SizedBox(height: 28),

                // ── Hero Card ──
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.all(24),
                  decoration: BoxDecoration(
                    gradient: const LinearGradient(
                      colors: [Color(0xFF2D3B1A), Color(0xFF4F6F19)],
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                    ),
                    borderRadius: BorderRadius.circular(24),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        padding: const EdgeInsets.symmetric(
                          horizontal: 10,
                          vertical: 4,
                        ),
                        decoration: BoxDecoration(
                          color: Colors.white.withValues(alpha: 0.15),
                          borderRadius: BorderRadius.circular(20),
                        ),
                        child: Text(
                          '🥛 ${lang.t('features.pure.title')}',
                          style: const TextStyle(
                            color: Colors.white,
                            fontSize: 11,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ),
                      const SizedBox(height: 16),
                      Text(
                        lang.t('hero.title1'),
                        style: const TextStyle(
                          color: Colors.white,
                          fontSize: 28,
                          fontWeight: FontWeight.w900,
                          height: 1.1,
                        ),
                      ),
                      Text(
                        '${lang.t('hero.title2')} ${lang.t('hero.title3')}',
                        style: TextStyle(
                          color: AppColors.primarySoft,
                          fontSize: 28,
                          fontWeight: FontWeight.w900,
                          height: 1.1,
                        ),
                      ),
                      const SizedBox(height: 12),
                      Text(
                        lang.t('hero.description'),
                        style: TextStyle(
                          color: Colors.white.withValues(alpha: 0.6),
                          fontSize: 13,
                          height: 1.5,
                        ),
                        maxLines: 2,
                        overflow: TextOverflow.ellipsis,
                      ),
                      const SizedBox(height: 20),
                      GestureDetector(
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (_) => const ContactScreen(),
                            ),
                          );
                        },
                        child: Container(
                          padding: const EdgeInsets.symmetric(
                            horizontal: 20,
                            vertical: 12,
                          ),
                          decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.circular(25),
                          ),
                          child: Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Text(
                                lang.t('hero.cta').toUpperCase(),
                                style: const TextStyle(
                                  color: AppColors.primary,
                                  fontSize: 11,
                                  fontWeight: FontWeight.w900,
                                  letterSpacing: 1,
                                ),
                              ),
                              const SizedBox(width: 8),
                              const Icon(
                                Icons.arrow_forward,
                                color: AppColors.primary,
                                size: 16,
                              ),
                            ],
                          ),
                        ),
                      ),
                    ],
                  ),
                ),

                const SizedBox(height: 28),

                // ── Quick Actions ──
                Text(
                  lang.isEnglish ? 'Quick Actions' : 'விரைவு செயல்கள்',
                  style: const TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.w800,
                    color: AppColors.textPrimary,
                  ),
                ),
                const SizedBox(height: 14),
                Row(
                  children: [
                    _QuickAction(
                      icon: Icons.phone_outlined,
                      label: lang.t('contact.call'),
                      color: AppColors.primary,
                      onTap: () =>
                          launchUrl(Uri.parse('tel:${AppConstants.phone}')),
                    ),
                    const SizedBox(width: 12),
                    _QuickAction(
                      icon: Icons.message_outlined,
                      label: 'WhatsApp',
                      color: const Color(0xFF25D366),
                      onTap: () =>
                          launchUrl(Uri.parse(AppConstants.whatsappUrl)),
                    ),
                    const SizedBox(width: 12),
                    _QuickAction(
                      icon: Icons.science_outlined,
                      label: lang.isEnglish ? 'Purity' : 'தூய்மை',
                      color: const Color(0xFF3B82F6),
                      onTap: () => Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (_) => const TransparencyScreen(),
                        ),
                      ),
                    ),
                    const SizedBox(width: 12),
                    _QuickAction(
                      icon: Icons.help_outline,
                      label: 'FAQ',
                      color: const Color(0xFFF59E0B),
                      onTap: () => Navigator.push(
                        context,
                        MaterialPageRoute(builder: (_) => const FAQScreen()),
                      ),
                    ),
                  ],
                ),

                const SizedBox(height: 28),

                // ── Today's Delivery Status Card ──
                Container(
                  padding: const EdgeInsets.all(20),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(20),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black.withValues(alpha: 0.04),
                        blurRadius: 15,
                        offset: const Offset(0, 4),
                      ),
                    ],
                  ),
                  child: Column(
                    children: [
                      Row(
                        children: [
                          Container(
                            padding: const EdgeInsets.all(10),
                            decoration: BoxDecoration(
                              color: AppColors.success.withValues(alpha: 0.1),
                              borderRadius: BorderRadius.circular(12),
                            ),
                            child: const Icon(
                              Icons.local_shipping,
                              color: AppColors.success,
                              size: 22,
                            ),
                          ),
                          const SizedBox(width: 14),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  lang.isEnglish
                                      ? 'Delivery Window'
                                      : 'டெலிவரி நேரம்',
                                  style: const TextStyle(
                                    fontWeight: FontWeight.w800,
                                    fontSize: 15,
                                  ),
                                ),
                                const SizedBox(height: 2),
                                Text(
                                  lang.isEnglish
                                      ? '5:30 AM — 7:30 AM Daily'
                                      : 'தினமும் காலை 5:30 — 7:30',
                                  style: const TextStyle(
                                    fontSize: 12,
                                    color: AppColors.textTertiary,
                                  ),
                                ),
                              ],
                            ),
                          ),
                          Container(
                            padding: const EdgeInsets.symmetric(
                              horizontal: 12,
                              vertical: 6,
                            ),
                            decoration: BoxDecoration(
                              color: AppColors.success.withValues(alpha: 0.1),
                              borderRadius: BorderRadius.circular(20),
                            ),
                            child: Row(
                              children: [
                                Container(
                                  width: 6,
                                  height: 6,
                                  decoration: const BoxDecoration(
                                    color: AppColors.success,
                                    shape: BoxShape.circle,
                                  ),
                                ),
                                const SizedBox(width: 6),
                                Text(
                                  lang.isEnglish ? 'ACTIVE' : 'இயங்குகிறது',
                                  style: const TextStyle(
                                    color: AppColors.success,
                                    fontSize: 10,
                                    fontWeight: FontWeight.w900,
                                    letterSpacing: 1,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 16),
                      // Progress bar
                      ClipRRect(
                        borderRadius: BorderRadius.circular(4),
                        child: LinearProgressIndicator(
                          value: 0.78,
                          minHeight: 6,
                          backgroundColor: AppColors.primary.withValues(
                            alpha: 0.1,
                          ),
                          color: AppColors.primary,
                        ),
                      ),
                      const SizedBox(height: 10),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          _DeliveryStep(
                            lang.isEnglish ? 'Collected' : 'சேகரிப்பு',
                            true,
                          ),
                          _DeliveryStep(
                            lang.isEnglish ? 'Chilled' : 'குளிர்',
                            true,
                          ),
                          _DeliveryStep(
                            lang.isEnglish ? 'Bottled' : 'பாட்டில்',
                            true,
                          ),
                          _DeliveryStep(
                            lang.isEnglish ? 'Delivered' : 'டெலிவரி',
                            false,
                          ),
                        ],
                      ),
                    ],
                  ),
                ),

                const SizedBox(height: 28),

                // ── Products Horizontal Scroll ──
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      lang.t('products.title'),
                      style: const TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.w800,
                        color: AppColors.textPrimary,
                      ),
                    ),
                    GestureDetector(
                      onTap: () {
                        // Switch to products tab
                      },
                      child: Text(
                        lang.t('general.viewAll'),
                        style: const TextStyle(
                          fontSize: 12,
                          fontWeight: FontWeight.w700,
                          color: AppColors.primary,
                        ),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 14),
                SizedBox(
                  height: 240,
                  child: ListView(
                    scrollDirection: Axis.horizontal,
                    physics: const BouncingScrollPhysics(),
                    children: [
                      _ProductMiniCard(
                        imagePath: 'assets/images/milk.jpg',
                        title: lang.t('products.milk.title'),
                        price: '₹76/L',
                        badge: lang.t('products.badge.bestSeller'),
                        color: const Color(0xFFF0F7EB),
                      ),
                      _ProductMiniCard(
                        imagePath: 'assets/images/ghee.jpg',
                        title: lang.t('products.ghee.title'),
                        price: '',
                        badge: null,
                        color: const Color(0xFFFFF8E7),
                      ),
                      _ProductMiniCard(
                        imagePath: 'assets/images/paneer.png',
                        title: lang.t('products.paneer.title'),
                        price: '',
                        badge: lang.t('products.badge.new'),
                        color: const Color(0xFFFFF0F0),
                      ),
                      _ProductMiniCard(
                        imagePath: 'assets/images/coconut.png',
                        title: lang.t('products.coconut.title'),
                        price: '',
                        badge: lang.t('products.badge.seasonal'),
                        color: const Color(0xFFE8F5E9),
                      ),
                    ],
                  ),
                ),

                const SizedBox(height: 28),

                // ── Pricing Quick View ──
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      lang.t('pricing.title'),
                      style: const TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.w800,
                        color: AppColors.textPrimary,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 14),
                Row(
                  children: [
                    Expanded(
                      child: _PricingMiniCard(
                        volume: '500ml',
                        price: '₹40',
                        perMonth: lang.t('pricing.card1.monthly'),
                        isPopular: false,
                      ),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      child: _PricingMiniCard(
                        volume: '1 Litre',
                        price: '₹76',
                        perMonth: lang.t('pricing.card2.monthly'),
                        isPopular: true,
                      ),
                    ),
                  ],
                ),

                const SizedBox(height: 28),

                // ── MAP Standard Banner ──
                Container(
                  padding: const EdgeInsets.all(20),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(20),
                    border: Border.all(
                      color: AppColors.primary.withValues(alpha: 0.15),
                    ),
                  ),
                  child: Row(
                    children: [
                      Container(
                        padding: const EdgeInsets.all(12),
                        decoration: BoxDecoration(
                          color: AppColors.primary.withValues(alpha: 0.1),
                          borderRadius: BorderRadius.circular(14),
                        ),
                        child: const Icon(
                          Icons.shield,
                          color: AppColors.primary,
                          size: 28,
                        ),
                      ),
                      const SizedBox(width: 16),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              lang.t('purity.title'),
                              style: const TextStyle(
                                fontSize: 16,
                                fontWeight: FontWeight.w800,
                              ),
                            ),
                            const SizedBox(height: 4),
                            Text(
                              lang.isEnglish
                                  ? 'Our operating discipline for every litre'
                                  : 'ஒவ்வொரு லிட்டருக்கும் எங்கள் செயல்பாட்டு ஒழுக்கம்',
                              style: const TextStyle(
                                fontSize: 12,
                                color: AppColors.textTertiary,
                              ),
                            ),
                          ],
                        ),
                      ),
                      const Icon(
                        Icons.chevron_right,
                        color: AppColors.textTertiary,
                      ),
                    ],
                  ),
                ),

                const SizedBox(height: 20),

                // ── FSSAI Badge ──
                Container(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 16,
                    vertical: 12,
                  ),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(14),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(
                        Icons.verified_user,
                        color: AppColors.primary,
                        size: 18,
                      ),
                      const SizedBox(width: 8),
                      Text(
                        'FSSAI: ${AppConstants.fssaiLicense}',
                        style: const TextStyle(
                          fontSize: 11,
                          fontWeight: FontWeight.w700,
                          color: AppColors.textTertiary,
                          letterSpacing: 1,
                        ),
                      ),
                    ],
                  ),
                ),

                const SizedBox(height: 100),
              ],
            ),
          ),
        ),
      ),
    );
  }

  String _getGreeting() {
    final hour = DateTime.now().hour;
    if (hour < 12) return 'Good Morning ☀️';
    if (hour < 17) return 'Good Afternoon 🌤️';
    return 'Good Evening 🌙';
  }
}

// ─── Quick Action Button ────────────────────────────────────────
class _QuickAction extends StatelessWidget {
  final IconData icon;
  final String label;
  final Color color;
  final VoidCallback onTap;

  const _QuickAction({
    required this.icon,
    required this.label,
    required this.color,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: GestureDetector(
        onTap: onTap,
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 16),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(16),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withValues(alpha: 0.03),
                blurRadius: 10,
                offset: const Offset(0, 2),
              ),
            ],
          ),
          child: Column(
            children: [
              Container(
                padding: const EdgeInsets.all(10),
                decoration: BoxDecoration(
                  color: color.withValues(alpha: 0.1),
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Icon(icon, color: color, size: 20),
              ),
              const SizedBox(height: 8),
              Text(
                label,
                style: TextStyle(
                  fontSize: 10,
                  fontWeight: FontWeight.w700,
                  color: AppColors.textSecondary,
                ),
                textAlign: TextAlign.center,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// ─── Delivery Step ──────────────────────────────────────────────
class _DeliveryStep extends StatelessWidget {
  final String label;
  final bool completed;

  const _DeliveryStep(this.label, this.completed);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Icon(
          completed ? Icons.check_circle : Icons.radio_button_unchecked,
          color: completed ? AppColors.primary : AppColors.textTertiary,
          size: 16,
        ),
        const SizedBox(height: 4),
        Text(
          label,
          style: TextStyle(
            fontSize: 9,
            fontWeight: completed ? FontWeight.w700 : FontWeight.w500,
            color: completed ? AppColors.textPrimary : AppColors.textTertiary,
          ),
        ),
      ],
    );
  }
}

// ─── Product Mini Card ──────────────────────────────────────────
class _ProductMiniCard extends StatelessWidget {
  final String imagePath;
  final String title;
  final String price;
  final String? badge;
  final Color color;

  const _ProductMiniCard({
    required this.imagePath,
    required this.title,
    required this.price,
    this.badge,
    required this.color,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 140,
      margin: const EdgeInsets.only(right: 14),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: 0.04),
            blurRadius: 12,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Icon area
          Container(
            width: double.infinity,
            height: 120, // Increased from 70
            decoration: BoxDecoration(
              color: color.withValues(alpha: 0.1), // Softer background
              borderRadius: BorderRadius.circular(14),
            ),
            child: Stack(
              children: [
                Center(
                  child: Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Image.asset(
                      imagePath,
                      fit: BoxFit.contain,
                      height: 100, // Increased from 80
                    ),
                  ),
                ),
                if (badge != null)
                  Positioned(
                    top: 6,
                    right: 6,
                    child: Container(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 6,
                        vertical: 2,
                      ),
                      decoration: BoxDecoration(
                        color: AppColors.primary,
                        borderRadius: BorderRadius.circular(8),
                      ),
                      child: Text(
                        badge!,
                        style: const TextStyle(
                          color: Colors.white,
                          fontSize: 7,
                          fontWeight: FontWeight.w800,
                        ),
                      ),
                    ),
                  ),
              ],
            ),
          ),
          const SizedBox(height: 12),
          Text(
            title,
            style: const TextStyle(
              fontSize: 13,
              fontWeight: FontWeight.w800,
              color: AppColors.textPrimary,
            ),
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
          ),
          if (price.isNotEmpty) ...[
            const SizedBox(height: 4),
            Text(
              price,
              style: const TextStyle(
                fontSize: 14,
                fontWeight: FontWeight.w900,
                color: AppColors.primary,
              ),
            ),
          ],
        ],
      ),
    );
  }
}

// ─── Pricing Mini Card ──────────────────────────────────────────
class _PricingMiniCard extends StatelessWidget {
  final String volume;
  final String price;
  final String perMonth;
  final bool isPopular;

  const _PricingMiniCard({
    required this.volume,
    required this.price,
    required this.perMonth,
    required this.isPopular,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: isPopular ? AppColors.primary : Colors.white,
        borderRadius: BorderRadius.circular(20),
        boxShadow: [
          BoxShadow(
            color: isPopular
                ? AppColors.primary.withValues(alpha: 0.25)
                : Colors.black.withValues(alpha: 0.04),
            blurRadius: 16,
            offset: const Offset(0, 6),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          if (isPopular)
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
              margin: const EdgeInsets.only(bottom: 10),
              decoration: BoxDecoration(
                color: Colors.white.withValues(alpha: 0.2),
                borderRadius: BorderRadius.circular(10),
              ),
              child: const Text(
                '⭐ POPULAR',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 8,
                  fontWeight: FontWeight.w900,
                  letterSpacing: 1,
                ),
              ),
            ),
          Text(
            volume,
            style: TextStyle(
              fontSize: 12,
              fontWeight: FontWeight.w700,
              color: isPopular
                  ? Colors.white.withValues(alpha: 0.7)
                  : AppColors.textTertiary,
            ),
          ),
          const SizedBox(height: 6),
          Text(
            price,
            style: TextStyle(
              fontSize: 36,
              fontWeight: FontWeight.w900,
              color: isPopular ? Colors.white : AppColors.primary,
              height: 1,
            ),
          ),
          const SizedBox(height: 4),
          Text(
            '/day',
            style: TextStyle(
              fontSize: 12,
              fontWeight: FontWeight.w600,
              color: isPopular
                  ? Colors.white.withValues(alpha: 0.5)
                  : AppColors.textTertiary,
            ),
          ),
          const SizedBox(height: 8),
          Text(
            perMonth,
            style: TextStyle(
              fontSize: 11,
              fontWeight: FontWeight.w600,
              color: isPopular
                  ? Colors.white.withValues(alpha: 0.4)
                  : AppColors.textTertiary,
            ),
          ),
        ],
      ),
    );
  }
}
