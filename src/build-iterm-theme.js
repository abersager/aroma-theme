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
  const r = parseInt(hex.substr(0, 2), 16) / 255;
  const g = parseInt(hex.substr(2, 2), 16) / 255;
  const b = parseInt(hex.substr(4, 2), 16) / 255;

  return { r, g, b, a: alpha };
}

function brighten(hex, factor) {
  const rgb = hexToRGB(hex);

  const brightenValue = (component) => {
    return Math.min(1, component + (1 - component) * factor);
  };

  const r = Math.round(brightenValue(rgb.r) * 255);
  const g = Math.round(brightenValue(rgb.g) * 255);
  const b = Math.round(brightenValue(rgb.b) * 255);

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

// Helper function to create a color entry in the plist format with variable precision
function createColorEntry(color, alphaValue = 1) {
  const rgb = hexToRGB(color);
  return `  <dict>
    <key>Alpha Component</key>
    <real>${alphaValue}</real>
    <key>Blue Component</key>
    <real>${rgb.b}</real>
    <key>Color Space</key>
    <string>sRGB</string>
    <key>Green Component</key>
    <real>${rgb.g}</real>
    <key>Red Component</key>
    <real>${rgb.r}</real>
  </dict>`;
}

// Create the iTerm color scheme, following the existing structure exactly
const itermTheme = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Ansi 0 Color</key>
${createColorEntry(palette.background.tertiary)}
  <key>Ansi 1 Color</key>
${createColorEntry(palette.accents.red)}
  <key>Ansi 10 Color</key>
${createColorEntry(palette.accents.green)}
  <key>Ansi 11 Color</key>
${createColorEntry(palette.accents.yellow)}
  <key>Ansi 12 Color</key>
${createColorEntry(palette.accents.blue.secondary)}
  <key>Ansi 13 Color</key>
${createColorEntry(palette.accents.purple)}
  <key>Ansi 14 Color</key>
${createColorEntry(palette.accents.cyan.secondary)}
  <key>Ansi 15 Color</key>
${createColorEntry(palette.foreground.secondary)}
  <key>Ansi 2 Color</key>
${createColorEntry(palette.accents.green)}
  <key>Ansi 3 Color</key>
${createColorEntry(palette.accents.yellow)}
  <key>Ansi 4 Color</key>
${createColorEntry(palette.accents.blue.primary)}
  <key>Ansi 5 Color</key>
${createColorEntry(palette.accents.purple)}
  <key>Ansi 6 Color</key>
${createColorEntry(palette.accents.cyan.primary)}
  <key>Ansi 7 Color</key>
${createColorEntry(palette.foreground.primary)}
  <key>Ansi 8 Color</key>
${createColorEntry(palette.background.quaternary)}
  <key>Ansi 9 Color</key>
${createColorEntry(palette.accents.red)}
  <key>Background Color</key>
${createColorEntry(palette.background.primary)}
  <key>Badge Color</key>
${createColorEntry(palette.ui.badge, 0.5)}
  <key>Bold Color</key>
${createColorEntry(palette.foreground.primary)}
  <key>Cursor Color</key>
${createColorEntry(palette.foreground.primary)}
  <key>Cursor Guide Color</key>
${createColorEntry(palette.background.secondary, 0.25)}
  <key>Cursor Text Color</key>
${createColorEntry(palette.background.primary)}
  <key>Foreground Color</key>
${createColorEntry(palette.foreground.primary)}
  <key>Link Color</key>
${createColorEntry(palette.accents.blue.primary)}
  <key>Selected Text Color</key>
${createColorEntry(palette.foreground.primary)}
  <key>Selection Color</key>
${createColorEntry(palette.background.tertiary)}
</dict>
</plist>`;

// Ensure the output directory exists
const outputDir = path.join(__dirname, "..", "dist", "iterm2");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Write the iTerm color scheme file
fs.writeFileSync(path.join(outputDir, "Aroma.itermcolors"), itermTheme);

console.log("iTerm color scheme generated successfully!");
