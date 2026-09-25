import { useState, type FormEvent } from "react";
import { Button, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { radius, type RadiusToken } from "@gem-org/gem-system/tokens";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { radiusOrder, radiusValueLabel } from "./radiusTokens.ts";

const options = radiusOrder.map((token) => ({ value: token, label: token }));

export function RadiusPlayground() {
  const { t } = useTranslation("radii");
  const [selected, setSelected] = useState<RadiusToken>("md");
  const [applied, setApplied] = useState<RadiusToken>("none");

  const handleChange = (value: SelectValue) => {
    if (typeof value === "string") setSelected(value as RadiusToken);
  };

  const handleApply = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setApplied(selected);
  };

  const code = `import { useState } from "react";
import { Button, Select } from "@gem-org/gem-system";
import { radius, type RadiusToken } from "@gem-org/gem-system/tokens";

const options = (Object.keys(radius) as RadiusToken[]).map((token) => ({
  value: token,
  label: token,
}));

export function RadiusPlayground() {
  const [selected, setSelected] = useState<RadiusToken>("md");
  const [applied, setApplied] = useState<RadiusToken>("none");

  return (
    <>
      <Select
        aria-label=${JSON.stringify(t("playground.label"))}
        options={options}
        value={selected}
        onChange={(value) => setSelected(value as RadiusToken)}
      />
      <Button variant="primary" onClick={() => setApplied(selected)}>
        {${JSON.stringify(t("playground.apply"))}}
      </Button>

      <div style={{ borderRadius: radius[applied] }}>
        {\`radius.\${applied}\`}
      </div>
    </>
  );
}`;

  return (
    <DocsSection
      title={t("playground.title")}
      description={t("playground.description")}
    >
      <DemoBlock stack code={code} label="RadiusPlayground.tsx">
        <div className="radii-playground">
          <form className="radii-playground__controls" onSubmit={handleApply}>
            <div className="radii-playground__field">
              <Typography variant="label">{t("playground.label")}</Typography>
              <Select
                aria-label={t("playground.label")}
                options={options}
                value={selected}
                onChange={handleChange}
                searchable={false}
              />
            </div>
            <Button type="submit" variant="primary">
              {t("playground.apply")}
            </Button>
          </form>

          <div className="radii-playground__stage">
            <div
              className="radii-playground__surface"
              style={{ borderRadius: radius[applied] }}
              aria-live="polite"
            >
              <Typography variant="h5">radius.{applied}</Typography>
              <code className="radii-playground__value">{radiusValueLabel(applied)}</code>
            </div>
            <div
              className="radii-playground__chip"
              style={{ borderRadius: radius[applied] }}
              aria-hidden
            />
          </div>
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
