import { useEffect, useRef, useState } from "react";

export type BlockUiTexts = {
  loading: string;
  block: string;
  title: string;
  body: string;
};

export function useTimedBlock(ms = 2500) {
  const [blocking, setBlocking] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  function blockFor(duration = ms) {
    window.clearTimeout(timer.current);
    setBlocking(true);
    timer.current = window.setTimeout(() => setBlocking(false), duration);
  }

  return { blocking, blockFor };
}
