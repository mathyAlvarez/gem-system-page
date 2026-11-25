import type { ProductId } from "./products.ts";

export type DocsVersion = {
  id: string;
  label: string;
  /** Origin where this version is deployed. Empty for the version served by this build. */
  url: string;
};

export type ProductVersions = {
  /** Version documented by this build for this product. Must match an `id` in `versions`. */
  currentId: string;
  /** Newest first. Add an entry per published major version of this product. */
  versions: DocsVersion[];
};

/**
 * Version catalogs per product. System, Effects and Transitions ship on
 * independent majors, so the navbar select always reads from the active zone.
 */
export const productVersions: Record<ProductId, ProductVersions> = {
  system: {
    currentId: "v2",
    versions: [{ id: "v2", label: "v2", url: "" }],
  },
  effects: {
    currentId: "v1",
    versions: [{ id: "v1", label: "v1", url: "" }],
  },
  transitions: {
    currentId: "v1",
    versions: [{ id: "v1", label: "v1", url: "" }],
  },
};

export function versionsFor(product: ProductId): ProductVersions {
  return productVersions[product];
}
