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
import { StaggerGroupPlayground } from "./StaggerGroupPlayground.tsx";
import { AsChildStaggerGroup } from "./examples/AsChildStaggerGroup.tsx";
import asChildCode from "./examples/AsChildStaggerGroup.tsx?raw";
import { BaseStaggerGroup } from "./examples/BaseStaggerGroup.tsx";
import baseCode from "./examples/BaseStaggerGroup.tsx?raw";
import { CallbacksStaggerGroup } from "./examples/CallbacksStaggerGroup.tsx";
import callbacksCode from "./examples/CallbacksStaggerGroup.tsx?raw";
import { DirectionItemEnterStaggerGroup } from "./examples/DirectionItemEnterStaggerGroup.tsx";
import directionItemEnterCode from "./examples/DirectionItemEnterStaggerGroup.tsx?raw";
import { DirectionStaggerGroup } from "./examples/DirectionStaggerGroup.tsx";
import directionCode from "./examples/DirectionStaggerGroup.tsx?raw";
import { DisabledStaggerGroup } from "./examples/DisabledStaggerGroup.tsx";
import disabledCode from "./examples/DisabledStaggerGroup.tsx?raw";
import { ForwardExitStaggerGroup } from "./examples/ForwardExitStaggerGroup.tsx";
import forwardExitCode from "./examples/ForwardExitStaggerGroup.tsx?raw";
import { FromSidesStaggerGroup } from "./examples/FromSidesStaggerGroup.tsx";
import fromSidesCode from "./examples/FromSidesStaggerGroup.tsx?raw";
import { GridStaggerGroup } from "./examples/GridStaggerGroup.tsx";
import gridCode from "./examples/GridStaggerGroup.tsx?raw";
import { OnItemEnterStaggerGroup } from "./examples/OnItemEnterStaggerGroup.tsx";
import onItemEnterCode from "./examples/OnItemEnterStaggerGroup.tsx?raw";
import { PreserveSpaceStaggerGroup } from "./examples/PreserveSpaceStaggerGroup.tsx";
import preserveSpaceCode from "./examples/PreserveSpaceStaggerGroup.tsx?raw";
import { ShuffledStaggerGroup } from "./examples/ShuffledStaggerGroup.tsx";
import shuffledCode from "./examples/ShuffledStaggerGroup.tsx?raw";
import { StyledStaggerGroup } from "./examples/StyledStaggerGroup.tsx";
import styledCode from "./examples/StyledStaggerGroup.tsx?raw";
import overridesCss from "./examples/stagger-group-overrides.css?raw";
import { TailwindStaggerGroup } from "./examples/TailwindStaggerGroup.tsx";
import tailwindCode from "./examples/TailwindStaggerGroup.tsx?raw";
import { TimingStaggerGroup } from "./examples/TimingStaggerGroup.tsx";
import timingCode from "./examples/TimingStaggerGroup.tsx?raw";
import { UtilitiesStaggerGroup } from "./examples/UtilitiesStaggerGroup.tsx";
import utilitiesCode from "./examples/UtilitiesStaggerGroup.tsx?raw";
import { VariantStaggerGroup } from "./examples/VariantStaggerGroup.tsx";
import variantCode from "./examples/VariantStaggerGroup.tsx?raw";
import "./StaggerGroupPage.scss";

type StoryId =
  | "base"
  | "grid"
  | "timing"
  | "forwardExit"
  | "preserveSpace"
  | "direction"
  | "fromSides"
  | "onItemEnter"
  | "directionItemEnter"
  | "shuffled"
  | "callbacks"
  | "disabled"
  | "asChild"
  | "utilities";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

const importCode = `import "@gem-org/gemsitions/stagger-group.css";
import { StaggerGroup } from "@gem-org/gemsitions/stagger-group";`;

const story = { returnObjects: true } as const;

export function StaggerGroupPage() {
  const { t } = useTranslation("staggerGroup");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseStaggerGroup.tsx",
      code: baseCode,
      preview: <BaseStaggerGroup {...t("stories.base.texts", story)} />,
    },
    {
      id: "grid",
      file: "GridStaggerGroup.tsx",
      code: gridCode,
      preview: <GridStaggerGroup {...t("stories.grid.texts", story)} />,
    },
    {
      id: "timing",
      file: "TimingStaggerGroup.tsx",
      code: timingCode,
      preview: <TimingStaggerGroup {...t("stories.timing.texts", story)} />,
    },
    {
      id: "forwardExit",
      file: "ForwardExitStaggerGroup.tsx",
      code: forwardExitCode,
      preview: <ForwardExitStaggerGroup {...t("stories.forwardExit.texts", story)} />,
    },
    {
      id: "preserveSpace",
      file: "PreserveSpaceStaggerGroup.tsx",
      code: preserveSpaceCode,
      preview: <PreserveSpaceStaggerGroup {...t("stories.preserveSpace.texts", story)} />,
    },
    {
      id: "direction",
      file: "DirectionStaggerGroup.tsx",
      code: directionCode,
      preview: <DirectionStaggerGroup {...t("stories.direction.texts", story)} />,
    },
    {
      id: "fromSides",
      file: "FromSidesStaggerGroup.tsx",
      code: fromSidesCode,
      preview: <FromSidesStaggerGroup {...t("stories.fromSides.texts", story)} />,
    },
    {
      id: "onItemEnter",
      file: "OnItemEnterStaggerGroup.tsx",
      code: onItemEnterCode,
      preview: <OnItemEnterStaggerGroup {...t("stories.onItemEnter.texts", story)} />,
    },
    {
      id: "directionItemEnter",
      file: "DirectionItemEnterStaggerGroup.tsx",
      code: directionItemEnterCode,
      preview: <DirectionItemEnterStaggerGroup {...t("stories.directionItemEnter.texts", story)} />,
    },
    {
      id: "shuffled",
      file: "ShuffledStaggerGroup.tsx",
      code: shuffledCode,
      preview: <ShuffledStaggerGroup {...t("stories.shuffled.texts", story)} />,
    },
    {
      id: "callbacks",
      file: "CallbacksStaggerGroup.tsx",
      code: callbacksCode,
      preview: <CallbacksStaggerGroup {...t("stories.callbacks.texts", story)} />,
    },
    {
      id: "disabled",
      file: "DisabledStaggerGroup.tsx",
      code: disabledCode,
      preview: <DisabledStaggerGroup {...t("stories.disabled.texts", story)} />,
    },
    {
      id: "asChild",
      file: "AsChildStaggerGroup.tsx",
      code: asChildCode,
      preview: <AsChildStaggerGroup {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "utilities",
      file: "UtilitiesStaggerGroup.tsx",
      code: utilitiesCode,
      preview: <UtilitiesStaggerGroup {...t("stories.utilities.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath={importCode}
      />

      <StaggerGroupPlayground />

      {stories.map((item) => (
        <DocsSection
          key={item.id}
          title={t(`stories.${item.id}.title`)}
          description={t(`stories.${item.id}.description`)}
        >
          <DemoBlock code={item.code} label={item.file} stack>
            {item.preview}
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindStaggerGroup.tsx" stack>
            <TailwindStaggerGroup {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantStaggerGroup.tsx" stack>
            <VariantStaggerGroup {...t("styles.variant", story)} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="stagger-group-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledStaggerGroup.tsx" stack>
              <StyledStaggerGroup {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="StaggerGroup"
        to="/transitions/lists-sequences/stagger-group/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
