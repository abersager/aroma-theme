const fs = require("fs");
const path = require("path");

// Read the palette file
const palette = JSON.parse(
  fs.readFileSync(path.join(__dirname, "palette.json"), "utf8")
);

const getColor = (path) => {
  return path.split(".").reduce((acc, part) => {
    if (!acc || !acc[part]) {
      throw new Error(`Color not found: ${path}`);
    }
    return acc[part];
  }, palette);
};

// Create the theme structure
const theme = {
  name: "Aroma",
  colors: {
    "editor.background": getColor("background.primary"),
    "editor.foreground": getColor("foreground.primary"),
    "activityBarBadge.background": getColor("ui.badge"),
    "activityBarBadge.foreground": getColor("background.tertiary"),
    "sideBarTitle.foreground": getColor("foreground.primary"),
    "titleBar.activeBackground": getColor("background.primary"),
    "titleBar.activeForeground": getColor("foreground.primary"),
    "statusBar.background": getColor("background.primary"),
    "statusBar.foreground": getColor("foreground.primary"),
    "statusBar.noFolderBackground": getColor("background.primary"),
    "statusBar.debuggingBackground": getColor("accents.blue.primary"),
    "statusBar.debuggingForeground": getColor("foreground.secondary"),
    "statusBarItem.hoverBackground": getColor("background.secondary"),
    "statusBarItem.activeBackground": getColor("ui.hover"),
    "statusBarItem.prominentBackground": getColor("background.secondary"),
    "statusBarItem.prominentHoverBackground": getColor("ui.hover"),
    "statusBarItem.remoteBackground": getColor("background.primary"),
    "statusBarItem.remoteForeground": getColor("foreground.primary"),
    "statusBarItem.remoteHoverBackground": getColor("background.secondary"),
    "sideBar.background": getColor("background.secondary"),
    "sideBar.foreground": getColor("foreground.primary"),
    "activityBar.background": getColor("background.primary"),
    "activityBar.foreground": getColor("foreground.primary"),
    "tab.activeBackground": getColor("background.secondary"),
    "tab.inactiveBackground": getColor("background.primary"),
    "tab.activeForeground": getColor("foreground.primary"),
    "tab.inactiveForeground": getColor("foreground.dimmed"),
    "button.background": getColor("accents.blue.primary"),
    "button.foreground": getColor("foreground.secondary"),
    "button.hoverBackground": getColor("accents.blue.secondary"),
    "editorError.foreground": getColor("accents.red"),
    "editorWarning.foreground": getColor("accents.yellow"),
    "editorInfo.foreground": getColor("accents.cyan.primary"),
    "list.activeSelectionBackground": getColor("background.tertiary"),
    "list.activeSelectionForeground": getColor("accents.cyan.primary"),
    "list.hoverBackground": getColor("background.secondary"),
    "list.hoverForeground": getColor("foreground.primary"),
    "scrollbarSlider.background": getColor("background.quaternary") + "80",
    "scrollbarSlider.hoverBackground": getColor("accents.blue.primary") + "80",
    "scrollbarSlider.activeBackground": getColor("accents.cyan.primary") + "80",

    // Chat-related settings
    "inlineChat.background": getColor("background.secondary"),
    "inlineChat.border": getColor("background.tertiary"),
    "inlineChat.shadow": getColor("ui.shadow"),
    "inlineChatInput.background": getColor("background.primary"),
    "inlineChatInput.border": getColor("background.tertiary"),
    "inlineChatInput.placeholderForeground": getColor("foreground.muted"),
    "chat.requestBackground": getColor("background.primary"),
    "chat.requestBorder": getColor("background.tertiary"),
    "chat.slashCommandBackground": getColor("background.tertiary"),
    "chat.slashCommandForeground": getColor("accents.cyan.primary"),
    "chat.avatarBackground": getColor("background.secondary"),
    "chat.avatarForeground": getColor("foreground.primary"),
    "input.background": getColor("background.primary"),
    "input.border": getColor("background.tertiary"),
    "input.foreground": getColor("foreground.primary"),
    "input.placeholderForeground": getColor("foreground.muted"),
    "quickInput.background": getColor("background.secondary"),
    "quickInput.foreground": getColor("foreground.primary"),
    "quickInputList.focusBackground": getColor("background.tertiary"),
    "quickInputList.focusForeground": getColor("accents.cyan.primary"),

    // Terminal colors
    "terminal.background": getColor("background.primary"),
    "terminal.foreground": getColor("foreground.primary"),
    "terminal.ansiBlack": getColor("background.tertiary"),
    "terminal.ansiBrightBlack": getColor("background.quaternary"),
    "terminal.ansiRed": getColor("accents.red"),
    "terminal.ansiBrightRed": getColor("accents.red"),
    "terminal.ansiGreen": getColor("accents.green"),
    "terminal.ansiBrightGreen": getColor("accents.green"),
    "terminal.ansiYellow": getColor("accents.yellow"),
    "terminal.ansiBrightYellow": getColor("accents.yellow"),
    "terminal.ansiBlue": getColor("accents.blue.primary"),
    "terminal.ansiBrightBlue": getColor("accents.blue.secondary"),
    "terminal.ansiMagenta": getColor("accents.purple"),
    "terminal.ansiBrightMagenta": getColor("accents.purple"),
    "terminal.ansiCyan": getColor("accents.cyan.primary"),
    "terminal.ansiBrightCyan": getColor("accents.cyan.secondary"),
    "terminal.ansiWhite": getColor("terminal.white"),
    "terminal.ansiBrightWhite": getColor("terminal.brightWhite"),
    "terminal.selectionBackground": getColor("background.quaternary") + "80",
    "terminal.border": getColor("background.tertiary"),
    "terminalCursor.background": getColor("foreground.primary"),
    "terminalCursor.foreground": getColor("foreground.primary"),

    // Git decoration colors
    "gitDecoration.untrackedResourceForeground": getColor("accents.green"),
    "gitDecoration.addedResourceForeground": getColor("accents.green"),
    "gitDecoration.modifiedResourceForeground": getColor("accents.yellow"),
    "gitDecoration.deletedResourceForeground": getColor("accents.red"),
    "gitDecoration.renamedResourceForeground": getColor("accents.yellow"),
    "gitDecoration.stageModifiedResourceForeground": getColor(
      "accents.cyan.secondary"
    ),
    "gitDecoration.stageDeletedResourceForeground": getColor("accents.red"),
    "gitDecoration.ignoredResourceForeground": getColor(
      "background.quaternary"
    ),
    "gitDecoration.conflictingResourceForeground": getColor("accents.red"),

    // Bracket colorization
    "editorBracketHighlight.foreground1": getColor("brackets.green"),
    "editorBracketHighlight.foreground2": getColor("brackets.purple"),
    "editorBracketHighlight.foreground3": getColor("brackets.cyan"),
    "editorBracketHighlight.foreground4": getColor("brackets.darkBlue"),
    "editorBracketHighlight.foreground5": getColor("brackets.yellow"),
    "editorBracketHighlight.foreground6": getColor("brackets.blue"),

    // Disable bracket pair guides
    "editorBracketPairGuide.background1":
      getColor("background.tertiary") + "00",
    "editorBracketPairGuide.background2":
      getColor("background.tertiary") + "00",
    "editorBracketPairGuide.background3":
      getColor("background.tertiary") + "00",
    "editorBracketPairGuide.background4":
      getColor("background.tertiary") + "00",
    "editorBracketPairGuide.background5":
      getColor("background.tertiary") + "00",
    "editorBracketPairGuide.background6":
      getColor("background.tertiary") + "00",
    "editorBracketPairGuide.activeBackground1":
      getColor("background.tertiary") + "00",
    "editorBracketPairGuide.activeBackground2":
      getColor("background.tertiary") + "00",
    "editorBracketPairGuide.activeBackground3":
      getColor("background.tertiary") + "00",
    "editorBracketPairGuide.activeBackground4":
      getColor("background.tertiary") + "00",
    "editorBracketPairGuide.activeBackground5":
      getColor("background.tertiary") + "00",
    "editorBracketPairGuide.activeBackground6":
      getColor("background.tertiary") + "00",
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
        foreground: getColor("syntax.brackets"),
      },
    },
    {
      name: "Comment",
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: getColor("syntax.comment"),
      },
    },
    {
      name: "Variables",
      scope: ["variable", "string constant.other.placeholder"],
      settings: {
        foreground: getColor("foreground.primary"),
      },
    },
    {
      name: "Colors",
      scope: ["constant.other.color"],
      settings: {
        foreground: getColor("foreground.primary"),
      },
    },
    {
      name: "Invalid",
      scope: ["invalid", "invalid.illegal"],
      settings: {
        foreground: getColor("accents.red"),
      },
    },
    {
      name: "Keyword, Storage",
      scope: ["keyword", "storage.type", "storage.modifier"],
      settings: {
        foreground: getColor("syntax.keyword"),
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
        foreground: getColor("syntax.operator"),
      },
    },
    {
      name: "Tag",
      scope: ["entity.name.tag", "meta.tag.sgml", "markup.deleted.git_gutter"],
      settings: {
        foreground: getColor("syntax.tag"),
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
        foreground: getColor("syntax.function"),
      },
    },
    {
      name: "Block Level Variables",
      scope: ["meta.block variable.other"],
      settings: {
        foreground: getColor("foreground.primary"),
      },
    },
    {
      name: "Other Variable, String Link",
      scope: ["support.other.variable", "string.other.link"],
      settings: {
        foreground: getColor("accents.cyan.secondary"),
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
        foreground: getColor("accents.purple"),
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
        foreground: getColor("accents.green"),
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
        foreground: getColor("accents.cyan.secondary"),
      },
    },
    {
      name: "Entity Types",
      scope: ["support.type"],
      settings: {
        foreground: getColor("accents.cyan.secondary"),
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
        foreground: getColor("accents.purple"),
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
        foreground: getColor("accents.cyan.primary"),
      },
    },
    {
      name: "Language methods",
      scope: ["variable.language"],
      settings: {
        fontStyle: "italic",
        foreground: getColor("accents.blue.primary"),
      },
    },
    {
      name: "entity.name.method.js",
      scope: ["entity.name.method.js"],
      settings: {
        fontStyle: "italic",
        foreground: getColor("accents.cyan.primary"),
      },
    },
    {
      name: "meta.method.js",
      scope: [
        "meta.class-method.js entity.name.function.js",
        "variable.function.constructor",
      ],
      settings: {
        foreground: getColor("accents.cyan.primary"),
      },
    },
    {
      name: "Attributes",
      scope: ["entity.other.attribute-name"],
      settings: {
        foreground: getColor("accents.cyan.secondary"),
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
        foreground: getColor("accents.cyan.secondary"),
      },
    },
    {
      name: "CSS Classes",
      scope: ["entity.other.attribute-name.class"],
      settings: {
        foreground: getColor("accents.cyan.secondary"),
      },
    },
    {
      name: "CSS ID's",
      scope: ["source.sass keyword.control"],
      settings: {
        foreground: getColor("accents.blue.primary"),
      },
    },
    {
      name: "Inserted",
      scope: ["markup.inserted"],
      settings: {
        foreground: getColor("accents.green"),
      },
    },
    {
      name: "Deleted",
      scope: ["markup.deleted"],
      settings: {
        foreground: getColor("accents.red"),
      },
    },
    {
      name: "Changed",
      scope: ["markup.changed"],
      settings: {
        foreground: getColor("accents.yellow"),
      },
    },
    {
      name: "Regular Expressions",
      scope: ["string.regexp"],
      settings: {
        foreground: getColor("accents.yellow"),
      },
    },
    {
      name: "Escape Characters",
      scope: ["constant.character.escape"],
      settings: {
        foreground: getColor("accents.yellow"),
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
        foreground: getColor("accents.cyan.primary"),
      },
    },
    {
      name: "ES7 Bind Operator",
      scope: [
        "source.js constant.other.object.key.js string.unquoted.label.js",
      ],
      settings: {
        fontStyle: "italic",
        foreground: getColor("accents.purple"),
      },
    },
    {
      name: "JSON Key - Level 0",
      scope: [
        "source.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: getColor("accents.blue.secondary"),
      },
    },
    {
      name: "JSON Key - Level 1",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: getColor("accents.cyan.secondary"),
      },
    },
    {
      name: "JSON Key - Level 2",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: getColor("accents.cyan.primary"),
      },
    },
    {
      name: "JSON Key - Level 3",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: getColor("accents.blue.primary"),
      },
    },
    {
      name: "JSON Key - Level 4",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: getColor("accents.purple"),
      },
    },
    {
      name: "JSON Key - Level 5",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: getColor("accents.yellow"),
      },
    },
    {
      name: "JSON Key - Level 6",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: getColor("accents.green"),
      },
    },
    {
      name: "JSON Key - Level 7",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: getColor("accents.blue.secondary"),
      },
    },
    {
      name: "JSON Key - Level 8",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: getColor("accents.cyan.secondary"),
      },
    },
    {
      name: "Markdown - Plain",
      scope: [
        "text.html.markdown",
        "punctuation.definition.list_item.markdown",
      ],
      settings: {
        foreground: getColor("foreground.primary"),
      },
    },
    {
      name: "Markdown - Markup Raw Inline",
      scope: ["text.html.markdown markup.inline.raw.markdown"],
      settings: {
        foreground: getColor("accents.blue.secondary"),
      },
    },
    {
      name: "Markdown - Markup Raw Inline Punctuation",
      scope: [
        "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown",
      ],
      settings: {
        foreground: getColor("background.quaternary"),
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
        foreground: getColor("accents.cyan.primary"),
      },
    },
    {
      name: "Markup - Italic",
      scope: ["markup.italic"],
      settings: {
        fontStyle: "italic",
        foreground: getColor("foreground.primary"),
      },
    },
    {
      name: "Markup - Bold",
      scope: ["markup.bold", "markup.bold string"],
      settings: {
        fontStyle: "bold",
        foreground: getColor("foreground.primary"),
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
        foreground: getColor("foreground.primary"),
      },
    },
    {
      name: "Markup - Underline",
      scope: ["markup.underline"],
      settings: {
        fontStyle: "underline",
        foreground: getColor("accents.purple"),
      },
    },
    {
      name: "Markdown - Blockquote",
      scope: ["markup.quote punctuation.definition.blockquote.markdown"],
      settings: {
        foreground: getColor("background.quaternary"),
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
        foreground: getColor("accents.cyan.primary"),
      },
    },
    {
      name: "Markdown - Link Description",
      scope: ["string.other.link.description.title.markdown"],
      settings: {
        foreground: getColor("accents.blue.secondary"),
      },
    },
    {
      name: "Markdown - Link Anchor",
      scope: ["constant.other.reference.link.markdown"],
      settings: {
        foreground: getColor("accents.cyan.secondary"),
      },
    },
    {
      name: "Markup - Raw Block",
      scope: ["markup.raw.block"],
      settings: {
        foreground: getColor("accents.blue.secondary"),
      },
    },
    {
      name: "Markdown - Raw Block Fenced",
      scope: ["markup.raw.block.fenced.markdown"],
      settings: {
        foreground: getColor("background.quaternary"),
      },
    },
    {
      name: "Markdown - Fenced Bode Block",
      scope: ["punctuation.definition.fenced.markdown"],
      settings: {
        foreground: getColor("background.quaternary"),
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
        foreground: getColor("foreground.primary"),
      },
    },
    {
      name: "Markdown - Fenced Language",
      scope: ["variable.language.fenced.markdown"],
      settings: {
        foreground: getColor("accents.blue.primary"),
      },
    },
    {
      name: "Markdown - Separator",
      scope: ["meta.separator"],
      settings: {
        fontStyle: "bold",
        foreground: getColor("accents.blue.primary"),
      },
    },
    {
      name: "Markup - Table",
      scope: ["markup.table"],
      settings: {
        foreground: getColor("foreground.primary"),
      },
    },
  ],
};

fs.writeFileSync(
  path.join(__dirname, "..", "dist", "vscode", "Aroma-color-theme.json"),
  JSON.stringify(theme, null, 4) + "\n"
);
