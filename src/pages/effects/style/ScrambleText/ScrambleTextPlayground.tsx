import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { ScrambleText } from "@gem-org/gemffects/scramble-text";
import { isIntensityToken } from "@gem-org/gemffects/tokens";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { ScrambleTile } from "./examples/ScrambleTile.tsx";
import { SCRAMBLE_CHARSETS, SCRAMBLE_TRIGGERS, SCRAMBLE_VARIANTS } from "./examples/demo.ts";

const BOOLEAN_OPTIONS = ["true", "false"] as const;
const INTENSITY_OPTIONS = ["sm", "md", "lg", "0.2", "0.62", "0.95"] as const;
const DURATION_OPTIONS = ["400", "900", "2000"] as const;
const HOLD_OPTIONS = ["600", "1200", "2400"] as const;
const CHARSET_OPTIONS = Object.keys(SCRAMBLE_CHARSETS) as (keyof typeof SCRAMBLE_CHARSETS)[];

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function ScrambleTextPlayground() {
  const { t } = useTranslation("scrambleText");
  const [variant, setVariant] = useState<(typeof SCRAMBLE_VARIANTS)[number]>("loop");
  const [trigger, setTrigger] = useState<(typeof SCRAMBLE_TRIGGERS)[number]>("always");
  const [charset, setCharset] = useState<(typeof CHARSET_OPTIONS)[number]>("default");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [duration, setDuration] = useState<(typeof DURATION_OPTIONS)[number]>("900");
  const [hold, setHold] = useState<(typeof HOLD_OPTIONS)[number]>("1200");
  const [isPaused, setIsPaused] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const intensityValue = isIntensityToken(intensity) ? intensity : Number(intensity);
  const charsetValue = SCRAMBLE_CHARSETS[charset];
  const text = t("playground.text");

  const attrs = [
    `text="${text}"`,
    variant !== "decode" && `variant="${variant}"`,
    trigger !== "always" && `trigger="${trigger}"`,
    charsetValue != null && `charset="${charsetValue.replace(/\\/g, "\\\\")}"`,
    intensity !== "md" &&
      (isIntensityToken(intensity) ? `intensity="${intensity}"` : `intensity={${intensity}}`),
    duration !== "900" && `duration={${duration}}`,
    variant === "loop" && hold !== "1200" && `hold={${hold}}`,
    isPaused === "true" && "isPaused",
    isDisabled === "true" && "isDisabled",
  ].filter(Boolean);

  const code = `import { ScrambleText } from "@gem-org/gemffects/scramble-text";

<ScrambleText
  ${attrs.join("\n  ")}
/>`;

  const selects = [
    {
      id: "variant",
      value: variant,
      options: SCRAMBLE_VARIANTS,
      onChange: pick(SCRAMBLE_VARIANTS, setVariant),
    },
    {
      id: "trigger",
      value: trigger,
      options: SCRAMBLE_TRIGGERS,
      onChange: pick(SCRAMBLE_TRIGGERS, setTrigger),
    },
    {
      id: "charset",
      value: charset,
      options: CHARSET_OPTIONS,
      onChange: pick(CHARSET_OPTIONS, setCharset),
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
    { id: "hold", value: hold, options: HOLD_OPTIONS, onChange: pick(HOLD_OPTIONS, setHold) },
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
      <div className="scramble-text-playground">
        {selects.map((select) => (
          <div key={select.id} className="scramble-text-playground__field">
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
        <ScrambleTile>
          <ScrambleText
            text={text}
            variant={variant}
            trigger={trigger}
            charset={charsetValue}
            intensity={intensityValue}
            duration={Number(duration)}
            hold={Number(hold)}
            isPaused={isPaused === "true"}
            isDisabled={isDisabled === "true"}
            className="scramble-demo__copy"
          />
        </ScrambleTile>
      </DemoBlock>
    </DocsSection>
  );
}
