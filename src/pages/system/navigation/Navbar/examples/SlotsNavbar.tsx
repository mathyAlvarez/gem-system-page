import { Button, InputText, Navbar } from "@gem-org/gem-system";
import { Bell, Search, User } from "@gem-org/gem-system/icons";
import type { NavbarTexts } from "./demo.ts";
import { DemoBrand } from "./DemoBrand.tsx";
import { NavbarFrame } from "./NavbarFrame.tsx";

type SlotsNavbarProps = {
  texts: NavbarTexts;
  note: string;
  search: string;
  notifications: string;
  account: string;
};

export function SlotsNavbar({ texts, note, search, notifications, account }: SlotsNavbarProps) {
  return (
    <NavbarFrame title={texts.pageTitle} note={note}>
      <Navbar
        brand={<DemoBrand />}
        navLabel={texts.navLabel}
        menuLabel={texts.menuLabel}
        closeLabel={texts.closeLabel}
        classNames={{ extras: "flex-1 justify-center", actions: "ms-auto" }}
        actions={
          <>
            <Button variant="transparent" size="sm" iconOnly aria-label={notifications}>
              <Bell size="sm" />
            </Button>
            <Button variant="transparent" size="sm" iconOnly aria-label={account}>
              <User size="sm" />
            </Button>
            <Button variant="primary" size="sm" rounded>
              {texts.signIn}
            </Button>
          </>
        }
      >
        <div className="w-full max-w-88">
          <InputText
            aria-label={search}
            type="search"
            size="sm"
            placeholder={search}
            prefixIcon={<Search size="sm" />}
          />
        </div>
      </Navbar>
    </NavbarFrame>
  );
}
