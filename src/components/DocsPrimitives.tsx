import { useMemo, useState, type ReactNode } from "react";
import { CopyToClipboard, Tabs, Typography } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { getCodeFiles } from "../lib/codeFiles.ts";
import { CodeViewer, type CodeLanguage } from "./CodeViewer.tsx";
import { propText } from "./PropText.tsx";

type DocsPageHeaderProps = {
  title: string;
  description: ReactNode;
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
        {typeof description === "string" ? propText(description) : description}
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

function CodePanel({ code, label, language = "typescript" }: CodeBlockProps) {
  const { t } = useTranslation();
  const files = useMemo(() => getCodeFiles(code, label, language), [code, label, language]);
  const [activeName, setActiveName] = useState(files[0].name);
  const active = files.find((file) => file.name === activeName) ?? files[0];

  const copy = (
    <CopyToClipboard
      value={active.code}
      size="sm"
      label={t("code.copy")}
      copiedLabel={t("code.copied")}
      copyAriaLabel={t("code.copyAria")}
      copiedAriaLabel={t("code.copiedAria")}
    />
  );

  if (files.length > 1) {
    return (
      <div className="docs-code__tabs">
        <Tabs
          size="sm"
          value={active.name}
          onChange={setActiveName}
          listLabel={t("code.files")}
          classNames={{ root: "docs-code__tabs-root", list: "docs-code__tab-list", panel: "docs-code__panel" }}
          items={files.map((file) => ({
            id: file.name,
            label: file.name,
            content:
              file === active ? <CodeViewer code={file.code} language={file.language} /> : null,
          }))}
        />
        <div className="docs-code__copy">{copy}</div>
      </div>
    );
  }

  return (
    <>
      <div className="docs-code__header">
        <Typography variant="caption" className="docs-page__meta">
          {label ?? ""}
        </Typography>
        {copy}
      </div>
      <CodeViewer code={active.code} language={active.language} />
    </>
  );
}

export function CodeBlock({ code, label, language }: CodeBlockProps) {
  return (
    <div className="docs-code">
      <CodePanel code={code} label={label} language={language} />
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
        <CodePanel code={code} label={label} language={language} />
      </div>
    </div>
  );
}
