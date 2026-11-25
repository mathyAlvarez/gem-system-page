import { useState, type HTMLAttributes } from "react";
import { Button, Select, Switch, Typography, type SelectValue } from "@gem-org/gem-system";
import { ArrowRight } from "@gem-org/gem-system/icons";
import { Trans, useTranslation } from "react-i18next";
import {
  CodeBlock,
  DemoBlock,
  DocsPageHeader,
  DocsSection,
} from "../../../../components/DocsPrimitives.tsx";
import { cn } from "../../../../lib/cn.ts";
import { OverrideTips } from "../OverrideTips.tsx";
import {
  buttonShapes,
  buttonWidths,
  gemButtonExtras,
  tagIntents,
  tagSizes,
  tagVariants,
  tagVariantsSource,
  type TagVariantProps,
} from "./tagVariants.ts";
import "../OverrideStylesPage.scss";

type TagProps = HTMLAttributes<HTMLSpanElement> & TagVariantProps;

function Tag({ className, intent, size, pill, ...props }: TagProps) {
  return <span className={cn(tagVariants({ intent, size, pill }), className)} {...props} />;
}

type Intent = (typeof tagIntents)[number];
type Size = (typeof tagSizes)[number];
type Shape = (typeof buttonShapes)[number];
type Width = (typeof buttonWidths)[number];

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(setter: (value: T) => void) =>
  (value: SelectValue) => {
    if (typeof value === "string") setter(value as T);
  };

const anatomyCode = `const tagVariants = cva(
  "inline-flex items-center font-semibold", // base
  {
    variants: {
      intent: { primary: "…", outline: "…", ghost: "…" },
      size: { sm: "…", md: "…", lg: "…" },
    },
    defaultVariants: { intent: "primary", size: "md" },
  },
);

tagVariants({ intent: "outline", size: "sm" });
// → "inline-flex items-center font-semibold border … h-6 …"`;

const compoundCode = `compoundVariants: [
  { intent: "outline", size: "lg", className: "border-2" },
],`;

const typesCode = `import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "./lib/cn";
import { tagVariants } from "./tagVariants";

type TagProps = HTMLAttributes<HTMLSpanElement> & VariantProps<typeof tagVariants>;
// intent?: "primary" | "outline" | "ghost" | null
// size?: "sm" | "md" | "lg" | null
// pill?: boolean | null

export function Tag({ className, intent, size, pill, ...props }: TagProps) {
  return <span className={cn(tagVariants({ intent, size, pill }), className)} {...props} />;
}`;

const tipIds = ["single", "defaults", "boolean", "cn"] as const;
const rich = { code: <code /> };

export function CvaOverridesPage() {
  const { t } = useTranslation("overrideStyles");
  const [intent, setIntent] = useState<Intent>("primary");
  const [size, setSize] = useState<Size>("md");
  const [pill, setPill] = useState(false);
  const [shape, setShape] = useState<Shape>("pill");
  const [width, setWidth] = useState<Width>("auto");

  const label = t("cva.playground.label");
  const buttonLabel = t("cva.extend.label");

  const playgroundAttrs = [
    intent !== "primary" && `intent="${intent}"`,
    size !== "md" && `size="${size}"`,
    pill && "pill",
  ].filter(Boolean);

  const playgroundCode = `<Tag${playgroundAttrs.length ? ` ${playgroundAttrs.join(" ")}` : ""}>{${JSON.stringify(label)}}</Tag>`;

  const matrixCode = `export function TagMatrix() {
  return (
    <>
${tagIntents
  .flatMap((i) =>
    tagSizes.map((s) => `      <Tag intent="${i}" size="${s}">{${JSON.stringify(label)}}</Tag>`),
  )
  .join("\n")}
    </>
  );
}`;

  const extendCode = `import type { ComponentProps } from "react";
import { Button } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/cn";

const buttonExtras = cva("", {
  variants: {
    shape: { default: "", pill: "rounded-full", square: "rounded-none" },
    width: { auto: "", full: "w-full justify-center" },
  },
  defaultVariants: { shape: "default", width: "auto" },
});

type AppButtonProps = ComponentProps<typeof Button> & VariantProps<typeof buttonExtras>;

export function AppButton({ shape, width, className, ...props }: AppButtonProps) {
  return <Button {...props} className={cn(buttonExtras({ shape, width }), className)} />;
}

// <AppButton shape="${shape}" width="${width}">{${JSON.stringify(buttonLabel)}}</AppButton>`;

  return (
    <div className="docs-page">
      <DocsPageHeader title={t("cva.header.title")} description={t("cva.header.description")} />

      <DocsSection title={t("cva.install.title")} description={t("cva.install.description")}>
        <CodeBlock code="npm install class-variance-authority" label="Terminal" language="shell" />
      </DocsSection>

      <DocsSection title={t("cva.anatomy.title")} description={t("cva.anatomy.description")}>
        <CodeBlock code={anatomyCode} label="anatomy.ts" language="typescript" />
        <CodeBlock code={tagVariantsSource} label="tagVariants.ts" language="typescript" />
      </DocsSection>

      <DocsSection title={t("cva.playground.title")} description={t("cva.playground.description")}>
        <div className="override-controls">
          <div className="override-controls__field">
            <Typography variant="label">{t("cva.playground.intent")}</Typography>
            <Select
              aria-label={t("cva.playground.intent")}
              options={toOptions(tagIntents)}
              value={intent}
              onChange={pick<Intent>(setIntent)}
              searchable={false}
            />
          </div>
          <div className="override-controls__field">
            <Typography variant="label">{t("cva.playground.size")}</Typography>
            <Select
              aria-label={t("cva.playground.size")}
              options={toOptions(tagSizes)}
              value={size}
              onChange={pick<Size>(setSize)}
              searchable={false}
            />
          </div>
          <div className="override-controls__field override-controls__field--end">
            <Switch
              size="sm"
              label={t("cva.playground.pill")}
              checked={pill}
              onChange={(event) => setPill(event.target.checked)}
            />
          </div>
        </div>
        <DemoBlock code={playgroundCode} label="Usage.tsx" stack>
          <Tag intent={intent} size={size} pill={pill}>
            {label}
          </Tag>
          <div className="override-output">
            <Typography variant="caption" className="docs-page__meta">
              {t("cva.playground.output")}
            </Typography>
            <code className="override-output__value">{tagVariants({ intent, size, pill })}</code>
          </div>
        </DemoBlock>
      </DocsSection>

      <DocsSection title={t("cva.compound.title")} description={t("cva.compound.description")}>
        <DemoBlock code={compoundCode} label="tagVariants.ts">
          <Tag intent="outline" size="md">
            outline · md
          </Tag>
          <Tag intent="outline" size="lg">
            outline · lg
          </Tag>
        </DemoBlock>
      </DocsSection>

      <DocsSection title={t("cva.types.title")} description={t("cva.types.description")}>
        <CodeBlock code={typesCode} label="Tag.tsx" language="typescript" />
      </DocsSection>

      <DocsSection title={t("cva.matrix.title")} description={t("cva.matrix.description")}>
        <DemoBlock code={matrixCode} label="TagMatrix.tsx" stack>
          <div className="override-matrix">
            {tagIntents.map((i) => (
              <div key={i} className="override-matrix__row">
                <code className="override-matrix__label">{i}</code>
                {tagSizes.map((s) => (
                  <Tag key={s} intent={i} size={s}>
                    {label} · {s}
                  </Tag>
                ))}
              </div>
            ))}
          </div>
        </DemoBlock>
      </DocsSection>

      <DocsSection title={t("cva.extend.title")} description={t("cva.extend.description")}>
        <div className="override-controls">
          <div className="override-controls__field">
            <Typography variant="label">{t("cva.extend.shape")}</Typography>
            <Select
              aria-label={t("cva.extend.shape")}
              options={toOptions(buttonShapes)}
              value={shape}
              onChange={pick<Shape>(setShape)}
              searchable={false}
            />
          </div>
          <div className="override-controls__field">
            <Typography variant="label">{t("cva.extend.width")}</Typography>
            <Select
              aria-label={t("cva.extend.width")}
              options={toOptions(buttonWidths)}
              value={width}
              onChange={pick<Width>(setWidth)}
              searchable={false}
            />
          </div>
        </div>
        <DemoBlock code={extendCode} label="AppButton.tsx">
          <Button
            className={gemButtonExtras({ shape, width })}
            rightIcon={<ArrowRight size="sm" />}
          >
            {buttonLabel}
          </Button>
        </DemoBlock>
      </DocsSection>

      <OverrideTips
        title={t("cva.tips.title")}
        items={tipIds.map((id) => ({
          id,
          content: <Trans t={t} i18nKey={`cva.tips.${id}`} components={rich} />,
        }))}
      />
    </div>
  );
}
