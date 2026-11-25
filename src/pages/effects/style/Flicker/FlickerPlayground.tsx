import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { Flicker } from "@gem-org/gemffects/flicker";
import { isIntensityToken } from "@gem-org/gemffects/tokens";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { FlickerTile } from "./examples/FlickerTile.tsx";
import {
  FLICKER_COLORS,
  FLICKER_EDGES,
  FLICKER_TRIGGERS,
  FLICKER_VARIANTS,
} from "./examples/demo.ts";

const BOOLEAN_OPTIONS = ["true", "false"] as const;
const INTENSITY_OPTIONS = ["sm", "md", "lg", "0.2", "0.62", "0.95"] as const;
const SPREAD_OPTIONS = ["6", "18", "36"] as const;
const DURATION_OPTIONS = ["1400", "2800", "4800"] as const;
const COLOR_OPTIONS = ["default", ...Object.keys(FLICKER_COLORS)] as (
  "default" | keyof typeof FLICKER_COLORS
)[];

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function FlickerPlayground() {
  const { t } = useTranslation("flicker");
  const [variant, setVariant] = useState<(typeof FLICKER_VARIANTS)[number]>("neon");
  const [edge, setEdge] = useState<(typeof FLICKER_EDGES)[number]>("all");
  const [trigger, setTrigger] = useState<(typeof FLICKER_TRIGGERS)[number]>("always");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [spread, setSpread] = useState<(typeof SPREAD_OPTIONS)[number]>("18");
  const [duration, setDuration] = useState<(typeof DURATION_OPTIONS)[number]>("2800");
  const [color, setColor] = useState<(typeof COLOR_OPTIONS)[number]>("default");
  const [isPaused, setIsPaused] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const intensityValue = isIntensityToken(intensity) ? intensity : Number(intensity);
  const colorValue = color === "default" ? undefined : FLICKER_COLORS[color];
  const label = t("playground.label");

  const attrs = [
    variant !== "neon" && `variant="${variant}"`,
    edge !== "all" && `edge="${edge}"`,
    trigger !== "always" && `trigger="${trigger}"`,
    intensity !== "md" &&
      (isIntensityToken(intensity) ? `intensity="${intensity}"` : `intensity={${intensity}}`),
    spread !== "18" && `spread={${spread}}`,
    duration !== "2800" && `duration={${duration}}`,
    colorValue && `color="${colorValue}"`,
    isPaused === "true" && "isPaused",
    isDisabled === "true" && "isDisabled",
  ].filter(Boolean);

  const opening = attrs.length > 0 ? `<Flicker\n  ${attrs.join("\n  ")}\n>` : "<Flicker>";
  const code = `import { Flicker } from "@gem-org/gemffects/flicker";

${opening}
  <span className="sign">${label}</span>
</Flicker>`;

  const selects = [
    {
      id: "variant",
      value: variant,
      options: FLICKER_VARIANTS,
      onChange: pick(FLICKER_VARIANTS, setVariant),
    },
    { id: "edge", value: edge, options: FLICKER_EDGES, onChange: pick(FLICKER_EDGES, setEdge) },
    {
      id: "trigger",
      value: trigger,
      options: FLICKER_TRIGGERS,
      onChange: pick(FLICKER_TRIGGERS, setTrigger),
    },
    {
      id: "intensity",
      value: intensity,
      options: INTENSITY_OPTIONS,
      onChange: pick(INTENSITY_OPTIONS, setIntensity),
    },
    {
      id: "spread",
      value: spread,
      options: SPREAD_OPTIONS,
      onChange: pick(SPREAD_OPTIONS, setSpread),
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
      <div className="flicker-playground">
        {selects.map((select) => (
          <div key={select.id} className="flicker-playground__field">
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
        <FlickerTile>
          <Flicker
            variant={variant}
            edge={edge}
            trigger={trigger}
            intensity={intensityValue}
            spread={Number(spread)}
            duration={Number(duration)}
            color={colorValue}
            isPaused={isPaused === "true"}
            isDisabled={isDisabled === "true"}
            className="flicker-demo__host"
          >
            <span className={variant === "text" ? "flicker-demo__copy" : "flicker-demo__target"}>
              {label}
            </span>
          </Flicker>
        </FlickerTile>
      </DemoBlock>
    </DocsSection>
  );
}
