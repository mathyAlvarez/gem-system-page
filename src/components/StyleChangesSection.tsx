import type { ReactNode } from "react";
import { Button } from "@gem-org/gem-system";
import { ArrowRight } from "@gem-org/gem-system/icons";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { DocsSection } from "./DocsPrimitives.tsx";

type StyleChangesSectionProps = {
  tailwind: ReactNode;
  cva: ReactNode;
  cssVariables: ReactNode;
};

export function StyleChangesSection({ tailwind, cva, cssVariables }: StyleChangesSectionProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <DocsSection title={t("styleChanges.title")} id="style-changes">
      <DocsSection sub title={t("styleChanges.tailwind")} id="style-changes-tailwind">
        {tailwind}
      </DocsSection>
      <DocsSection sub title={t("styleChanges.cva")} id="style-changes-cva">
        {cva}
      </DocsSection>
      <DocsSection sub title={t("styleChanges.cssVariables")} id="style-changes-css-variables">
        {cssVariables}
      </DocsSection>
      <div>
        <Button variant="link" rightIcon={<ArrowRight size="sm" />} onClick={() => navigate("/override-styles")}>
          {t("styleChanges.guide")}
        </Button>
      </div>
    </DocsSection>
  );
}
