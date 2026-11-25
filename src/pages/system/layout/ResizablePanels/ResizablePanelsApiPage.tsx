import { Button, Typography } from "@gem-org/gem-system";
import { ArrowRight, Check } from "@gem-org/gem-system/icons";
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ApiTable } from "../../../../components/ApiTable.tsx";
import { propText } from "../../../../components/PropText.tsx";
import { eventsLast } from "../../../../lib/sortProps.ts";
import { CodeBlock, DocsPageHeader, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import typesSource from "../../../../../node_modules/@gem-org/gem-system/dist/components/ResizablePanels/ResizablePanels.types.d.ts?raw";
import {
  groupProps,
  handleProps,
  panelProps,
  resizableCssClasses,
  resizableCssVariables,
  resizableTokens,
  resizableUtils,
} from "./resizablePanelsDocs.ts";
import "../../components/Button/ButtonPage.scss";

const importCode = `import { ResizableHandle, ResizablePanel, ResizablePanels } from "@gem-org/gem-system";
// or
import { ResizableHandle, ResizablePanel, ResizablePanels } from "@gem-org/gem-system/resizable-panels";

// Compound API
<ResizablePanels>
  <ResizablePanels.Panel />
  <ResizablePanels.Handle />
  <ResizablePanels.Panel />
</ResizablePanels>`;

const a11yIds = ["separator", "value", "keyboard", "label", "labels", "disabled", "touch"] as const;
const rich = { code: <code /> };

export function ResizablePanelsApiPage() {
  const { t } = useTranslation("resizablePanels");
  const navigate = useNavigate();

  const propGroups = [
    {
      id: "group",
      props: eventsLast(groupProps).map((prop) => ({
        ...prop,
        description: t(`props.groups.group.items.${prop.name}`),
      })),
    },
    {
      id: "panel",
      props: eventsLast(panelProps).map((prop) => ({
        ...prop,
        description: t(`props.groups.panel.items.${prop.name}`),
      })),
    },
    {
      id: "handle",
      props: eventsLast(handleProps).map((prop) => ({
        ...prop,
        description: t(`props.groups.handle.items.${prop.name}`),
      })),
    },
  ] as const;

  return (
    <div className="docs-page">
      <DocsPageHeader title={t("api.header.title")} description={t("api.header.description")} />

      <DocsSection title={t("api.demos.title")} description={t("api.demos.description")}>
        <div>
          <Button
            variant="link"
            rightIcon={<ArrowRight size="sm" />}
            onClick={() => navigate("/system/layout/resizable-panels")}
          >
            {t("api.demos.link")}
          </Button>
        </div>
      </DocsSection>

      <DocsSection title={t("api.import.title")} description={t("api.import.description")}>
        <CodeBlock code={importCode} label="Import" language="typescript" />
      </DocsSection>

      <DocsSection title={t("props.title")} description={t("props.description")}>
        {propGroups.map((group) => (
          <DocsSection
            key={group.id}
            sub
            title={t(`props.groups.${group.id}.title`)}
            description={t(`props.groups.${group.id}.description`)}
          >
            <ApiTable
              columns={[
                t("props.columns.name"),
                t("props.columns.type"),
                t("props.columns.default"),
                t("props.columns.description"),
              ]}
              rows={group.props.map((prop) => ({
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
          rows={resizableCssClasses.map((item) => ({
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
          rows={resizableCssVariables.map((name) => ({
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
          rows={resizableTokens.map((name) => ({
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
            t("api.utils.columns.description"),
          ]}
          rows={resizableUtils.map((item) => ({
            id: item.name,
            cells: [
              <code key="name" className="docs-api-table__name">
                {item.name}
              </code>,
              <code key="signature" className="docs-api-table__code">
                {item.signature}
              </code>,
              <Typography key="description" variant="body">
                {propText(t(`api.utils.items.${item.name}`))}
              </Typography>,
            ],
          }))}
        />
      </DocsSection>

      <DocsSection title={t("api.types.title")} description={t("api.types.description")}>
        <CodeBlock code={typesSource} label="ResizablePanels.types.d.ts" language="typescript" />
      </DocsSection>
    </div>
  );
}
