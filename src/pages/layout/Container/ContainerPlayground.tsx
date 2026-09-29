import { useState } from "react";
import {
  Container,
  Select,
  Switch,
  Typography,
  type ContainerAs,
  type ContainerSize,
  type SelectValue,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { ContainerDemoBox } from "./examples/ContainerDemoBox.tsx";
import { containerAsOptions, containerSizes } from "./containerDocs.ts";

const maxWidths = ["—", "720", "80%", "30rem"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

type Flags = {
  fluid: boolean;
  padded: boolean;
  centered: boolean;
};

const flagDefaults: Flags = { fluid: false, padded: true, centered: true };
const flagOrder = Object.keys(flagDefaults) as (keyof Flags)[];

const pick =
  <T extends string>(setter: (value: T) => void) =>
  (value: SelectValue) => {
    if (typeof value === "string") setter(value as T);
  };

export function ContainerPlayground() {
  const { t } = useTranslation("container");
  const [size, setSize] = useState<ContainerSize>("md");
  const [as, setAs] = useState<ContainerAs>("div");
  const [maxWidth, setMaxWidth] = useState<string>("—");
  const [flags, setFlags] = useState<Flags>(flagDefaults);

  const customMaxWidth = maxWidth === "—" ? undefined : maxWidth === "720" ? 720 : maxWidth;

  const attrs = [
    size !== "lg" && `size="${size}"`,
    as !== "div" && `as="${as}"`,
    typeof customMaxWidth === "number" && `maxWidth={${customMaxWidth}}`,
    typeof customMaxWidth === "string" && `maxWidth="${customMaxWidth}"`,
    flags.fluid && "fluid",
    !flags.padded && "padded={false}",
    !flags.centered && "centered={false}",
  ].filter(Boolean);

  const code = `import { Container } from "@gem-org/gem-system";

export function Example() {
  return (
    <Container${attrs.length ? `\n${attrs.map((attr) => `      ${attr}`).join("\n")}\n    ` : ""}>
      {/* ${t("playground.comment")} */}
    </Container>
  );
}`;

  const selects = [
    { id: "size", value: size, options: containerSizes, onChange: pick<ContainerSize>(setSize) },
    { id: "as", value: as, options: containerAsOptions, onChange: pick<ContainerAs>(setAs) },
    { id: "maxWidth", value: maxWidth, options: maxWidths, onChange: pick(setMaxWidth) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="container-playground">
        {selects.map((select) => (
          <div key={select.id} className="container-playground__field">
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
        <div className="container-playground__flags">
          {flagOrder.map((flag) => (
            <Switch
              key={flag}
              size="sm"
              label={t(`playground.${flag}`)}
              checked={flags[flag]}
              onChange={(event) => setFlags((current) => ({ ...current, [flag]: event.target.checked }))}
            />
          ))}
        </div>
      </div>

      <DemoBlock code={code} label="Example.tsx" stack>
        <div className="container-stage">
          <Container size={size} as={as} maxWidth={customMaxWidth} {...flags}>
            <ContainerDemoBox title={t("playground.boxTitle")} body={t("playground.boxBody")} />
          </Container>
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
