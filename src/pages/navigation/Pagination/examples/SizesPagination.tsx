import { Pagination, type PaginationSize } from "@gem-org/gem-system";
import { paginationLabels, type PaginationTexts } from "./demo.ts";
import "./pagination-demo.css";

const sizes: PaginationSize[] = ["sm", "md", "lg"];

type SizesPaginationProps = { texts: PaginationTexts };

export function SizesPagination({ texts }: SizesPaginationProps) {
  const labels = paginationLabels(texts);

  return (
    <div className="pager-stack">
      {sizes.map((size) => (
        <div key={size}>
          <p className="pager-caption">size="{size}"</p>
          <Pagination {...labels} total={87} size={size} navLabel={`${labels.navLabel} ${size}`} />
        </div>
      ))}
    </div>
  );
}
