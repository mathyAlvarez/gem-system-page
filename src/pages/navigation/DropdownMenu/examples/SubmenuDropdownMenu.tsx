import { Button, DropdownMenu, type DropdownMenuItem } from "@gem-org/gem-system";
import { Share, User } from "@gem-org/gem-system/icons";

type SubmenuTexts = {
  trigger: string;
  menuLabel: string;
  profile: string;
  share: string;
  copyLink: string;
  email: string;
  exportPdf: string;
  signOut: string;
};

type SubmenuDropdownMenuProps = { texts: SubmenuTexts };

export function SubmenuDropdownMenu({ texts }: SubmenuDropdownMenuProps) {
  const items: DropdownMenuItem[] = [
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
    <DropdownMenu
      items={items}
      menuLabel={texts.menuLabel}
      trigger={<Button variant="secondary">{texts.trigger}</Button>}
    />
  );
}
