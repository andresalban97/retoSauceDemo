 import { Before, After, BeforeAll,AfterAll, Status} from '@cucumber/cucumber';
import { Browser, chromium, Page } from '@playwright/test';
import fs from 'fs';
import path from 'path';

let browser: Browser;
let page: Page;

 Before(async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    this.page = page; 
    console.log('Before hook: Executed before each scenario');
 });
 
 After(async function (scenario) {
    const screenshotsDir = path.resolve('reports/screenshots');
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir, { recursive: true });
    }

  // Si el escenario falla, tomar screenshot
    if (scenario.result?.status === Status.FAILED) {
      const screenshotPath = path.join(screenshotsDir, `${Date.now()}.png`);
      const screenshotBuffer = await page.screenshot({ path: screenshotPath, fullPage: true });
      this.attach(screenshotBuffer, 'image/png'); // adjuntar al JSON de Cucumber
    }

  // Cerrar navegador al final del escenario
    if (browser) {
      await browser.close();
    }
     console.log('After hook: Executed after each scenario'); 
  });
