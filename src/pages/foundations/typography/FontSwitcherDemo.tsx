import { useState } from "react";
import { Button, Typography } from "@gem-org/gem-system";
import { fontFamily } from "@gem-org/gem-system/tokens";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";

type FamilyKey = keyof typeof fontFamily;

const familyKeys = Object.keys(fontFamily) as FamilyKey[];

const CHARSET = [
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "abcdefghijklmnopqrstuvwxyz",
  "0123456789 — ¿¡áéíóúñ!",
];

function familyLabel(key: FamilyKey) {
  const typeface = fontFamily[key].split(",")[0].replace(/["']/g, "").trim();
  return `${key.charAt(0).toUpperCase()}${key.slice(1)} · ${typeface}`;
}

export function FontSwitcherDemo() {
  const { t } = useTranslation("typography");
  const [active, setActive] = useState<FamilyKey>("sans");
  const sample = t("tokens.sample");

  const code = `import { useState } from "react";
import { Button, Typography } from "@gem-org/gem-system";
import { fontFamily } from "@gem-org/gem-system/tokens";

type FamilyKey = keyof typeof fontFamily;

const families = Object.keys(fontFamily) as FamilyKey[];

export function FontSwitcher() {
  const [active, setActive] = useState<FamilyKey>("sans");

  return (
    <>
      <div style={{ display: "flex", gap: "0.75rem" }}>
        {families.map((key) => (
          <Button
            key={key}
            size="sm"
            variant={key === active ? "primary" : "secondary"}
            aria-pressed={key === active}
            onClick={() => setActive(key)}
          >
            {key}
          </Button>
        ))}
      </div>

      <p style={{ fontFamily: \`var(--gem-font-\${active})\` }}>
        {${JSON.stringify(sample)}}
      </p>
      <Typography variant="code">{fontFamily[active]}</Typography>
    </>
  );
}`;

  return (
    <DocsSection
      title={t("tokens.switcher.title")}
      description={t("tokens.switcher.description", { family: active })}
    >
      <DemoBlock stack code={code} label="FontSwitcher.tsx">
        <div className="font-switcher">
          <div className="font-switcher__options" role="group" aria-label={t("tokens.switcher.title")}>
            {familyKeys.map((key) => (
              <Button
                key={key}
                size="sm"
                variant={key === active ? "primary" : "secondary"}
                aria-pressed={key === active}
                onClick={() => setActive(key)}
              >
                {familyLabel(key)}
              </Button>
            ))}
          </div>

          <div
            className="font-switcher__preview"
            style={{ fontFamily: `var(--gem-font-${active})` }}
            aria-live="polite"
          >
            <Typography variant="caption" className="font-switcher__eyebrow">
              {t("tokens.switcher.active")}
            </Typography>
            <p className="font-switcher__title">{familyLabel(active)}</p>
            <p className="font-switcher__sample">{sample}</p>
            <div className="font-switcher__charset">
              {CHARSET.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
            <Typography variant="caption" className="font-switcher__value">
              {fontFamily[active]}
            </Typography>
          </div>
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
