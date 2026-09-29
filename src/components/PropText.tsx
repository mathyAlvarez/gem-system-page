import type { ReactNode } from "react";

/** Renders `backtick` segments of a translated string as highlighted prop names. */
export function propText(text: string): ReactNode {
  if (!text.includes("`")) return text;
  return text.split(/(`[^`]+`)/).map((part, index) =>
    part.startsWith("`") && part.endsWith("`") && part.length > 1 ? (
      <strong key={index} className="docs-prop">
        {part.slice(1, -1)}
      </strong>
    ) : (
      part
    ),
  );
}
