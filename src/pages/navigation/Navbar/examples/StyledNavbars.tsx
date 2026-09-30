import { Button, Navbar } from "@gem-org/gem-system";
import { User } from "@gem-org/gem-system/icons";
import { useDemoItems, type NavbarTexts } from "./demo.ts";
import { DemoBrand } from "./DemoBrand.tsx";
import "./navbar-demo.css";
import "./navbar-overrides.css";

type StyledNavbarsProps = { texts: NavbarTexts; account: string };

export function StyledNavbars({ texts, account }: StyledNavbarsProps) {
  const items = useDemoItems(texts.items);

  return (
    <div className="navbar-frame">
      <Navbar
        className="navbar-inverted"
        bordered={false}
        brand={<DemoBrand />}
        items={items}
        navLabel={texts.navLabel}
        menuLabel={texts.menuLabel}
        closeLabel={texts.closeLabel}
        actions={
          <>
            <Button variant="transparent" size="sm" iconOnly aria-label={account}>
              <User size="sm" />
            </Button>
            <Button variant="primary" size="sm">
              {texts.getStarted}
            </Button>
          </>
        }
      />
    </div>
  );
}
