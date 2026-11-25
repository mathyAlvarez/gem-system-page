import type { ReactNode } from "react";
import { Check } from "@gem-org/gem-system/icons";
import { DocsSection } from "../../../components/DocsPrimitives.tsx";

type OverrideTipsProps = {
  title: string;
  items: { id: string; content: ReactNode }[];
};

export function OverrideTips({ title, items }: OverrideTipsProps) {
  return (
    <DocsSection title={title}>
      <ul className="override-tips">
        {items.map((item) => (
          <li key={item.id} className="override-tips__item">
            <Check size="sm" className="override-tips__icon" />
            <span>{item.content}</span>
          </li>
        ))}
      </ul>
    </DocsSection>
  );
}
