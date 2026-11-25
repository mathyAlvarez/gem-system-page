import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { Glassmorphism } from "@gem-org/gemffects/glassmorphism";
import { isIntensityToken } from "@gem-org/gemffects/tokens";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { GlassCopy, GlassScene } from "./examples/GlassScene.tsx";
import { GLASS_COLORS, GLASS_TRIGGERS, GLASS_VARIANTS } from "./examples/demo.ts";

const BOOLEAN_OPTIONS = ["true", "false"] as const;
const INTENSITY_OPTIONS = ["sm", "md", "lg", "0.2", "0.62", "0.95"] as const;
const BLUR_OPTIONS = ["auto", "6", "16", "36"] as const;
const SATURATE_OPTIONS = ["auto", "40", "100", "240"] as const;
const DURATION_OPTIONS = ["120", "280", "900"] as const;
const COLOR_OPTIONS = ["default", ...Object.keys(GLASS_COLORS)] as (
  "default" | keyof typeof GLASS_COLORS
)[];

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function GlassmorphismPlayground() {
  const { t } = useTranslation("glassmorphism");
  const [variant, setVariant] = useState<(typeof GLASS_VARIANTS)[number]>("frost");
  const [trigger, setTrigger] = useState<(typeof GLASS_TRIGGERS)[number]>("always");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [blur, setBlur] = useState<(typeof BLUR_OPTIONS)[number]>("auto");
  const [saturate, setSaturate] = useState<(typeof SATURATE_OPTIONS)[number]>("auto");
  const [duration, setDuration] = useState<(typeof DURATION_OPTIONS)[number]>("280");
  const [color, setColor] = useState<(typeof COLOR_OPTIONS)[number]>("default");
  const [isPaused, setIsPaused] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const intensityValue = isIntensityToken(intensity) ? intensity : Number(intensity);
  const blurValue = blur === "auto" ? undefined : Number(blur);
  const saturateValue = saturate === "auto" ? undefined : Number(saturate);
  const colorValue = color === "default" ? undefined : GLASS_COLORS[color];
  const title = t("playground.cardTitle");
  const copy = t("playground.copy");

  const attrs = [
    variant !== "frost" && `variant="${variant}"`,
    trigger !== "always" && `trigger="${trigger}"`,
    intensity !== "md" &&
      (isIntensityToken(intensity) ? `intensity="${intensity}"` : `intensity={${intensity}}`),
    blurValue !== undefined && `blur={${blurValue}}`,
    saturateValue !== undefined && `saturate={${saturateValue}}`,
    duration !== "280" && `duration={${duration}}`,
    colorValue && `color="${colorValue}"`,
    isPaused === "true" && "isPaused",
    isDisabled === "true" && "isDisabled",
  ].filter(Boolean);

  const opening =
    attrs.length > 0 ? `<Glassmorphism\n  ${attrs.join("\n  ")}\n>` : "<Glassmorphism>";
  const code = `import { Glassmorphism } from "@gem-org/gemffects/glassmorphism";

${opening}
  <div className="card">
    <p>${title}</p>
    <p>${copy}</p>
  </div>
</Glassmorphism>`;

  const selects = [
    {
      id: "variant",
      value: variant,
      options: GLASS_VARIANTS,
      onChange: pick(GLASS_VARIANTS, setVariant),
    },
    {
      id: "trigger",
      value: trigger,
      options: GLASS_TRIGGERS,
      onChange: pick(GLASS_TRIGGERS, setTrigger),
    },
    {
      id: "intensity",
      value: intensity,
      options: INTENSITY_OPTIONS,
      onChange: pick(INTENSITY_OPTIONS, setIntensity),
    },
    { id: "blur", value: blur, options: BLUR_OPTIONS, onChange: pick(BLUR_OPTIONS, setBlur) },
    {
      id: "saturate",
      value: saturate,
      options: SATURATE_OPTIONS,
      onChange: pick(SATURATE_OPTIONS, setSaturate),
    },
    {
      id: "duration",
      value: duration,
      options: DURATION_OPTIONS,
      onChange: pick(DURATION_OPTIONS, setDuration),
    },
    { id: "color", value: color, options: COLOR_OPTIONS, onChange: pick(COLOR_OPTIONS, setColor) },
    {
      id: "isPaused",
      value: isPaused,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setIsPaused),
    },
    {
      id: "isDisabled",
      value: isDisabled,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setIsDisabled),
    },
  ];

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="glassmorphism-playground">
        {selects.map((select) => (
          <div key={select.id} className="glassmorphism-playground__field">
            <Typography variant="label">{select.id}</Typography>
            <Select
              aria-label={select.id}
              options={toOptions(select.options)}
              value={select.value}
              onChange={select.onChange}
              searchable={false}
            />
          </div>
        ))}
      </div>

      <DemoBlock code={code} label="Example.tsx">
        <GlassScene>
          <Glassmorphism
            variant={variant}
            trigger={trigger}
            intensity={intensityValue}
            blur={blurValue}
            saturate={saturateValue}
            duration={Number(duration)}
            color={colorValue}
            isPaused={isPaused === "true"}
            isDisabled={isDisabled === "true"}
            className="glass-demo__host"
          >
            <GlassCopy title={title} copy={copy} />
          </Glassmorphism>
        </GlassScene>
      </DemoBlock>
    </DocsSection>
  );
}
