import { Button, Navbar } from "@gem-org/gem-system";
import { useDemoItems, type NavbarTexts } from "./demo.ts";
import { DemoBrand } from "./DemoBrand.tsx";
import "./navbar-demo.css";

type StickyNavbarProps = { texts: NavbarTexts; note: string; section: string };

export function StickyNavbar({ texts, note, section }: StickyNavbarProps) {
  const items = useDemoItems(texts.items);

  return (
    <div className="navbar-frame navbar-frame--scroll" tabIndex={0} aria-label={texts.pageTitle}>
      <Navbar
        position="sticky"
        shadow="sm"
        brand={<DemoBrand />}
        items={items}
        navLabel={texts.navLabel}
        menuLabel={texts.menuLabel}
        closeLabel={texts.closeLabel}
        actions={
          <Button variant="primary" size="sm">
            {texts.getStarted}
          </Button>
        }
      />
      <div className="navbar-frame__page">
        <h3 className="navbar-frame__title">{texts.pageTitle}</h3>
        <p className="navbar-frame__note">{note}</p>
      </div>
      {Array.from({ length: 10 }, (_, index) => (
        <article key={index} className="navbar-frame__card">
          {section} {index + 1}
        </article>
      ))}
    </div>
  );
}
