import { Navbar, type NavbarItem } from "@gem-org/gem-system";
import { useDemoItems, type NavbarTexts } from "./demo.ts";
import { DemoBrand } from "./DemoBrand.tsx";
import { NavbarFrame } from "./NavbarFrame.tsx";

type ItemsNavbarProps = { texts: NavbarTexts; note: string; disabled: string };

export function ItemsNavbar({ texts, note, disabled }: ItemsNavbarProps) {
  const items: NavbarItem[] = [
    ...useDemoItems(texts.items.slice(0, 3)),
    { id: "disabled", label: disabled, disabled: true },
  ];

  return (
    <NavbarFrame title={texts.pageTitle} note={note}>
      <Navbar
        brand={<DemoBrand />}
        items={items}
        navLabel={texts.navLabel}
        menuLabel={texts.menuLabel}
        closeLabel={texts.closeLabel}
      />
    </NavbarFrame>
  );
}
