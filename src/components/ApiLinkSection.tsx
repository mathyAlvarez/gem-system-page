import { Button } from "@gem-org/gem-system";
import { ArrowRight } from "@gem-org/gem-system/icons";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { DocsSection } from "./DocsPrimitives.tsx";

type ApiLinkSectionProps = {
  component: string;
  to: string;
  linkLabel: string;
};

export function ApiLinkSection({ component, to, linkLabel }: ApiLinkSectionProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <DocsSection
      title={t("apiSection.title")}
      description={t("apiSection.description", { component })}
      id="api"
    >
      <div>
        <Button variant="link" rightIcon={<ArrowRight size="sm" />} onClick={() => navigate(to)}>
          {linkLabel}
        </Button>
      </div>
    </DocsSection>
  );
}
