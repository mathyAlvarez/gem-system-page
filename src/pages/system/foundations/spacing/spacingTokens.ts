import type { CSSProperties } from "react";
import { space, type SpaceToken } from "@gem-org/gem-system/tokens";

export const spaceOrder = Object.keys(space).map(Number) as SpaceToken[];

const LIGHT_TEXT = "#ffffff";
const DARK_TEXT = "#111316";

export type GridCell = { bg: string; fg: string };

export function cellStyle(cell: GridCell) {
  return {
    "--spacing-cell-bg": `var(--gem-palette-${cell.bg})`,
    "--spacing-cell-fg": cell.fg,
  } as CSSProperties;
}

export const gridCells = [
  { span: 12, bg: "primary-500", fg: LIGHT_TEXT },
  { span: 6, bg: "secondary-500", fg: LIGHT_TEXT },
  { span: 6, bg: "tertiary-500", fg: DARK_TEXT },
  { span: 4, bg: "success-500", fg: LIGHT_TEXT },
  { span: 4, bg: "warning-500", fg: DARK_TEXT },
  { span: 4, bg: "error-500", fg: LIGHT_TEXT },
  { span: 3, bg: "info-500", fg: LIGHT_TEXT },
  { span: 3, bg: "primary-300", fg: DARK_TEXT },
  { span: 3, bg: "secondary-300", fg: DARK_TEXT },
  { span: 3, bg: "tertiary-300", fg: DARK_TEXT },
  { span: 8, bg: "primary-700", fg: LIGHT_TEXT },
  { span: 4, bg: "secondary-700", fg: LIGHT_TEXT },
] as const;

export const columnLayouts = [
  {
    cols: 4,
    cells: [
      { bg: "primary-500", fg: LIGHT_TEXT },
      { bg: "secondary-500", fg: LIGHT_TEXT },
      { bg: "tertiary-500", fg: DARK_TEXT },
      { bg: "success-500", fg: LIGHT_TEXT },
    ],
  },
  {
    cols: 3,
    cells: [
      { bg: "info-500", fg: LIGHT_TEXT },
      { bg: "warning-500", fg: DARK_TEXT },
      { bg: "error-500", fg: LIGHT_TEXT },
    ],
  },
  {
    cols: 2,
    cells: [
      { bg: "primary-700", fg: LIGHT_TEXT },
      { bg: "secondary-300", fg: DARK_TEXT },
    ],
  },
] as const;
