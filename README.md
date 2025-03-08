# Aroma Theme

macOS goes Nord. Dark theme for VS Code.

![Aroma Theme Preview](images/preview.png)

## Features

- Matches default macOS background colors to blend in
- Nord inspired color palette for syntax highlighting

## Installation

### VS Code Marketplace
1. Open Extensions sidebar panel in VS Code (`Ctrl+Shift+X` / `Cmd+Shift+X`)
2. Search for `Aroma Theme`
3. Click **Install**
4. Select **Aroma** from the themes dropdown (`Ctrl+K Ctrl+T` / `Cmd+K Cmd+T`)

### Manual Installation
1. Download the latest `.vsix` file from the [releases page](https://github.com/abersager/aroma-theme/releases)
2. Install using the command: `code --install-extension aroma-theme-x.x.x.vsix`
3. For Cursor: `cursor --install-extension aroma-theme-x.x.x.vsix`

## Development

### Getting Started
1. Clone this repository
2. Run `npm install` to install dependencies
3. Press `F5` to open a new window with your extension loaded
4. Open the color theme picker: `File > Preferences > Theme > Color Theme` or use `Ctrl+K Ctrl+T` / `Cmd+K Cmd+T`
5. Select "Aroma"

### Building
```bash
npm run build
```
This will package the extension and install it in your local Cursor installation.

### Making Changes
* Edit `themes/Aroma-color-theme.json` to modify the theme
* Changes are automatically applied to the Extension Development Host window
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
