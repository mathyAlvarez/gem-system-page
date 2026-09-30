import { Button, Typography } from "@gem-org/gem-system";
import { ArrowRight, Check } from "@gem-org/gem-system/icons";
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ApiTable } from "../../../components/ApiTable.tsx";
import { propText } from "../../../components/PropText.tsx";
import { eventsLast } from "../../../lib/sortProps.ts";
import { CodeBlock, DocsPageHeader, DocsSection } from "../../../components/DocsPrimitives.tsx";
import typesSource from "../../../../node_modules/@gem-org/gem-system/dist/components/Modal/Modal.types.d.ts?raw";
import { modalCssClasses, modalCssVariables, modalHeaderProps, modalProps, modalTokens } from "./modalDocs.ts";
import "../../components/Button/ButtonPage.scss";

const importCode = `import { Modal, type ModalProps } from "@gem-org/gem-system";
// or
import { Modal, ModalHeader, ModalBody, ModalFooter } from "@gem-org/gem-system/modal";
// Dialog is an alias of Modal`;

const a11yIds = ["dialog", "name", "focus", "trap", "restore", "dismiss", "scroll", "labels"] as const;
const rich = { code: <code /> };

type PropRow = { name: string; type: string; defaultValue: string; description: string };

function PropsTable({ rows, columns }: { rows: PropRow[]; columns: string[] }) {
  return (
    <ApiTable
      columns={columns}
      rows={rows.map((prop) => ({
        id: prop.name,
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

export function ModalApiPage() {
  const { t } = useTranslation("modal");
  const navigate = useNavigate();

  const columns = [
    t("props.columns.name"),
    t("props.columns.type"),
    t("props.columns.default"),
    t("props.columns.description"),
  ];
  const props = eventsLast(modalProps).map((prop) => ({ ...prop, description: t(`props.groups.modal.items.${prop.name}`) }));
  const headerProps = modalHeaderProps.map((prop) => ({
    ...prop,
    description: t(`props.groups.header.items.${prop.name}`),
  }));

  return (
    <div className="docs-page">
      <DocsPageHeader title={t("api.header.title")} description={t("api.header.description")} />

      <DocsSection title={t("api.demos.title")} description={t("api.demos.description")}>
        <div>
          <Button variant="link" rightIcon={<ArrowRight size="sm" />} onClick={() => navigate("/feedback/modal")}>
            {t("api.demos.link")}
          </Button>
        </div>
      </DocsSection>

      <DocsSection title={t("api.import.title")} description={t("api.import.description")}>
        <CodeBlock code={importCode} label="Import" language="typescript" />
      </DocsSection>

      <DocsSection title={t("props.title")} description={t("props.description")}>
        <DocsSection sub title={t("props.groups.modal.title")} description={t("props.groups.modal.description")}>
          <PropsTable rows={props} columns={columns} />
        </DocsSection>
        <DocsSection sub title={t("props.groups.header.title")} description={t("props.groups.header.description")}>
          <PropsTable rows={headerProps} columns={columns} />
        </DocsSection>
        <DocsSection sub title={t("props.groups.sections.title")}>
          <Typography variant="body">{propText(t("props.groups.sections.description"))}</Typography>
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
          rows={modalCssClasses.map((item) => ({
            id: item.name,
            cells: [
              <code key="name" className="docs-api-table__name">{item.name}</code>,
              <code key="rule" className="docs-api-table__muted">{item.rule}</code>,
              <Typography key="description" variant="body">
                {propText(t(`api.cssClasses.rules.${item.rule}`))}
              </Typography>,
            ],
          }))}
        />
      </DocsSection>

      <DocsSection title={t("api.cssVariables.title")} description={t("api.cssVariables.description")}>
        <ApiTable
          columns={[t("api.cssVariables.columns.name"), t("api.cssVariables.columns.description")]}
          rows={modalCssVariables.map((name) => ({
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
          rows={modalTokens.map((name) => ({
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
        <CodeBlock code={typesSource} label="Modal.types.d.ts" language="typescript" />
      </DocsSection>
    </div>
  );
}
