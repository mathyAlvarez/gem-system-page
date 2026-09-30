import { Breadcrumbs, type BreadcrumbItem } from "@gem-org/gem-system";
import { Folder, Home, Settings } from "@gem-org/gem-system/icons";
import type { BreadcrumbTexts } from "./demo.ts";

type IconsBreadcrumbsProps = { texts: BreadcrumbTexts };

export function IconsBreadcrumbs({ texts }: IconsBreadcrumbsProps) {
  const items: BreadcrumbItem[] = [
    { id: "home", label: texts.crumbs.home, icon: <Home size="sm" /> },
    { id: "files", label: texts.crumbs.files, icon: <Folder size="sm" /> },
    { id: "settings", label: texts.crumbs.settings, icon: <Settings size="sm" /> },
  ];

  return <Breadcrumbs items={items} navLabel={texts.navLabel} />;
}
