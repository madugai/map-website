import 'package:flutter/material.dart';

class AppColors {
  AppColors._();

  // Brand Primary
  static const Color primary = Color(0xFF4F6F19);
  static const Color primaryLight = Color(0xFF77A533);
  static const Color primaryAccent = Color(0xFF89B441);
  static const Color primarySoft = Color(0xFFA4D45D);

  // Neutrals
  static const Color background = Color(0xFFFFFFFF);
  static const Color surface = Color(0xFFF5F5F5);
  static const Color surfaceAlt = Color(0xFFFAFAFA);
  static const Color surfaceCream = Color(0xFFF8FAF5);
  static const Color foreground = Color(0xFF1E1E1E);
  static const Color textPrimary = Color(0xFF111827);
  static const Color textSecondary = Color(0xFF6B7280);
  static const Color textTertiary = Color(0xFF9CA3AF);
  static const Color border = Color(0xFFE5E7EB);
  static const Color borderLight = Color(0xFFF3F4F6);

  // Dark sections
  static const Color dark = Color(0xFF1A1A1A);
  static const Color darkSurface = Color(0xFF2A2A2A);
  static const Color darkGreen = Color(0xFF4B6E48);

  // Functional
  static const Color success = Color(0xFF22C55E);
  static const Color error = Color(0xFFEF4444);
  static const Color warning = Color(0xFFF59E0B);
  static const Color info = Color(0xFF3B82F6);

  // Gradients
  static const LinearGradient primaryGradient = LinearGradient(
    colors: [Color(0xFF77A533), Color(0xFFA4D45D)],
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
  );

  static const LinearGradient darkGradient = LinearGradient(
    colors: [Color(0xFF1A1A1A), Color(0xFF2D2D2D)],
    begin: Alignment.topCenter,
    end: Alignment.bottomCenter,
  );

  static const LinearGradient heroOverlay = LinearGradient(
    colors: [
      Color(0xB3000000),
      Color(0xCC1E3214),
    ],
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
  );
}
