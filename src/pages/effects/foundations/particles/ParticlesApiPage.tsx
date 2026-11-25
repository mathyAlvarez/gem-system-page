import { Button, Typography } from "@gem-org/gem-system";
import { ArrowRight, Check } from "@gem-org/gem-system/icons";
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ApiTable } from "../../../../components/ApiTable.tsx";
import { CodeBlock, DocsPageHeader, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { propText } from "../../../../components/PropText.tsx";
import typesSource from "../../../../../node_modules/@gem-org/gemffects/dist/particles/particles.types.d.ts?raw";
import {
  particleA11yIds,
  particleCssClasses,
  particleCssVariables,
  particleFieldOptions,
  particleFieldResult,
  particleHelpers,
  particleLayerProps,
} from "./particlesDocs.ts";
import "./ParticlesPage.scss";

type PropRow = {
  id: string;
  name: string;
  type: string;
  defaultValue: string;
  description: string;
};

const importCode = `import "@gem-org/gemffects/particles.css";
import {
  ParticleLayer,
  useParticleField,
  createParticle,
  type Particle,
  type ParticleKind,
  type ParticleMotion,
} from "@gem-org/gemffects/particles";`;

const codeComponents = { code: <code /> };

export function ParticlesApiPage() {
  const { t } = useTranslation("particles");
  const navigate = useNavigate();

  const propColumns = [
    t("api.columns.prop"),
    t("api.columns.type"),
    t("api.columns.default"),
    t("api.columns.description"),
  ];
  const propRows = (rows: PropRow[]) =>
    rows.map((row) => ({
      id: row.id,
      cells: [
        <code key="name" className="docs-api-table__name">
          {row.name}
        </code>,
        <code key="type" className="docs-api-table__code">
          {row.type}
        </code>,
        <code key="default" className="docs-api-table__muted">
          {row.defaultValue}
        </code>,
        <Typography key="description" variant="body">
          {propText(row.description)}
        </Typography>,
      ],
    }));

  const layerRows = particleLayerProps.map((p) => ({
    ...p,
    id: p.name,
    description: t(`api.layer.items.${p.name}`),
  }));
  const optionRows = particleFieldOptions.map((p) => ({
    ...p,
    id: p.name,
    description: t(`api.field.options.${p.name}`),
  }));

  return (
    <div className="docs-page">
      <DocsPageHeader title={t("api.header.title")} description={t("api.header.description")} />

      <DocsSection title={t("api.demos.title")} description={t("api.demos.description")}>
        <div>
          <Button
            variant="link"
            rightIcon={<ArrowRight size="sm" />}
            onClick={() => navigate("/effects/foundations/particles")}
          >
            {t("api.demos.link")}
          </Button>
        </div>
      </DocsSection>

      <DocsSection title={t("api.import.title")} description={t("api.import.description")}>
        <CodeBlock code={importCode} label="Import" />
      </DocsSection>

      <DocsSection title="ParticleLayer" description={t("api.layer.description")}>
        <ApiTable columns={propColumns} rows={propRows(layerRows)} />
      </DocsSection>

      <DocsSection title="useParticleField" description={t("api.field.description")}>
        <DocsSection sub title={t("api.field.optionsTitle")} id="use-particle-field-options">
          <ApiTable columns={propColumns} rows={propRows(optionRows)} />
        </DocsSection>
        <DocsSection sub title={t("api.field.resultTitle")} id="use-particle-field-result">
          <ApiTable
            columns={[t("api.columns.name"), t("api.columns.type"), t("api.columns.description")]}
            rows={particleFieldResult.map((item) => ({
              id: item.name,
              cells: [
                <code key="name" className="docs-api-table__name">
                  {item.name}
                </code>,
                <code key="type" className="docs-api-table__code">
                  {item.type}
                </code>,
                <Typography key="description" variant="body">
                  {propText(t(`api.field.result.${item.name}`))}
                </Typography>,
              ],
            }))}
          />
        </DocsSection>
      </DocsSection>

      <DocsSection title={t("api.helpers.title")} description={t("api.helpers.description")}>
        <ApiTable
          columns={[
            t("api.columns.name"),
            t("api.columns.signature"),
            t("api.columns.description"),
          ]}
          rows={particleHelpers.map((item) => ({
            id: item.name,
            cells: [
              <code key="name" className="docs-api-table__name">
                {item.name}
              </code>,
              <code key="signature" className="docs-api-table__code">
                {item.signature}
              </code>,
              <Typography key="description" variant="body">
                {propText(t(`api.helpers.items.${item.name}`))}
              </Typography>,
            ],
          }))}
        />
      </DocsSection>

      <DocsSection title={t("api.a11y.title")}>
        <ul className="docs-api-list">
          {particleA11yIds.map((id) => (
            <li key={id} className="docs-api-list__item">
              <Check size="sm" className="docs-api-list__icon" />
              <Typography variant="body" as="span">
                <Trans
                  t={t}
                  i18nKey={`api.a11y.items.${id}`}
                  components={codeComponents}
                  shouldUnescape
                />
              </Typography>
            </li>
          ))}
        </ul>
      </DocsSection>

      <DocsSection title={t("api.cssClasses.title")}>
        <ApiTable
          columns={[t("api.columns.class"), t("api.columns.description")]}
          rows={particleCssClasses.map((item) => ({
            id: item.id,
            cells: [
              <code key="name" className="docs-api-table__name">
                {item.name}
              </code>,
              <Typography key="description" variant="body">
                {propText(t(`api.cssClasses.items.${item.id}`))}
              </Typography>,
            ],
          }))}
        />
      </DocsSection>

      <DocsSection title={t("api.cssVariables.title")}>
        <ApiTable
          columns={[t("api.columns.variable"), t("api.columns.description")]}
          rows={particleCssVariables.map((item) => ({
            id: item.id,
            cells: [
              <code key="name" className="docs-api-table__name">
                {item.name}
              </code>,
              <Typography key="description" variant="body">
                {propText(t(`api.cssVariables.items.${item.id}`))}
              </Typography>,
            ],
          }))}
        />
      </DocsSection>

      <DocsSection title={t("api.types.title")}>
        <CodeBlock code={typesSource} label="particles.types.d.ts" />
      </DocsSection>
    </div>
  );
}
