import { useState } from "react";
import {
  Flex,
  Select,
  Switch,
  Typography,
  type FlexDirection,
  type FlexWrap,
  type LayoutAlign,
  type LayoutJustify,
  type SelectValue,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { FlexItem } from "./examples/FlexItem.tsx";
import { flexAlignOptions, flexDirections, flexJustifyOptions } from "./flexDocs.ts";

const none = "—";
const justifyOptions = [none, ...flexJustifyOptions] as const;
const alignOptions = [none, ...flexAlignOptions] as const;
const gapOptions = [none, "1", "3", "6", "20", "2rem"] as const;
const wrapOptions = ["false", "true", "wrap-reverse"] as const;
const countOptions = ["3", "5", "8", "14"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

const toGap = (value: string) => (value === none ? undefined : /^\d+$/.test(value) ? Number(value) : value);

const toWrap = (value: string): FlexWrap => (value === "true" ? true : value === "false" ? false : "wrap-reverse");

export function FlexPlayground() {
  const { t } = useTranslation("flex");
  const [direction, setDirection] = useState<string>("row");
  const [justify, setJustify] = useState<string>(none);
  const [align, setAlign] = useState<string>("center");
  const [gap, setGap] = useState<string>("3");
  const [wrap, setWrap] = useState<string>("false");
  const [count, setCount] = useState("5");
  const [inline, setInline] = useState(false);

  const justifyValue = justify === none ? undefined : (justify as LayoutJustify);
  const alignValue = align === none ? undefined : (align as LayoutAlign);
  const gapValue = toGap(gap);
  const wrapValue = toWrap(wrap);

  const attrs = [
    direction !== "row" && `direction="${direction}"`,
    justifyValue && `justify="${justifyValue}"`,
    alignValue && `align="${alignValue}"`,
    typeof gapValue === "number" && `gap={${gapValue}}`,
    typeof gapValue === "string" && `gap="${gapValue}"`,
    wrapValue === true && "wrap",
    wrapValue === "wrap-reverse" && 'wrap="wrap-reverse"',
    inline && "inline",
  ].filter(Boolean);

  const code = `import { Flex } from "@gem-org/gem-system";

export function Example() {
  return (
    <Flex${attrs.length ? ` ${attrs.join(" ")}` : ""}>
      {items.map((item) => (
        <div key={item.id}>{item.label}</div>
      ))}
    </Flex>
  );
}`;

  const selects = [
    { id: "direction", value: direction, options: flexDirections, onChange: pick(setDirection) },
    { id: "justify", value: justify, options: justifyOptions, onChange: pick(setJustify) },
    { id: "align", value: align, options: alignOptions, onChange: pick(setAlign) },
    { id: "gap", value: gap, options: gapOptions, onChange: pick(setGap) },
    { id: "wrap", value: wrap, options: wrapOptions, onChange: pick(setWrap) },
    { id: "count", value: count, options: countOptions, onChange: pick(setCount) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="flex-playground">
        {selects.map((select) => (
          <div key={select.id} className="flex-playground__field">
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
        <div className="flex-playground__flags">
          <Switch
            size="sm"
            label={t("playground.inline")}
            checked={inline}
            onChange={(event) => setInline(event.target.checked)}
          />
        </div>
      </div>

      <DemoBlock code={code} label="Example.tsx" stack>
        <Flex
          direction={direction as FlexDirection}
          justify={justifyValue}
          align={alignValue}
          gap={gapValue}
          wrap={wrapValue}
          inline={inline}
          className="flex-frame flex-playground__stage"
        >
          {Array.from({ length: Number(count) }, (_, index) => (
            <FlexItem key={index} tall={index === 1} accent={index === 0}>
              {index + 1}
            </FlexItem>
          ))}
        </Flex>
      </DemoBlock>
    </DocsSection>
  );
}
