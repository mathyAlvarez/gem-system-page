import { Button, Typography } from "@gem-org/gem-system";
import { ArrowRight, Check } from "@gem-org/gem-system/icons";
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ApiTable } from "../../../../components/ApiTable.tsx";
import { propText } from "../../../../components/PropText.tsx";
import { eventsLast } from "../../../../lib/sortProps.ts";
import { CodeBlock, DocsPageHeader, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import typesSource from "../../../../../node_modules/@gem-org/gem-system/dist/components/Spinner/Spinner.types.d.ts?raw";
import {
  spinnerCssClasses,
  spinnerCssVariables,
  spinnerProps,
  spinnerTokens,
} from "./spinnerDocs.ts";
import "../../components/Button/ButtonPage.scss";

const importCode = `import { Spinner, type SpinnerProps } from "@gem-org/gem-system";
// or
import { Spinner } from "@gem-org/gem-system/spinner";

// Alias: same component
import { Loader } from "@gem-org/gem-system";

// Helpers
import {
  spinnerSize, // { sm: "1rem", md: "1.25rem", ..., "4xl": "3.5rem" }
  isSpinnerSizeToken, // (size) => size is SpinnerSizeToken
  resolveSpinnerSize, // (size) => CSS length
} from "@gem-org/gem-system";`;

const a11yIds = ["status", "label", "name", "decorative", "disabled", "motion"] as const;
const rich = { code: <code /> };

export function SpinnerApiPage() {
  const { t } = useTranslation("spinner");
  const navigate = useNavigate();

  const props = eventsLast(spinnerProps);

  return (
    <div className="docs-page">
      <DocsPageHeader title={t("api.header.title")} description={t("api.header.description")} />

      <DocsSection title={t("api.demos.title")} description={t("api.demos.description")}>
        <div>
          <Button
            variant="link"
            rightIcon={<ArrowRight size="sm" />}
            onClick={() => navigate("/system/feedback/spinner")}
          >
            {t("api.demos.link")}
          </Button>
        </div>
      </DocsSection>

      <DocsSection title={t("api.import.title")} description={t("api.import.description")}>
        <CodeBlock code={importCode} label="Import" language="typescript" />
      </DocsSection>

      <DocsSection title={t("props.title")} description={t("props.description")}>
        <ApiTable
          columns={[
            t("props.columns.name"),
            t("props.columns.type"),
            t("props.columns.default"),
            t("props.columns.description"),
          ]}
          rows={props.map((prop) => ({
            id: prop.name,
            cells: [
              <code key="name" className="docs-api-table__name">
                {prop.name}
              </code>,
              <code key="type" className="docs-api-table__code">
                {prop.type}
              </code>,
              <code key="default" className="docs-api-table__muted">
                {prop.defaultValue}
              </code>,
              <Typography key="description" variant="body">
                {propText(t(`props.items.${prop.name}`))}
              </Typography>,
            ],
          }))}
        />
      </DocsSection>

      <DocsSection title={t("api.inheritance.title")}>
        <Typography variant="body">
          <Trans t={t} i18nKey="api.inheritance.body" components={rich} shouldUnescape />
        </Typography>
      </DocsSection>

      <DocsSection title={t("api.a11y.title")}>
        <ul className="button-api-list">
          {a11yIds.map((id) => (
            <li key={id} className="button-api-list__item">
              <Check size="sm" className="button-api-list__icon" />
              <span>
                <Trans t={t} i18nKey={`api.a11y.${id}`} components={rich} />
              </span>
            </li>
          ))}
        </ul>
      </DocsSection>

      <DocsSection title={t("api.cssClasses.title")} description={t("api.cssClasses.description")}>
        <ApiTable
          columns={[
            t("api.cssClasses.columns.name"),
            t("api.cssClasses.columns.rule"),
            t("api.cssClasses.columns.description"),
          ]}
          rows={spinnerCssClasses.map((item) => ({
            id: item.name,
            cells: [
              <code key="name" className="docs-api-table__name">
                {item.name}
              </code>,
              <code key="rule" className="docs-api-table__muted">
                {item.rule}
              </code>,
              <Typography key="description" variant="body">
                {propText(t(`api.cssClasses.rules.${item.rule}`))}
              </Typography>,
            ],
          }))}
        />
      </DocsSection>

      <DocsSection
        title={t("api.cssVariables.title")}
        description={t("api.cssVariables.description")}
      >
        <ApiTable
          columns={[t("api.cssVariables.columns.name"), t("api.cssVariables.columns.description")]}
          rows={spinnerCssVariables.map((name) => ({
            id: name,
            cells: [
              <code key="name" className="docs-api-table__name">
                {name}
              </code>,
              <Typography key="description" variant="body">
                {propText(t(`api.cssVariables.items.${name}`))}
              </Typography>,
            ],
          }))}
        />
      </DocsSection>

      <DocsSection title={t("api.tokens.title")} description={t("api.tokens.description")}>
        <ApiTable
          columns={[t("api.tokens.columns.name"), t("api.tokens.columns.description")]}
          rows={spinnerTokens.map((name) => ({
            id: name,
            cells: [
              <code key="name" className="docs-api-table__name">
                {name}
              </code>,
              <Typography key="description" variant="body">
                {propText(t(`api.tokens.items.${name}`))}
              </Typography>,
            ],
          }))}
        />
      </DocsSection>

      <DocsSection title={t("api.types.title")} description={t("api.types.description")}>
        <CodeBlock code={typesSource} label="Spinner.types.d.ts" language="typescript" />
      </DocsSection>
    </div>
  );
}
