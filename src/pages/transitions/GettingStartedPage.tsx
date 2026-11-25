import { useState } from "react";
import { Alert, Button, Card, Typography } from "@gem-org/gem-system";
import { SlideTransition } from "@gem-org/gemsitions";
import { Trans, useTranslation } from "react-i18next";
import {
  CodeBlock,
  DemoBlock,
  DocsPageHeader,
  DocsSection,
} from "../../components/DocsPrimitives.tsx";
import { propText } from "../../components/PropText.tsx";
import "./GettingStartedPage.scss";

const installCode = "npm install @gem-org/gemsitions";

const fullImportCode = `// main.tsx
import "@gem-org/gemsitions/styles.css";
import { FadeTransition, SlideTransition, FlipList } from "@gem-org/gemsitions";`;

const asChildCode = `import { FadeTransition } from "@gem-org/gemsitions/fade-transition";

<FadeTransition isIn={open} asChild>
  <aside className="filters">…</aside>
</FadeTransition>`;

const phasesCode = `import { ScaleTransition } from "@gem-org/gemsitions/scale-transition";

<ScaleTransition
  isIn={open}
  duration={{ enter: 200, exit: 150 }}
  easing={{ enter: "emphasized", exit: "exit" }}
  onScale={({ reason }) => console.log("in", reason)}
  outScale={({ reason }) => console.log("out", reason)}
  onPhaseChange={(phase) => console.log(phase)}
>
  <div role="dialog" aria-label="Filters">…</div>
</ScaleTransition>`;

const noteKeys = ["tokens", "utilities", "utils", "single"] as const;
const behaviorKeys = ["timing", "presence", "phases", "classes"] as const;
const a11yKeys = ["reducedMotion", "ignore", "properties", "viewTransition"] as const;

const codeComponents = { code: <code /> };

export function GettingStartedPage() {
  const { t } = useTranslation("transitionsGettingStarted");
  const [open, setOpen] = useState(true);

  const usageCode = `import { useState } from "react";
import { Button, Card } from "@gem-org/gem-system";
import { SlideTransition } from "@gem-org/gemsitions";

export function OrderSummary() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Button aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        {open ? "${t("usage.hide")}" : "${t("usage.show")}"}
      </Button>
      <SlideTransition isIn={open} from="bottom">
        <Card title="${t("usage.cardTitle")}" subtitle="${t("usage.cardSubtitle")}">
          ${t("usage.cardBody")}
        </Card>
      </SlideTransition>
    </>
  );
}`;

  const partialImportCode = `// main.tsx
import "@gem-org/gemsitions/tokens.css";
import "@gem-org/gemsitions/utilities.css"; // ${t("code.optional")}
import "@gem-org/gemsitions/fade-transition.css";

// ${t("code.anyTransition")}
import { FadeTransition } from "@gem-org/gemsitions/fade-transition";`;

  const tokensCode = `import { duration, easing, intensity } from "@gem-org/gemsitions/tokens";

// ${t("code.cssVariables")}
// --gemst-duration-normal, --gemst-easing-standard, --gemst-intensity-md…`;

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
        <DemoBlock code={usageCode} label="OrderSummary.tsx" stack>
          <div className="getting-started-demo">
            <div>
              <Button aria-expanded={open} onClick={() => setOpen((value) => !value)}>
                {open ? t("usage.hide") : t("usage.show")}
              </Button>
            </div>
            <div className="getting-started-demo__stage">
              <SlideTransition isIn={open} from="bottom">
                <Card title={t("usage.cardTitle")} subtitle={t("usage.cardSubtitle")}>
                  {t("usage.cardBody")}
                </Card>
              </SlideTransition>
            </div>
          </div>
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

      <DocsSection title={t("behavior.title")} description={t("behavior.description")}>
        <ul className="docs-page__meta">
          {behaviorKeys.map((key) => (
            <li key={key}>
              <Trans t={t} i18nKey={`behavior.items.${key}`} components={codeComponents} />
            </li>
          ))}
        </ul>
        <CodeBlock code={phasesCode} label="FiltersPopover.tsx" />
      </DocsSection>

      <DocsSection title={t("asChild.title")} description={t("asChild.description")}>
        <CodeBlock code={asChildCode} label="FiltersPanel.tsx" />
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
