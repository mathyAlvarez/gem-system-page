import { useState } from "react";
import { List } from "@gem-org/gem-system";
import { Bell, Eye, Settings } from "@gem-org/gem-system/icons";
import "./list-demo.css";

type SwitchListProps = {
  wifi: string;
  darkMode: string;
  notifications: string;
  notificationsHint: string;
};

export function SwitchList({ wifi, darkMode, notifications, notificationsHint }: SwitchListProps) {
  const [checked, setChecked] = useState<Record<string, boolean>>({
    wifi: true,
    notifications: true,
  });

  return (
    <div className="list-demo">
      <List
        bordered
        divided
        items={[
          {
            id: "wifi",
            type: "switch",
            label: wifi,
            icon: <Settings size="sm" />,
            checked: Boolean(checked.wifi),
          },
          {
            id: "dark",
            type: "switch",
            label: darkMode,
            icon: <Eye size="sm" />,
            checked: Boolean(checked.dark),
          },
          {
            id: "notifications",
            type: "switch",
            label: notifications,
            description: notificationsHint,
            icon: <Bell size="sm" />,
            checked: Boolean(checked.notifications),
          },
        ]}
        onCheckedChange={(id, next) => setChecked((current) => ({ ...current, [id]: next }))}
      />
    </div>
  );
}
