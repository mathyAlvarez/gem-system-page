import type { AccordionItem } from "@gem-org/gem-system";

export const ACCORDION_TYPES = ["multiple", "single"] as const;
export const ACCORDION_VARIANTS = ["connected", "separated", "flush"] as const;
export const ACCORDION_SIZES = ["sm", "md", "lg"] as const;

export type AccordionSection = { id: string; title: string; subtitle?: string; content: string };

export type AccordionCommon = { sections: AccordionSection[] };

export const toItems = (sections: AccordionSection[]): AccordionItem[] =>
  sections.map(({ id, title, subtitle, content }) => ({ id, title, subtitle, content }));
