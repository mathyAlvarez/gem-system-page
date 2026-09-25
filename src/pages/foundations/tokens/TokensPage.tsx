import type { CSSProperties } from "react";
import { Badge, Button, Typography } from "@gem-org/gem-system";
import {
  getColorsForTheme,
  getSemanticForTheme,
  toggleTheme,
  type ColorFamily,
  type SemanticTone,
} from "@gem-org/gem-system/tokens";
import { useTranslation } from "react-i18next";
import {
  CodeBlock,
  DocsPageHeader,
  DocsSection,
} from "../../../components/DocsPrimitives.tsx";
import { Moon, Sun } from "../../../components/ThemeIcons.tsx";
import { useGemTheme } from "../../../hooks/useGemTheme.ts";
import { ColorOverridesSection } from "./ColorOverridesSection.tsx";
import { ColorUsageSection } from "./ColorUsageSection.tsx";
import "./TokensPage.scss";

const baseColors = ["bg", "bg-subtle", "fg", "fg-muted", "border", "accent"] as const;

const chipTones = ["primary", "success", "error", "warning", "info"] as const;
const chipLabels = {
  primary: "accent",
  success: "success",
  error: "error",
  warning: "warning",
  info: "info",
} as const;

function relativeLuminance(hex: string) {
  const normalized = hex.replace("#", "");
  const value =
    normalized.length === 3
      ? normalized
          .split("")
          .map((char) => char + char)
          .join("")
      : normalized;

  const [r, g, b] = [0, 2, 4].map((offset) => {
    const channel = Number.parseInt(value.slice(offset, offset + 2), 16) / 255;
    return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function ColorSwatch({ name, value, compact = false }: { name: string; value: string; compact?: boolean }) {
  const style = {
    "--tokens-swatch-bg": value,
    "--tokens-swatch-fg": relativeLuminance(value) > 0.45 ? "#111316" : "#ffffff",
  } as CSSProperties;

  return (
    <div
      className={compact ? "tokens-swatch tokens-swatch--compact" : "tokens-swatch"}
      style={style}
    >
      <span className="tokens-swatch__step">{name}</span>
      <span className="tokens-swatch__value">{value}</span>
    </div>
  );
}

export function TokensPage() {
  const { t } = useTranslation("tokens");
  const theme = useGemTheme();
  const palette = getColorsForTheme(theme);
  const semantic = getSemanticForTheme(theme);
  const families = Object.keys(palette) as ColorFamily[];
  const tones = Object.keys(semantic) as SemanticTone[];

  const paletteCode = `import { getColorsForTheme } from "@gem-org/gem-system/tokens";

// ${t("palette.codeComment")}
const colors = getColorsForTheme("${theme}");

colors.primary[500]; // "${palette.primary[500]}"`;

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { getColorsForTheme, getSemanticForTheme, setTheme, toggleTheme } from "@gem-org/gem-system/tokens"'
      />

      <div className="tokens-toolbar">
        <Typography variant="bodySm" className="tokens-toolbar__text">
          {t("toolbar.active")} <code>data-theme="{theme}"</code>
        </Typography>
        <Button
          variant="secondary"
          size="sm"
          leftIcon={theme === "light" ? <Moon size="sm" /> : <Sun size="sm" />}
          aria-pressed={theme === "dark"}
          onClick={() => toggleTheme()}
        >
          {theme === "light" ? t("toolbar.toDark") : t("toolbar.toLight")}
        </Button>
      </div>

      <section className="tokens-preview" aria-live="polite">
        <Typography variant="caption" className="tokens-preview__eyebrow">
          {t("preview.eyebrow")}
        </Typography>
        <Typography variant="h2" className="tokens-preview__title">
          {theme}
        </Typography>
        <Typography variant="body" className="tokens-preview__body">
          {t("preview.body")}
        </Typography>
        <div className="tokens-preview__chips">
          {chipTones.map((tone) => (
            <Badge key={tone} tone={tone}>
              {t(`preview.chips.${chipLabels[tone]}`)}
            </Badge>
          ))}
        </div>
      </section>

      <DocsSection title={t("base.title")} description={t("base.description")}>
        <div className="docs-swatch-grid">
          {baseColors.map((name) => (
            <div key={name} className="docs-swatch">
              <div
                className="docs-swatch__chip"
                style={{ background: `var(--gem-color-${name})` }}
              />
              <Typography variant="caption">{name}</Typography>
            </div>
          ))}
        </div>
      </DocsSection>

      <DocsSection title={t("palette.title")} description={t("palette.description")}>
        <CodeBlock code={paletteCode} label="getColorsForTheme" />
        {families.map((family) => (
          <section key={family} className="tokens-family">
            <header className="tokens-family__header">
              <Typography variant="h6">{t(`palette.families.${family}`)}</Typography>
              <code className="tokens-family__code">
                colors.{family} · {theme}
              </code>
            </header>
            <div className="tokens-family__grid">
              {Object.entries(palette[family]).map(([step, value]) => (
                <ColorSwatch key={`${theme}-${family}-${step}`} name={step} value={value} />
              ))}
            </div>
          </section>
        ))}
      </DocsSection>

      <DocsSection title={t("semantic.title")} description={t("semantic.description")}>
        <div className="tokens-semantic">
          {tones.map((tone) => (
            <article key={tone} className="tokens-semantic__card">
              <Typography variant="h6">{tone}</Typography>
              <div className="tokens-semantic__swatches">
                {Object.entries(semantic[tone]).map(([role, value]) => (
                  <ColorSwatch key={`${theme}-${tone}-${role}`} name={role} value={value} compact />
                ))}
              </div>
            </article>
          ))}
        </div>
      </DocsSection>

      <ColorUsageSection />

      <ColorOverridesSection />
    </div>
  );
}
