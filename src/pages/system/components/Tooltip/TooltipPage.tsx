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
import { TooltipPlayground } from "./TooltipPlayground.tsx";
import { BaseTooltip } from "./examples/BaseTooltip.tsx";
import baseCode from "./examples/BaseTooltip.tsx?raw";
import { ControlledTooltip } from "./examples/ControlledTooltip.tsx";
import controlledCode from "./examples/ControlledTooltip.tsx?raw";
import { DisabledTooltip } from "./examples/DisabledTooltip.tsx";
import disabledCode from "./examples/DisabledTooltip.tsx?raw";
import { IconButtonTooltip } from "./examples/IconButtonTooltip.tsx";
import iconButtonCode from "./examples/IconButtonTooltip.tsx?raw";
import { InstantTooltip } from "./examples/InstantTooltip.tsx";
import instantCode from "./examples/InstantTooltip.tsx?raw";
import { LongContentTooltip } from "./examples/LongContentTooltip.tsx";
import longContentCode from "./examples/LongContentTooltip.tsx?raw";
import { StyledTooltips } from "./examples/StyledTooltips.tsx";
import styledCode from "./examples/StyledTooltips.tsx?raw";
import { TailwindTooltip } from "./examples/TailwindTooltip.tsx";
import tailwindCode from "./examples/TailwindTooltip.tsx?raw";
import overridesCss from "./examples/tooltip-overrides.css?raw";
import { TooltipPlacements } from "./examples/TooltipPlacements.tsx";
import placementsCode from "./examples/TooltipPlacements.tsx?raw";
import { VariantTooltips } from "./examples/VariantTooltip.tsx";
import variantCode from "./examples/VariantTooltip.tsx?raw";
import "./TooltipPage.scss";

type StoryId =
  "base" | "placements" | "onIconButton" | "longContent" | "instant" | "disabled" | "controlled";

type Story = {
  id: StoryId;
  file: string;
  code: string;
  preview: ReactNode;
};

export function TooltipPage() {
  const { t } = useTranslation("tooltip");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseTooltip.tsx",
      code: baseCode,
      preview: <BaseTooltip {...t("stories.base.texts", { returnObjects: true })} />,
    },
    {
      id: "placements",
      file: "TooltipPlacements.tsx",
      code: placementsCode,
      preview: <TooltipPlacements {...t("stories.placements.texts", { returnObjects: true })} />,
    },
    {
      id: "onIconButton",
      file: "IconButtonTooltip.tsx",
      code: iconButtonCode,
      preview: <IconButtonTooltip {...t("stories.onIconButton.texts", { returnObjects: true })} />,
    },
    {
      id: "longContent",
      file: "LongContentTooltip.tsx",
      code: longContentCode,
      preview: <LongContentTooltip {...t("stories.longContent.texts", { returnObjects: true })} />,
    },
    {
      id: "instant",
      file: "InstantTooltip.tsx",
      code: instantCode,
      preview: <InstantTooltip {...t("stories.instant.texts", { returnObjects: true })} />,
    },
    {
      id: "disabled",
      file: "DisabledTooltip.tsx",
      code: disabledCode,
      preview: <DisabledTooltip {...t("stories.disabled.texts", { returnObjects: true })} />,
    },
    {
      id: "controlled",
      file: "ControlledTooltip.tsx",
      code: controlledCode,
      preview: <ControlledTooltip {...t("stories.controlled.texts", { returnObjects: true })} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Tooltip } from "@gem-org/gem-system"'
      />

      <TooltipPlayground />

      {stories.map((story) => (
        <DocsSection
          key={story.id}
          title={t(`stories.${story.id}.title`)}
          description={t(`stories.${story.id}.description`)}
        >
          <DemoBlock code={story.code} label={story.file}>
            {story.preview}
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindTooltip.tsx">
            <TailwindTooltip texts={t("styleChanges.tailwind", { returnObjects: true })} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantTooltip.tsx">
            <VariantTooltips content={t("styleChanges.cva.content")} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="tooltip-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledTooltips.tsx">
              <StyledTooltips texts={t("styleChanges.css", { returnObjects: true })} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Tooltip"
        to="/system/components/tooltip/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
