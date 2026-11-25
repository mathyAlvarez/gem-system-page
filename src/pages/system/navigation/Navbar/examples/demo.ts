import { useState } from "react";
import type { NavbarItem } from "@gem-org/gem-system";

export type NavbarTexts = {
  brandLabel: string;
  navLabel: string;
  menuLabel: string;
  closeLabel: string;
  pageTitle: string;
  signIn: string;
  getStarted: string;
  items: string[];
};

type DemoItemsOptions = { disabled?: number[] };

export function useDemoItems(
  labels: string[],
  { disabled = [] }: DemoItemsOptions = {},
): NavbarItem[] {
  const [current, setCurrent] = useState(0);

  return labels.map((label, index) => ({
    id: `item-${index}`,
    label,
    current: index === current,
    disabled: disabled.includes(index),
    onClick: () => setCurrent(index),
  }));
}
