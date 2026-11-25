import { useState } from "react";
import {
  Pagination,
  Select,
  Typography,
  type PaginationSize,
  type PaginationVariant,
  type SelectValue,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { paginationLabels } from "./examples/demo.ts";
import { paginationSizes, paginationVariants } from "./paginationDocs.ts";

const totalOptions = ["87", "240", "480", "5000"] as const;
const siblingOptions = ["0", "1", "2"] as const;
const boundaryOptions = ["1", "2"] as const;
const booleanOptions = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function PaginationPlayground() {
  const { t } = useTranslation("pagination");
  const texts = t("demo", { returnObjects: true });
  const [variant, setVariant] = useState<string>("outlined");
  const [size, setSize] = useState<string>("md");
  const [total, setTotal] = useState<string>("240");
  const [siblingCount, setSiblingCount] = useState<string>("1");
  const [boundaryCount, setBoundaryCount] = useState<string>("1");
  const [showFirstLast, setShowFirstLast] = useState<string>("true");
  const [showPageSize, setShowPageSize] = useState<string>("true");
  const [showSummary, setShowSummary] = useState<string>("true");
  const [isDisabled, setIsDisabled] = useState<string>("false");

  const labels = paginationLabels(texts);
  const firstLast = showFirstLast === "true";
  const pageSize = showPageSize === "true";
  const summary = showSummary === "true";
  const summaryCode = "`" + texts.summary.replace(/\{(\w+)\}/g, "${range.$1}") + "`";
  const pageCode = "`" + texts.page.replace("{page}", "${page}") + "`";

  const attrs = [
    `total={${total}}`,
    variant !== "outlined" && `variant="${variant}"`,
    size !== "md" && `size="${size}"`,
    siblingCount !== "1" && `siblingCount={${siblingCount}}`,
    boundaryCount !== "1" && `boundaryCount={${boundaryCount}}`,
    !firstLast && "showFirstLast={false}",
    !pageSize && "showPageSize={false}",
    summary ? `showSummary={(range) => ${summaryCode}}` : "showSummary={false}",
    isDisabled === "true" && "isDisabled",
    `navLabel="${texts.navLabel}"`,
    firstLast && `firstLabel="${texts.firstLabel}"`,
    `previousLabel="${texts.previousLabel}"`,
    `nextLabel="${texts.nextLabel}"`,
    firstLast && `lastLabel="${texts.lastLabel}"`,
    `pageLabel={(page) => ${pageCode}}`,
    pageSize && `pageSizeLabel="${texts.pageSizeLabel}"`,
  ].filter(Boolean);

  const code = `import { Pagination } from "@gem-org/gem-system";

export function Example() {
  return (
    <Pagination
      ${attrs.join("\n      ")}
    />
  );
}`;

  const selects = [
    { id: "variant", value: variant, options: paginationVariants, onChange: pick(setVariant) },
    { id: "size", value: size, options: paginationSizes, onChange: pick(setSize) },
    { id: "total", value: total, options: totalOptions, onChange: pick(setTotal) },
    {
      id: "siblingCount",
      value: siblingCount,
      options: siblingOptions,
      onChange: pick(setSiblingCount),
    },
    {
      id: "boundaryCount",
      value: boundaryCount,
      options: boundaryOptions,
      onChange: pick(setBoundaryCount),
    },
    {
      id: "showFirstLast",
      value: showFirstLast,
      options: booleanOptions,
      onChange: pick(setShowFirstLast),
    },
    {
      id: "showPageSize",
      value: showPageSize,
      options: booleanOptions,
      onChange: pick(setShowPageSize),
    },
    {
      id: "showSummary",
      value: showSummary,
      options: booleanOptions,
      onChange: pick(setShowSummary),
    },
    { id: "isDisabled", value: isDisabled, options: booleanOptions, onChange: pick(setIsDisabled) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="pagination-playground">
        {selects.map((select) => (
          <div key={select.id} className="pagination-playground__field">
            <Typography variant="label">{t(`playground.${select.id}`)}</Typography>
            <Select
              aria-label={t(`playground.${select.id}`)}
              options={toOptions(select.options)}
              value={select.value}
              onChange={select.onChange}
              searchable={false}
            />
          </div>
        ))}
      </div>

      <DemoBlock code={code} label="Example.tsx" stack>
        <Pagination
          {...labels}
          total={Number(total)}
          variant={variant as PaginationVariant}
          size={size as PaginationSize}
          siblingCount={Number(siblingCount)}
          boundaryCount={Number(boundaryCount)}
          showFirstLast={firstLast}
          showPageSize={pageSize}
          showSummary={summary ? labels.showSummary : false}
          isDisabled={isDisabled === "true"}
        />
      </DemoBlock>
    </DocsSection>
  );
}
