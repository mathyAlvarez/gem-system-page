import { useMemo, useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { FlipList } from "@gem-org/gemsitions/flip-list";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import {
  FLIP_LIST_AXES,
  FLIP_LIST_DELAYS,
  FLIP_LIST_DISTANCES,
  FLIP_LIST_DURATIONS,
  FLIP_LIST_EASINGS,
  FLIP_LIST_STAGGER_DELAYS,
  FLIP_LIST_TILES,
  applyFlipFilter,
  listNames,
  namesBeforeM,
  namesFromM,
  shuffleLabels,
  type FlipListFilterId,
} from "./examples/demo.ts";
import { FlipControls } from "./examples/FlipControls.tsx";
import "./examples/flip-list-demo.css";

const BOOLEAN_OPTIONS = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function FlipListPlayground() {
  const { t } = useTranslation("flipList");
  const [order, setOrder] = useState<string[]>(() => [...FLIP_LIST_TILES]);
  const [filter, setFilter] = useState<FlipListFilterId>("all");
  const [axis, setAxis] = useState<(typeof FLIP_LIST_AXES)[number]>("both");
  const [duration, setDuration] = useState<(typeof FLIP_LIST_DURATIONS)[number]>("300");
  const [delay, setDelay] = useState<(typeof FLIP_LIST_DELAYS)[number]>("0");
  const [staggerDelay, setStaggerDelay] = useState<(typeof FLIP_LIST_STAGGER_DELAYS)[number]>("0");
  const [distance, setDistance] = useState<(typeof FLIP_LIST_DISTANCES)[number]>("8");
  const [easing, setEasing] = useState<(typeof FLIP_LIST_EASINGS)[number]>("emphasized");
  const [maintainScroll, setMaintainScroll] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [unmountOnExit, setUnmountOnExit] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const visible = useMemo(() => applyFlipFilter(order, filter), [order, filter]);

  const attrs = [
    axis !== "both" && `axis="${axis}"`,
    duration !== "300" && `duration={${duration}}`,
    delay !== "0" && `delay={${delay}}`,
    staggerDelay !== "0" && `staggerDelay={${staggerDelay}}`,
    distance !== "8" && `distance={${distance}}`,
    easing !== "emphasized" && `easing="${easing}"`,
    maintainScroll === "true" && "maintainScroll",
    isDisabled === "true" && "isDisabled",
    unmountOnExit === "true" && "unmountOnExit",
  ].filter(Boolean);

  const code = `import { FlipList } from "@gem-org/gemsitions/flip-list";

<FlipList
  ${attrs.length > 0 ? `${attrs.join("\n  ")}\n  ` : ""}className="flip-list-demo__list"
>
  {items.map((label) => (
    <div key={label}>{label}</div>
  ))}
</FlipList>`;

  const selects = [
    { id: "axis", value: axis, options: FLIP_LIST_AXES, onChange: pick(FLIP_LIST_AXES, setAxis) },
    {
      id: "duration",
      value: duration,
      options: FLIP_LIST_DURATIONS,
      onChange: pick(FLIP_LIST_DURATIONS, setDuration),
    },
    {
      id: "delay",
      value: delay,
      options: FLIP_LIST_DELAYS,
      onChange: pick(FLIP_LIST_DELAYS, setDelay),
    },
    {
      id: "staggerDelay",
      value: staggerDelay,
      options: FLIP_LIST_STAGGER_DELAYS,
      onChange: pick(FLIP_LIST_STAGGER_DELAYS, setStaggerDelay),
    },
    {
      id: "distance",
      value: distance,
      options: FLIP_LIST_DISTANCES,
      onChange: pick(FLIP_LIST_DISTANCES, setDistance),
    },
    {
      id: "easing",
      value: easing,
      options: FLIP_LIST_EASINGS,
      onChange: pick(FLIP_LIST_EASINGS, setEasing),
    },
    {
      id: "maintainScroll",
      value: maintainScroll,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setMaintainScroll),
    },
    {
      id: "unmountOnExit",
      value: unmountOnExit,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setUnmountOnExit),
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
      <div className="flip-list-playground">
        {selects.map((select) => (
          <div key={select.id} className="flip-list-playground__field">
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

      <DemoBlock code={code} label="Example.tsx" stack>
        <div className="flip-list-demo">
          <FlipControls
            shuffle={t("playground.shuffle")}
            reverse={t("playground.reverse")}
            all={t("playground.all")}
            early={t("playground.early")}
            late={t("playground.late")}
            filter={filter}
            earlyTitle={listNames(namesBeforeM(FLIP_LIST_TILES))}
            lateTitle={listNames(namesFromM(FLIP_LIST_TILES))}
            onShuffle={() => setOrder((value) => shuffleLabels(value))}
            onReverse={() => setOrder((value) => [...value].reverse())}
            onFilter={setFilter}
          />
          <FlipList
            className="flip-list-demo__list"
            axis={axis}
            duration={Number(duration)}
            delay={Number(delay)}
            staggerDelay={Number(staggerDelay)}
            distance={Number(distance)}
            easing={easing}
            maintainScroll={maintainScroll === "true"}
            isDisabled={isDisabled === "true"}
            unmountOnExit={unmountOnExit === "true"}
          >
            {visible.map((label) => (
              <div key={label} className="flip-list-demo__tile">
                {label}
              </div>
            ))}
          </FlipList>
          <p className="flip-list-demo__sibling">{t("playground.sibling")}</p>
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
