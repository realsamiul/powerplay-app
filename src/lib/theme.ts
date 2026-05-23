export const FONT_PRESET = "space-grotesk" as
  | "geist"
  | "space-grotesk"
  | "inter";

export const fontPresetClass =
  FONT_PRESET === "inter"
    ? "theme-font-inter"
    : FONT_PRESET === "space-grotesk"
      ? "theme-font-space"
      : "theme-font-geist";
