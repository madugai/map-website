import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../core/l10n/language_provider.dart';
import '../../core/theme/app_colors.dart';

class FAQScreen extends StatefulWidget {
  const FAQScreen({super.key});
  @override
  State<FAQScreen> createState() => _FAQScreenState();
}

class _FAQScreenState extends State<FAQScreen> {
  int? _expandedIndex;

  @override
  Widget build(BuildContext context) {
    final lang = context.watch<LanguageProvider>();

    final faqs = [
      {'q': lang.t('faq.q1'), 'a': lang.t('faq.a1')},
      {'q': lang.t('faq.q2'), 'a': lang.t('faq.a2')},
      {'q': lang.t('faq.q3'), 'a': lang.t('faq.a3')},
      {'q': lang.t('faq.q4'), 'a': lang.t('faq.a4')},
      {'q': lang.t('faq.q5'), 'a': lang.t('faq.a5')},
      {'q': lang.t('faq.q6'), 'a': lang.t('faq.a6')},
      {'q': lang.t('faq.q7'), 'a': lang.t('faq.a7')},
      {'q': lang.t('faq.q8'), 'a': lang.t('faq.a8')},
      {'q': lang.t('faq.q9'), 'a': lang.t('faq.a9')},
      {'q': lang.t('faq.q10'), 'a': lang.t('faq.a10')},
    ];

    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        title: Text(lang.t('faq.title')),
        backgroundColor: AppColors.dark,
        foregroundColor: Colors.white,
      ),
      body: ListView.builder(
        padding: const EdgeInsets.all(24),
        itemCount: faqs.length,
        itemBuilder: (context, index) {
          final faq = faqs[index];
          final isExpanded = _expandedIndex == index;

          return GestureDetector(
            behavior: HitTestBehavior.opaque,
            onTap: () =>
                setState(() => _expandedIndex = isExpanded ? null : index),
            child: AnimatedContainer(
              duration: const Duration(milliseconds: 300),
              margin: const EdgeInsets.only(bottom: 12),
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(
                color: isExpanded
                    ? AppColors.primary.withValues(alpha: 0.05)
                    : AppColors.surfaceAlt,
                borderRadius: BorderRadius.circular(14),
                border: Border.all(
                  color: isExpanded
                      ? AppColors.primary.withValues(alpha: 0.2)
                      : AppColors.borderLight,
                ),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Container(
                        width: 32,
                        height: 32,
                        decoration: BoxDecoration(
                          color: isExpanded
                              ? AppColors.primary
                              : AppColors.primary.withValues(alpha: 0.1),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        child: Center(
                          child: Text(
                            '${index + 1}',
                            style: TextStyle(
                              fontSize: 12,
                              fontWeight: FontWeight.w800,
                              color: isExpanded
                                  ? Colors.white
                                  : AppColors.primary,
                            ),
                          ),
                        ),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Text(
                          faq['q']!,
                          style: TextStyle(
                            fontWeight: FontWeight.w700,
                            fontSize: 14,
                            color: isExpanded
                                ? AppColors.primary
                                : AppColors.textPrimary,
                          ),
                        ),
                      ),
                      AnimatedRotation(
                        turns: isExpanded ? 0.5 : 0,
                        duration: const Duration(milliseconds: 300),
                        child: Icon(
                          Icons.keyboard_arrow_down,
                          color: isExpanded
                              ? AppColors.primary
                              : AppColors.textTertiary,
                        ),
                      ),
                    ],
                  ),
                  AnimatedCrossFade(
                    firstChild: const SizedBox.shrink(),
                    secondChild: Padding(
                      padding: const EdgeInsets.only(top: 16, left: 44),
                      child: Text(
                        faq['a']!,
                        style: const TextStyle(
                          fontSize: 13,
                          color: AppColors.textSecondary,
                          height: 1.6,
                        ),
                      ),
                    ),
                    crossFadeState: isExpanded
                        ? CrossFadeState.showSecond
                        : CrossFadeState.showFirst,
                    duration: const Duration(milliseconds: 300),
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}
