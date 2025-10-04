// tools/css-diff.js
import fs from "fs";
import postcss from "postcss";
import safeParser from "postcss-safe-parser";
import { diffLines } from "diff";
import chalk from "chalk";

function sanitizeLiquidAndNormalize(css) {
  return css
    .replace(/\{\{.*?\}\}/g, "") // remove Liquid placeholders
    .replace(/\{%-.*?-%\}/g, "") // remove Liquid tags
    .replace(/\/\*.*?\*\//gs, "") // remove CSS comments
    .replace(/\s+/g, " ") // collapse whitespace
    .replace(/\n/g, " ")
    .trim();
}

function normalizeCSS(css) {
  return css
    .replace(/\s+/g, " ") // collapse whitespace
    .replace(/\n/g, " ")
    .replace(/\/\*.*?\*\//g, "") // remove comments
    .trim();
}

const localFiles = [
  "../my-citymeals-demo/src/index.css"
];
const themeFiles = [
  "./assets/theme.css"
];

function extractTokens(cssText) {
  const root = postcss.parse(cssText, { parser: safeParser });
  const selectors = new Set();
  const vars = new Set();

  root.walkRules(rule => selectors.add(rule.selector));
  root.walkDecls(decl => {
    if (decl.prop.startsWith("--")) vars.add(decl.prop);
  });

  return { selectors, vars };
}

function safeExtractTokens(cssText, label) {
  try {
    return extractTokens(cssText);
  } catch (err) {
    console.warn(chalk.red(`\n⚠️  Failed to parse ${label}: ${err.reason || err.message}`));
    return { selectors: new Set(), vars: new Set() };
  }
}

function diffSets(a, b) {
  return {
    onlyInA: [...a].filter(x => !b.has(x)),
    onlyInB: [...b].filter(x => !a.has(x)),
    overlap: [...a].filter(x => b.has(x)),
  };
}

function analyze(localPath, themePath) {
    const localCSS = sanitizeLiquidAndNormalize(fs.readFileSync(localPath, "utf-8"));
    const themeCSS = sanitizeLiquidAndNormalize(fs.readFileSync(themePath, "utf-8"));

    const local = safeExtractTokens(localCSS, localPath);
    const theme = safeExtractTokens(themeCSS, themePath);

  const selectorDiff = diffSets(local.selectors, theme.selectors);
  const varDiff = diffSets(local.vars, theme.vars);

  console.log(chalk.cyan.bold(`\n=== Comparing ${localPath} vs ${themePath} ===`));
  console.log(chalk.green(`\nShared selectors:`), selectorDiff.overlap.length);
  console.log(chalk.yellow(`Only in ${localPath}:`), selectorDiff.onlyInA.length);
  console.log(chalk.magenta(`Only in ${themePath}:`), selectorDiff.onlyInB.length);

  console.log(chalk.green(`\nShared variables:`), varDiff.overlap.length);
  console.log(chalk.yellow(`Only in ${localPath}:`), varDiff.onlyInA.length);
  console.log(chalk.magenta(`Only in ${themePath}:`), varDiff.onlyInB.length);

  const textDiff = diffLines(localCSS, themeCSS);

  const summary = textDiff
    .filter(p => p.added || p.removed)
    .map(p => (p.added ? chalk.green(`+ ${p.value.slice(0, 100)}...`) :
               p.removed ? chalk.red(`- ${p.value.slice(0, 100)}...`) : ""))
    .join("\n");

  const previewLimit = 100; // limit number of lines printed in console
  const truncatedSummary = summary
    .split("\n")
    .slice(0, previewLimit)
    .join("\n");

  console.log(chalk.gray(`\nDiff preview (truncated to ${previewLimit} lines):`));
  console.log(truncatedSummary);

  if (summary.split("\n").length > previewLimit) {
    console.log(chalk.yellow(`\n[Truncated output — see full report in tools/css-diff-report.txt]\n`));
  }

  fs.writeFileSync(
    "./tools/css-diff-report.txt",
    textDiff
      .map(p => (p.added ? `+ ${p.value}` : p.removed ? `- ${p.value}` : `  ${p.value}`))
      .join(""),
    "utf8"
  );
}

for (const local of localFiles) {
  for (const theme of themeFiles) analyze(local, theme);
}

console.log(chalk.blue.bold("\nDiff report written to tools/css-diff-report.txt"));