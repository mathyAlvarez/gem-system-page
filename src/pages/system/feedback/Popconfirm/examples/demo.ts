export type PopconfirmCommon = { confirm: string; cancel: string };

export const wait = (ms: number) => new Promise<void>((resolve) => window.setTimeout(resolve, ms));
