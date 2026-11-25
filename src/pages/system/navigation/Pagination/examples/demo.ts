import type { PaginationProps, PaginationRange } from "@gem-org/gem-system";

export type PaginationTexts = {
  navLabel: string;
  pageSizeLabel: string;
  firstLabel: string;
  previousLabel: string;
  nextLabel: string;
  lastLabel: string;
  page: string;
  summary: string;
  invoice: string;
  status: { paid: string; open: string; overdue: string };
};

export function fill(template: string, values: Record<string, number>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => String(values[key] ?? match));
}

export function paginationLabels(texts: PaginationTexts) {
  return {
    navLabel: texts.navLabel,
    pageSizeLabel: texts.pageSizeLabel,
    firstLabel: texts.firstLabel,
    previousLabel: texts.previousLabel,
    nextLabel: texts.nextLabel,
    lastLabel: texts.lastLabel,
    pageLabel: (page: number) => fill(texts.page, { page }),
    showSummary: (range: PaginationRange) => fill(texts.summary, range),
  } satisfies Partial<PaginationProps>;
}

export function invoices(texts: PaginationTexts, total = 87) {
  return Array.from({ length: total }, (_, index) => ({
    id: index + 1,
    name: `${texts.invoice} ${String(index + 1).padStart(3, "0")}`,
    status:
      index % 7 === 0
        ? texts.status.overdue
        : index % 3 === 0
          ? texts.status.paid
          : texts.status.open,
  }));
}
