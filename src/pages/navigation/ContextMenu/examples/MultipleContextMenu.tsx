import { useState } from "react";
import { ContextMenu, type ContextMenuItem } from "@gem-org/gem-system";
import { Download, Edit, File, Folder, Mail, Share, Star, Trash, User } from "@gem-org/gem-system/icons";
import "./context-menu-demo.css";

type TargetTexts = { title: string; hint: string; menuLabel: string };

type MultipleTexts = {
  lastAction: string;
  none: string;
  file: TargetTexts & { open: string; rename: string; download: string; delete: string };
  folder: TargetTexts & { open: string; newFile: string; share: string };
  message: TargetTexts & { reply: string; forward: string; star: string; delete: string };
  person: TargetTexts & { profile: string; message: string; share: string; copyLink: string; emailCard: string };
};

type MultipleContextMenuProps = { texts: MultipleTexts };

export function MultipleContextMenu({ texts }: MultipleContextMenuProps) {
  const [last, setLast] = useState<string | null>(null);
  const { file, folder, message, person } = texts;

  const targets: { id: string; texts: TargetTexts; items: ContextMenuItem[] }[] = [
    {
      id: "file",
      texts: file,
      items: [
        { id: "open", label: file.open, icon: <File size="sm" /> },
        { id: "rename", label: file.rename, icon: <Edit size="sm" /> },
        { type: "separator" },
        { id: "download", label: file.download, icon: <Download size="sm" /> },
        { id: "delete", label: file.delete, icon: <Trash size="sm" />, danger: true },
      ],
    },
    {
      id: "folder",
      texts: folder,
      items: [
        { id: "open", label: folder.open, icon: <Folder size="sm" /> },
        { id: "new-file", label: folder.newFile, icon: <File size="sm" /> },
        { type: "separator" },
        { id: "share", label: folder.share, icon: <Share size="sm" /> },
      ],
    },
    {
      id: "message",
      texts: message,
      items: [
        { id: "reply", label: message.reply, icon: <Mail size="sm" /> },
        { id: "forward", label: message.forward, icon: <Share size="sm" /> },
        { type: "separator" },
        { id: "star", label: message.star, icon: <Star size="sm" /> },
        { id: "delete", label: message.delete, icon: <Trash size="sm" />, danger: true },
      ],
    },
    {
      id: "person",
      texts: person,
      items: [
        { id: "profile", label: person.profile, icon: <User size="sm" /> },
        { id: "message", label: person.message, icon: <Mail size="sm" /> },
        {
          type: "submenu",
          id: "share",
          label: person.share,
          icon: <Share size="sm" />,
          items: [
            { id: "copy-link", label: person.copyLink },
            { id: "email-card", label: person.emailCard },
          ],
        },
      ],
    },
  ];

  return (
    <div className="ctx-stack">
      <div className="ctx-row">
        {targets.map((target) => (
          <ContextMenu
            key={target.id}
            items={target.items}
            menuLabel={target.texts.menuLabel}
            onAction={(id) => setLast(`${target.texts.title} · ${id}`)}
          >
            <div className="ctx-surface ctx-surface--compact">
              <p className="ctx-surface__title">{target.texts.title}</p>
              <p className="ctx-surface__hint">{target.texts.hint}</p>
            </div>
          </ContextMenu>
        ))}
      </div>
      <p className="ctx-status">
        {texts.lastAction}: <code>{last ?? texts.none}</code>
      </p>
    </div>
  );
}
