import { useState, type CSSProperties } from "react";
import { Button, Slider, Switch, Typography, type SliderValue } from "@gem-org/gem-system";
import { Trans, useTranslation } from "react-i18next";
import {
  CodeBlock,
  DemoBlock,
  DocsPageHeader,
  DocsSection,
} from "../../../../components/DocsPrimitives.tsx";
import { OverrideTips } from "../OverrideTips.tsx";
import "../OverrideStylesPage.scss";

const toNumber = (value: SliderValue) => (Array.isArray(value) ? value[0] : value);

const progressTrackClass = "h-3 w-full overflow-hidden rounded-full bg-(--gem-color-bg-subtle)";
const progressBarClass =
  "h-full w-(--progress) rounded-full bg-(--gem-color-accent) transition-[width] duration-200";

const brandCardClass =
  "flex flex-col gap-3 border-2 border-[hsl(var(--brand-hue)_70%_42%)] rounded-(--brand-radius) bg-(--gem-color-bg) p-5";
const brandButtonClass =
  "self-start rounded-(--brand-radius) bg-[hsl(var(--brand-hue)_70%_42%)] text-white hover:bg-[hsl(var(--brand-hue)_70%_34%)]";

const primaryLightness = { 300: 72, 400: 62, 500: 50, 600: 42, 700: 34 } as const;

const scopeTokens = (hue: number) =>
  Object.fromEntries(
    Object.entries(primaryLightness).flatMap(([step, lightness]) => [
      [`--gem-palette-primary-${step}`, `hsl(${hue} 70% ${lightness}%)`],
      [`--gem-color-primary-${step}`, `hsl(${hue} 70% ${lightness}%)`],
    ]),
  ) as CSSProperties;

const whyCode = (wrong: string, right: string) => `// ❌ ${wrong}
<div className={\`bg-[hsl(\${hue}_70%_42%)]\`} />

// ✅ ${right}
<div
  style={{ "--brand-hue": hue } as CSSProperties}
  className="bg-[hsl(var(--brand-hue)_70%_42%)]"
/>`;

const typesCode = `// src/types/css.d.ts
import "react";

declare module "react" {
  interface CSSProperties {
    [key: \`--\${string}\`]: string | number | undefined;
  }
}

// <div style={{ "--progress": "40%" }} />`;

const tipIds = ["prefix", "units", "static", "scope"] as const;
const rich = { code: <code /> };
const text = (value: string) => `{${JSON.stringify(value)}}`;

export function CssVariablesPage() {
  const { t } = useTranslation("overrideStyles");
  const [progress, setProgress] = useState(40);
  const [hue, setHue] = useState(265);
  const [radius, setRadius] = useState(12);
  const [scopeHue, setScopeHue] = useState(210);
  const [notifications, setNotifications] = useState(true);
  const [volume, setVolume] = useState(60);

  const brandStyle = { "--brand-hue": hue, "--brand-radius": `${radius}px` } as CSSProperties;

  const basicCode = `import type { CSSProperties } from "react";

export function Progress({ value }: { value: number }) {
  return (
    <div className=${JSON.stringify(progressTrackClass)}>
      <div
        style={{ "--progress": \`\${value}%\` } as CSSProperties}
        className=${JSON.stringify(progressBarClass)}
      />
    </div>
  );
}

// <Progress value={${progress}} />`;

  const brandCode = `import type { CSSProperties } from "react";
import { Button, Typography } from "@gem-org/gem-system";

export function BrandCard({ hue, radius }: { hue: number; radius: number }) {
  const style = { "--brand-hue": hue, "--brand-radius": \`\${radius}px\` } as CSSProperties;

  return (
    <div style={style} className=${JSON.stringify(brandCardClass)}>
      <Typography variant="h5">${text(t("cssVars.brand.cardTitle"))}</Typography>
      <Typography variant="body">${text(t("cssVars.brand.cardBody"))}</Typography>
      <Button className=${JSON.stringify(brandButtonClass)}>${text(t("cssVars.brand.action"))}</Button>
    </div>
  );
}

// <BrandCard hue={${hue}} radius={${radius}} />`;

  const scopeCode = `import type { CSSProperties, ReactNode } from "react";

const lightness = { 300: 72, 400: 62, 500: 50, 600: 42, 700: 34 };

// --gem-color-primary-* resolves from the palette at :root, so both scales are redefined.
const primaryScale = (hue: number) =>
  Object.fromEntries(
    Object.entries(lightness).flatMap(([step, l]) => [
      [\`--gem-palette-primary-\${step}\`, \`hsl(\${hue} 70% \${l}%)\`],
      [\`--gem-color-primary-\${step}\`, \`hsl(\${hue} 70% \${l}%)\`],
    ]),
  ) as CSSProperties;

export function ThemeScope({ hue, children }: { hue: number; children: ReactNode }) {
  return <div style={primaryScale(hue)}>{children}</div>;
}

// <ThemeScope hue={${scopeHue}}>
//   <Button>${t("cssVars.scope.primary")}</Button>
//   <Switch label=${JSON.stringify(t("cssVars.scope.switch"))} />
//   <Slider label=${JSON.stringify(t("cssVars.scope.slider"))} />
// </ThemeScope>`;

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("cssVars.header.title")}
        description={t("cssVars.header.description")}
      />

      <DocsSection title={t("cssVars.why.title")} description={t("cssVars.why.description")}>
        <CodeBlock
          code={whyCode(t("cssVars.why.wrong"), t("cssVars.why.right"))}
          label="Why.tsx"
          language="typescript"
        />
      </DocsSection>

      <DocsSection title={t("cssVars.basic.title")} description={t("cssVars.basic.description")}>
        <DemoBlock code={basicCode} label="Progress.tsx" stack>
          <Slider
            label={t("cssVars.basic.label")}
            min={0}
            max={100}
            value={progress}
            suffix="%"
            onChange={(value) => setProgress(toNumber(value))}
          />
          <div className={progressTrackClass}>
            <div
              style={{ "--progress": `${progress}%` } as CSSProperties}
              className={progressBarClass}
            />
          </div>
        </DemoBlock>
      </DocsSection>

      <DocsSection title={t("cssVars.types.title")} description={t("cssVars.types.description")}>
        <CodeBlock code={typesCode} label="css.d.ts" language="typescript" />
      </DocsSection>

      <DocsSection title={t("cssVars.brand.title")} description={t("cssVars.brand.description")}>
        <div className="override-controls override-controls--two">
          <Slider
            label={t("cssVars.brand.hue")}
            min={0}
            max={360}
            value={hue}
            onChange={(value) => setHue(toNumber(value))}
          />
          <Slider
            label={t("cssVars.brand.radius")}
            min={0}
            max={24}
            value={radius}
            suffix="px"
            onChange={(value) => setRadius(toNumber(value))}
          />
        </div>
        <DemoBlock code={brandCode} label="BrandCard.tsx">
          <div style={brandStyle} className={brandCardClass}>
            <Typography variant="h5">{t("cssVars.brand.cardTitle")}</Typography>
            <Typography variant="body">{t("cssVars.brand.cardBody")}</Typography>
            <Button className={brandButtonClass}>{t("cssVars.brand.action")}</Button>
          </div>
        </DemoBlock>
      </DocsSection>

      <DocsSection title={t("cssVars.scope.title")} description={t("cssVars.scope.description")}>
        <div className="override-controls override-controls--two">
          <Slider
            label={t("cssVars.scope.hue")}
            min={0}
            max={360}
            value={scopeHue}
            onChange={(value) => setScopeHue(toNumber(value))}
          />
        </div>
        <DemoBlock code={scopeCode} label="ThemeScope.tsx">
          <div className="override-scope" style={scopeTokens(scopeHue)}>
            <Button>{t("cssVars.scope.primary")}</Button>
            <Switch
              label={t("cssVars.scope.switch")}
              checked={notifications}
              onChange={(event) => setNotifications(event.target.checked)}
            />
            <div className="override-scope__slider">
              <Slider
                label={t("cssVars.scope.slider")}
                min={0}
                max={100}
                value={volume}
                onChange={(value) => setVolume(toNumber(value))}
              />
            </div>
          </div>
        </DemoBlock>
      </DocsSection>

      <OverrideTips
        title={t("cssVars.tips.title")}
        items={tipIds.map((id) => ({
          id,
          content: <Trans t={t} i18nKey={`cssVars.tips.${id}`} components={rich} />,
        }))}
      />
    </div>
  );
}
