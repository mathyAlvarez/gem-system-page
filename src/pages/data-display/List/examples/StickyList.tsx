import { List, type ListItem } from "@gem-org/gem-system";
import "./list-demo.css";

type Section = { id: string; label: string; items: string[] };

type StickyListProps = { sections: Section[] };

export function StickyList({ sections }: StickyListProps) {
  const items = sections.flatMap<ListItem>((section) => [
    { type: "subheader", id: section.id, label: section.label, sticky: true },
    ...section.items.map((label) => ({ id: `${section.id}-${label}`, label })),
  ]);

  return (
    <div className="list-demo">
      <List bordered maxHeight={280} items={items} />
    </div>
  );
}
