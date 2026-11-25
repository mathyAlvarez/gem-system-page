import { Button, Typography } from "@gem-org/gem-system";
import { ArrowRight, Check } from "@gem-org/gem-system/icons";
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ApiTable } from "../../../../components/ApiTable.tsx";
import { CodeBlock, DocsPageHeader, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { propText } from "../../../../components/PropText.tsx";
import typesSource from "../../../../../node_modules/@gem-org/gemffects/dist/effects/Tilt3D/Tilt3D.types.d.ts?raw";
import {
  tilt3DA11yIds,
  tilt3DAppearanceProps,
  tilt3DContentProps,
  tilt3DCssClasses,
  tilt3DCssVariables,
  tilt3DEventProps,
  tilt3DHookResult,
  tilt3DStateProps,
  tilt3DStylingProps,
  tilt3DTimingProps,
  tilt3DTokens,
} from "./tilt3DDocs.ts";

type PropRow = {
  id: string;
  name: string;
  type: string;
  defaultValue: string;
  description: string;
};
type GroupId = "content" | "appearance" | "timing" | "state" | "events" | "styling";
type NameRow = { id: string; name: string; description: string };

const importCode = `import "@gem-org/gemffects/tilt-3d.css";
import {
  Tilt3D,
  useTilt3D,
  type Tilt3DProps,
  type UseTilt3DOptions,
} from "@gem-org/gemffects/tilt-3d";
// or
import { Tilt3D, useTilt3D } from "@gem-org/gemffects";`;

const rich = { code: <code /> };

export function Tilt3DApiPage() {
  const { t } = useTranslation("tilt3D");
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
  const nameRows = (rows: NameRow[]) =>
    rows.map((row) => ({
      id: row.id,
      cells: [
        <code key="name" className="docs-api-table__name">
          {row.name}
        </code>,
        <Typography key="description" variant="body">
          {propText(row.description)}
        </Typography>,
      ],
    }));

  const groups: { id: GroupId; rows: PropRow[] }[] = [
    {
      id: "content",
      rows: tilt3DContentProps.map((p) => ({
        ...p,
        id: p.name,
        description: t(`props.items.${p.name}`),
      })),
    },
    {
      id: "appearance",
      rows: tilt3DAppearanceProps.map((p) => ({
        ...p,
        id: p.name,
        description: t(`props.items.${p.name}`),
      })),
    },
    {
      id: "timing",
      rows: tilt3DTimingProps.map((p) => ({
        ...p,
        id: p.name,
        description: t(`props.items.${p.name}`),
      })),
    },
    {
      id: "state",
      rows: tilt3DStateProps.map((p) => ({
        ...p,
        id: p.name,
        description: t(`props.items.${p.name}`),
      })),
    },
    {
      id: "events",
      rows: tilt3DEventProps.map((p) => ({
        ...p,
        id: p.name,
        description: t(`props.items.${p.name}`),
      })),
    },
    {
      id: "styling",
      rows: tilt3DStylingProps.map((p) => ({
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
            onClick={() => navigate("/effects/motion/tilt-3d")}
          >
            {t("api.demos.link")}
          </Button>
        </div>
      </DocsSection>

      <DocsSection title={t("api.import.title")} description={t("api.import.description")}>
        <CodeBlock code={importCode} label="Import" />
      </DocsSection>

      <DocsSection title={t("props.title")} description={t("props.description")}>
        {groups.map((group) => (
          <DocsSection
            key={group.id}
            sub
            title={t(`props.groups.${group.id}.title`)}
            description={t(`props.groups.${group.id}.description`)}
          >
            <ApiTable columns={propColumns} rows={propRows(group.rows)} />
          </DocsSection>
        ))}
      </DocsSection>

      <DocsSection title="useTilt3D" description={t("api.hook.description")}>
        <DocsSection sub title={t("api.hook.resultTitle")} id="use-tilt-3d-result">
          <ApiTable
            columns={[t("api.columns.name"), t("api.columns.type"), t("api.columns.description")]}
            rows={tilt3DHookResult.map((item) => ({
              id: item.name,
              cells: [
                <code key="name" className="docs-api-table__name">
                  {item.name}
                </code>,
                <code key="type" className="docs-api-table__code">
                  {item.type}
                </code>,
                <Typography key="description" variant="body">
                  {propText(t(`api.hook.result.${item.name}`))}
                </Typography>,
              ],
            }))}
          />
        </DocsSection>
      </DocsSection>

      <DocsSection title={t("api.inheritance.title")}>
        <Typography variant="body">
          <Trans t={t} i18nKey="api.inheritance.body" components={rich} shouldUnescape />
        </Typography>
      </DocsSection>

      <DocsSection title={t("api.a11y.title")}>
        <ul className="docs-api-list">
          {tilt3DA11yIds.map((id) => (
            <li key={id} className="docs-api-list__item">
              <Check size="sm" className="docs-api-list__icon" />
              <Typography variant="body" as="span">
                <Trans t={t} i18nKey={`api.a11y.items.${id}`} components={rich} shouldUnescape />
              </Typography>
            </li>
          ))}
        </ul>
      </DocsSection>

      <DocsSection title={t("api.cssClasses.title")}>
        <ApiTable
          columns={[t("api.columns.class"), t("api.columns.description")]}
          rows={nameRows(
            tilt3DCssClasses.map((c) => ({ ...c, description: t(`api.cssClasses.items.${c.id}`) })),
          )}
        />
      </DocsSection>

      <DocsSection
        title={t("api.cssVariables.title")}
        description={t("api.cssVariables.description")}
      >
        <ApiTable
          columns={[t("api.columns.variable"), t("api.columns.description")]}
          rows={nameRows(
            tilt3DCssVariables.map((v) => ({
              ...v,
              description: t(`api.cssVariables.items.${v.id}`),
            })),
          )}
        />
      </DocsSection>

      <DocsSection title={t("api.tokens.title")} description={t("api.tokens.description")}>
        <ApiTable
          columns={[t("api.columns.token"), t("api.columns.description")]}
          rows={nameRows(
            tilt3DTokens.map((v) => ({ ...v, description: t(`api.tokens.items.${v.id}`) })),
          )}
        />
      </DocsSection>

      <DocsSection title={t("api.types.title")}>
        <CodeBlock code={typesSource} label="Tilt3D.types.d.ts" />
      </DocsSection>
    </div>
  );
}
