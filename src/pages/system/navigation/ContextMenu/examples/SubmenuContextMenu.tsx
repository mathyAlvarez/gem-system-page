import { ContextMenu, type ContextMenuItem } from "@gem-org/gem-system";
import { Share, User } from "@gem-org/gem-system/icons";
import "./context-menu-demo.css";

type SubmenuTexts = {
  title: string;
  hint: string;
  menuLabel: string;
  profile: string;
  share: string;
  copyLink: string;
  email: string;
  exportPdf: string;
  signOut: string;
};

type SubmenuContextMenuProps = { texts: SubmenuTexts };

export function SubmenuContextMenu({ texts }: SubmenuContextMenuProps) {
  const items: ContextMenuItem[] = [
    { id: "profile", label: texts.profile, icon: <User size="sm" /> },
    {
      type: "submenu",
      id: "share",
      label: texts.share,
      icon: <Share size="sm" />,
      items: [
        { id: "copy-link", label: texts.copyLink },
        { id: "email", label: texts.email },
        { id: "export", label: texts.exportPdf },
      ],
    },
    { type: "separator" },
    { id: "sign-out", label: texts.signOut, danger: true },
  ];

  return (
    <ContextMenu items={items} menuLabel={texts.menuLabel} className="w-full">
      <div className="ctx-surface ctx-surface--compact">
        <p className="ctx-surface__title">{texts.title}</p>
        <p className="ctx-surface__hint">{texts.hint}</p>
      </div>
    </ContextMenu>
  );
}
