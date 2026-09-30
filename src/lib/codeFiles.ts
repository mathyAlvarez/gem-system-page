import type { CodeLanguage } from "../components/CodeViewer.tsx";

export type CodeFile = { name: string; code: string; language: CodeLanguage };

const sources = import.meta.glob<string>("/src/pages/**/examples/**/*.{tsx,ts,css,scss}", {
  query: "?raw",
  import: "default",
  eager: true,
});

const pathByCode = new Map<string, string>();
for (const [path, code] of Object.entries(sources)) {
  if (!pathByCode.has(code)) pathByCode.set(code, path);
}

const importPattern = /(?:import|export)\s+(?:[^"';]*?\s+from\s+)?["'](\.{1,2}\/[^"'?]+)["']/g;
const extensions = ["", ".tsx", ".ts", ".css", ".scss"];

const fileName = (path: string) => path.slice(path.lastIndexOf("/") + 1);

const languageOf = (path: string): CodeLanguage => (/\.s?css$/.test(path) ? "css" : "typescript");

function resolve(from: string, specifier: string) {
  const segments = from.split("/").slice(0, -1);
  for (const part of specifier.split("/")) {
    if (part === "..") segments.pop();
    else if (part !== ".") segments.push(part);
  }
  const base = segments.join("/");
  return extensions.map((ext) => base + ext).find((path) => path in sources);
}

function collect(path: string, seen: Set<string>) {
  if (seen.has(path)) return;
  seen.add(path);
  for (const [, specifier] of sources[path].matchAll(importPattern)) {
    const target = resolve(path, specifier);
    if (target) collect(target, seen);
  }
}

export function getCodeFiles(code: string, label: string | undefined, language: CodeLanguage): CodeFile[] {
  const main: CodeFile = { name: label ?? "", code, language };
  const path = pathByCode.get(code);
  if (!path) return [main];

  const seen = new Set<string>();
  collect(path, seen);
  return [
    main,
    ...[...seen].slice(1).map((file) => ({ name: fileName(file), code: sources[file], language: languageOf(file) })),
  ];
}
