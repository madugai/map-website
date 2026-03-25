import 'package:flutter/material.dart';
import 'translations.dart';

class LanguageProvider extends ChangeNotifier {
  String _language = 'en';

  String get language => _language;
  bool get isEnglish => _language == 'en';
  bool get isTamil => _language == 'ta';

  void setLanguage(String lang) {
    if (lang != _language && (lang == 'en' || lang == 'ta')) {
      _language = lang;
      notifyListeners();
    }
  }

  void toggleLanguage() {
    _language = _language == 'en' ? 'ta' : 'en';
    notifyListeners();
  }

  String t(String key) {
    return AppTranslations.translations[_language]?[key] ?? key;
  }
}
