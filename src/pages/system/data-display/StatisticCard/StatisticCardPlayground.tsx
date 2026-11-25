import { useState } from "react";
import { Select, StatisticCard, Typography, type SelectValue } from "@gem-org/gem-system";
import { Users } from "@gem-org/gem-system/icons";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import {
  STATISTIC_CARD_LAYOUTS,
  STATISTIC_CARD_RADII,
  STATISTIC_CARD_SHADOWS,
  STATISTIC_CARD_SIZES,
  STATISTIC_CARD_TONES,
  STATISTIC_CARD_TRENDS,
  type MetricCopy,
  type Separators,
} from "./examples/demo.ts";
import "./examples/statistic-card-demo.css";

const booleanOptions = ["true", "false"] as const;
const trendOptions = ["none", ...STATISTIC_CARD_TRENDS] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function StatisticCardPlayground() {
  const { t } = useTranslation("statisticCard");
  const copy = t("playground.texts", { returnObjects: true }) as Required<MetricCopy>;
  const separators = t("common.separators", { returnObjects: true }) as Separators;
  const [tone, setTone] = useState<string>("primary");
  const [size, setSize] = useState<string>("md");
  const [layout, setLayout] = useState<string>("stacked");
  const [trend, setTrend] = useState<string>("up");
  const [trendInvert, setTrendInvert] = useState<string>("false");
  const [bordered, setBordered] = useState<string>("true");
  const [shadow, setShadow] = useState<string>("none");
  const [radius, setRadius] = useState<string>("md");
  const [rounded, setRounded] = useState<string>("false");
  const [withIcon, setWithIcon] = useState<string>("true");
  const [isLoading, setIsLoading] = useState<string>("false");

  const hasTrend = trend !== "none";

  const attrs = [
    `title="${copy.title}"`,
    "value={12840}",
    `groupSeparator="${separators.groupSeparator}"`,
    `description="${copy.description}"`,
    withIcon === "true" && "icon={<Users />}",
    hasTrend && `trend="${trend}"`,
    hasTrend && `trendValue="${copy.trendValue}"`,
    hasTrend && `trendLabel="${copy.trendLabel}"`,
    hasTrend && trendInvert === "true" && "trendInvert",
    tone !== "primary" && `tone="${tone}"`,
    size !== "md" && `size="${size}"`,
    layout !== "stacked" && `layout="${layout}"`,
    bordered === "false" && "bordered={false}",
    shadow !== "none" && `shadow="${shadow}"`,
    rounded === "true" ? "rounded" : radius !== "md" && `radius="${radius}"`,
    isLoading === "true" && "isLoading",
  ].filter(Boolean);

  const code = `import { StatisticCard } from "@gem-org/gem-system";
import { Users } from "@gem-org/gem-system/icons";

<StatisticCard
  ${attrs.join("\n  ")}
/>`;

  const selects = [
    { id: "tone", value: tone, options: STATISTIC_CARD_TONES, onChange: pick(setTone) },
    { id: "size", value: size, options: STATISTIC_CARD_SIZES, onChange: pick(setSize) },
    { id: "layout", value: layout, options: STATISTIC_CARD_LAYOUTS, onChange: pick(setLayout) },
    { id: "icon", value: withIcon, options: booleanOptions, onChange: pick(setWithIcon) },
    { id: "trend", value: trend, options: trendOptions, onChange: pick(setTrend) },
    {
      id: "trendInvert",
      value: trendInvert,
      options: booleanOptions,
      onChange: pick(setTrendInvert),
    },
    { id: "bordered", value: bordered, options: booleanOptions, onChange: pick(setBordered) },
    { id: "shadow", value: shadow, options: STATISTIC_CARD_SHADOWS, onChange: pick(setShadow) },
    { id: "radius", value: radius, options: STATISTIC_CARD_RADII, onChange: pick(setRadius) },
    { id: "rounded", value: rounded, options: booleanOptions, onChange: pick(setRounded) },
    { id: "isLoading", value: isLoading, options: booleanOptions, onChange: pick(setIsLoading) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="statistic-card-playground">
        {selects.map((select) => (
          <div key={select.id} className="statistic-card-playground__field">
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
        <div className="statistic-card-demo">
          <StatisticCard
            title={copy.title}
            value={12840}
            groupSeparator={separators.groupSeparator}
            description={copy.description}
            icon={withIcon === "true" ? <Users /> : undefined}
            trend={hasTrend ? (trend as (typeof STATISTIC_CARD_TRENDS)[number]) : undefined}
            trendValue={hasTrend ? copy.trendValue : undefined}
            trendLabel={hasTrend ? copy.trendLabel : undefined}
            trendInvert={trendInvert === "true"}
            tone={tone as (typeof STATISTIC_CARD_TONES)[number]}
            size={size as (typeof STATISTIC_CARD_SIZES)[number]}
            layout={layout as (typeof STATISTIC_CARD_LAYOUTS)[number]}
            bordered={bordered === "true"}
            shadow={shadow as (typeof STATISTIC_CARD_SHADOWS)[number]}
            radius={radius as (typeof STATISTIC_CARD_RADII)[number]}
            rounded={rounded === "true"}
            isLoading={isLoading === "true"}
          />
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
