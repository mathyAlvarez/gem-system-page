export const PROPERTY_LIST_SIZES = ["sm", "md", "lg"] as const;
export const PROPERTY_LIST_LAYOUTS = ["horizontal", "vertical"] as const;
export const PROPERTY_LIST_ALIGNS = ["start", "end"] as const;
export const PROPERTY_LIST_RADII = ["sm", "md", "lg"] as const;

export type Row = { key: string; label: string; children?: string; span?: number };

export type RowsCopy = { title: string; items: Row[] };
