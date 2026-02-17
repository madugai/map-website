import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:url_launcher/url_launcher.dart';
import '../../core/l10n/language_provider.dart';
import '../../core/theme/app_colors.dart';
import '../../core/constants/app_constants.dart';
import '../contact/contact_screen.dart';
import '../faq/faq_screen.dart';
import '../transparency/transparency_screen.dart';

class MoreScreen extends StatelessWidget {
  const MoreScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final lang = context.watch<LanguageProvider>();

    return Scaffold(
      backgroundColor: AppColors.surface,
      body: SafeArea(
        child: SingleChildScrollView(
          physics: const BouncingScrollPhysics(),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // ── Native Header ──
              Padding(
                padding: const EdgeInsets.fromLTRB(20, 20, 20, 20),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      lang.isEnglish ? 'More' : 'மேலும்',
                      style: const TextStyle(
                        fontSize: 28,
                        fontWeight: FontWeight.w900,
                        color: AppColors.textPrimary,
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      lang.isEnglish
                          ? 'Settings & Information'
                          : 'அமைப்புகள் மற்றும் விவரங்கள்',
                      style: const TextStyle(
                        fontSize: 14,
                        color: AppColors.textSecondary,
                      ),
                    ),
                  ],
                ),
              ),

              // ── Language Toggle Section ──
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 20),
                child: Container(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 20,
                    vertical: 8,
                  ),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(20),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black.withValues(alpha: 0.03),
                        blurRadius: 10,
                        offset: const Offset(0, 4),
                      ),
                    ],
                  ),
                  child: ListTile(
                    contentPadding: EdgeInsets.zero,
                    leading: Container(
                      padding: const EdgeInsets.all(10),
                      decoration: BoxDecoration(
                        color: AppColors.primary.withValues(alpha: 0.1),
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: const Icon(
                        Icons.language,
                        color: AppColors.primary,
                        size: 20,
                      ),
                    ),
                    title: Text(
                      lang.isEnglish ? 'Language' : 'மொழி',
                      style: const TextStyle(
                        fontWeight: FontWeight.w700,
                        fontSize: 15,
                      ),
                    ),
                    subtitle: Text(
                      lang.isEnglish ? 'Current: English' : 'தற்போதைய: தமிழ்',
                      style: const TextStyle(fontSize: 12),
                    ),
                    trailing: Switch(
                      value: !lang.isEnglish,
                      onChanged: (_) => lang.toggleLanguage(),
                      activeColor: AppColors.primary,
                    ),
                  ),
                ),
              ),

              const SizedBox(height: 24),

              // ── Info Links ──
              _SettingsSection(
                title: lang.isEnglish ? 'Information' : 'தகவல்',
                items: [
                  _SettingsItem(
                    icon: Icons.science_outlined,
                    label: lang.isEnglish
                        ? 'Our Purity Standard'
                        : 'எங்கள் தூய்மை தரம்',
                    onTap: () => Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (_) => const TransparencyScreen(),
                      ),
                    ),
                  ),
                  _SettingsItem(
                    icon: Icons.verified_user_outlined,
                    label: lang.isEnglish
                        ? 'Transparency Report'
                        : 'வெளிப்படைத்தன்மை அறிக்கை',
                    onTap: () => Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (_) => const TransparencyScreen(),
                      ),
                    ),
                  ),
                  _SettingsItem(
                    icon: Icons.help_outline,
                    label: lang.t('faq.title'),
                    onTap: () => Navigator.push(
                      context,
                      MaterialPageRoute(builder: (_) => const FAQScreen()),
                    ),
                  ),
                  _SettingsItem(
                    icon: Icons.contact_support_outlined,
                    label: lang.t('contact.title'),
                    onTap: () => Navigator.push(
                      context,
                      MaterialPageRoute(builder: (_) => const ContactScreen()),
                    ),
                  ),
                ],
              ),

              const SizedBox(height: 24),

              // ── Contact Links ──
              _SettingsSection(
                title: lang.isEnglish
                    ? 'Support & Social'
                    : 'ஆதரவு மற்றும் சமூகம்',
                items: [
                  _SettingsItem(
                    icon: Icons.phone_outlined,
                    label: lang.t('contact.call'),
                    onTap: () =>
                        launchUrl(Uri.parse('tel:${AppConstants.phone}')),
                  ),
                  _SettingsItem(
                    icon: Icons.message_outlined,
                    label: 'WhatsApp',
                    onTap: () => launchUrl(Uri.parse(AppConstants.whatsappUrl)),
                  ),
                  _SettingsItem(
                    icon: Icons.language_outlined,
                    label: lang.isEnglish
                        ? 'Visit Website'
                        : 'இணையதளத்தைப் பார்வையிடவும்',
                    onTap: () => launchUrl(Uri.parse(AppConstants.websiteUrl)),
                  ),
                ],
              ),

              const SizedBox(height: 40),

              // ── Footer ──
              Center(
                child: Column(
                  children: [
                    Text(
                      'Madugai Agro Product',
                      style: TextStyle(
                        fontSize: 14,
                        fontWeight: FontWeight.w800,
                        color: AppColors.textPrimary.withValues(alpha: 0.6),
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      'FSSAI: ${AppConstants.fssaiLicense}',
                      style: const TextStyle(
                        fontSize: 11,
                        color: AppColors.textTertiary,
                      ),
                    ),
                    const SizedBox(height: 20),
                    Text(
                      'v1.0.0 (Native)',
                      style: TextStyle(
                        fontSize: 10,
                        color: AppColors.textTertiary.withValues(alpha: 0.5),
                      ),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: 120),
            ],
          ),
        ),
      ),
    );
  }
}

class _SettingsSection extends StatelessWidget {
  final String title;
  final List<_SettingsItem> items;

  const _SettingsSection({required this.title, required this.items});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.only(left: 32, bottom: 12, top: 4),
          child: Text(
            title.toUpperCase(),
            style: const TextStyle(
              fontSize: 11,
              fontWeight: FontWeight.w900,
              letterSpacing: 1.5,
              color: AppColors.textTertiary,
            ),
          ),
        ),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20),
          child: Container(
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(24),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withValues(alpha: 0.03),
                  blurRadius: 10,
                  offset: const Offset(0, 4),
                ),
              ],
            ),
            child: Column(
              children: items.asMap().entries.map((entry) {
                final idx = entry.key;
                final item = entry.value;
                return Column(
                  children: [
                    ListTile(
                      onTap: item.onTap,
                      leading: Icon(
                        item.icon,
                        size: 20,
                        color: AppColors.textSecondary,
                      ),
                      title: Text(
                        item.label,
                        style: const TextStyle(
                          fontSize: 14,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                      trailing: const Icon(
                        Icons.chevron_right,
                        size: 18,
                        color: AppColors.textTertiary,
                      ),
                      contentPadding: const EdgeInsets.symmetric(
                        horizontal: 20,
                        vertical: 4,
                      ),
                    ),
                    if (idx < items.length - 1)
                      Padding(
                        padding: const EdgeInsets.only(left: 56),
                        child: Divider(
                          height: 1,
                          color: AppColors.border.withValues(alpha: 0.5),
                        ),
                      ),
                  ],
                );
              }).toList(),
            ),
          ),
        ),
      ],
    );
  }
}

class _SettingsItem {
  final IconData icon;
  final String label;
  final VoidCallback onTap;
  _SettingsItem({required this.icon, required this.label, required this.onTap});
}
