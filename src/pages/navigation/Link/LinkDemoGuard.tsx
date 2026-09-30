import type { MouseEvent, ReactNode } from "react";

// Demo hrefs are fictional app routes; following them would reload the docs.
function blockInternalLinks(event: MouseEvent<HTMLDivElement>) {
  if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey) return;
  if (!(event.target instanceof Element)) return;
  const anchor = event.target.closest("a");
  if (anchor && anchor.target !== "_blank" && anchor.origin === window.location.origin) event.preventDefault();
}

export function LinkDemoGuard({ children }: { children: ReactNode }) {
  return (
    <div className="contents" onClick={blockInternalLinks}>
      {children}
    </div>
  );
}
