import { useTranslation } from "react-i18next";
import { CodeBlock, DemoBlock } from "../../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../../components/StyleChangesSection.tsx";
import { BrandButton } from "./examples/BrandButton.tsx";
import brandButtonCode from "./examples/BrandButton.tsx?raw";
import brandButtonCss from "./examples/brand-button.css?raw";
import { TailwindButton } from "./examples/TailwindButton.tsx";
import tailwindButtonCode from "./examples/TailwindButton.tsx?raw";
import { ToneButtons } from "./examples/ToneButton.tsx";
import toneButtonCode from "./examples/ToneButton.tsx?raw";

export function ButtonOverrides() {
  const { t } = useTranslation("button");
  const label = t("overrides.label");

  return (
    <StyleChangesSection
      tailwind={
        <DemoBlock code={tailwindButtonCode} label="TailwindButton.tsx">
          <TailwindButton label={label} />
        </DemoBlock>
      }
      cva={
        <DemoBlock code={toneButtonCode} label="ToneButton.tsx">
          <ToneButtons />
        </DemoBlock>
      }
      cssVariables={
        <>
          <CodeBlock code={brandButtonCss} label="brand-button.css" language="css" />
          <DemoBlock code={brandButtonCode} label="BrandButton.tsx">
            <BrandButton label={label} />
          </DemoBlock>
        </>
      }
    />
  );
}
