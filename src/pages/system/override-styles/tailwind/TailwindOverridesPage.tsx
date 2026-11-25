import { useState, type ComponentProps } from "react";
import { Alert, Button, Typography } from "@gem-org/gem-system";
import { Plus, Share } from "@gem-org/gem-system/icons";
import { Trans, useTranslation } from "react-i18next";
import {
  CodeBlock,
  DemoBlock,
  DocsPageHeader,
  DocsSection,
} from "../../../../components/DocsPrimitives.tsx";
import { cn } from "../../../../lib/cn.ts";
import { OverrideTips } from "../OverrideTips.tsx";
import "../OverrideStylesPage.scss";

const installCode = "npm install clsx tailwind-merge\nnpm install -D tailwindcss @tailwindcss/vite";

const viteCode = `import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});`;

const cssCode = `@layer theme, utilities;
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities) important;`;

const mainCode = `import "@gem-org/gem-system/styles.css";
import "./styles/tailwind.css";`;

const cnCode = `import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`;

const toolbarClass =
  "flex w-full flex-wrap items-center justify-between gap-4 rounded-xl border border-(--gem-color-border) bg-(--gem-color-bg) p-4";
const overrideClass = "rounded-full px-6 bg-(--gem-color-fg) text-(--gem-color-bg)";
const brandBase = "rounded-full bg-emerald-600 px-6 text-white hover:bg-emerald-700";
const brandActive = "ring-2 ring-emerald-300 ring-offset-2";
const brandOverride = "bg-rose-600 hover:bg-rose-700";

type BrandButtonProps = ComponentProps<typeof Button> & { active?: boolean };

function BrandButton({ className, active = false, ...props }: BrandButtonProps) {
  return <Button {...props} className={cn(brandBase, active && brandActive, className)} />;
}

const mergeExamples = [
  ["px-4 bg-red-500", "bg-blue-500"],
  ["rounded-md px-4", "rounded-full px-6"],
  ["text-white hover:bg-emerald-700", "hover:bg-rose-700"],
  ["p-4", "px-2"],
] as const;

const tipIds = ["tokens", "className", "important", "scope"] as const;

const rich = { code: <code /> };
const text = (value: string) => `{${JSON.stringify(value)}}`;

export function TailwindOverridesPage() {
  const { t } = useTranslation("overrideStyles");
  const [active, setActive] = useState(false);

  const layoutCode = `import { Button, Typography } from "@gem-org/gem-system";
import { Share } from "@gem-org/gem-system/icons";

export function ReportToolbar() {
  return (
    <div className=${JSON.stringify(toolbarClass)}>
      <div className="flex flex-col gap-1">
        <Typography variant="h5">${text(t("tailwind.layout.demo.title"))}</Typography>
        <span className="text-xs text-(--gem-color-fg-muted)">
          ${text(t("tailwind.layout.demo.meta"))}
        </span>
      </div>
      <div className="flex gap-2">
        <Button variant="secondary">${text(t("tailwind.layout.demo.secondary"))}</Button>
        <Button leftIcon={<Share size="sm" />}>${text(t("tailwind.layout.demo.primary"))}</Button>
      </div>
    </div>
  );
}`;

  const overrideCode = `import { Button } from "@gem-org/gem-system";

export function OverrideExample() {
  return (
    <>
      <Button>${text(t("tailwind.override.default"))}</Button>
      <Button className=${JSON.stringify(overrideClass)}>
        ${text(t("tailwind.override.custom"))}
      </Button>
    </>
  );
}`;

  const wrapperCode = `import { useState, type ComponentProps } from "react";
import { Button } from "@gem-org/gem-system";
import { Plus } from "@gem-org/gem-system/icons";
import { cn } from "./lib/cn";

type BrandButtonProps = ComponentProps<typeof Button> & { active?: boolean };

export function BrandButton({ className, active = false, ...props }: BrandButtonProps) {
  return (
    <Button
      {...props}
      className={cn(
        ${JSON.stringify(brandBase)},
        active && ${JSON.stringify(brandActive)},
        className,
      )}
    />
  );
}

export function BrandButtons() {
  const [active, setActive] = useState(false);

  return (
    <>
      <BrandButton leftIcon={<Plus size="sm" />}>${text(t("tailwind.wrapper.brand"))}</BrandButton>
      <BrandButton className=${JSON.stringify(brandOverride)}>${text(t("tailwind.wrapper.override"))}</BrandButton>
      <BrandButton variant="secondary" active={active} onClick={() => setActive(!active)}>
        ${text(t("tailwind.wrapper.toggle"))}
      </BrandButton>
    </>
  );
}`;

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("tailwind.header.title")}
        description={t("tailwind.header.description")}
      />

      <DocsSection
        title={t("tailwind.install.title")}
        description={t("tailwind.install.description")}
      >
        <CodeBlock code={installCode} label="Terminal" language="shell" />
      </DocsSection>

      <DocsSection title={t("tailwind.vite.title")} description={t("tailwind.vite.description")}>
        <CodeBlock code={viteCode} label="vite.config.ts" language="typescript" />
      </DocsSection>

      <DocsSection title={t("tailwind.css.title")} description={t("tailwind.css.description")}>
        <CodeBlock code={cssCode} label="src/styles/tailwind.css" language="css" />
        <Typography variant="body" className="docs-page__meta">
          <Trans t={t} i18nKey="tailwind.css.why" components={rich} />
        </Typography>
        <Alert status="warning" title={t("tailwind.css.preflightTitle")}>
          {t("tailwind.css.preflight")}
        </Alert>
      </DocsSection>

      <DocsSection title={t("tailwind.main.title")} description={t("tailwind.main.description")}>
        <CodeBlock code={mainCode} label="src/main.tsx" language="typescript" />
      </DocsSection>

      <DocsSection title={t("tailwind.cn.title")} description={t("tailwind.cn.description")}>
        <CodeBlock code={cnCode} label="src/lib/cn.ts" language="typescript" />
      </DocsSection>

      <DocsSection
        title={t("tailwind.layout.title")}
        description={t("tailwind.layout.description")}
      >
        <DemoBlock code={layoutCode} label="ReportToolbar.tsx">
          <div className={toolbarClass}>
            <div className="flex flex-col gap-1">
              <Typography variant="h5">{t("tailwind.layout.demo.title")}</Typography>
              <span className="text-xs text-(--gem-color-fg-muted)">
                {t("tailwind.layout.demo.meta")}
              </span>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary">{t("tailwind.layout.demo.secondary")}</Button>
              <Button leftIcon={<Share size="sm" />}>{t("tailwind.layout.demo.primary")}</Button>
            </div>
          </div>
        </DemoBlock>
      </DocsSection>

      <DocsSection
        title={t("tailwind.override.title")}
        description={t("tailwind.override.description")}
      >
        <DemoBlock code={overrideCode} label="OverrideExample.tsx">
          <Button>{t("tailwind.override.default")}</Button>
          <Button className={overrideClass}>{t("tailwind.override.custom")}</Button>
        </DemoBlock>
      </DocsSection>

      <DocsSection
        title={t("tailwind.wrapper.title")}
        description={t("tailwind.wrapper.description")}
      >
        <DemoBlock code={wrapperCode} label="BrandButton.tsx">
          <BrandButton leftIcon={<Plus size="sm" />}>{t("tailwind.wrapper.brand")}</BrandButton>
          <BrandButton className={brandOverride}>{t("tailwind.wrapper.override")}</BrandButton>
          <BrandButton
            variant="secondary"
            active={active}
            aria-pressed={active}
            onClick={() => setActive((current) => !current)}
          >
            {t("tailwind.wrapper.toggle")}
          </BrandButton>
        </DemoBlock>
      </DocsSection>

      <DocsSection title={t("tailwind.merge.title")} description={t("tailwind.merge.description")}>
        <div className="override-merge">
          {mergeExamples.map(([base, override]) => (
            <div key={`${base}|${override}`} className="override-merge__row">
              <code className="override-merge__input">
                cn({JSON.stringify(base)}, {JSON.stringify(override)})
              </code>
              <span className="override-merge__arrow" aria-hidden>
                →
              </span>
              <code className="override-merge__output">{JSON.stringify(cn(base, override))}</code>
            </div>
          ))}
        </div>
      </DocsSection>

      <OverrideTips
        title={t("tailwind.tips.title")}
        items={tipIds.map((id) => ({
          id,
          content: <Trans t={t} i18nKey={`tailwind.tips.${id}`} components={rich} />,
        }))}
      />
    </div>
  );
}
