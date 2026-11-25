import { Button, Typography } from "@gem-org/gem-system";
import { ArrowRight, Check } from "@gem-org/gem-system/icons";
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ApiTable } from "../../../../components/ApiTable.tsx";
import { propText } from "../../../../components/PropText.tsx";
import { eventsLast } from "../../../../lib/sortProps.ts";
import { CodeBlock, DocsPageHeader, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import typesSource from "../../../../../node_modules/@gem-org/gem-system/dist/components/CommandPalette/CommandPalette.types.d.ts?raw";
import {
  commandPaletteCommandProps,
  commandPaletteCssClasses,
  commandPaletteCssVariables,
  commandPaletteGroupProps,
  commandPaletteProps,
  commandPaletteTokens,
} from "./commandPaletteDocs.ts";
import "../../components/Button/ButtonPage.scss";

const importCode = `import { CommandPalette } from "@gem-org/gem-system";
// or
import { CommandPalette } from "@gem-org/gem-system/command-palette";`;

const a11yIds = [
  "dialog",
  "combobox",
  "listbox",
  "keyboard",
  "focus",
  "disabled",
  "shortcut",
  "labels",
] as const;
const rich = { code: <code /> };

export function CommandPaletteApiPage() {
  const { t } = useTranslation("commandPalette");
  const navigate = useNavigate();

  const propGroups = [
    {
      id: "commandPalette",
      props: eventsLast(commandPaletteProps).map((prop) => ({
        ...prop,
        description: t(`props.groups.commandPalette.items.${prop.name}`),
      })),
    },
    {
      id: "command",
      props: eventsLast(commandPaletteCommandProps).map((prop) => ({
        ...prop,
        description: t(`props.groups.command.items.${prop.name}`),
      })),
    },
    {
      id: "group",
      props: commandPaletteGroupProps.map((prop) => ({
        ...prop,
        description: t(`props.groups.group.items.${prop.name}`),
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
            onClick={() => navigate("/system/navigation/command-palette")}
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
          rows={commandPaletteCssClasses.map((item) => ({
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
          rows={commandPaletteCssVariables.map((name) => ({
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
          rows={commandPaletteTokens.map((name) => ({
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
        <CodeBlock code={typesSource} label="CommandPalette.types.d.ts" language="typescript" />
      </DocsSection>
    </div>
  );
}
