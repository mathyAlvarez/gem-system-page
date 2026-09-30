import { Button, Navbar } from "@gem-org/gem-system";
import type { NavbarTexts } from "./demo.ts";
import { DemoBrand } from "./DemoBrand.tsx";
import { NavbarFrame } from "./NavbarFrame.tsx";

type BrandOnlyNavbarProps = { texts: NavbarTexts; note: string };

export function BrandOnlyNavbar({ texts, note }: BrandOnlyNavbarProps) {
  return (
    <NavbarFrame title={texts.pageTitle} note={note}>
      <Navbar
        brand={<DemoBrand />}
        brandHref="/"
        brandLabel={texts.brandLabel}
        actions={
          <Button variant="secondary" size="sm">
            {texts.signIn}
          </Button>
        }
      />
    </NavbarFrame>
  );
}
