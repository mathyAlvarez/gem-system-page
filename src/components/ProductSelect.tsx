import { Select, type SelectValue } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { PRODUCT_LIST, PRODUCTS, resolveProduct, type ProductId } from "../data/products.ts";

const HOME_VALUE = "home";

export function ProductSelect() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const product = resolveProduct(pathname);
  const current = product ?? HOME_VALUE;

  const options = [
    { value: HOME_VALUE, label: t("products.home") },
    ...PRODUCT_LIST.map((item) => ({
      value: item.id,
      label: t(`products.${item.labelKey}`),
    })),
  ];

  const handleChange = (value: SelectValue) => {
    if (typeof value !== "string" || value === current) return;
    if (value === HOME_VALUE) {
      navigate("/");
      return;
    }
    if (!PRODUCT_LIST.some((item) => item.id === value)) return;
    navigate(PRODUCTS[value as ProductId].homePath);
  };

  return (
    <Select
      aria-label={t("navbar.product")}
      size="sm"
      options={options}
      value={current}
      onChange={handleChange}
      searchable={false}
      wrapperClassName="docs-navbar__product"
    />
  );
}
