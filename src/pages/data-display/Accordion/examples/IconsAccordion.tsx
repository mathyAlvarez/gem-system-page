import type { ReactNode } from "react";
import { Accordion } from "@gem-org/gem-system";
import { Calendar, Folder, Home, Settings } from "@gem-org/gem-system/icons";
import type { AccordionSection } from "./demo.ts";
import "./accordion-demo.css";

const icons: Record<string, ReactNode> = {
  home: <Home size="sm" />,
  files: <Folder size="sm" />,
  calendar: <Calendar size="sm" />,
  settings: <Settings size="sm" />,
};

type IconsAccordionProps = { sections: AccordionSection[] };

export function IconsAccordion({ sections }: IconsAccordionProps) {
  return (
    <div className="accordion-demo">
      <Accordion
        items={sections.map((section) => ({ ...section, icon: icons[section.id] }))}
        defaultValue="home"
      />
    </div>
  );
}
