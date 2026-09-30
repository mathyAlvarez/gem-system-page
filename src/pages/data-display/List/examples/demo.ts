export const LIST_SIZES = ["sm", "md", "lg"] as const;
export const LIST_RADII = ["sm", "md", "lg"] as const;

export type MailLabels = {
  inbox: string;
  drafts: string;
  sent: string;
  trash: string;
  spam: string;
  starred: string;
  important: string;
};

export type Folder = { id: string; label: string; description: string };

export const PEOPLE = ["Avery Lang", "Jordan Hale", "Riley Chen"] as const;
