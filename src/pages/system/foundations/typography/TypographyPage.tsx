import { Typography } from "@gem-org/gem-system";
import { fontFamily, fontSize, fontWeight } from "@gem-org/gem-system/tokens";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsPageHeader, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { FontSwitcherDemo } from "./FontSwitcherDemo.tsx";
import "./TypographyPage.scss";

const familyKeys = Object.keys(fontFamily) as (keyof typeof fontFamily)[];
const weightKeys = Object.keys(fontWeight) as (keyof typeof fontWeight)[];
const sizeKeys = Object.keys(fontSize) as (keyof typeof fontSize)[];

const familiesCode = familyKeys
  .map((key) => `.text-${key} {\n  font-family: var(--gem-font-${key});\n}`)
  .join("\n\n");

const weightsCode = weightKeys
  .map((key) => `.text-${key} {\n  font-weight: var(--gem-font-weight-${key});\n}`)
  .join("\n\n");

const sizesCode = sizeKeys
  .map((key) => `.text-${key} {\n  font-size: var(--gem-font-size-${key});\n}`)
  .join("\n\n");

const variants = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "body",
  "bodySm",
  "label",
  "caption",
  "code",
] as const;

export function TypographyPage() {
  const { t } = useTranslation("typography");
  const sample = t("variants.sample");

  const variantsCode = `import { Typography } from "@gem-org/gem-system";

export function TypographyVariants() {
  return (
    <>
${variants
  .map(
    (variant) =>
      `      <Typography variant="${variant}">{${JSON.stringify(`${variant} — ${sample}`)}}</Typography>`,
  )
  .join("\n")}
    </>
  );
}`;

  const asCode = `import { Typography } from "@gem-org/gem-system";

export function TypographyAs() {
  return (
    <>
      <Typography variant="h3" as="p">{${JSON.stringify(t("as.headingAsP"))}}</Typography>
      <Typography variant="body" as="span">{${JSON.stringify(t("as.inline"))}}</Typography>
    </>
  );
}`;

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Typography } from "@gem-org/gem-system"'
      />

      <DocsSection title={t("variants.title")}>
        <DemoBlock stack code={variantsCode} label="TypographyVariants.tsx">
          {variants.map((variant) => (
            <Typography key={variant} variant={variant}>
              {variant} — {sample}
            </Typography>
          ))}
        </DemoBlock>
      </DocsSection>

      <DocsSection title={t("as.title")} description={t("as.description")}>
        <DemoBlock stack code={asCode} label="TypographyAs.tsx">
          <Typography variant="h3" as="p">
            {t("as.headingAsP")}
          </Typography>
          <Typography variant="body" as="span">
            {t("as.inline")}
          </Typography>
        </DemoBlock>
      </DocsSection>

      <DocsSection
        title={t("tokens.families.title")}
        description={t("tokens.families.description")}
      >
        <DemoBlock stack code={familiesCode} label="fontFamily" language="css">
          <ul className="typography-tokens">
            {familyKeys.map((key) => (
              <li key={key} className="typography-tokens__row">
                <div className="typography-tokens__meta">
                  <Typography variant="label">{key}</Typography>
                  <Typography variant="caption" className="typography-tokens__value">
                    {fontFamily[key]}
                  </Typography>
                </div>
                <p
                  className="typography-tokens__sample"
                  style={{ fontFamily: `var(--gem-font-${key})` }}
                >
                  {t("tokens.sample")}
                </p>
              </li>
            ))}
          </ul>
        </DemoBlock>
      </DocsSection>

      <FontSwitcherDemo />

      <DocsSection title={t("tokens.weights.title")} description={t("tokens.weights.description")}>
        <DemoBlock stack code={weightsCode} label="fontWeight" language="css">
          <ul className="typography-tokens">
            {weightKeys.map((key) => (
              <li key={key} className="typography-tokens__row">
                <div className="typography-tokens__meta">
                  <Typography variant="label">{key}</Typography>
                  <Typography variant="caption" className="typography-tokens__value">
                    {fontWeight[key]}
                  </Typography>
                </div>
                <p
                  className="typography-tokens__sample"
                  style={{ fontWeight: `var(--gem-font-weight-${key})` }}
                >
                  {t("tokens.sample")}
                </p>
              </li>
            ))}
          </ul>
        </DemoBlock>
      </DocsSection>

      <DocsSection title={t("tokens.sizes.title")} description={t("tokens.sizes.description")}>
        <DemoBlock stack code={sizesCode} label="fontSize" language="css">
          <ul className="typography-tokens">
            {sizeKeys.map((key) => (
              <li key={key} className="typography-tokens__size">
                <Typography variant="caption" className="typography-tokens__value">
                  {key} · {fontSize[key]}
                </Typography>
                <span
                  className="typography-tokens__glyph"
                  style={{ fontSize: `var(--gem-font-size-${key})` }}
                >
                  Aa
                </span>
              </li>
            ))}
          </ul>
        </DemoBlock>
      </DocsSection>
    </div>
  );
}
