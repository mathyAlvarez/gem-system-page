import { Button, Typography } from "@gem-org/gem-system";
import { ArrowRight, Check } from "@gem-org/gem-system/icons";
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ApiTable } from "../../../components/ApiTable.tsx";
import { propText } from "../../../components/PropText.tsx";
import { eventsLast } from "../../../lib/sortProps.ts";
import { CodeBlock, DocsPageHeader, DocsSection } from "../../../components/DocsPrimitives.tsx";
import radioTypesSource from "../../../../node_modules/@gem-org/gem-system/dist/components/Radio/Radio.types.d.ts?raw";
import { radioGroupCssClasses, radioGroupProps, radioGroupTokens } from "./radioGroupDocs.ts";
import "../Button/ButtonPage.scss";

const importCode = `import { Radio, RadioGroup } from "@gem-org/gem-system";
// or
import { Radio, RadioGroup } from "@gem-org/gem-system/radio";`;

const a11yIds = ["role", "describedBy", "states", "keyboard", "noLabel"] as const;
const rich = { code: <code /> };

export function RadioGroupApiPage() {
  const { t } = useTranslation("radioGroup");
  const navigate = useNavigate();

  return (
    <div className="docs-page">
      <DocsPageHeader title={t("api.header.title")} description={t("api.header.description")} />

      <DocsSection title={t("api.demos.title")} description={t("api.demos.description")}>
        <div>
          <Button
            variant="link"
            rightIcon={<ArrowRight size="sm" />}
            onClick={() => navigate("/components/radio-group")}
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
          rows={eventsLast(radioGroupProps).map((prop) => ({
            id: prop.name,
            cells: [
              <code key="name" className="docs-api-table__name">{prop.name}</code>,
              <code key="type" className="docs-api-table__code">{prop.type}</code>,
              <code key="default" className="docs-api-table__muted">{prop.defaultValue}</code>,
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
          rows={radioGroupCssClasses.map((item) => ({
            id: item.name,
            cells: [
              <code key="name" className="docs-api-table__name">{item.name}</code>,
              <code key="rule" className="docs-api-table__muted">{item.rule}</code>,
              <Typography key="description" variant="body">
                {propText(t(`api.cssClasses.rules.${item.rule}`, { value: "value" in item ? item.value : "" }))}
              </Typography>,
            ],
          }))}
        />
      </DocsSection>

      <DocsSection title={t("api.tokens.title")} description={t("api.tokens.description")}>
        <ApiTable
          columns={[t("api.tokens.columns.name"), t("api.tokens.columns.description")]}
          rows={radioGroupTokens.map((name) => ({
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
        <CodeBlock code={radioTypesSource} label="Radio.types.d.ts" language="typescript" />
      </DocsSection>
    </div>
  );
}
