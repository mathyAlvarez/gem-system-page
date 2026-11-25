import { Alert, Badge, Button, Typography } from "@gem-org/gem-system";
import { setTheme, toggleTheme } from "@gem-org/gem-system/tokens";
import { Trans, useTranslation } from "react-i18next";
import { CodeBlock, DocsPageHeader, DocsSection } from "../../components/DocsPrimitives.tsx";
import { useGemTheme } from "../../hooks/useGemTheme.ts";

const installCode = "npm install @gem-org/gem-system";

const fullImportCode = `// main.tsx
import "@gem-org/gem-system/styles.css";
import { Button, Card, Typography } from "@gem-org/gem-system";`;

const fontsCode = `<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=JetBrains+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&display=swap"
/>`;

const noteKeys = ["tokens", "utilities", "dependencies", "single"] as const;

const codeComponents = { code: <code /> };

export function GettingStartedPage() {
  const { t } = useTranslation("gettingStarted");
  const theme = useGemTheme();

  const partialImportCode = `// main.tsx
import "@gem-org/gem-system/tokens.css";
import "@gem-org/gem-system/utilities.css"; // ${t("code.optionalUtilities")}
import "@gem-org/gem-system/button.css";
import "@gem-org/gem-system/icon.css"; // ${t("code.buttonUsesIcon")}

// ${t("code.anyComponent")}
import { Button } from "@gem-org/gem-system/button";`;

  const themeHtmlCode = `<!-- ${t("code.initialTheme")} -->
<html lang="es" data-theme="light">`;

  const themeReactCode = `import { Button } from "@gem-org/gem-system";
import { getTheme, setTheme, toggleTheme } from "@gem-org/gem-system/tokens";

export function ThemeSwitcher() {
  return (
    <>
      <Button variant="secondary" onClick={() => setTheme("light")}>${t("theme.light")}</Button>
      <Button variant="secondary" onClick={() => setTheme("dark")}>${t("theme.dark")}</Button>
      <Button variant="primary" onClick={() => toggleTheme()}>${t("theme.toggle")}</Button>
    </>
  );
}

getTheme(); // "light" | "dark"`;

  const themeScopedCode = `// ${t("code.scopedTheme")}
const panel = document.querySelector("#preview")!;
setTheme("dark", panel); // ${t("code.scopedEquivalent")}`;

  return (
    <div className="docs-page">
      <DocsPageHeader title={t("header.title")} description={t("header.description")} />

      <Alert status="info" title={t("peers.title")}>
        {t("peers.body")}
      </Alert>

      <DocsSection title={t("install.title")}>
        <CodeBlock code={installCode} label="npm" language="shell" />
      </DocsSection>

      <DocsSection title={t("bootstrap.title")} description={t("bootstrap.description")}>
        <CodeBlock code={fullImportCode} label={t("bootstrap.fullLabel")} />

        <Typography variant="h5">{t("bootstrap.partial.title")}</Typography>
        <Typography variant="body" className="docs-page__meta">
          <Trans t={t} i18nKey="bootstrap.partial.description" components={codeComponents} />
        </Typography>
        <CodeBlock code={partialImportCode} label={t("bootstrap.partial.label")} />
        <Typography variant="body" className="docs-page__meta">
          {t("bootstrap.partial.notesTitle")}
        </Typography>
        <ul className="docs-page__meta">
          {noteKeys.map((key) => (
            <li key={key}>
              <Trans t={t} i18nKey={`bootstrap.partial.notes.${key}`} components={codeComponents} />
            </li>
          ))}
        </ul>

        <Typography variant="h5">{t("bootstrap.fonts.title")}</Typography>
        <Typography variant="body" className="docs-page__meta">
          {t("bootstrap.fonts.description")}
        </Typography>
        <CodeBlock code={fontsCode} label="index.html" language="html" />
      </DocsSection>

      <DocsSection title={t("theme.title")} description={t("theme.description")}>
        <div className="docs-theme-demo">
          <Button variant="secondary" onClick={() => setTheme("light")}>
            {t("theme.light")}
          </Button>
          <Button variant="secondary" onClick={() => setTheme("dark")}>
            {t("theme.dark")}
          </Button>
          <Button variant="primary" onClick={() => toggleTheme()}>
            {t("theme.toggle")}
          </Button>
          <Badge>{t("theme.current", { theme })}</Badge>
        </div>
        <CodeBlock code={themeHtmlCode} label="index.html" language="html" />
        <CodeBlock code={themeReactCode} label="ThemeSwitcher.tsx" />
        <CodeBlock code={themeScopedCode} label={t("theme.scopedLabel")} />
      </DocsSection>
    </div>
  );
}
