import type { FileUploaderBorder, FileUploaderSize } from "@gem-org/gem-system";

export const fileUploaderSizes: FileUploaderSize[] = ["sm", "md", "lg"];

export const fileUploaderBorders: FileUploaderBorder[] = [
  "default",
  "outlined",
  "primary",
  "success",
  "warning",
  "error",
  "info",
  "borderless",
];

const union = (values: readonly string[]) => values.map((value) => `"${value}"`).join(" | ");

export const fileUploaderProps = [
  { name: "value", type: "File[]", defaultValue: "—" },
  { name: "defaultValue", type: "File[]", defaultValue: "—" },
  { name: "multiple", type: "boolean", defaultValue: "false" },
  { name: "droppable", type: "boolean", defaultValue: "true" },
  { name: "fileTypes", type: "string", defaultValue: "—" },
  { name: "accept", type: "string", defaultValue: "—" },
  { name: "maxSize", type: "number", defaultValue: "—" },
  { name: "minFiles", type: "number", defaultValue: "—" },
  { name: "maxFiles", type: "number", defaultValue: "—" },
  { name: "simulateUpload", type: "boolean", defaultValue: "false" },
  { name: "label", type: "ReactNode", defaultValue: "—" },
  { name: "dropLabel", type: "string", defaultValue: '"Drag and drop files here"' },
  { name: "browseLabel", type: "string", defaultValue: '"Browse files"' },
  { name: "allowedText", type: "ReactNode", defaultValue: "—" },
  { name: "helperText", type: "ReactNode", defaultValue: "—" },
  { name: "errorMessage", type: "ReactNode", defaultValue: "—" },
  { name: "infoText", type: "ReactNode", defaultValue: "—" },
  { name: "size", type: union(fileUploaderSizes), defaultValue: '"md"' },
  { name: "border", type: "FileUploaderBorder", defaultValue: '"default"' },
  { name: "isInvalid", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "isRequired", type: "boolean", defaultValue: "false" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "wrapperClassName", type: "string", defaultValue: "—" },
  {
    name: "onChange",
    type: "(files: File[], items: FileUploaderItem[]) => void",
    defaultValue: "—",
  },
  { name: "onFileAdded", type: "(files: File[]) => void", defaultValue: "—" },
  { name: "onFileRemoved", type: "(files: File[]) => void", defaultValue: "—" },
  { name: "onReject", type: "(rejections: FileUploaderRejection[]) => void", defaultValue: "—" },
  {
    name: "onUpload",
    type: "(file: File, helpers: FileUploaderUploadHelpers) => Promise<void>",
    defaultValue: "—",
  },
] as const;

export const fileUploaderCssClasses = [
  { name: ".gem-file-uploader", rule: "root" as const },
  { name: ".gem-file-uploader__dropzone", rule: "dropzone" as const },
  { name: ".gem-file-uploader__icon", rule: "icon" as const },
  { name: ".gem-file-uploader__title", rule: "title" as const },
  { name: ".gem-file-uploader__browse", rule: "browse" as const },
  { name: ".gem-file-uploader__trigger", rule: "trigger" as const },
  { name: ".gem-file-uploader__input", rule: "input" as const },
  { name: ".gem-file-uploader__constraints", rule: "constraints" as const },
  { name: ".gem-file-uploader__list", rule: "list" as const },
  { name: ".gem-file-uploader__item", rule: "item" as const },
  { name: ".gem-file-uploader__item--uploading", rule: "itemUploading" as const },
  { name: ".gem-file-uploader__item--success", rule: "itemSuccess" as const },
  { name: ".gem-file-uploader__item--error", rule: "itemError" as const },
  { name: ".gem-file-uploader__name", rule: "name" as const },
  { name: ".gem-file-uploader__details", rule: "details" as const },
  { name: ".gem-file-uploader__progress", rule: "progress" as const },
  { name: ".gem-file-uploader__remove", rule: "remove" as const },
  { name: ".gem-file-uploader__message", rule: "message" as const },
  ...fileUploaderSizes.map((value) => ({
    name: `.gem-file-uploader--${value}`,
    rule: "size" as const,
    value,
  })),
  ...fileUploaderBorders.map((value) => ({
    name: `.gem-file-uploader--border-${value}`,
    rule: "border" as const,
    value,
  })),
  { name: ".gem-file-uploader--button", rule: "button" as const },
  { name: ".gem-file-uploader--drag", rule: "drag" as const },
  { name: ".gem-file-uploader--invalid", rule: "invalid" as const },
  { name: ".gem-file-uploader--disabled", rule: "disabled" as const },
];

export const fileUploaderTokens = [
  "--gem-color-border",
  "--gem-color-accent",
  "--gem-color-primary-500",
  "--gem-color-bg-subtle",
  "--gem-radius-md",
  "--gem-radius-sm",
] as const;
