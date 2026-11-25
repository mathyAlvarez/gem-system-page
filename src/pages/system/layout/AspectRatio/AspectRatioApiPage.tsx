import { Button, Typography } from "@gem-org/gem-system";
import { ArrowRight, Check } from "@gem-org/gem-system/icons";
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ApiTable } from "../../../../components/ApiTable.tsx";
import { propText } from "../../../../components/PropText.tsx";
import { eventsLast } from "../../../../lib/sortProps.ts";
import { CodeBlock, DocsPageHeader, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import typesSource from "../../../../../node_modules/@gem-org/gem-system/dist/components/AspectRatio/AspectRatio.types.d.ts?raw";
import {
  aspectRatioCssClasses,
  aspectRatioCssVariables,
  aspectRatioProps,
  aspectRatioTokens,
  aspectRatioUtils,
} from "./aspectRatioDocs.ts";
import "../../components/Button/ButtonPage.scss";

const importCode = `import { AspectRatio } from "@gem-org/gem-system";
// or
import { AspectRatio, toCssLength } from "@gem-org/gem-system/aspect-ratio";`;

const a11yIds = ["alt", "decorative", "iframe", "figure", "landmark"] as const;
const rich = { code: <code /> };

const entryPath = {
  main: "@gem-org/gem-system",
  subpath: "@gem-org/gem-system/aspect-ratio",
} as const;

export function AspectRatioApiPage() {
  const { t } = useTranslation("aspectRatio");
  const navigate = useNavigate();

  return (
    <div className="docs-page">
      <DocsPageHeader title={t("api.header.title")} description={t("api.header.description")} />

      <DocsSection title={t("api.demos.title")} description={t("api.demos.description")}>
        <div>
          <Button
            variant="link"
            rightIcon={<ArrowRight size="sm" />}
            onClick={() => navigate("/system/layout/aspect-ratio")}
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
          rows={eventsLast(aspectRatioProps).map((prop) => ({
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
          rows={aspectRatioCssClasses.map((item) => ({
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
          rows={aspectRatioCssVariables.map((name) => ({
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
          rows={aspectRatioTokens.map((name) => ({
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

      <DocsSection title={t("api.utils.title")} description={t("api.utils.description")}>
        <ApiTable
          columns={[
            t("api.utils.columns.name"),
            t("api.utils.columns.signature"),
            t("api.utils.columns.entry"),
            t("api.utils.columns.description"),
          ]}
          rows={aspectRatioUtils.map((item) => ({
            id: item.name,
            cells: [
              <code key="name" className="docs-api-table__name">
                {item.name}
              </code>,
              <code key="signature" className="docs-api-table__code">
                {item.signature}
              </code>,
              <code key="entry" className="docs-api-table__muted">
                {entryPath[item.entry]}
              </code>,
              <Typography key="description" variant="body">
                {propText(t(`api.utils.items.${item.name}`))}
              </Typography>,
            ],
          }))}
        />
      </DocsSection>

      <DocsSection title={t("api.types.title")} description={t("api.types.description")}>
        <CodeBlock code={typesSource} label="AspectRatio.types.d.ts" language="typescript" />
      </DocsSection>
    </div>
  );
}
