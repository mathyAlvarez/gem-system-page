/**
 * Ecosystem product zones. Each zone has its own sidebar navigation.
 * Routes live under `/system`, `/effects` and `/transitions`.
 */

export const PRODUCT_IDS = ["system", "effects", "transitions"] as const;

export type ProductId = (typeof PRODUCT_IDS)[number];

export type ProductMeta = {
  id: ProductId;
  /** Navbar / selector label key in `common.products`. */
  labelKey: "system" | "effects" | "transitions";
  /** Brand text in the docs navbar. */
  brand: string;
  /** Default entry when switching to this product. */
  homePath: string;
  /** Package shown in the ecosystem home cards. */
  packageName: string;
};

export const PRODUCTS: Record<ProductId, ProductMeta> = {
  system: {
    id: "system",
    labelKey: "system",
    brand: "Gem System",
    homePath: "/system/getting-started",
    packageName: "@gem-org/gem-system",
  },
  effects: {
    id: "effects",
    labelKey: "effects",
    brand: "Gemffects",
    homePath: "/effects/getting-started",
    packageName: "@gem-org/gemffects",
  },
  transitions: {
    id: "transitions",
    labelKey: "transitions",
    brand: "Gemsitions",
    homePath: "/transitions/getting-started",
    packageName: "@gem-org/gemsitions",
  },
};

export const PRODUCT_LIST = PRODUCT_IDS.map((id) => PRODUCTS[id]);

/** Absolute docs path under a product, e.g. `productPath("system", "components/button")`. */
export function productPath(product: ProductId, ...segments: string[]): string {
  const rest = segments
    .flatMap((segment) => segment.split("/"))
    .map((part) => part.trim())
    .filter(Boolean)
    .join("/");
  return rest ? `/${product}/${rest}` : `/${product}`;
}

/** Which product owns the current pathname, or `null` outside docs zones. */
export function resolveProduct(pathname: string): ProductId | null {
  const segment = pathname.split("/").filter(Boolean)[0];
  return PRODUCT_IDS.includes(segment as ProductId) ? (segment as ProductId) : null;
}

/** Pathnames that used to live at the root and now live under `/system`. */
export const SYSTEM_LEGACY_ROOTS = [
  "getting-started",
  "override-styles",
  "foundations",
  "components",
  "layout",
  "navigation",
  "feedback",
  "data-display",
] as const;
