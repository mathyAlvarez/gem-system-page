import { useState, type FormEvent } from "react";
import { Button, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { elevation, type ElevationToken } from "@gem-org/gem-system/tokens";
import { Trans, useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { elevationOrder, elevationShadowToken } from "./shadowTokens.ts";

const options = elevationOrder.map((token) => ({ value: token, label: token }));

export function ElevationPlayground() {
  const { t } = useTranslation("shadows");
  const [selected, setSelected] = useState<ElevationToken>("card");
  const [applied, setApplied] = useState<ElevationToken>("flat");

  const level = elevation[applied];
  const shadowStep = elevationShadowToken(applied);

  const handleChange = (value: SelectValue) => {
    if (typeof value === "string") setSelected(value as ElevationToken);
  };

  const handleApply = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setApplied(selected);
  };

  const code = `import { useState } from "react";
import { Button, Select } from "@gem-org/gem-system";
import { elevation, type ElevationToken } from "@gem-org/gem-system/tokens";

const options = (Object.keys(elevation) as ElevationToken[]).map((token) => ({
  value: token,
  label: token,
}));

export function ElevationPlayground() {
  const [selected, setSelected] = useState<ElevationToken>("card");
  const [applied, setApplied] = useState<ElevationToken>("flat");
  const level = elevation[applied];

  return (
    <>
      <Select
        aria-label=${JSON.stringify(t("playground.label"))}
        options={options}
        value={selected}
        onChange={(value) => setSelected(value as ElevationToken)}
      />
      <Button variant="primary" onClick={() => setApplied(selected)}>
        {${JSON.stringify(t("playground.apply"))}}
      </Button>

      <div style={{ boxShadow: level.shadow, zIndex: level.zIndex }}>
        {\`elevation.\${applied}\`}
      </div>
    </>
  );
}`;

  return (
    <DocsSection title={t("playground.title")}>
      <Typography variant="body" className="docs-page__meta">
        <Trans
          t={t}
          i18nKey="playground.description"
          components={{ strong: <strong />, code: <code /> }}
        />
      </Typography>
      <DemoBlock stack code={code} label="ElevationPlayground.tsx">
        <div className="shadows-playground">
          <form className="shadows-playground__controls" onSubmit={handleApply}>
            <div className="shadows-playground__field">
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

          <div className="shadows-playground__stage">
            <div
              className="shadows-playground__surface"
              style={{
                boxShadow: `var(--gem-shadow-${shadowStep})`,
                zIndex: level.zIndex,
              }}
              aria-live="polite"
            >
              <Typography variant="h5">elevation.{applied}</Typography>
              <code className="shadows-playground__value">
                shadow.{shadowStep} · z-index {level.zIndex}
              </code>
            </div>
          </div>
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
