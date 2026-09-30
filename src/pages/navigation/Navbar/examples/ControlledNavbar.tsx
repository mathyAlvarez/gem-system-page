import { useState } from "react";
import { Button, Navbar, Typography } from "@gem-org/gem-system";
import { useDemoItems, type NavbarTexts } from "./demo.ts";
import { DemoBrand } from "./DemoBrand.tsx";
import { NavbarFrame } from "./NavbarFrame.tsx";
import "./navbar-demo.css";

type ControlledNavbarProps = { texts: NavbarTexts; note: string; state: string; open: string; closed: string };

export function ControlledNavbar({ texts, note, state, open, closed }: ControlledNavbarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const items = useDemoItems(texts.items);

  return (
    <div className="navbar-stack">
      <Typography variant="caption" as="p" className="m-0">
        {state}: {isOpen ? open : closed}
      </Typography>
      <NavbarFrame title={texts.pageTitle} note={note}>
        <Navbar
          collapseBreakpoint="lg"
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          brand={<DemoBrand />}
          items={items}
          navLabel={texts.navLabel}
          menuLabel={texts.menuLabel}
          closeLabel={texts.closeLabel}
          actions={
            <>
              <Button variant="transparent" size="sm">
                {texts.signIn}
              </Button>
              <Button variant="primary" size="sm">
                {texts.getStarted}
              </Button>
            </>
          }
        />
      </NavbarFrame>
    </div>
  );
}
