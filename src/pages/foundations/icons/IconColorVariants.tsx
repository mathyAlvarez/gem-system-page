import { useState, type CSSProperties } from "react";
import { Typography } from "@gem-org/gem-system";
import {
  Alert,
  ArrowRight,
  Chat,
  Check,
  CheckCircle,
  Close,
  Cross,
  CrossCircle,
  Info,
  Plus,
  Question,
  QuestionCircle,
  Search,
  Spinner,
  SpinnerCircleDots,
  SpinnerDots,
} from "@gem-org/gem-system/icons";
import { Trans, useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";

const colorVariants = [
  { id: "primary", token: "--gem-color-primary-600" },
  { id: "secondary", token: "--gem-color-secondary-600" },
  { id: "tertiary", token: "--gem-color-tertiary-600" },
  { id: "success", token: "--gem-color-success-600" },
  { id: "error", token: "--gem-color-error-600" },
  { id: "warning", token: "--gem-color-warning-600" },
  { id: "info", token: "--gem-color-info-600" },
  { id: "neutral", token: "--gem-color-neutral-700" },
] as const;

type ColorVariantId = (typeof colorVariants)[number]["id"];

const previewIcons = [
  { name: "Search", Component: Search },
  { name: "Check", Component: Check },
  { name: "CheckCircle", Component: CheckCircle },
  { name: "Cross", Component: Cross },
  { name: "CrossCircle", Component: CrossCircle },
  { name: "Question", Component: Question },
  { name: "QuestionCircle", Component: QuestionCircle },
  { name: "Chat", Component: Chat },
  { name: "Alert", Component: Alert },
  { name: "Info", Component: Info },
  { name: "ArrowRight", Component: ArrowRight },
  { name: "Plus", Component: Plus },
  { name: "Close", Component: Close },
  { name: "Spinner", Component: Spinner },
  { name: "SpinnerDots", Component: SpinnerDots },
  { name: "SpinnerCircleDots", Component: SpinnerCircleDots },
] as const;

const rich = { strong: <strong />, code: <code /> };

export function IconColorVariants() {
  const { t } = useTranslation("icons");
  const [activeId, setActiveId] = useState<ColorVariantId>(colorVariants[0].id);
  const active = colorVariants.find((variant) => variant.id === activeId) ?? colorVariants[0];

  const code = `import { ${previewIcons.map(({ name }) => name).join(", ")} } from "@gem-org/gem-system/icons";

export function IconColorGroup() {
  return (
    <div style={{ color: "var(${active.token})" }}>
${previewIcons.map(({ name }) => `      <${name} size="lg" />`).join("\n")}
    </div>
  );
}`;

  return (
    <DocsSection title={t("colors.title")} description={`${t(`colors.variants.${active.id}`)} · ${active.token}`}>
      <Typography variant="body" className="docs-page__meta">
        <Trans t={t} i18nKey="colors.description" components={rich} />
      </Typography>

      <div className="icons-color__controls" role="group" aria-label={t("colors.groupLabel")}>
        {colorVariants.map((variant) => {
          const isActive = variant.id === active.id;
          return (
            <button
              key={variant.id}
              type="button"
              className={isActive ? "icons-color__btn icons-color__btn--active" : "icons-color__btn"}
              style={{ "--icons-swatch": `var(${variant.token})` } as CSSProperties}
              aria-pressed={isActive}
              onClick={() => setActiveId(variant.id)}
            >
              <span className="icons-color__swatch" aria-hidden />
              {t(`colors.variants.${variant.id}`)}
            </button>
          );
        })}
      </div>

      <DemoBlock code={code} label="IconColorGroup.tsx">
        <div
          className="icons-color__group"
          style={{ color: `var(${active.token})` }}
          aria-live="polite"
        >
          {previewIcons.map(({ name, Component }) => (
            <div key={name} className="icons-color__item" title={name}>
              <Component size="lg" />
            </div>
          ))}
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
