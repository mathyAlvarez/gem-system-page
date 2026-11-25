import { useState } from "react";
import { Slider, type SliderValue } from "@gem-org/gem-system";
import { intensityCssValue, intensityUnit, mixIntensity } from "@gem-org/gemffects/tokens";
import { useTranslation } from "react-i18next";
import { IntensitySwatch } from "./IntensitySwatch.tsx";
import { blurMap } from "./intensityTokens.ts";

const formatUnit = (value: number) => value.toFixed(2);

export function IntensityTester() {
  const { t } = useTranslation("intensity");
  const [unit, setUnit] = useState(0.7);

  const handleChange = (value: SliderValue) => {
    if (typeof value === "number") setUnit(value);
  };

  const mix = intensityCssValue(unit);
  const blur = mixIntensity(blurMap, unit);

  return (
    <div className="intensity-tester">
      <div className="intensity-tester__controls">
        <Slider
          label={t("tester.label")}
          min={0}
          max={1}
          step={0.01}
          value={unit}
          onChange={handleChange}
          formatValue={formatUnit}
        />
        <dl className="intensity-tester__readout" aria-live="polite">
          <dt>intensityUnit</dt>
          <dd>{formatUnit(intensityUnit(unit))}</dd>
          <dt>intensityCssValue</dt>
          <dd>{mix}</dd>
          <dt>mixIntensity</dt>
          <dd>{`${Number(blur.toFixed(2))}px`}</dd>
        </dl>
      </div>
      <IntensitySwatch mix={mix} label={t("tester.preview")} value={mix} />
    </div>
  );
}
