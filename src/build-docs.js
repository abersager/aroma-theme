const fs = require("fs");
const path = require("path");

// Read the palette file
const palette = JSON.parse(
  fs.readFileSync(path.join(__dirname, "palette.json"), "utf8")
);

// Helper function to convert hex color to RGB components
function hexToRGB(hex) {
  // Remove # if present
  hex = hex.replace("#", "");

  // Handle alpha if present
  let alpha = 1;
  if (hex.length === 8) {
    alpha = parseInt(hex.substr(6, 2), 16) / 255;
    hex = hex.substr(0, 6);
  }

  // Convert to RGB
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  return { r, g, b, a: alpha };
}

// Helper function to determine if text should be light or dark based on background
function getContrastColor(hexColor) {
  const rgb = hexToRGB(hexColor);
  // Calculate perceived brightness using the formula: (R * 0.299 + G * 0.587 + B * 0.114)
  const brightness = rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114;
  return brightness > 128 ? "#000000" : "#FFFFFF";
}

// Helper function to create a color swatch HTML
function createColorSwatch(name, color) {
  const textColor = getContrastColor(color);
  return `
    <div class="color-swatch" style="background-color: ${color}; color: ${textColor};">
      <div class="color-name">${name}</div>
      <div class="color-value">${color}</div>
    </div>
  `;
}

// Helper function to create a section of color swatches
function createColorSection(title, colorObj) {
  let html = `<div class="color-section">
    <h2>${title}</h2>
    <div class="color-grid">`;

  // Handle nested objects
  Object.entries(colorObj).forEach(([name, value]) => {
    if (typeof value === "object") {
      // Nested color object
      Object.entries(value).forEach(([subName, subValue]) => {
        html += createColorSwatch(`${name}.${subName}`, subValue);
      });
    } else {
      // Direct color value
      html += createColorSwatch(name, value);
    }
  });

  html += `</div></div>`;
  return html;
}

// Generate the HTML content
function generateHTML() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aroma Theme - Color Palette</title>
  <style>
    :root {
      --bg-primary: ${palette.background.primary};
      --bg-secondary: ${palette.background.secondary};
      --fg-primary: ${palette.foreground.primary};
      --fg-secondary: ${palette.foreground.secondary};
      --accent: ${palette.accents.blue.primary};
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      background-color: var(--bg-primary);
      color: var(--fg-primary);
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    header {
      text-align: center;
      margin-bottom: 3rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--accent);
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      color: var(--fg-secondary);
    }

    h2 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      color: var(--accent);
    }

    .color-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .color-swatch {
      border-radius: 8px;
      padding: 1rem;
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease;
    }

    .color-swatch:hover {
      transform: translateY(-5px);
    }

    .color-name {
      font-weight: bold;
      font-size: 1.1rem;
    }

    .color-value {
      font-family: monospace;
      font-size: 0.9rem;
    }

    .color-section {
      margin-bottom: 3rem;
    }

    footer {
      text-align: center;
      margin-top: 3rem;
      padding-top: 1rem;
      border-top: 1px solid var(--accent);
      color: var(--fg-secondary);
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>Aroma Theme - Color Palette</h1>
      <p>A documentation of all colors used in the Aroma theme</p>
    </header>

    <main>
      ${createColorSection("Background Colors", palette.background)}
      ${createColorSection("Foreground Colors", palette.foreground)}
      ${createColorSection("UI Colors", palette.ui)}
      ${createColorSection("Syntax Colors", palette.syntax)}
      ${createColorSection("Accent Colors", palette.accents)}
      ${createColorSection("Terminal Colors", palette.terminal)}
      ${createColorSection("Bracket Colors", palette.brackets)}
    </main>

    <footer>
      <p>Generated on ${new Date().toLocaleDateString()}</p>
    </footer>
  </div>
</body>
</html>`;

  return html;
}

// Ensure the dist directory exists
const distDir = path.join(__dirname, "..", "dist");
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Write the HTML file
const htmlContent = generateHTML();
fs.writeFileSync(path.join(distDir, "palette-docs.html"), htmlContent);

console.log(
  "✅ Documentation HTML generated successfully at dist/palette-docs.html"
);
