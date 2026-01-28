import { test, expect } from '@playwright/test';

test('language switch works', async ({ page }) => {
    // Go to the homepage
    await page.goto('http://localhost:3000');

    // 1. Initial State - Should be English
    // The hero title contains "Pure Cow Milk."
    await expect(page.getByText('Pure Cow Milk.')).toBeVisible();

    // 2. Switch to Tamil
    // The LanguageSwitcher component has a button with text "தமிழ்"
    await page.getByRole('button', { name: 'தமிழ்' }).click();

    // 3. Verify Tamil Content
    // The translated hero title contains "பசுவின் பால்."
    await expect(page.getByText('பசுவின் பால்.')).toBeVisible();

    // 4. Switch back to English
    await page.getByRole('button', { name: 'EN' }).click();

    // 5. Verify English Content again
    await expect(page.getByText('Pure Cow Milk.')).toBeVisible();
});
