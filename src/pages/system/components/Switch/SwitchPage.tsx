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
import { SwitchPlayground } from "./SwitchPlayground.tsx";
import { BaseSwitch } from "./examples/BaseSwitch.tsx";
import baseCode from "./examples/BaseSwitch.tsx?raw";
import { ControlledSwitch } from "./examples/ControlledSwitch.tsx";
import controlledCode from "./examples/ControlledSwitch.tsx?raw";
import { DisabledOffSwitch } from "./examples/DisabledOffSwitch.tsx";
import disabledOffCode from "./examples/DisabledOffSwitch.tsx?raw";
import { DisabledSwitch } from "./examples/DisabledSwitch.tsx";
import disabledCode from "./examples/DisabledSwitch.tsx?raw";
import { ErrorSwitch } from "./examples/ErrorSwitch.tsx";
import errorCode from "./examples/ErrorSwitch.tsx?raw";
import { LabelStartSwitch } from "./examples/LabelStartSwitch.tsx";
import labelStartCode from "./examples/LabelStartSwitch.tsx?raw";
import { OnSwitch } from "./examples/OnSwitch.tsx";
import onCode from "./examples/OnSwitch.tsx?raw";
import { RequiredSwitch } from "./examples/RequiredSwitch.tsx";
import requiredCode from "./examples/RequiredSwitch.tsx?raw";
import { StyledSwitches } from "./examples/StyledSwitches.tsx";
import styledCode from "./examples/StyledSwitches.tsx?raw";
import overridesCss from "./examples/switch-overrides.css?raw";
import { SwitchSizes } from "./examples/SwitchSizes.tsx";
import sizesCode from "./examples/SwitchSizes.tsx?raw";
import { SwitchTones } from "./examples/SwitchTones.tsx";
import tonesCode from "./examples/SwitchTones.tsx?raw";
import { SwitchWithoutLabel } from "./examples/SwitchWithoutLabel.tsx";
import withoutLabelCode from "./examples/SwitchWithoutLabel.tsx?raw";
import { TailwindSwitch } from "./examples/TailwindSwitch.tsx";
import tailwindCode from "./examples/TailwindSwitch.tsx?raw";
import { TooltipSwitch } from "./examples/TooltipSwitch.tsx";
import tooltipCode from "./examples/TooltipSwitch.tsx?raw";
import { VariantSwitches } from "./examples/VariantSwitch.tsx";
import variantCode from "./examples/VariantSwitch.tsx?raw";
import tooltipCss from "./examples/with-tooltip.css?raw";
import "./SwitchPage.scss";

type StoryId =
  | "base"
  | "on"
  | "disabled"
  | "disabledOff"
  | "error"
  | "required"
  | "tones"
  | "sizes"
  | "labelStart"
  | "withoutLabel"
  | "controlled"
  | "withTooltip";

type Story = {
  id: StoryId;
  file: string;
  code: string;
  preview: ReactNode;
  css?: { code: string; file: string };
};

export function SwitchPage() {
  const { t } = useTranslation("switch");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseSwitch.tsx",
      code: baseCode,
      preview: <BaseSwitch {...t("stories.base.texts", { returnObjects: true })} />,
    },
    {
      id: "on",
      file: "OnSwitch.tsx",
      code: onCode,
      preview: <OnSwitch {...t("stories.on.texts", { returnObjects: true })} />,
    },
    {
      id: "disabled",
      file: "DisabledSwitch.tsx",
      code: disabledCode,
      preview: <DisabledSwitch {...t("stories.disabled.texts", { returnObjects: true })} />,
    },
    {
      id: "disabledOff",
      file: "DisabledOffSwitch.tsx",
      code: disabledOffCode,
      preview: <DisabledOffSwitch {...t("stories.disabledOff.texts", { returnObjects: true })} />,
    },
    {
      id: "error",
      file: "ErrorSwitch.tsx",
      code: errorCode,
      preview: <ErrorSwitch {...t("stories.error.texts", { returnObjects: true })} />,
    },
    {
      id: "required",
      file: "RequiredSwitch.tsx",
      code: requiredCode,
      preview: <RequiredSwitch {...t("stories.required.texts", { returnObjects: true })} />,
    },
    {
      id: "tones",
      file: "SwitchTones.tsx",
      code: tonesCode,
      preview: <SwitchTones />,
    },
    {
      id: "sizes",
      file: "SwitchSizes.tsx",
      code: sizesCode,
      preview: <SwitchSizes labels={t("stories.sizes.labels", { returnObjects: true })} />,
    },
    {
      id: "labelStart",
      file: "LabelStartSwitch.tsx",
      code: labelStartCode,
      preview: <LabelStartSwitch {...t("stories.labelStart.texts", { returnObjects: true })} />,
    },
    {
      id: "withoutLabel",
      file: "SwitchWithoutLabel.tsx",
      code: withoutLabelCode,
      preview: <SwitchWithoutLabel {...t("stories.withoutLabel.texts", { returnObjects: true })} />,
    },
    {
      id: "controlled",
      file: "ControlledSwitch.tsx",
      code: controlledCode,
      preview: <ControlledSwitch {...t("stories.controlled.texts", { returnObjects: true })} />,
    },
    {
      id: "withTooltip",
      file: "TooltipSwitch.tsx",
      code: tooltipCode,
      preview: <TooltipSwitch {...t("stories.withTooltip.texts", { returnObjects: true })} />,
      css: { code: tooltipCss, file: "with-tooltip.css" },
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Switch } from "@gem-org/gem-system"'
      />

      <SwitchPlayground />

      {stories.map((story) => (
        <DocsSection
          key={story.id}
          title={t(`stories.${story.id}.title`)}
          description={t(`stories.${story.id}.description`)}
        >
          {story.css ? (
            <CodeBlock code={story.css.code} label={story.css.file} language="css" />
          ) : null}
          <DemoBlock code={story.code} label={story.file} stack>
            <div className="switch-demo">{story.preview}</div>
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindSwitch.tsx" stack>
            <div className="switch-demo">
              <TailwindSwitch texts={t("styleChanges.tailwind", { returnObjects: true })} />
            </div>
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantSwitch.tsx" stack>
            <div className="switch-demo">
              <VariantSwitches texts={t("styleChanges.cva", { returnObjects: true })} />
            </div>
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="switch-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledSwitches.tsx" stack>
              <div className="switch-demo">
                <StyledSwitches texts={t("styleChanges.css", { returnObjects: true })} />
              </div>
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Switch"
        to="/system/components/switch/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
