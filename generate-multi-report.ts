import { generate } from "multiple-cucumber-html-reporter";
import path from "path";
import fs from "fs";

const jsonDir = path.resolve("reports");
const jsonFile = path.join(jsonDir, "cucumber-report.json");

// Verifica que el JSON existe
if (!fs.existsSync(jsonFile)) {
  console.error(`No se encontró el archivo JSON en: ${jsonFile}`);
  process.exit(1);
}

generate({
  jsonDir,          // directorio donde está el JSON
  reportPath: "reports", // dónde se generará el HTML
  displayDuration: true,
  metadata: {
    browser: { name: "chrome" },
    device: "Local test machine",
    platform: { name: "Windows 11" },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Saucedemo Test project" },
      { label: "Release", value: "1.0.0" },
    ],
  },
});
