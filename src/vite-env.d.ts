/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GEMFFECTS_PAGE: string;
  readonly VITE_GEMSITIONS_PAGE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
