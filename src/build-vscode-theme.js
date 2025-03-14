const fs = require("fs");
const path = require("path");

// Read the palette file
const palette = JSON.parse(
  fs.readFileSync(path.join(__dirname, "palette.json"), "utf8")
);

// Create the theme structure
const theme = {
  name: "Aroma",
  colors: {
    "editor.background": palette.background.primary,
    "editor.foreground": palette.foreground.primary,
    "activityBarBadge.background": palette.ui.badge,
    "activityBarBadge.foreground": palette.background.tertiary,
    "sideBarTitle.foreground": palette.foreground.primary,
    "titleBar.activeBackground": palette.background.primary,
    "titleBar.activeForeground": palette.foreground.primary,
    "statusBar.background": palette.background.primary,
    "statusBar.foreground": palette.foreground.primary,
    "statusBar.noFolderBackground": palette.background.primary,
    "statusBar.debuggingBackground": palette.accents.blue.primary,
    "statusBar.debuggingForeground": palette.foreground.secondary,
    "statusBarItem.hoverBackground": palette.background.secondary,
    "statusBarItem.activeBackground": palette.ui.hover,
    "statusBarItem.prominentBackground": palette.background.secondary,
    "statusBarItem.prominentHoverBackground": palette.ui.hover,
    "statusBarItem.remoteBackground": palette.background.primary,
    "statusBarItem.remoteForeground": palette.foreground.primary,
    "statusBarItem.remoteHoverBackground": palette.background.secondary,
    "sideBar.background": palette.background.secondary,
    "sideBar.foreground": palette.foreground.primary,
    "activityBar.background": palette.background.primary,
    "activityBar.foreground": palette.foreground.primary,
    "tab.activeBackground": palette.background.secondary,
    "tab.inactiveBackground": palette.background.primary,
    "tab.activeForeground": palette.foreground.primary,
    "tab.inactiveForeground": palette.foreground.dimmed,
    "button.background": palette.accents.blue.primary,
    "button.foreground": palette.foreground.secondary,
    "button.hoverBackground": palette.accents.blue.secondary,
    "editorError.foreground": palette.accents.red,
    "editorWarning.foreground": palette.accents.yellow,
    "editorInfo.foreground": palette.accents.cyan.primary,
    "list.activeSelectionBackground": palette.background.tertiary,
    "list.activeSelectionForeground": palette.accents.cyan.primary,
    "list.hoverBackground": palette.background.secondary,
    "list.hoverForeground": palette.foreground.primary,
    "scrollbarSlider.background": palette.terminal.brightBlack + "80",
    "scrollbarSlider.hoverBackground": palette.accents.blue.primary + "80",
    "scrollbarSlider.activeBackground": palette.accents.cyan.primary + "80",

    // Chat-related settings
    "inlineChat.background": palette.background.secondary,
    "inlineChat.border": palette.background.tertiary,
    "inlineChat.shadow": palette.ui.shadow,
    "inlineChatInput.background": palette.background.primary,
    "inlineChatInput.border": palette.background.tertiary,
    "inlineChatInput.placeholderForeground": palette.foreground.muted,
    "chat.requestBackground": palette.background.primary,
    "chat.requestBorder": palette.background.tertiary,
    "chat.slashCommandBackground": palette.background.tertiary,
    "chat.slashCommandForeground": palette.accents.cyan.primary,
    "chat.avatarBackground": palette.background.secondary,
    "chat.avatarForeground": palette.foreground.primary,
    "input.background": palette.background.primary,
    "input.border": palette.background.tertiary,
    "input.foreground": palette.foreground.primary,
    "input.placeholderForeground": palette.foreground.muted,
    "quickInput.background": palette.background.secondary,
    "quickInput.foreground": palette.foreground.primary,
    "quickInputList.focusBackground": palette.background.tertiary,
    "quickInputList.focusForeground": palette.accents.cyan.primary,

    // Terminal colors
    "terminal.background": palette.background.primary,
    "terminal.foreground": palette.foreground.primary,
    "terminal.ansiBlack": palette.terminal.black,
    "terminal.ansiBrightBlack": palette.terminal.brightBlack,
    "terminal.ansiRed": palette.accents.red,
    "terminal.ansiBrightRed": palette.accents.red,
    "terminal.ansiGreen": palette.accents.green,
    "terminal.ansiBrightGreen": palette.accents.green,
    "terminal.ansiYellow": palette.accents.yellow,
    "terminal.ansiBrightYellow": palette.accents.yellow,
    "terminal.ansiBlue": palette.accents.blue.primary,
    "terminal.ansiBrightBlue": palette.accents.blue.secondary,
    "terminal.ansiMagenta": palette.accents.purple,
    "terminal.ansiBrightMagenta": palette.accents.purple,
    "terminal.ansiCyan": palette.accents.cyan.primary,
    "terminal.ansiBrightCyan": palette.accents.cyan.secondary,
    "terminal.ansiWhite": palette.terminal.white,
    "terminal.ansiBrightWhite": palette.terminal.brightWhite,
    "terminal.selectionBackground": palette.terminal.brightBlack + "80",
    "terminal.border": palette.background.tertiary,
    "terminalCursor.background": palette.foreground.primary,
    "terminalCursor.foreground": palette.foreground.primary,

    // Git decoration colors
    "gitDecoration.untrackedResourceForeground": palette.accents.green,
    "gitDecoration.addedResourceForeground": palette.accents.green,
    "gitDecoration.modifiedResourceForeground": palette.accents.yellow,
    "gitDecoration.deletedResourceForeground": palette.accents.red,
    "gitDecoration.renamedResourceForeground": palette.accents.yellow,
    "gitDecoration.stageModifiedResourceForeground":
      palette.accents.cyan.secondary,
    "gitDecoration.stageDeletedResourceForeground": palette.accents.red,
    "gitDecoration.ignoredResourceForeground": palette.terminal.brightBlack,
    "gitDecoration.conflictingResourceForeground": palette.accents.red,

    // Bracket colorization
    "editorBracketHighlight.foreground1": palette.brackets.green,
    "editorBracketHighlight.foreground2": palette.brackets.purple,
    "editorBracketHighlight.foreground3": palette.brackets.cyan,
    "editorBracketHighlight.foreground4": palette.brackets.darkBlue,
    "editorBracketHighlight.foreground5": palette.brackets.yellow,
    "editorBracketHighlight.foreground6": palette.brackets.blue,

    // Disable bracket pair guides
    "editorBracketPairGuide.background1": palette.background.tertiary + "00",
    "editorBracketPairGuide.background2": palette.background.tertiary + "00",
    "editorBracketPairGuide.background3": palette.background.tertiary + "00",
    "editorBracketPairGuide.background4": palette.background.tertiary + "00",
    "editorBracketPairGuide.background5": palette.background.tertiary + "00",
    "editorBracketPairGuide.background6": palette.background.tertiary + "00",
    "editorBracketPairGuide.activeBackground1":
      palette.background.tertiary + "00",
    "editorBracketPairGuide.activeBackground2":
      palette.background.tertiary + "00",
    "editorBracketPairGuide.activeBackground3":
      palette.background.tertiary + "00",
    "editorBracketPairGuide.activeBackground4":
      palette.background.tertiary + "00",
    "editorBracketPairGuide.activeBackground5":
      palette.background.tertiary + "00",
    "editorBracketPairGuide.activeBackground6":
      palette.background.tertiary + "00",
  },
  tokenColors: [
    {
      name: "Brackets and Parentheses",
      scope: [
        "punctuation.definition.block",
        "punctuation.definition.parameters",
        "punctuation.definition.array",
        "punctuation.separator.array",
        "meta.brace.round",
        "meta.brace.square",
        "meta.brace.curly",
        "meta.delimiter.comma",
        "meta.brackets",
        "meta.array.literal",
        "meta.tag.attributes",
      ],
      settings: {
        foreground: palette.syntax.brackets,
      },
    },
    {
      name: "Comment",
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: palette.syntax.comment,
      },
    },
    {
      name: "Variables",
      scope: ["variable", "string constant.other.placeholder"],
      settings: {
        foreground: palette.foreground.primary,
      },
    },
    {
      name: "Colors",
      scope: ["constant.other.color"],
      settings: {
        foreground: palette.foreground.primary,
      },
    },
    {
      name: "Invalid",
      scope: ["invalid", "invalid.illegal"],
      settings: {
        foreground: palette.accents.red,
      },
    },
    {
      name: "Keyword, Storage",
      scope: ["keyword", "storage.type", "storage.modifier"],
      settings: {
        foreground: palette.syntax.keyword,
      },
    },
    {
      name: "Operator, Misc",
      scope: [
        "keyword.control",
        "constant.other.color",
        "punctuation",
        "meta.tag",
        "punctuation.definition.tag",
        "punctuation.separator.inheritance.php",
        "punctuation.definition.tag.html",
        "punctuation.definition.tag.begin.html",
        "punctuation.definition.tag.end.html",
        "punctuation.section.embedded",
        "keyword.other.template",
        "keyword.other.substitution",
      ],
      settings: {
        foreground: palette.syntax.operator,
      },
    },
    {
      name: "Tag",
      scope: ["entity.name.tag", "meta.tag.sgml", "markup.deleted.git_gutter"],
      settings: {
        foreground: palette.syntax.tag,
      },
    },
    {
      name: "Function, Special Method",
      scope: [
        "entity.name.function",
        "meta.function-call",
        "variable.function",
        "support.function",
        "keyword.other.special-method",
      ],
      settings: {
        foreground: palette.syntax.function,
      },
    },
    {
      name: "Block Level Variables",
      scope: ["meta.block variable.other"],
      settings: {
        foreground: palette.foreground.primary,
      },
    },
    {
      name: "Other Variable, String Link",
      scope: ["support.other.variable", "string.other.link"],
      settings: {
        foreground: palette.accents.cyan.secondary,
      },
    },
    {
      name: "Number, Constant, Function Argument, Tag Attribute, Embedded",
      scope: [
        "constant.numeric",
        "constant.language",
        "support.constant",
        "constant.character",
        "constant.escape",
        "variable.parameter",
        "keyword.other.unit",
        "keyword.other",
      ],
      settings: {
        foreground: palette.accents.purple,
      },
    },
    {
      name: "String, Symbols, Inherited Class, Markup Heading",
      scope: [
        "string",
        "constant.other.symbol",
        "constant.other.key",
        "entity.other.inherited-class",
        "markup.heading",
        "markup.inserted.git_gutter",
        "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js",
      ],
      settings: {
        foreground: palette.accents.green,
      },
    },
    {
      name: "Class, Support",
      scope: [
        "entity.name",
        "support.type",
        "support.class",
        "support.other.namespace.use.php",
        "meta.use.php",
        "support.other.namespace.php",
        "markup.changed.git_gutter",
        "support.type.sys-types",
      ],
      settings: {
        foreground: palette.accents.cyan.secondary,
      },
    },
    {
      name: "Entity Types",
      scope: ["support.type"],
      settings: {
        foreground: palette.accents.cyan.secondary,
      },
    },
    {
      name: "CSS Class and Support",
      scope: [
        "source.css support.type.property-name",
        "source.sass support.type.property-name",
        "source.scss support.type.property-name",
        "source.less support.type.property-name",
        "source.stylus support.type.property-name",
        "source.postcss support.type.property-name",
      ],
      settings: {
        foreground: palette.accents.purple,
      },
    },
    {
      name: "Sub-methods",
      scope: [
        "entity.name.module.js",
        "variable.import.parameter.js",
        "variable.other.class.js",
      ],
      settings: {
        foreground: palette.accents.cyan.primary,
      },
    },
    {
      name: "Language methods",
      scope: ["variable.language"],
      settings: {
        fontStyle: "italic",
        foreground: palette.accents.blue.primary,
      },
    },
    {
      name: "entity.name.method.js",
      scope: ["entity.name.method.js"],
      settings: {
        fontStyle: "italic",
        foreground: palette.accents.cyan.primary,
      },
    },
    {
      name: "meta.method.js",
      scope: [
        "meta.class-method.js entity.name.function.js",
        "variable.function.constructor",
      ],
      settings: {
        foreground: palette.accents.cyan.primary,
      },
    },
    {
      name: "Attributes",
      scope: ["entity.other.attribute-name"],
      settings: {
        foreground: palette.accents.cyan.secondary,
      },
    },
    {
      name: "HTML Attributes",
      scope: [
        "text.html.basic entity.other.attribute-name.html",
        "text.html.basic entity.other.attribute-name",
      ],
      settings: {
        fontStyle: "italic",
        foreground: palette.accents.cyan.secondary,
      },
    },
    {
      name: "CSS Classes",
      scope: ["entity.other.attribute-name.class"],
      settings: {
        foreground: palette.accents.cyan.secondary,
      },
    },
    {
      name: "CSS ID's",
      scope: ["source.sass keyword.control"],
      settings: {
        foreground: palette.accents.blue.primary,
      },
    },
    {
      name: "Inserted",
      scope: ["markup.inserted"],
      settings: {
        foreground: palette.accents.green,
      },
    },
    {
      name: "Deleted",
      scope: ["markup.deleted"],
      settings: {
        foreground: palette.accents.red,
      },
    },
    {
      name: "Changed",
      scope: ["markup.changed"],
      settings: {
        foreground: palette.accents.yellow,
      },
    },
    {
      name: "Regular Expressions",
      scope: ["string.regexp"],
      settings: {
        foreground: palette.accents.yellow,
      },
    },
    {
      name: "Escape Characters",
      scope: ["constant.character.escape"],
      settings: {
        foreground: palette.accents.yellow,
      },
    },
    {
      name: "URL",
      scope: ["*url*", "*link*", "*uri*"],
      settings: {
        fontStyle: "underline",
      },
    },
    {
      name: "Decorators",
      scope: [
        "tag.decorator.js entity.name.tag.js",
        "tag.decorator.js punctuation.definition.tag.js",
      ],
      settings: {
        fontStyle: "italic",
        foreground: palette.accents.cyan.primary,
      },
    },
    {
      name: "ES7 Bind Operator",
      scope: [
        "source.js constant.other.object.key.js string.unquoted.label.js",
      ],
      settings: {
        fontStyle: "italic",
        foreground: palette.accents.purple,
      },
    },
    {
      name: "JSON Key - Level 0",
      scope: [
        "source.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: palette.accents.blue.secondary,
      },
    },
    {
      name: "JSON Key - Level 1",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: palette.accents.cyan.secondary,
      },
    },
    {
      name: "JSON Key - Level 2",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: palette.accents.cyan.primary,
      },
    },
    {
      name: "JSON Key - Level 3",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: palette.accents.blue.primary,
      },
    },
    {
      name: "JSON Key - Level 4",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: palette.accents.purple,
      },
    },
    {
      name: "JSON Key - Level 5",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: palette.accents.yellow,
      },
    },
    {
      name: "JSON Key - Level 6",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: palette.accents.green,
      },
    },
    {
      name: "JSON Key - Level 7",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: palette.accents.blue.secondary,
      },
    },
    {
      name: "JSON Key - Level 8",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: palette.accents.cyan.secondary,
      },
    },
    {
      name: "Markdown - Plain",
      scope: [
        "text.html.markdown",
        "punctuation.definition.list_item.markdown",
      ],
      settings: {
        foreground: palette.foreground.primary,
      },
    },
    {
      name: "Markdown - Markup Raw Inline",
      scope: ["text.html.markdown markup.inline.raw.markdown"],
      settings: {
        foreground: palette.accents.blue.secondary,
      },
    },
    {
      name: "Markdown - Markup Raw Inline Punctuation",
      scope: [
        "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown",
      ],
      settings: {
        foreground: palette.terminal.brightBlack,
      },
    },
    {
      name: "Markdown - Heading",
      scope: [
        "markdown.heading",
        "markup.heading | markup.heading entity.name",
        "markup.heading.markdown punctuation.definition.heading.markdown",
      ],
      settings: {
        foreground: palette.accents.cyan.primary,
      },
    },
    {
      name: "Markup - Italic",
      scope: ["markup.italic"],
      settings: {
        fontStyle: "italic",
        foreground: palette.foreground.primary,
      },
    },
    {
      name: "Markup - Bold",
      scope: ["markup.bold", "markup.bold string"],
      settings: {
        fontStyle: "bold",
        foreground: palette.foreground.primary,
      },
    },
    {
      name: "Markup - Bold-Italic",
      scope: [
        "markup.bold markup.italic",
        "markup.italic markup.bold",
        "markup.quote markup.bold",
        "markup.bold markup.italic string",
        "markup.italic markup.bold string",
        "markup.quote markup.bold string",
      ],
      settings: {
        fontStyle: "bold italic",
        foreground: palette.foreground.primary,
      },
    },
    {
      name: "Markup - Underline",
      scope: ["markup.underline"],
      settings: {
        fontStyle: "underline",
        foreground: palette.accents.purple,
      },
    },
    {
      name: "Markdown - Blockquote",
      scope: ["markup.quote punctuation.definition.blockquote.markdown"],
      settings: {
        foreground: palette.terminal.brightBlack,
      },
    },
    {
      name: "Markup - Quote",
      scope: ["markup.quote"],
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "Markdown - Link",
      scope: ["string.other.link.title.markdown"],
      settings: {
        foreground: palette.accents.cyan.primary,
      },
    },
    {
      name: "Markdown - Link Description",
      scope: ["string.other.link.description.title.markdown"],
      settings: {
        foreground: palette.accents.blue.secondary,
      },
    },
    {
      name: "Markdown - Link Anchor",
      scope: ["constant.other.reference.link.markdown"],
      settings: {
        foreground: palette.accents.cyan.secondary,
      },
    },
    {
      name: "Markup - Raw Block",
      scope: ["markup.raw.block"],
      settings: {
        foreground: palette.accents.blue.secondary,
      },
    },
    {
      name: "Markdown - Raw Block Fenced",
      scope: ["markup.raw.block.fenced.markdown"],
      settings: {
        foreground: palette.terminal.brightBlack,
      },
    },
    {
      name: "Markdown - Fenced Bode Block",
      scope: ["punctuation.definition.fenced.markdown"],
      settings: {
        foreground: palette.terminal.brightBlack,
      },
    },
    {
      name: "Markdown - Fenced Bode Block Variable",
      scope: [
        "markup.raw.block.fenced.markdown",
        "variable.language.fenced.markdown",
        "punctuation.section.class.end",
      ],
      settings: {
        foreground: palette.foreground.primary,
      },
    },
    {
      name: "Markdown - Fenced Language",
      scope: ["variable.language.fenced.markdown"],
      settings: {
        foreground: palette.accents.blue.primary,
      },
    },
    {
      name: "Markdown - Separator",
      scope: ["meta.separator"],
      settings: {
        fontStyle: "bold",
        foreground: palette.accents.blue.primary,
      },
    },
    {
      name: "Markup - Table",
      scope: ["markup.table"],
      settings: {
        foreground: palette.foreground.primary,
      },
    },
  ],
};

fs.writeFileSync(
  path.join(__dirname, "..", "vscode", "Aroma-color-theme.json"),
  JSON.stringify(theme, null, 4) + "\n"
);
