const isEvent = (name: string) => /^on[A-Z]/.test(name);

/** Keeps the declared order but moves event handlers (`onChange`, `onClick`…) to the end. */
export function eventsLast<T extends { name: string }>(props: readonly T[]): T[] {
  return [...props].sort((a, b) => Number(isEvent(a.name)) - Number(isEvent(b.name)));
}
