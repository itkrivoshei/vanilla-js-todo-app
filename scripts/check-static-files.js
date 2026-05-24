import { access, readFile } from "node:fs/promises";

const requiredFiles = ["index.html", "favicon.svg", "src/styles/main.css", "src/scripts/app.js"];

async function fileExists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const missingFiles = [];

  for (const file of requiredFiles) {
    if (!(await fileExists(file))) {
      missingFiles.push(file);
    }
  }

  if (missingFiles.length > 0) {
    throw new Error(`Missing required files: ${missingFiles.join(", ")}`);
  }

  const indexHtml = await readFile("index.html", "utf8");
  const requiredReferences = ["./favicon.svg", "./src/styles/main.css", "./src/scripts/app.js"];
  const missingReferences = requiredReferences.filter((reference) => !indexHtml.includes(reference));

  if (missingReferences.length > 0) {
    throw new Error(`Missing index.html references: ${missingReferences.join(", ")}`);
  }

  console.log("Static file check passed.");
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
