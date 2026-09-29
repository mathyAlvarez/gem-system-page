import { Button, Typography } from "@gem-org/gem-system";
import { ArrowRight, Check } from "@gem-org/gem-system/icons";
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ApiTable } from "../../../components/ApiTable.tsx";
import { propText } from "../../../components/PropText.tsx";
import { eventsLast } from "../../../lib/sortProps.ts";
import { CodeBlock, DocsPageHeader, DocsSection } from "../../../components/DocsPrimitives.tsx";
import buttonTypesSource from "../../../../node_modules/@gem-org/gem-system/dist/components/Button/Button.types.d.ts?raw";
import { buttonCssClasses, buttonCssVariables, buttonProps } from "./buttonDocs.ts";
import "./ButtonPage.scss";

const importCode = `import { Button } from "@gem-org/gem-system";
// or
import { Button } from "@gem-org/gem-system/button";`;

const a11yIds = ["loading", "iconOnly", "icons", "type"] as const;
const rich = { code: <code /> };

export function ButtonApiPage() {
  const { t } = useTranslation("button");
  const navigate = useNavigate();

  return (
    <div className="docs-page">
      <DocsPageHeader title={t("api.header.title")} description={t("api.header.description")} />

      <DocsSection title={t("api.demos.title")} description={t("api.demos.description")}>
        <div>
          <Button
            variant="link"
            rightIcon={<ArrowRight size="sm" />}
            onClick={() => navigate("/components/button")}
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
          rows={eventsLast(buttonProps).map((prop) => ({
            id: prop.name,
            cells: [
              <code key="c1" className="docs-api-table__name">{prop.name}</code>,
              <code key="c2" className="docs-api-table__code">{prop.type}</code>,
              <code key="c3" className="docs-api-table__muted">{prop.defaultValue}</code>,
              <Typography key="c4" variant="body">{propText(t(`props.items.${prop.name}`))}</Typography>,
            ],
          }))}
        />
      </DocsSection>

      <DocsSection title={t("api.inheritance.title")}>
        <Typography key="c5" variant="body">
          <Trans
            t={t}
            i18nKey="api.inheritance.body"
            components={rich}
            shouldUnescape
          />
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
          rows={buttonCssClasses.map((item) => ({
            id: item.name,
            cells: [
              <code key="c6" className="docs-api-table__name">{item.name}</code>,
              <code key="c7" className="docs-api-table__muted">{item.rule}</code>,
              <Typography key="c8" variant="body">
                {propText(t(`api.cssClasses.rules.${item.rule}`, { value: "value" in item ? item.value : "" }))}
              </Typography>,
            ],
          }))}
        />
      </DocsSection>

      <DocsSection title={t("api.cssVariables.title")} description={t("api.cssVariables.description")}>
        <ApiTable
          columns={[t("api.cssVariables.columns.name"), t("api.cssVariables.columns.description")]}
          rows={buttonCssVariables.map((name) => ({
            id: name,
            cells: [
              <code key="c9" className="docs-api-table__name">{name}</code>,
              <Typography key="c10" variant="body">{propText(t(`api.cssVariables.items.${name}`))}</Typography>,
            ],
          }))}
        />
      </DocsSection>

      <DocsSection title={t("api.types.title")} description={t("api.types.description")}>
        <CodeBlock code={buttonTypesSource} label="Button.types.d.ts" language="typescript" />
      </DocsSection>
    </div>
  );
}
