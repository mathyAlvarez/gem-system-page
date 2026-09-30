import { Button, Typography } from "@gem-org/gem-system";
import { ArrowRight, Check } from "@gem-org/gem-system/icons";
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ApiTable } from "../../../components/ApiTable.tsx";
import { propText } from "../../../components/PropText.tsx";
import { CodeBlock, DocsPageHeader, DocsSection } from "../../../components/DocsPrimitives.tsx";
import typesSource from "../../../../node_modules/@gem-org/gem-system/dist/components/Table/Table.types.d.ts?raw";
import {
  tableColumnMeta,
  tableCssClasses,
  tableCssVariables,
  tableDataProps,
  tableExpandProps,
  tableHelpers,
  tableLayoutProps,
  tableSelectionProps,
  tableSortingProps,
  tableTokens,
} from "./tableDocs.ts";
import "../../components/Button/ButtonPage.scss";

const importCode = `import { Table, createTableColumnHelper, type TableProps } from "@gem-org/gem-system";
// or
import { Table, createTableColumnHelper } from "@gem-org/gem-system/table";`;

const columnsCode = `const helper = createTableColumnHelper<Invoice>();

const columns = helper.columns([
  helper.accessor("number", { header: "Invoice", meta: { minWidth: 120, sticky: "start" } }),
  helper.accessor("amount", {
    header: "Amount",
    meta: { align: "end" },
    cell: ({ getValue }) => formatMoney(getValue()),
  }),
  helper.group({ id: "details", header: "Details", columns: helper.columns([/* … */]) }),
  helper.display({ id: "actions", header: "Actions", cell: ({ row }) => <Actions row={row.original} /> }),
]);`;

const a11yIds = [
  "caption",
  "headers",
  "sorting",
  "labels",
  "rowLabels",
  "rowClick",
  "expand",
  "scroller",
  "virtualized",
] as const;
const rich = { code: <code /> };

type PropRow = { id: string; name: string; type: string; defaultValue: string; description: string };

function PropsTable({ rows, columns }: { rows: PropRow[]; columns: string[] }) {
  return (
    <ApiTable
      columns={columns}
      rows={rows.map((prop) => ({
        id: prop.id,
        cells: [
          <code key="name" className="docs-api-table__name">{prop.name}</code>,
          <code key="type" className="docs-api-table__code">{prop.type}</code>,
          <code key="default" className="docs-api-table__muted">{prop.defaultValue}</code>,
          <Typography key="description" variant="body">
            {propText(prop.description)}
          </Typography>,
        ],
      }))}
    />
  );
}

export function TableApiPage() {
  const { t } = useTranslation("table");
  const navigate = useNavigate();

  const columns = [
    t("props.columns.name"),
    t("props.columns.type"),
    t("props.columns.default"),
    t("props.columns.description"),
  ];
  const groups: { id: "data" | "sorting" | "selection" | "expand" | "layout" | "meta" | "helpers"; rows: PropRow[] }[] = [
    {
      id: "data",
      rows: tableDataProps.map((p) => ({ ...p, id: p.name, description: t(`props.items.${p.name}`) })),
    },
    {
      id: "sorting",
      rows: tableSortingProps.map((p) => ({ ...p, id: p.name, description: t(`props.items.${p.name}`) })),
    },
    {
      id: "selection",
      rows: tableSelectionProps.map((p) => ({ ...p, id: p.name, description: t(`props.items.${p.name}`) })),
    },
    {
      id: "expand",
      rows: tableExpandProps.map((p) => ({ ...p, id: p.name, description: t(`props.items.${p.name}`) })),
    },
    {
      id: "layout",
      rows: tableLayoutProps.map((p) => ({ ...p, id: p.name, description: t(`props.items.${p.name}`) })),
    },
    {
      id: "meta",
      rows: tableColumnMeta.map((p) => ({ ...p, id: p.name, description: t(`props.items.${p.name}`) })),
    },
    {
      id: "helpers",
      rows: tableHelpers.map((p) => ({ ...p, id: p.name, description: t(`props.items.${p.name}`) })),
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader title={t("api.header.title")} description={t("api.header.description")} />

      <DocsSection title={t("api.demos.title")} description={t("api.demos.description")}>
        <div>
          <Button variant="link" rightIcon={<ArrowRight size="sm" />} onClick={() => navigate("/data-display/table")}>
            {t("api.demos.link")}
          </Button>
        </div>
      </DocsSection>

      <DocsSection title={t("api.import.title")} description={t("api.import.description")}>
        <CodeBlock code={importCode} label="Import" language="typescript" />
      </DocsSection>

      <DocsSection title={t("api.columns.title")} description={t("api.columns.description")}>
        <CodeBlock code={columnsCode} label="columns.tsx" language="typescript" />
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
          rows={tableCssClasses.map((entry) => ({
            id: entry.name,
            cells: [
              <code key="name" className="docs-api-table__name">{entry.name}</code>,
              <code key="rule" className="docs-api-table__muted">{entry.rule}</code>,
              <Typography key="description" variant="body">
                {propText(t(`api.cssClasses.rules.${entry.rule}`))}
              </Typography>,
            ],
          }))}
        />
      </DocsSection>

      <DocsSection title={t("api.cssVariables.title")} description={t("api.cssVariables.description")}>
        <ApiTable
          columns={[t("api.cssVariables.columns.name"), t("api.cssVariables.columns.description")]}
          rows={tableCssVariables.map((name) => ({
            id: name,
            cells: [
              <code key="name" className="docs-api-table__name">{name}</code>,
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
          rows={tableTokens.map((name) => ({
            id: name,
            cells: [
              <code key="name" className="docs-api-table__name">{name}</code>,
              <Typography key="description" variant="body">
                {propText(t(`api.tokens.items.${name}`))}
              </Typography>,
            ],
          }))}
        />
      </DocsSection>

      <DocsSection title={t("api.types.title")} description={t("api.types.description")}>
        <CodeBlock code={typesSource} label="Table.types.d.ts" language="typescript" />
      </DocsSection>
    </div>
  );
}
