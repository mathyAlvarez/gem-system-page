import { useState } from "react";
import { BlockUi, Button, Select, Spinner, Typography, type SelectValue } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { useTimedBlock } from "./examples/demo.ts";

const overlays = {
  default: undefined,
  primary: "var(--gem-color-primary-600)",
  dark: "var(--gem-palette-neutral-900)",
} as const;

const overlayOptions = Object.keys(overlays);
const opacityOptions = ["20", "40", "56", "80", "100"] as const;
const contentOptions = ["spinner", "label"] as const;
const durationOptions = ["1500", "2500", "4000"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function BlockUiPlayground() {
  const { t } = useTranslation("blockUi");
  const texts = t("demo", { returnObjects: true });
  const { blocking, blockFor } = useTimedBlock();
  const [overlay, setOverlay] = useState<string>("default");
  const [opacity, setOpacity] = useState<string>("56");
  const [content, setContent] = useState<string>("spinner");
  const [duration, setDuration] = useState<string>("2500");

  const overlayValue = overlays[overlay as keyof typeof overlays];
  const withLabel = content === "label";

  const attrs = [
    "blocking={blocking}",
    overlayValue && `overlay="${overlayValue}"`,
    opacity !== "56" && `opacity={${opacity}}`,
    `aria-label="${texts.loading}"`,
  ].filter(Boolean);

  const overlayJsx = withLabel
    ? `<BlockUi
        ${attrs.join("\n        ")}
      >
        <Spinner size="2xl" label="${texts.loading}" labelPlacement="bottom" />
      </BlockUi>`
    : `<BlockUi
        ${attrs.join("\n        ")}
      />`;

  const code = `import { useState } from "react";
import { BlockUi, Button${withLabel ? ", Spinner" : ""} } from "@gem-org/gem-system";

export function Example() {
  const [blocking, setBlocking] = useState(false);

  function block() {
    setBlocking(true);
    window.setTimeout(() => setBlocking(false), ${duration});
  }

  return (
    <>
      <Button onClick={block}>${texts.block}</Button>
      ${overlayJsx}
    </>
  );
}`;

  const selects = [
    { id: "overlay", value: overlay, options: overlayOptions, onChange: pick(setOverlay) },
    { id: "opacity", value: opacity, options: opacityOptions, onChange: pick(setOpacity) },
    { id: "content", value: content, options: contentOptions, onChange: pick(setContent) },
    { id: "duration", value: duration, options: durationOptions, onChange: pick(setDuration) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="block-ui-playground">
        {selects.map((select) => (
          <div key={select.id} className="block-ui-playground__field">
            <Typography variant="label">{t(`playground.${select.id}`)}</Typography>
            <Select
              aria-label={t(`playground.${select.id}`)}
              options={toOptions(select.options)}
              value={select.value}
              onChange={select.onChange}
              searchable={false}
            />
          </div>
        ))}
      </div>

      <DemoBlock code={code} label="Example.tsx">
        <Button onClick={() => blockFor(Number(duration))}>{texts.block}</Button>
        <BlockUi blocking={blocking} overlay={overlayValue} opacity={Number(opacity)} aria-label={texts.loading}>
          {withLabel ? <Spinner size="2xl" label={texts.loading} labelPlacement="bottom" /> : null}
        </BlockUi>
      </DemoBlock>
    </DocsSection>
  );
}
