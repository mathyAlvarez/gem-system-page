export type DocsVersion = {
  id: string;
  label: string;
  /** Origin where this version is deployed. Empty for the version served by this build. */
  url: string;
};

/** Version documented by this build/branch. Must match an `id` in `docsVersions`. */
export const currentVersionId = "v2";

/** Newest first. Add an entry per published major version. */
export const docsVersions: DocsVersion[] = [{ id: "v2", label: "v2", url: "" }];
