import { useEffect, useId, useState } from "react";
import Editor, { type BeforeMount, type OnMount, useMonaco } from "@monaco-editor/react";
import { Indicator } from "@gem-org/gem-system";
import type { Theme } from "@gem-org/gem-system/tokens";
import { useGemTheme } from "../hooks/useGemTheme.ts";
import { preloadMonaco } from "../lib/preloadMonaco.ts";

export type CodeLanguage =
  | "tsx"
  | "typescript"
  | "javascript"
  | "html"
  | "css"
  | "shell"
  | "json";

type CodeViewerProps = {
  code: string;
  language?: CodeLanguage;
};

type Monaco = Parameters<BeforeMount>[0];

const languageLabels: Record<CodeLanguage, string> = {
  tsx: "TSX",
  typescript: "TypeScript",
  javascript: "JavaScript",
  html: "HTML",
  css: "CSS",
  shell: "Shell",
  json: "JSON",
};

/** Monaco language id (no separate `tsx` mode). */
const monacoLanguage = (language: CodeLanguage) =>
  language === "tsx" ? "typescript" : language;

const modelExtension = (language: CodeLanguage) => {
  if (language === "tsx") return "tsx";
  if (language === "typescript") return "ts";
  return language;
};

const LINE_HEIGHT = 20;
const PADDING = 16;

const themeName = (theme: Theme) => `gem-${theme}`;

function cssVar(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function defineGemTheme(monaco: Monaco, theme: Theme) {
  monaco.editor.defineTheme(themeName(theme), {
    base: theme === "dark" ? "vs-dark" : "vs",
    inherit: true,
    rules: [],
    colors: {
      "editor.background": cssVar("--gem-color-bg-subtle"),
      "editor.lineHighlightBackground": cssVar("--gem-color-bg-subtle"),
    },
  });
}

const beforeMount: BeforeMount = (monaco) => {
  // Snippets are fragments: type errors would only add noise.
  const ts =
    (monaco as unknown as { typescript?: Monaco["languages"]["typescript"] }).typescript ??
    monaco.languages.typescript;
  for (const defaults of [ts.typescriptDefaults, ts.javascriptDefaults]) {
    defaults.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: true,
      noSuggestionDiagnostics: true,
    });
    defaults.setCompilerOptions({ jsx: ts.JsxEmit.Preserve, allowNonTsExtensions: true });
  }
};

function CodeFallback({ code, height }: { code: string; height: number }) {
  return (
    <pre className="docs-code-viewer__fallback" style={{ height }} aria-hidden>
      <code>{code}</code>
    </pre>
  );
}

export function CodeViewer({ code, language = "tsx" }: CodeViewerProps) {
  const theme = useGemTheme();
  const modelId = useId().replace(/\W/g, "");
  const monaco = useMonaco();
  const [ready, setReady] = useState(false);
  const [height, setHeight] = useState(code.split("\n").length * LINE_HEIGHT + PADDING * 2);

  useEffect(() => {
    void preloadMonaco();
  }, []);

  useEffect(() => {
    if (!monaco) return;
    defineGemTheme(monaco, theme);
    monaco.editor.setTheme(themeName(theme));
  }, [monaco, theme]);

  const handleMount: OnMount = (editor, monacoInstance) => {
    defineGemTheme(monacoInstance, theme);
    monacoInstance.editor.setTheme(themeName(theme));
    const updateHeight = () => setHeight(editor.getContentHeight());
    editor.onDidContentSizeChange(updateHeight);
    updateHeight();
    setReady(true);
  };

  return (
    <Indicator
      block
      tone="primary"
      variant="flag"
      size="sm"
      radius="lg"
      placement="bottom-end"
      label={languageLabels[language]}
      textStyle="caption"
      icon={null}
      classNames={{ mark: "docs-code-viewer__badge" }}
    >
      <div className="docs-code-viewer" style={{ height }}>
        {!ready ? <CodeFallback code={code} height={height} /> : null}
        <div className="docs-code-viewer__editor" data-ready={ready || undefined}>
          <Editor
            value={code}
            language={monacoLanguage(language)}
            path={`snippet-${modelId}.${modelExtension(language)}`}
            theme={themeName(theme)}
            beforeMount={beforeMount}
            onMount={handleMount}
            loading=""
            options={{
              readOnly: true,
              showUnused: false,
              showDeprecated: false,
              domReadOnly: true,
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              lineNumbers: "off",
              folding: false,
              glyphMargin: false,
              lineDecorationsWidth: 0,
              renderLineHighlight: "none",
              overviewRulerLanes: 0,
              hideCursorInOverviewRuler: true,
              contextmenu: false,
              wordWrap: "on",
              fontSize: 13,
              lineHeight: LINE_HEIGHT,
              fontFamily: "'JetBrains Mono', monospace",
              padding: { top: PADDING, bottom: PADDING },
              scrollbar: { vertical: "hidden", alwaysConsumeMouseWheel: false },
              automaticLayout: true,
            }}
          />
        </div>
      </div>
    </Indicator>
  );
}
