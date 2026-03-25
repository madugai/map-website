import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:madugai_app/main.dart';

void main() {
  testWidgets('App renders home screen', (WidgetTester tester) async {
    await tester.pumpWidget(const MadugaiApp());
    expect(find.byType(MaterialApp), findsOneWidget);
  });
}
