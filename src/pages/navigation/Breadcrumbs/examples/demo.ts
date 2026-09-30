import type { BreadcrumbItem } from "@gem-org/gem-system";

export type BreadcrumbTexts = {
  navLabel: string;
  overflowLabel: string;
  crumbs: {
    home: string;
    docs: string;
    components: string;
    breadcrumbs: string;
    workspace: string;
    projects: string;
    navigation: string;
    files: string;
    settings: string;
  };
};

export function baseItems({ crumbs }: BreadcrumbTexts): BreadcrumbItem[] {
  return [
    { id: "home", label: crumbs.home },
    { id: "docs", label: crumbs.docs },
    { id: "components", label: crumbs.components },
    { id: "breadcrumbs", label: crumbs.breadcrumbs },
  ];
}

export function longItems({ crumbs }: BreadcrumbTexts): BreadcrumbItem[] {
  return [
    { id: "home", label: crumbs.home },
    { id: "workspace", label: crumbs.workspace },
    { id: "projects", label: crumbs.projects },
    { id: "gem", label: "gem-system" },
    { id: "navigation", label: crumbs.navigation },
    { id: "breadcrumbs", label: crumbs.breadcrumbs },
  ];
}
