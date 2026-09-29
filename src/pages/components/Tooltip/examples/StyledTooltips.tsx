import { Button, Tooltip } from "@gem-org/gem-system";
import { Info } from "@gem-org/gem-system/icons";
import "./tooltip-overrides.css";

type StyledTooltipsProps = {
  texts: {
    accent: string;
    accentContent: string;
    warning: string;
    warningContent: string;
    soft: string;
    softContent: string;
    rich: string;
    richTitle: string;
    richBody: string;
    inline: string;
    inlineContent: string;
  };
};

export function StyledTooltips({ texts }: StyledTooltipsProps) {
  return (
    <>
      <Tooltip content={texts.accentContent} className="tooltip-accent" delay={0}>
        <Button variant="primary" size="sm">{texts.accent}</Button>
      </Tooltip>
      <Tooltip content={texts.warningContent} className="tooltip-warning" delay={0}>
        <Button variant="warning" size="sm">{texts.warning}</Button>
      </Tooltip>
      <Tooltip content={texts.softContent} className="tooltip-soft" delay={0}>
        <Button variant="secondary" size="sm">{texts.soft}</Button>
      </Tooltip>
      <Tooltip
        className="tooltip-rich tooltip-accent"
        delay={0}
        content={
          <>
            <p className="tooltip-rich__title">{texts.richTitle}</p>
            <p className="tooltip-rich__body">{texts.richBody}</p>
          </>
        }
      >
        <Button variant="info" size="sm" leftIcon={<Info size="sm" />}>
          {texts.rich}
        </Button>
      </Tooltip>
      <Tooltip
        content={texts.inlineContent}
        delay={0}
        style={{
          backgroundColor: "var(--gem-palette-tertiary-500)",
          color: "var(--gem-palette-neutral-950)",
          borderRadius: "var(--gem-radius-full)",
          padding: "0.5rem 0.875rem",
        }}
      >
        <Button variant="tertiary" size="sm">{texts.inline}</Button>
      </Tooltip>
    </>
  );
}
