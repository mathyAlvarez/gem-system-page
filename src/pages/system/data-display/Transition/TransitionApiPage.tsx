import { Button, Typography } from "@gem-org/gem-system";
import { ArrowRight, Check } from "@gem-org/gem-system/icons";
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ApiTable } from "../../../../components/ApiTable.tsx";
import { propText } from "../../../../components/PropText.tsx";
import { CodeBlock, DocsPageHeader, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import typesSource from "../../../../../node_modules/@gem-org/gem-system/dist/components/Transition/Transition.types.d.ts?raw";
import {
  transitionCssClasses,
  transitionCssVariables,
  transitionEventProps,
  transitionMotionProps,
  transitionPresenceProps,
  transitionStylingProps,
} from "./transitionDocs.ts";
import "../../components/Button/ButtonPage.scss";

const importCode = `import { Transition, type TransitionProps } from "@gem-org/gem-system";
// or
import { Transition } from "@gem-org/gem-system/transition";`;

const a11yIds = [
  "reducedMotion",
  "hidden",
  "focus",
  "disclosure",
  "announce",
  "wrapper",
  "duration",
] as const;
const rich = { code: <code /> };

type PropRow = {
  id: string;
  name: string;
  type: string;
  defaultValue: string;
  description: string;
};

function PropsTable({ rows, columns }: { rows: PropRow[]; columns: string[] }) {
  return (
    <ApiTable
      columns={columns}
      rows={rows.map((prop) => ({
        id: prop.id,
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
            {propText(prop.description)}
          </Typography>,
        ],
      }))}
    />
  );
}

export function TransitionApiPage() {
  const { t } = useTranslation("transition");
  const navigate = useNavigate();

  const columns = [
    t("props.columns.name"),
    t("props.columns.type"),
    t("props.columns.default"),
    t("props.columns.description"),
  ];
  const groups: { id: "presence" | "motion" | "events" | "styling"; rows: PropRow[] }[] = [
    {
      id: "presence",
      rows: transitionPresenceProps.map((p) => ({
        ...p,
        id: p.name,
        description: t(`props.items.${p.name}`),
      })),
    },
    {
      id: "motion",
      rows: transitionMotionProps.map((p) => ({
        ...p,
        id: p.name,
        description: t(`props.items.${p.name}`),
      })),
    },
    {
      id: "events",
      rows: transitionEventProps.map((p) => ({
        ...p,
        id: p.name,
        description: t(`props.items.${p.name}`),
      })),
    },
    {
      id: "styling",
      rows: transitionStylingProps.map((p) => ({
        ...p,
        id: p.name,
        description: t(`props.items.${p.name}`),
      })),
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader title={t("api.header.title")} description={t("api.header.description")} />

      <DocsSection title={t("api.demos.title")} description={t("api.demos.description")}>
        <div>
          <Button
            variant="link"
            rightIcon={<ArrowRight size="sm" />}
            onClick={() => navigate("/system/data-display/transition")}
          >
            {t("api.demos.link")}
          </Button>
        </div>
      </DocsSection>

      <DocsSection title={t("api.import.title")} description={t("api.import.description")}>
        <CodeBlock code={importCode} label="Import" language="typescript" />
      </DocsSection>

      <DocsSection title={t("props.title")} description={t("props.description")}>
        {groups.map((group) => (
          <DocsSection
            key={group.id}
            sub
            title={t(`props.groups.${group.id}.title`)}
            description={t(`props.groups.${group.id}.description`)}
          >
            <PropsTable rows={group.rows} columns={columns} />
          </DocsSection>
        ))}
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
          rows={transitionCssClasses.map((entry) => ({
            id: entry.name,
            cells: [
              <code key="name" className="docs-api-table__name">
                {entry.name}
              </code>,
              <code key="rule" className="docs-api-table__muted">
                {entry.rule}
              </code>,
              <Typography key="description" variant="body">
                {propText(t(`api.cssClasses.rules.${entry.rule}`))}
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
          rows={transitionCssVariables.map((name) => ({
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

      <DocsSection title={t("api.types.title")} description={t("api.types.description")}>
        <CodeBlock code={typesSource} label="Transition.types.d.ts" language="typescript" />
      </DocsSection>
    </div>
  );
}
