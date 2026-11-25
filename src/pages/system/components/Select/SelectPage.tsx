import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../../components/ApiLinkSection.tsx";
import {
  CodeBlock,
  DemoBlock,
  DocsPageHeader,
  DocsSection,
} from "../../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../../components/StyleChangesSection.tsx";
import { SelectPlayground } from "./SelectPlayground.tsx";
import { BaseSelect } from "./examples/BaseSelect.tsx";
import baseCode from "./examples/BaseSelect.tsx?raw";
import { ClearableSelect } from "./examples/ClearableSelect.tsx";
import clearableCode from "./examples/ClearableSelect.tsx?raw";
import { ControlledMultipleSelect } from "./examples/ControlledMultipleSelect.tsx";
import controlledMultipleCode from "./examples/ControlledMultipleSelect.tsx?raw";
import { ControlledSelect } from "./examples/ControlledSelect.tsx";
import controlledCode from "./examples/ControlledSelect.tsx?raw";
import { DescriptionsSelect } from "./examples/DescriptionsSelect.tsx";
import descriptionsCode from "./examples/DescriptionsSelect.tsx?raw";
import { DisabledSelect } from "./examples/DisabledSelect.tsx";
import disabledCode from "./examples/DisabledSelect.tsx?raw";
import { ErrorSelect } from "./examples/ErrorSelect.tsx";
import errorCode from "./examples/ErrorSelect.tsx?raw";
import { FieldMappingSelect } from "./examples/FieldMappingSelect.tsx";
import fieldMappingCode from "./examples/FieldMappingSelect.tsx?raw";
import { LoadingSelect } from "./examples/LoadingSelect.tsx";
import loadingCode from "./examples/LoadingSelect.tsx?raw";
import { MultipleSelect } from "./examples/MultipleSelect.tsx";
import multipleCode from "./examples/MultipleSelect.tsx?raw";
import overridesCss from "./examples/select-overrides.css?raw";
import { SelectBorders } from "./examples/SelectBorders.tsx";
import bordersCode from "./examples/SelectBorders.tsx?raw";
import { SelectSizes } from "./examples/SelectSizes.tsx";
import sizesCode from "./examples/SelectSizes.tsx?raw";
import { StyledSelects } from "./examples/StyledSelects.tsx";
import styledCode from "./examples/StyledSelects.tsx?raw";
import { TailwindSelect } from "./examples/TailwindSelect.tsx";
import tailwindCode from "./examples/TailwindSelect.tsx?raw";
import { TooltipSelect } from "./examples/TooltipSelect.tsx";
import tooltipCode from "./examples/TooltipSelect.tsx?raw";
import { VariantSelects } from "./examples/VariantSelect.tsx";
import variantCode from "./examples/VariantSelect.tsx?raw";
import { WithoutChevronSelect } from "./examples/WithoutChevronSelect.tsx";
import withoutChevronCode from "./examples/WithoutChevronSelect.tsx?raw";
import { WithoutSearchSelect } from "./examples/WithoutSearchSelect.tsx";
import withoutSearchCode from "./examples/WithoutSearchSelect.tsx?raw";
import "./SelectPage.scss";

type StoryId =
  | "base"
  | "multiple"
  | "withDescriptions"
  | "withoutSearch"
  | "clearable"
  | "withoutChevron"
  | "disabled"
  | "error"
  | "sizes"
  | "borders"
  | "withTooltip"
  | "controlled"
  | "controlledMultiple"
  | "fieldMapping"
  | "loadingThenDefault";

type Story = {
  id: StoryId;
  file: string;
  code: string;
  preview: ReactNode;
};

const toTsArray = (name: string, type: string, items: readonly object[]) =>
  `export const ${name}${type} = [\n${items
    .map(
      (item) =>
        `  { ${Object.entries(item)
          .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
          .join(", ")} },`,
    )
    .join("\n")}\n];`;

export function SelectPage() {
  const { t } = useTranslation("select");
  const countries = t("options.countries", { returnObjects: true });
  const roles = t("options.roles", { returnObjects: true });
  const workspaces = t("options.workspaces", { returnObjects: true });
  const users = t("options.users", { returnObjects: true });
  const search = t("search", { returnObjects: true });

  const dataCode = `import type { SelectOption } from "@gem-org/gem-system";

${toTsArray("COUNTRIES", ": SelectOption[]", countries)}

${toTsArray("ROLES", ": SelectOption[]", roles)}

${toTsArray("WORKSPACES", ": SelectOption[]", workspaces)}

${toTsArray("USERS", "", users)}`;

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseSelect.tsx",
      code: baseCode,
      preview: (
        <BaseSelect
          options={countries}
          texts={{ ...search, ...t("stories.base.texts", { returnObjects: true }) }}
        />
      ),
    },
    {
      id: "multiple",
      file: "MultipleSelect.tsx",
      code: multipleCode,
      preview: (
        <MultipleSelect
          options={countries}
          texts={{ ...search, ...t("stories.multiple.texts", { returnObjects: true }) }}
        />
      ),
    },
    {
      id: "withDescriptions",
      file: "DescriptionsSelect.tsx",
      code: descriptionsCode,
      preview: (
        <DescriptionsSelect
          options={roles}
          texts={t("stories.withDescriptions.texts", { returnObjects: true })}
        />
      ),
    },
    {
      id: "withoutSearch",
      file: "WithoutSearchSelect.tsx",
      code: withoutSearchCode,
      preview: (
        <WithoutSearchSelect
          options={countries}
          texts={t("stories.withoutSearch.texts", { returnObjects: true })}
        />
      ),
    },
    {
      id: "clearable",
      file: "ClearableSelect.tsx",
      code: clearableCode,
      preview: (
        <ClearableSelect
          options={countries}
          texts={{ ...search, ...t("stories.clearable.texts", { returnObjects: true }) }}
        />
      ),
    },
    {
      id: "withoutChevron",
      file: "WithoutChevronSelect.tsx",
      code: withoutChevronCode,
      preview: (
        <WithoutChevronSelect
          options={countries}
          texts={{ ...search, ...t("stories.withoutChevron.texts", { returnObjects: true }) }}
        />
      ),
    },
    {
      id: "disabled",
      file: "DisabledSelect.tsx",
      code: disabledCode,
      preview: (
        <DisabledSelect
          options={countries}
          texts={t("stories.disabled.texts", { returnObjects: true })}
        />
      ),
    },
    {
      id: "error",
      file: "ErrorSelect.tsx",
      code: errorCode,
      preview: (
        <ErrorSelect
          options={countries}
          texts={{ ...search, ...t("stories.error.texts", { returnObjects: true }) }}
        />
      ),
    },
    {
      id: "sizes",
      file: "SelectSizes.tsx",
      code: sizesCode,
      preview: (
        <SelectSizes
          options={countries}
          labels={t("stories.sizes.labels", { returnObjects: true })}
        />
      ),
    },
    {
      id: "borders",
      file: "SelectBorders.tsx",
      code: bordersCode,
      preview: <SelectBorders options={countries} />,
    },
    {
      id: "withTooltip",
      file: "TooltipSelect.tsx",
      code: tooltipCode,
      preview: (
        <TooltipSelect
          options={workspaces}
          texts={t("stories.withTooltip.texts", { returnObjects: true })}
        />
      ),
    },
    {
      id: "controlled",
      file: "ControlledSelect.tsx",
      code: controlledCode,
      preview: (
        <ControlledSelect
          options={countries}
          texts={{ ...search, ...t("stories.controlled.texts", { returnObjects: true }) }}
        />
      ),
    },
    {
      id: "controlledMultiple",
      file: "ControlledMultipleSelect.tsx",
      code: controlledMultipleCode,
      preview: (
        <ControlledMultipleSelect
          options={countries}
          texts={{ ...search, ...t("stories.controlledMultiple.texts", { returnObjects: true }) }}
        />
      ),
    },
    {
      id: "fieldMapping",
      file: "FieldMappingSelect.tsx",
      code: fieldMappingCode,
      preview: (
        <FieldMappingSelect
          users={users}
          texts={{ ...search, ...t("stories.fieldMapping.texts", { returnObjects: true }) }}
        />
      ),
    },
    {
      id: "loadingThenDefault",
      file: "LoadingSelect.tsx",
      code: loadingCode,
      preview: (
        <LoadingSelect
          users={users}
          texts={{ ...search, ...t("stories.loadingThenDefault.texts", { returnObjects: true }) }}
        />
      ),
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Select } from "@gem-org/gem-system"'
      />

      <SelectPlayground />

      <DocsSection title={t("data.title")} description={t("data.description")}>
        <CodeBlock code={dataCode} label="data.ts" />
      </DocsSection>

      {stories.map((story) => (
        <DocsSection
          key={story.id}
          title={t(`stories.${story.id}.title`)}
          description={t(`stories.${story.id}.description`)}
        >
          <DemoBlock code={story.code} label={story.file} overflow>
            <div className="select-demo">{story.preview}</div>
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindSelect.tsx" overflow>
            <div className="select-demo select-demo--wide">
              <TailwindSelect
                options={countries}
                texts={t("styleChanges.tailwind", { returnObjects: true })}
              />
            </div>
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantSelect.tsx" overflow>
            <div className="select-demo">
              <VariantSelects options={countries} />
            </div>
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="select-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledSelects.tsx" overflow>
              <div className="select-demo">
                <StyledSelects
                  options={countries}
                  texts={t("styleChanges.css", { returnObjects: true })}
                />
              </div>
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Select"
        to="/system/components/select/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
