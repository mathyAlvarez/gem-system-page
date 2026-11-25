import { Button, Typography } from "@gem-org/gem-system";
import { ArrowRight, Check } from "@gem-org/gem-system/icons";
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ApiTable } from "../../../../components/ApiTable.tsx";
import { propText } from "../../../../components/PropText.tsx";
import { eventsLast } from "../../../../lib/sortProps.ts";
import { CodeBlock, DocsPageHeader, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import typesSource from "../../../../../node_modules/@gem-org/gem-system/dist/components/CopyToClipboard/CopyToClipboard.types.d.ts?raw";
import { copyCssClasses, copyProps, copyRenderProps, copyTokens } from "./copyDocs.ts";
import "../../components/Button/ButtonPage.scss";

const importCode = `import { CopyToClipboard, type CopyToClipboardProps } from "@gem-org/gem-system";
// or
import { CopyToClipboard } from "@gem-org/gem-system/copy-to-clipboard";

// Helpers
import {
  writeClipboardText, // (text: string) => Promise<void>
  DEFAULT_COPY_TIMEOUT, // 2000
  COPY_TO_CLIPBOARD_SIZES,
  COPY_TO_CLIPBOARD_VARIANTS,
  COPY_TO_CLIPBOARD_PLACEMENTS,
} from "@gem-org/gem-system";`;

const a11yIds = ["button", "live", "labels", "trigger", "render", "tooltip", "disabled"] as const;
const rich = { code: <code /> };

type PropRow = { name: string; type: string; defaultValue: string; description: string };

function PropsTable({ rows, columns }: { rows: PropRow[]; columns: string[] }) {
  return (
    <ApiTable
      columns={columns}
      rows={rows.map((prop) => ({
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
            {propText(prop.description)}
          </Typography>,
        ],
      }))}
    />
  );
}

export function CopyToClipboardApiPage() {
  const { t } = useTranslation("copyToClipboard");
  const navigate = useNavigate();

  const columns = [
    t("props.columns.name"),
    t("props.columns.type"),
    t("props.columns.default"),
    t("props.columns.description"),
  ];
  const props = eventsLast(copyProps).map((prop) => ({
    ...prop,
    description: t(`props.groups.copy.items.${prop.name}`),
  }));
  const renderProps = copyRenderProps.map((prop) => ({
    ...prop,
    description: t(`props.groups.render.items.${prop.name}`),
  }));

  return (
    <div className="docs-page">
      <DocsPageHeader title={t("api.header.title")} description={t("api.header.description")} />

      <DocsSection title={t("api.demos.title")} description={t("api.demos.description")}>
        <div>
          <Button
            variant="link"
            rightIcon={<ArrowRight size="sm" />}
            onClick={() => navigate("/system/feedback/copy-to-clipboard")}
          >
            {t("api.demos.link")}
          </Button>
        </div>
      </DocsSection>

      <DocsSection title={t("api.import.title")} description={t("api.import.description")}>
        <CodeBlock code={importCode} label="Import" language="typescript" />
      </DocsSection>

      <DocsSection title={t("props.title")} description={t("props.description")}>
        <DocsSection
          sub
          title={t("props.groups.copy.title")}
          description={t("props.groups.copy.description")}
        >
          <PropsTable rows={props} columns={columns} />
        </DocsSection>
        <DocsSection
          sub
          title={t("props.groups.render.title")}
          description={t("props.groups.render.description")}
        >
          <PropsTable rows={renderProps} columns={columns} />
        </DocsSection>
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
          rows={copyCssClasses.map((item) => ({
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

      <DocsSection title={t("api.cssVariables.title")}>
        <Typography variant="body">{propText(t("api.cssVariables.description"))}</Typography>
      </DocsSection>

      <DocsSection title={t("api.tokens.title")} description={t("api.tokens.description")}>
        <ApiTable
          columns={[t("api.tokens.columns.name"), t("api.tokens.columns.description")]}
          rows={copyTokens.map((name) => ({
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
        <CodeBlock code={typesSource} label="CopyToClipboard.types.d.ts" language="typescript" />
      </DocsSection>
    </div>
  );
}
