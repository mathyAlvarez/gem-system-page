import { Button, Navbar, type NavbarCollapseBreakpoint } from "@gem-org/gem-system";
import { useDemoItems, type NavbarTexts } from "./demo.ts";
import { DemoBrand } from "./DemoBrand.tsx";
import "./navbar-demo.css";

const breakpoints: NavbarCollapseBreakpoint[] = ["sm", "md", "lg"];

type ResponsiveNavbarProps = { texts: NavbarTexts };

export function ResponsiveNavbar({ texts }: ResponsiveNavbarProps) {
  const items = useDemoItems(texts.items);

  return (
    <div className="navbar-stack">
      {breakpoints.map((breakpoint) => (
        <div key={breakpoint}>
          <p className="navbar-caption">collapseBreakpoint="{breakpoint}"</p>
          <div className="navbar-frame">
            <Navbar
              collapseBreakpoint={breakpoint}
              brand={<DemoBrand />}
              items={items}
              navLabel={`${texts.navLabel} ${breakpoint}`}
              menuLabel={texts.menuLabel}
              closeLabel={texts.closeLabel}
              actions={
                <Button variant="primary" size="sm">
                  {texts.getStarted}
                </Button>
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
}
