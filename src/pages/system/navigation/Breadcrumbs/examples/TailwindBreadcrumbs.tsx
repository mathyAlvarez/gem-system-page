import { Breadcrumbs, type BreadcrumbsProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";
import { baseItems, type BreadcrumbTexts } from "./demo.ts";
import "./breadcrumbs-demo.css";

function PillBreadcrumbs({ className, classNames, ...props }: BreadcrumbsProps) {
  return (
    <Breadcrumbs
      className={cn("[--gem-breadcrumbs-current:var(--gem-color-fg)]", className)}
      classNames={{
        ...classNames,
        link: cn("rounded-full px-3 py-1 hover:bg-(--gem-color-primary-100)", classNames?.link),
        current: cn("rounded-full bg-(--gem-color-bg-subtle) px-3 py-1", classNames?.current),
        separator: cn("mx-1 opacity-50", classNames?.separator),
      }}
      {...props}
    />
  );
}

type TailwindBreadcrumbsProps = { texts: BreadcrumbTexts };

export function TailwindBreadcrumbs({ texts }: TailwindBreadcrumbsProps) {
  const items = baseItems(texts);

  return (
    <div className="crumbs-stack">
      <PillBreadcrumbs items={items} navLabel={texts.navLabel} />
      <PillBreadcrumbs
        items={items}
        separator="/"
        className="uppercase tracking-wider"
        size="sm"
        navLabel={`${texts.navLabel} 2`}
      />
    </div>
  );
}
