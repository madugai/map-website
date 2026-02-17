import 'package:flutter/material.dart';
import '../core/theme/app_colors.dart';

class SectionHeader extends StatelessWidget {
  final String? badge;
  final String title;
  final String? subtitle;
  final Color? titleColor;
  final Color? badgeColor;
  final Color? subtitleColor;
  final bool centerAlign;
  final Widget? titleHighlight;

  const SectionHeader({
    super.key,
    this.badge,
    required this.title,
    this.subtitle,
    this.titleColor,
    this.badgeColor,
    this.subtitleColor,
    this.centerAlign = true,
    this.titleHighlight,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: centerAlign
          ? CrossAxisAlignment.center
          : CrossAxisAlignment.start,
      children: [
        if (badge != null) ...[
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
            decoration: BoxDecoration(
              color: (badgeColor ?? AppColors.primary).withValues(alpha: 0.1),
              borderRadius: BorderRadius.circular(4),
            ),
            child: Text(
              badge!.toUpperCase(),
              style: TextStyle(
                fontSize: 10,
                fontWeight: FontWeight.w900,
                letterSpacing: 3,
                color: badgeColor ?? AppColors.primary,
              ),
            ),
          ),
          const SizedBox(height: 20),
        ],
        if (titleHighlight != null)
          titleHighlight!
        else
          Text(
            title,
            textAlign: centerAlign ? TextAlign.center : TextAlign.start,
            style: Theme.of(context).textTheme.displaySmall?.copyWith(
              color: titleColor ?? AppColors.textPrimary,
              fontWeight: FontWeight.w800,
            ),
          ),
        if (subtitle != null) ...[
          const SizedBox(height: 16),
          Text(
            subtitle!,
            textAlign: centerAlign ? TextAlign.center : TextAlign.start,
            style: Theme.of(context).textTheme.bodyLarge?.copyWith(
              color: subtitleColor ?? AppColors.textSecondary,
            ),
          ),
        ],
      ],
    );
  }
}
