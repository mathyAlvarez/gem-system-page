import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { Marquee } from "@gem-org/gemffects/marquee";
import { isIntensityToken } from "@gem-org/gemffects/tokens";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { MarqueeChips, MarqueeImages, MarqueeTile } from "./examples/MarqueeTile.tsx";
import { MARQUEE_TRIGGERS, MARQUEE_VARIANTS } from "./examples/demo.ts";

const BOOLEAN_OPTIONS = ["true", "false"] as const;
const INTENSITY_OPTIONS = ["sm", "md", "lg", "0.2", "0.62", "0.95"] as const;
const DURATION_OPTIONS = ["8000", "18000", "32000"] as const;
const GAP_OPTIONS = ["auto", "8", "24", "48"] as const;
const VERTICAL_SIZE = 220;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function MarqueePlayground() {
  const { t } = useTranslation("marquee");
  const [variant, setVariant] = useState<(typeof MARQUEE_VARIANTS)[number]>("left");
  const [trigger, setTrigger] = useState<(typeof MARQUEE_TRIGGERS)[number]>("always");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [duration, setDuration] = useState<(typeof DURATION_OPTIONS)[number]>("18000");
  const [gap, setGap] = useState<(typeof GAP_OPTIONS)[number]>("auto");
  const [fade, setFade] = useState<(typeof BOOLEAN_OPTIONS)[number]>("true");
  const [pauseOnHover, setPauseOnHover] = useState<(typeof BOOLEAN_OPTIONS)[number]>("true");
  const [isPaused, setIsPaused] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const isVertical = variant === "up" || variant === "down";
  const intensityValue = isIntensityToken(intensity) ? intensity : Number(intensity);
  const gapValue = gap === "auto" ? undefined : Number(gap);

  const attrs = [
    variant !== "left" && `variant="${variant}"`,
    isVertical && `size={${VERTICAL_SIZE}}`,
    trigger !== "always" && `trigger="${trigger}"`,
    intensity !== "md" &&
      (isIntensityToken(intensity) ? `intensity="${intensity}"` : `intensity={${intensity}}`),
    duration !== "18000" && `duration={${duration}}`,
    gapValue != null && `gap={${gapValue}}`,
    fade === "false" && "fade={false}",
    pauseOnHover === "false" && "pauseOnHover={false}",
    isPaused === "true" && "isPaused",
    isDisabled === "true" && "isDisabled",
  ].filter(Boolean);

  const opening = attrs.length > 0 ? `<Marquee\n  ${attrs.join("\n  ")}\n>` : "<Marquee>";
  const items = isVertical
    ? '  <img src="/card.jpeg" alt="" />\n  …'
    : "  <span>GEM Org</span>\n  <span>Neon</span>\n  …";
  const code = `import { Marquee } from "@gem-org/gemffects/marquee";

${opening}
${items}
</Marquee>`;

  const selects = [
    {
      id: "variant",
      value: variant,
      options: MARQUEE_VARIANTS,
      onChange: pick(MARQUEE_VARIANTS, setVariant),
    },
    {
      id: "trigger",
      value: trigger,
      options: MARQUEE_TRIGGERS,
      onChange: pick(MARQUEE_TRIGGERS, setTrigger),
    },
    {
      id: "intensity",
      value: intensity,
      options: INTENSITY_OPTIONS,
      onChange: pick(INTENSITY_OPTIONS, setIntensity),
    },
    {
      id: "duration",
      value: duration,
      options: DURATION_OPTIONS,
      onChange: pick(DURATION_OPTIONS, setDuration),
    },
    { id: "gap", value: gap, options: GAP_OPTIONS, onChange: pick(GAP_OPTIONS, setGap) },
    { id: "fade", value: fade, options: BOOLEAN_OPTIONS, onChange: pick(BOOLEAN_OPTIONS, setFade) },
    {
      id: "pauseOnHover",
      value: pauseOnHover,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setPauseOnHover),
    },
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
      <div className="marquee-playground">
        {selects.map((select) => (
          <div key={select.id} className="marquee-playground__field">
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
        <MarqueeTile tall={isVertical}>
          <Marquee
            variant={variant}
            size={isVertical ? VERTICAL_SIZE : undefined}
            trigger={trigger}
            intensity={intensityValue}
            duration={Number(duration)}
            gap={gapValue}
            fade={fade === "true"}
            pauseOnHover={pauseOnHover === "true"}
            isPaused={isPaused === "true"}
            isDisabled={isDisabled === "true"}
            className="marquee-demo__host"
          >
            {isVertical ? <MarqueeImages /> : <MarqueeChips />}
          </Marquee>
        </MarqueeTile>
      </DemoBlock>
    </DocsSection>
  );
}
