import { Tag } from "@gem-org/gem-system";
import { Star } from "@gem-org/gem-system/icons";
import "./badge-demo.css";

type TagBadgeProps = { featured: string; draft: string; remove: string };

export function TagBadge({ featured, draft, remove }: TagBadgeProps) {
  return (
    <div className="badge-row">
      <Tag tone="info" radius="sm" icon={<Star size="sm" strokeWidth={2} />}>
        {featured}
      </Tag>
      <Tag tone="neutral" radius="sm" isClosable closeAriaLabel={`${remove} ${draft}`}>
        {draft}
      </Tag>
    </div>
  );
}
