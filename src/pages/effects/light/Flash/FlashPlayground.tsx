import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { Flash } from "@gem-org/gemffects/flash";
import { isIntensityToken } from "@gem-org/gemffects/tokens";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { FlashTile } from "./examples/FlashTile.tsx";
import { FLASH_COLORS, FLASH_ORIGINS, FLASH_TRIGGERS, FLASH_VARIANTS } from "./examples/demo.ts";

const BOOLEAN_OPTIONS = ["true", "false"] as const;
const INTENSITY_OPTIONS = ["sm", "md", "lg", "0.2", "0.62", "0.95"] as const;
const DURATION_OPTIONS = ["180", "320", "700"] as const;
const COLOR_OPTIONS = ["default", "primary", "tertiary"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function FlashPlayground() {
  const { t } = useTranslation("flash");
  const [variant, setVariant] = useState<(typeof FLASH_VARIANTS)[number]>("burst");
  const [trigger, setTrigger] = useState<(typeof FLASH_TRIGGERS)[number]>("click");
  const [origin, setOrigin] = useState<(typeof FLASH_ORIGINS)[number]>("center");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [duration, setDuration] = useState<(typeof DURATION_OPTIONS)[number]>("320");
  const [color, setColor] = useState<(typeof COLOR_OPTIONS)[number]>("default");
  const [isPaused, setIsPaused] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [disabledOnTouch, setDisabledOnTouch] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const intensityValue = isIntensityToken(intensity) ? intensity : Number(intensity);
  const colorValue = color === "default" ? undefined : FLASH_COLORS[color];

  const attrs = [
    variant !== "burst" && `variant="${variant}"`,
    trigger !== "click" && `trigger="${trigger}"`,
    origin !== "center" && `origin="${origin}"`,
    intensity !== "md" &&
      (isIntensityToken(intensity) ? `intensity="${intensity}"` : `intensity={${intensity}}`),
    duration !== "320" && `duration={${duration}}`,
    colorValue && `color="${colorValue}"`,
    isPaused === "true" && "isPaused",
    isDisabled === "true" && "isDisabled",
    disabledOnTouch === "true" && "disabledOnTouch",
  ].filter(Boolean);

  const opening = attrs.length > 0 ? `<Flash\n  ${attrs.join("\n  ")}\n>` : "<Flash>";
  const code = `import { Flash } from "@gem-org/gemffects/flash";

${opening}
  <span>${t("playground.target")}</span>
</Flash>`;

  const selects = [
    {
      id: "variant",
      value: variant,
      options: FLASH_VARIANTS,
      onChange: pick(FLASH_VARIANTS, setVariant),
    },
    {
      id: "trigger",
      value: trigger,
      options: FLASH_TRIGGERS,
      onChange: pick(FLASH_TRIGGERS, setTrigger),
    },
    {
      id: "origin",
      value: origin,
      options: FLASH_ORIGINS,
      onChange: pick(FLASH_ORIGINS, setOrigin),
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
    {
      id: "disabledOnTouch",
      value: disabledOnTouch,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setDisabledOnTouch),
    },
  ];

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="flash-playground">
        {selects.map((select) => (
          <div key={select.id} className="flash-playground__field">
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
        <FlashTile>
          <Flash
            variant={variant}
            trigger={trigger}
            origin={origin}
            intensity={intensityValue}
            duration={Number(duration)}
            color={colorValue}
            isPaused={isPaused === "true"}
            isDisabled={isDisabled === "true"}
            disabledOnTouch={disabledOnTouch === "true"}
            className="flash-demo__host"
          >
            <span className="flash-demo__target">{t("playground.target")}</span>
          </Flash>
        </FlashTile>
      </DemoBlock>
    </DocsSection>
  );
}
