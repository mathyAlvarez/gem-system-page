import { Alert, Button, Typography } from "@gem-org/gem-system";
import { Glow } from "@gem-org/gemffects";
import { Trans, useTranslation } from "react-i18next";
import {
  CodeBlock,
  DemoBlock,
  DocsPageHeader,
  DocsSection,
} from "../../components/DocsPrimitives.tsx";
import { propText } from "../../components/PropText.tsx";

const installCode = "npm install @gem-org/gemffects";

const fullImportCode = `// main.tsx
import "@gem-org/gemffects/styles.css";
import { BorderBeam, Glow, Ripple } from "@gem-org/gemffects";`;

const asChildCode = `import { Ripple } from "@gem-org/gemffects/ripple";

<Ripple asChild>
  <button type="button">Save</button>
</Ripple>`;

const noteKeys = ["tokens", "particles", "aliases", "single"] as const;
const a11yKeys = ["reducedMotion", "decorative", "touchPointer", "touchGesture"] as const;

const codeComponents = { code: <code /> };

export function GettingStartedPage() {
  const { t } = useTranslation("effectsGettingStarted");

  const usageCode = `import { Button } from "@gem-org/gem-system";
import { Glow } from "@gem-org/gemffects";

<Glow>
  <Button>${t("usage.save")}</Button>
</Glow>`;

  const partialImportCode = `// main.tsx
import "@gem-org/gemffects/tokens.css";
import "@gem-org/gemffects/border-beam.css";
import "@gem-org/gemffects/particles.css"; // ${t("code.particles")}

// ${t("code.anyEffect")}
import { BorderBeam } from "@gem-org/gemffects/border-beam";`;

  const tokensCode = `import { duration, easing, intensity, mixIntensity } from "@gem-org/gemffects/tokens";

// ${t("code.cssVariables")}
// --gemfx-duration-normal, --gemfx-easing-standard, --gemfx-intensity-md…`;

  return (
    <div className="docs-page">
      <DocsPageHeader title={t("header.title")} description={t("header.description")} />

      <Alert status="info" title={t("peers.title")}>
        {t("peers.body")}
      </Alert>

      <DocsSection title={t("install.title")}>
        <CodeBlock code={installCode} label="npm" language="shell" />
      </DocsSection>

      <DocsSection title={t("usage.title")} description={t("usage.description")}>
        <DemoBlock code={usageCode} label="SaveAction.tsx">
          <Glow>
            <Button>{t("usage.save")}</Button>
          </Glow>
        </DemoBlock>
      </DocsSection>

      <DocsSection title={t("bootstrap.title")} description={t("bootstrap.description")}>
        <CodeBlock code={fullImportCode} label={t("bootstrap.fullLabel")} />

        <Typography variant="h5">{t("bootstrap.partial.title")}</Typography>
        <Typography variant="body" className="docs-page__meta">
          <Trans t={t} i18nKey="bootstrap.partial.description" components={codeComponents} />
        </Typography>
        <CodeBlock code={partialImportCode} label={t("bootstrap.partial.label")} />
        <Typography variant="body" className="docs-page__meta">
          {t("bootstrap.partial.notesTitle")}
        </Typography>
        <ul className="docs-page__meta">
          {noteKeys.map((key) => (
            <li key={key}>
              <Trans t={t} i18nKey={`bootstrap.partial.notes.${key}`} components={codeComponents} />
            </li>
          ))}
        </ul>
      </DocsSection>

      <DocsSection title={t("asChild.title")} description={t("asChild.description")}>
        <CodeBlock code={asChildCode} label="SaveRipple.tsx" />
      </DocsSection>

      <DocsSection title={t("tokens.title")} description={t("tokens.description")}>
        <CodeBlock code={tokensCode} label="tokens.ts" />
        <Typography variant="body" className="docs-page__meta">
          {propText(t("tokens.intensity"))}
        </Typography>
      </DocsSection>

      <DocsSection title={t("a11y.title")} description={t("a11y.description")}>
        <ul className="docs-page__meta">
          {a11yKeys.map((key) => (
            <li key={key}>
              <Trans t={t} i18nKey={`a11y.items.${key}`} components={codeComponents} />
            </li>
          ))}
        </ul>
      </DocsSection>
    </div>
  );
}
