import { useState } from "react";
import { Button, Drawer } from "@gem-org/gem-system";
import { Calendar, Folder, Home, Settings } from "@gem-org/gem-system/icons";
import type { DrawerCommon } from "./demo.ts";
import "./drawer-demo.css";

type Section = "home" | "projects" | "calendar" | "settings";

const icons = {
  home: <Home size="sm" />,
  projects: <Folder size="sm" />,
  calendar: <Calendar size="sm" />,
  settings: <Settings size="sm" />,
};

type NavigationDrawerProps = {
  common: DrawerCommon;
  open: string;
  title: string;
  current: string;
  sections: Record<Section, string>;
};

export function NavigationDrawer({ common, open: openLabel, title, current, sections }: NavigationDrawerProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Section>("home");

  return (
    <div className="drawer-row">
      <Button variant="secondary" onClick={() => setOpen(true)}>
        {openLabel}
      </Button>
      <span>
        {current}: <strong>{sections[active]}</strong>
      </span>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        placement="left"
        size="sm"
        radius="sm"
        title={title}
        closeLabel={common.closeLabel}
      >
        <nav aria-label={title}>
          <ul className="drawer-nav">
            {(Object.keys(icons) as Section[]).map((section) => (
              <li key={section}>
                <Button
                  variant={section === active ? "secondary" : "transparent"}
                  leftIcon={icons[section]}
                  className="drawer-nav__item"
                  aria-current={section === active ? "page" : undefined}
                  onClick={() => {
                    setActive(section);
                    setOpen(false);
                  }}
                >
                  {sections[section]}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </Drawer>
    </div>
  );
}
