import { test, expect } from '@playwright/test';

test('should go to the about page', async ({ page }) => {
  await page.goto('/');
  await page.click("text=L'association");
  await expect(page).toHaveURL('/about');
  await expect(
    page.getByRole('heading', { level: 2, name: 'Qui sommes nous ?' }),
  ).toContainText('Qui sommes nous ?');
});
