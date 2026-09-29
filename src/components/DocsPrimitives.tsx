import type { ReactNode } from "react";
import { CopyToClipboard, Typography } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { CodeViewer, type CodeLanguage } from "./CodeViewer.tsx";
import { propText } from "./PropText.tsx";

type DocsPageHeaderProps = {
  title: string;
  description: string;
  importPath?: string;
};

export function DocsPageHeader({
  title,
  description,
  importPath,
}: DocsPageHeaderProps) {
  return (
    <header className="docs-page__header">
      <Typography variant="h1">{title}</Typography>
      <Typography variant="body" className="docs-page__meta">
        {propText(description)}
      </Typography>
      {importPath ? <CodeBlock code={importPath} label="Import" /> : null}
    </header>
  );
}

type DocsSectionProps = {
  title: string;
  description?: string;
  id?: string;
  sub?: boolean;
  children: ReactNode;
};

const slugify = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export function DocsSection({ title, description, id, sub = false, children }: DocsSectionProps) {
  return (
    <section
      className={sub ? "docs-section docs-section--sub" : "docs-section"}
      id={id ?? slugify(title)}
    >
      <Typography variant={sub ? "h4" : "h3"} className="docs-section__title">
        {title}
      </Typography>
      {description ? (
        <Typography variant="body" className="docs-page__meta">
          {propText(description)}
        </Typography>
      ) : null}
      {children}
    </section>
  );
}

type CodeBlockProps = {
  code: string;
  label?: string;
  language?: CodeLanguage;
};

function CodeHeader({ code, label }: { code: string; label?: string }) {
  const { t } = useTranslation();

  return (
    <div className="docs-code__header">
      <Typography variant="caption" className="docs-page__meta">
        {label ?? ""}
      </Typography>
      <CopyToClipboard
        value={code}
        size="sm"
        label={t("code.copy")}
        copiedLabel={t("code.copied")}
        copyAriaLabel={t("code.copyAria")}
        copiedAriaLabel={t("code.copiedAria")}
      />
    </div>
  );
}

export function CodeBlock({ code, label, language }: CodeBlockProps) {
  return (
    <div className="docs-code">
      <CodeHeader code={code} label={label} />
      <CodeViewer code={code} language={language} />
    </div>
  );
}

type DemoBlockProps = {
  children: ReactNode;
  code: string;
  label?: string;
  language?: CodeLanguage;
  stack?: boolean;
  overflow?: boolean;
};

export function DemoBlock({ children, code, label, language, stack = false, overflow = false }: DemoBlockProps) {
  return (
    <div className={overflow ? "docs-demo docs-demo--overflow" : "docs-demo"}>
      <div
        className={
          stack ? "docs-demo__preview docs-demo__preview--stack" : "docs-demo__preview"
        }
      >
        {children}
      </div>
      <div className="docs-demo__code">
        <CodeHeader code={code} label={label} />
        <CodeViewer code={code} language={language} />
      </div>
    </div>
  );
}
