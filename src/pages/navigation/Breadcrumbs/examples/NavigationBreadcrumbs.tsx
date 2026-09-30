import { useState } from "react";
import { Breadcrumbs, Button, type BreadcrumbItem } from "@gem-org/gem-system";
import { longItems, type BreadcrumbTexts } from "./demo.ts";
import "./breadcrumbs-demo.css";

type NavigationBreadcrumbsProps = { texts: BreadcrumbTexts; lastClick: string; none: string; reset: string };

export function NavigationBreadcrumbs({ texts, lastClick, none, reset }: NavigationBreadcrumbsProps) {
  const trail = longItems(texts);
  const [depth, setDepth] = useState(trail.length);
  const [message, setMessage] = useState(none);

  const handleClick = (item: BreadcrumbItem, previous: BreadcrumbItem | null) => {
    setDepth(trail.findIndex((crumb) => crumb.id === item.id) + 1);
    setMessage(`${previous?.label ?? "—"} → ${item.label}`);
  };

  const items = trail.slice(0, depth);
  const current = items[items.length - 1];

  return (
    <div className="crumbs-page">
      <Breadcrumbs
        items={items}
        onItemClick={handleClick}
        navLabel={texts.navLabel}
        overflowLabel={texts.overflowLabel}
      />
      <h3 className="crumbs-page__title">{current.label}</h3>
      <p className="crumbs-page__text">
        {lastClick}: {message}
      </p>
      <Button
        className="mt-3"
        variant="secondary"
        size="sm"
        onClick={() => {
          setDepth(trail.length);
          setMessage(none);
        }}
      >
        {reset}
      </Button>
    </div>
  );
}
