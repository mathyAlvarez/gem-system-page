import { List, type ListProps } from "@gem-org/gem-system";
import { File, Mail, Trash } from "@gem-org/gem-system/icons";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import type { MailLabels } from "./demo.ts";
import "./list-demo.css";

const listVariants = cva("", {
  variants: {
    surface: {
      plain: "",
      subtle: "bg-(--gem-color-bg-subtle) rounded-(--gem-radius-lg)",
    },
    accent: {
      primary: "",
      secondary:
        "[--gem-list-selected:var(--gem-color-secondary-100)] [--gem-list-selected-fg:var(--gem-color-secondary-800)]",
    },
  },
  defaultVariants: { surface: "plain", accent: "primary" },
});

type NavListProps = ListProps & VariantProps<typeof listVariants>;

export function NavList({ surface, accent, className, ...props }: NavListProps) {
  return <List className={cn(listVariants({ surface, accent }), className)} {...props} />;
}

type VariantListProps = { mail: MailLabels };

export function VariantList({ mail }: VariantListProps) {
  const items = [
    { id: "inbox", label: mail.inbox, icon: <Mail size="sm" /> },
    { id: "drafts", label: mail.drafts, icon: <File size="sm" /> },
    { id: "trash", label: mail.trash, icon: <Trash size="sm" /> },
  ];

  return (
    <div className="list-demo">
      <NavList surface="subtle" defaultValue="inbox" items={items} />
      <NavList accent="secondary" bordered defaultValue="drafts" items={items} />
    </div>
  );
}
