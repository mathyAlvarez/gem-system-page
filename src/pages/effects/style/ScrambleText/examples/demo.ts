export const SCRAMBLE_VARIANTS = ["decode", "loop"] as const;
export const SCRAMBLE_TRIGGERS = ["always", "hover", "click"] as const;
export const SCRAMBLE_CHARSETS = {
  default: undefined,
  hex: "0123456789ABCDEF",
  binary: "01",
  symbols: "!<>-_\\/[]{}=+*^?#",
} as const;
