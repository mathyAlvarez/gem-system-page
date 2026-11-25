import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { Spotlight } from "@gem-org/gemffects/spotlight";
import { isIntensityToken } from "@gem-org/gemffects/tokens";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { SpotlightTile } from "./examples/SpotlightTile.tsx";
import { SPOTLIGHT_COLORS, SPOTLIGHT_TRIGGERS, SPOTLIGHT_VARIANTS } from "./examples/demo.ts";

const BOOLEAN_OPTIONS = ["true", "false"] as const;
const INTENSITY_OPTIONS = ["sm", "md", "lg", "0.2", "0.62", "0.95"] as const;
const SIZE_OPTIONS = ["auto", "80", "180", "280"] as const;
const DURATION_OPTIONS = ["0", "220", "600"] as const;
const COLOR_OPTIONS = ["default", "secondary", "tertiary"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function SpotlightPlayground() {
  const { t } = useTranslation("spotlight");
  const [variant, setVariant] = useState<(typeof SPOTLIGHT_VARIANTS)[number]>("reveal");
  const [trigger, setTrigger] = useState<(typeof SPOTLIGHT_TRIGGERS)[number]>("hover");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [size, setSize] = useState<(typeof SIZE_OPTIONS)[number]>("auto");
  const [duration, setDuration] = useState<(typeof DURATION_OPTIONS)[number]>("220");
  const [color, setColor] = useState<(typeof COLOR_OPTIONS)[number]>("default");
  const [isPaused, setIsPaused] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [disabledOnTouch, setDisabledOnTouch] = useState<(typeof BOOLEAN_OPTIONS)[number]>("true");

  const intensityValue = isIntensityToken(intensity) ? intensity : Number(intensity);
  const sizeValue = size === "auto" ? undefined : Number(size);
  const colorValue = color === "default" ? undefined : SPOTLIGHT_COLORS[color];

  const attrs = [
    variant !== "reveal" && `variant="${variant}"`,
    trigger !== "hover" && `trigger="${trigger}"`,
    intensity !== "md" &&
      (isIntensityToken(intensity) ? `intensity="${intensity}"` : `intensity={${intensity}}`),
    sizeValue !== undefined && `size={${sizeValue}}`,
    duration !== "220" && `duration={${duration}}`,
    colorValue && `color="${colorValue}"`,
    isPaused === "true" && "isPaused",
    isDisabled === "true" && "isDisabled",
    disabledOnTouch === "false" && "disabledOnTouch={false}",
  ].filter(Boolean);

  const opening = attrs.length > 0 ? `<Spotlight\n  ${attrs.join("\n  ")}\n>` : "<Spotlight>";
  const code = `import { Spotlight } from "@gem-org/gemffects/spotlight";

${opening}
  <div className="tile">${t("playground.target")}</div>
</Spotlight>`;

  const selects = [
    {
      id: "variant",
      value: variant,
      options: SPOTLIGHT_VARIANTS,
      onChange: pick(SPOTLIGHT_VARIANTS, setVariant),
    },
    {
      id: "trigger",
      value: trigger,
      options: SPOTLIGHT_TRIGGERS,
      onChange: pick(SPOTLIGHT_TRIGGERS, setTrigger),
    },
    {
      id: "intensity",
      value: intensity,
      options: INTENSITY_OPTIONS,
      onChange: pick(INTENSITY_OPTIONS, setIntensity),
    },
    { id: "size", value: size, options: SIZE_OPTIONS, onChange: pick(SIZE_OPTIONS, setSize) },
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
      <div className="spotlight-playground">
        {selects.map((select) => (
          <div key={select.id} className="spotlight-playground__field">
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
        <SpotlightTile>
          <Spotlight
            variant={variant}
            trigger={trigger}
            intensity={intensityValue}
            size={sizeValue}
            duration={Number(duration)}
            color={colorValue}
            isPaused={isPaused === "true"}
            isDisabled={isDisabled === "true"}
            disabledOnTouch={disabledOnTouch === "true"}
            className="spotlight-demo__host"
          >
            <div className="spotlight-demo__tile">
              <p className="spotlight-demo__kicker">{variant}</p>
              <p className="spotlight-demo__title">{t("playground.target")}</p>
            </div>
          </Spotlight>
        </SpotlightTile>
      </DemoBlock>
    </DocsSection>
  );
}
