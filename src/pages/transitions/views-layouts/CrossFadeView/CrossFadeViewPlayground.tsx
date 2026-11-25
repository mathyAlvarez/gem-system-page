import { useState } from "react";
import { Button, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { CrossFadeView } from "@gem-org/gemsitions/cross-fade-view";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import {
  CROSS_FADE_DELAYS,
  CROSS_FADE_DURATIONS,
  CROSS_FADE_EASINGS,
  CROSS_FADE_MODES,
  CROSS_FADE_PAGINATION,
  CROSS_FADE_TABS,
  type CrossFadeTab,
} from "./examples/demo.ts";
import "./examples/cross-fade-view-demo.css";

const BOOLEAN_OPTIONS = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function CrossFadeViewPlayground() {
  const { t } = useTranslation("crossFadeView");
  const [isSecond, setIsSecond] = useState(false);
  const [page, setPage] = useState(0);
  const [mode, setMode] = useState<(typeof CROSS_FADE_MODES)[number]>("sync");
  const [keepState, setKeepState] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [duration, setDuration] = useState<(typeof CROSS_FADE_DURATIONS)[number]>("300");
  const [delay, setDelay] = useState<(typeof CROSS_FADE_DELAYS)[number]>("0");
  const [easing, setEasing] = useState<(typeof CROSS_FADE_EASINGS)[number]>("standard");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [pagination, setPagination] = useState<(typeof CROSS_FADE_PAGINATION)[number]>("2");
  const [swipe, setSwipe] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const isMulti = pagination === "3";
  const tab = CROSS_FADE_TABS[page] ?? CROSS_FADE_TABS[0];
  const lastPage = CROSS_FADE_TABS.length - 1;

  const paginationProp =
    pagination === "none"
      ? undefined
      : pagination === "inside-end" || pagination === "inside-start"
        ? { count: 2, placement: pagination }
        : Number(pagination);

  const sharedAttrs = [
    mode !== "sync" && `mode="${mode}"`,
    keepState === "true" && "keepState",
    duration !== "300" && `duration={${duration}}`,
    delay !== "0" && `delay={${delay}}`,
    easing !== "standard" && `easing="${easing}"`,
    isDisabled === "true" && "isDisabled",
    swipe === "true" && "swipe",
  ].filter(Boolean);

  const attrs = isMulti
    ? [
        `viewKey="${tab}"`,
        "pagination={3}",
        `paginationIndex={${page}}`,
        "onPagination={(page) => setPage(page)}",
        ...sharedAttrs,
      ]
    : [
        `isSecond={${isSecond}}`,
        pagination === "2" && "pagination={2}",
        pagination === "inside-end" && 'pagination={{ count: 2, placement: "inside-end" }}',
        pagination === "inside-start" && 'pagination={{ count: 2, placement: "inside-start" }}',
        ...sharedAttrs,
      ].filter(Boolean);

  const code = isMulti
    ? `import { CrossFadeView } from "@gem-org/gemsitions/cross-fade-view";

<CrossFadeView
  ${attrs.join("\n  ")}
>
  …
</CrossFadeView>`
    : `import { CrossFadeView } from "@gem-org/gemsitions/cross-fade-view";

<CrossFadeView
  ${attrs.join("\n  ")}
  first={…}
  second={…}
/>`;

  const selects = [
    {
      id: "mode",
      value: mode,
      options: CROSS_FADE_MODES,
      onChange: pick(CROSS_FADE_MODES, setMode),
    },
    {
      id: "keepState",
      value: keepState,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setKeepState),
    },
    {
      id: "duration",
      value: duration,
      options: CROSS_FADE_DURATIONS,
      onChange: pick(CROSS_FADE_DURATIONS, setDuration),
    },
    {
      id: "delay",
      value: delay,
      options: CROSS_FADE_DELAYS,
      onChange: pick(CROSS_FADE_DELAYS, setDelay),
    },
    {
      id: "easing",
      value: easing,
      options: CROSS_FADE_EASINGS,
      onChange: pick(CROSS_FADE_EASINGS, setEasing),
    },
    {
      id: "pagination",
      value: pagination,
      options: CROSS_FADE_PAGINATION,
      onChange: (value: SelectValue) => {
        pick(CROSS_FADE_PAGINATION, setPagination)(value);
        setPage(0);
        setIsSecond(false);
      },
    },
    {
      id: "swipe",
      value: swipe,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setSwipe),
    },
    {
      id: "isDisabled",
      value: isDisabled,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setIsDisabled),
    },
  ];

  const panelClass =
    pagination === "inside-end"
      ? "cross-fade-demo__panel cross-fade-demo__panel--overlay"
      : pagination === "inside-start"
        ? "cross-fade-demo__panel cross-fade-demo__panel--overlay-start"
        : "cross-fade-demo__panel";

  const goBack = () => setPage((current) => Math.max(0, current - 1));
  const goNext = () => setPage((current) => Math.min(lastPage, current + 1));

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="cross-fade-view-playground">
        {selects.map((select) => (
          <div key={select.id} className="cross-fade-view-playground__field">
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
        <div className="cross-fade-demo">
          <div className="cross-fade-demo__controls">
            {isMulti ? (
              <>
                <Button size="sm" variant="secondary" disabled={page === 0} onClick={goBack}>
                  {t("playground.back")}
                </Button>
                <Button size="sm" variant="secondary" disabled={page === lastPage} onClick={goNext}>
                  {t("playground.next")}
                </Button>
              </>
            ) : (
              <>
                <Button
                  size="sm"
                  variant="secondary"
                  aria-pressed={!isSecond}
                  onClick={() => setIsSecond(false)}
                >
                  {t("playground.first")}
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  aria-pressed={isSecond}
                  onClick={() => setIsSecond(true)}
                >
                  {t("playground.second")}
                </Button>
              </>
            )}
          </div>
          {isMulti ? (
            <CrossFadeView
              viewKey={tab}
              mode={mode}
              keepState={keepState === "true"}
              duration={Number(duration)}
              delay={Number(delay)}
              easing={easing}
              isDisabled={isDisabled === "true"}
              pagination={3}
              paginationIndex={page}
              swipe={swipe === "true"}
              onPagination={setPage}
            >
              <div className={panelClass}>
                {tab}
                <span className="cross-fade-demo__copy">
                  {t("playground.pageCopy").replace("{tab}", tab as CrossFadeTab)}
                </span>
              </div>
            </CrossFadeView>
          ) : (
            <CrossFadeView
              isSecond={isSecond}
              mode={mode}
              keepState={keepState === "true"}
              duration={Number(duration)}
              delay={Number(delay)}
              easing={easing}
              isDisabled={isDisabled === "true"}
              pagination={paginationProp}
              swipe={swipe === "true"}
              onPagination={(index) => setIsSecond(index >= 1)}
              first={
                <div className={panelClass}>
                  {t("playground.firstLabel")}
                  <span className="cross-fade-demo__copy">{t("playground.firstCopy")}</span>
                </div>
              }
              second={
                <div className={panelClass}>
                  {t("playground.secondLabel")}
                  <span className="cross-fade-demo__copy">{t("playground.secondCopy")}</span>
                </div>
              }
            />
          )}
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
