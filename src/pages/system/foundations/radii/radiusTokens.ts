import { radius, radiusPx, type RadiusToken } from "@gem-org/gem-system/tokens";

export const radiusOrder: RadiusToken[] = ["none", "xs", "sm", "md", "lg", "xl", "2xl", "full"];

export function radiusValueLabel(token: RadiusToken) {
  return token === "full" ? radius[token] : `${radius[token]} · ${radiusPx[token]}px`;
}
