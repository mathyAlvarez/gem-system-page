import { Navbar, type NavbarShadow } from "@gem-org/gem-system";
import { useDemoItems, type NavbarTexts } from "./demo.ts";
import { DemoBrand } from "./DemoBrand.tsx";
import "./navbar-demo.css";

const variants: { shadow: NavbarShadow; bordered: boolean }[] = [
  { shadow: "none", bordered: true },
  { shadow: "sm", bordered: false },
  { shadow: "md", bordered: false },
  { shadow: "lg", bordered: false },
];

type ShadowNavbarProps = { texts: NavbarTexts };

export function ShadowNavbar({ texts }: ShadowNavbarProps) {
  const items = useDemoItems(texts.items.slice(0, 3));

  return (
    <div className="navbar-stack">
      {variants.map(({ shadow, bordered }) => (
        <div key={shadow}>
          <p className="navbar-caption">
            shadow="{shadow}" bordered={`{${bordered}}`}
          </p>
          <div className="navbar-frame pb-6">
            <Navbar
              shadow={shadow}
              bordered={bordered}
              brand={<DemoBrand />}
              items={items}
              navLabel={`${texts.navLabel} ${shadow}`}
              menuLabel={texts.menuLabel}
              closeLabel={texts.closeLabel}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
