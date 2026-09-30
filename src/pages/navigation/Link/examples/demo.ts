export type LinkTexts = {
  guide: string;
  externalLabel: string;
  underline: { always: string; hover: string; none: string };
  sizes: { sm: string; md: string; lg: string };
  docs: string;
  home: string;
  continue: string;
  download: string;
  unavailable: string;
  nav: { home: string; overview: string; api: string };
  prose: { before: string; tokens: string; middle: string; name: string; after: string };
};

export const WCAG_LINK_PURPOSE = "https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html";
export const MDN_ANCHOR = "https://developer.mozilla.org/docs/Web/HTML/Element/a";
