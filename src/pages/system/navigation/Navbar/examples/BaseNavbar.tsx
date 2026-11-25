import { Button, Navbar } from "@gem-org/gem-system";
import { useDemoItems, type NavbarTexts } from "./demo.ts";
import { DemoBrand } from "./DemoBrand.tsx";
import { NavbarFrame } from "./NavbarFrame.tsx";

type BaseNavbarProps = { texts: NavbarTexts; note: string };

export function BaseNavbar({ texts, note }: BaseNavbarProps) {
  const items = useDemoItems(texts.items);

  return (
    <NavbarFrame title={texts.pageTitle} note={note}>
      <Navbar
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
  );
}
