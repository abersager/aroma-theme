# Aroma Theme

macOS goes Nord. Dark theme for VS Code and terminals.

![Aroma Theme Preview](images/preview.png)

## Features

- Matches default macOS background colors to blend in
- Nord inspired color palette for syntax highlighting
- Available for VS Code and select terminals

## Installation

### VS Code
1. Open Extensions sidebar panel (`Ctrl+Shift+X` / `Cmd+Shift+X`)
2. Search for `Aroma Theme`
3. Click **Install**
4. Select **Aroma** from the themes dropdown (`Ctrl+K Ctrl+T` / `Cmd+K Cmd+T`)

### Manual Installation
1. Download the latest `.vsix` file from the [releases page](https://github.com/abersager/aroma-theme/releases)
2. Install using the command: `code --install-extension aroma-theme-x.x.x.vsix`
3. For Cursor: `cursor --install-extension aroma-theme-x.x.x.vsix`

### Terminal Installation

#### iTerm2
1. Download `terminals/iterm2/Aroma.itermcolors`
2. Open iTerm2 preferences
3. Go to "Profiles" → "Colors" → "Color Presets..." → "Import..."
4. Select the downloaded file
5. Reopen the "Color Presets..." dropdown and choose "Aroma"

#### Alacritty
1. Download `terminals/alacritty/aroma.yml`
2. Add to your Alacritty config:
   ```yaml
   import:
     - /path/to/aroma.yml
   ```

#### Kitty
1. Download `terminals/kitty/aroma.conf`
2. Add to your Kitty config:
   ```
   include /path/to/aroma.conf
   ```

#### WezTerm
1. Download `terminals/wezterm/aroma.toml`
2. In your WezTerm config:
   ```lua
   return {
     color_scheme = "Aroma",
     color_scheme_dirs = { "/path/to/directory/containing/aroma.toml" },
   }
   ```

## Development

### Getting Started
1. Clone this repository
2. Run `npm install` to install dependencies
3. Press `F5` to open a new window with your extension loaded
4. Open the color theme picker: `File > Preferences > Theme > Color Theme`
5. Select "Aroma"

### Building
```bash
npm run build
```
This will package the extension and install it in your local Cursor installation.

### Making Changes to the VS Code theme
* Run "Debug: Start Debugging" from the Command Palette or press F5. A new Extension Development Host window appears.
* Edit `vscode/Aroma-color-theme.json` to modify the theme. Changes are automatically applied to the Extension Development Host window.
* To inspect token colors: use the command `Developer: Inspect Editor Tokens and Scopes`

## Color Palette

The theme uses a palette inspired by the Nord color scheme:

- Background: `#1E1E1E`
- Sidebar: `#282828`
- Text: `#D8DEE9`
- Comments: `#616E88`
- Strings: `#A3BE8C`
- Numbers: `#B48EAD`
- Keywords: `#81A1C1`
- Functions: `#88C0D0`
- Classes: `#8FBCBB`
- Variables: `#D8DEE9`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT License](LICENSE.md)

---

**Njut!** *(Swedish: Enjoy!)*
