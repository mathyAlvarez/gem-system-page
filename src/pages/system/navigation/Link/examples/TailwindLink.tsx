import { Link, type LinkProps } from "@gem-org/gem-system";
import { ArrowRight } from "@gem-org/gem-system/icons";
import { cn } from "@/lib/cn";
import type { LinkTexts } from "./demo.ts";
import "./link-demo.css";

function AccentLink({ className, classNames, ...props }: LinkProps) {
  return (
    <Link
      underline="always"
      className={cn(
        "decoration-(--gem-color-primary-200) decoration-2 underline-offset-4 hover:decoration-(--gem-link-fg-hover)",
        className,
      )}
      classNames={{
        ...classNames,
        icon: cn("transition-transform group-hover:translate-x-0.5", classNames?.icon),
      }}
      {...props}
    />
  );
}

type TailwindLinkProps = { texts: LinkTexts };

export function TailwindLink({ texts }: TailwindLinkProps) {
  return (
    <div className="link-stack">
      <AccentLink href="/guide">{texts.guide}</AccentLink>
      <AccentLink
        href="/checkout"
        className="group uppercase tracking-wider"
        size="sm"
        rightIcon={<ArrowRight size="xs" />}
      >
        {texts.continue}
      </AccentLink>
    </div>
  );
}
