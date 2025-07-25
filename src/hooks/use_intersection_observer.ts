import { Dispatch, SetStateAction, useEffect, useState } from "react";

export type useIntersectionObserverReturnType = {
  setObservedElement: Dispatch<SetStateAction<HTMLElement | null>>;
  isIntersecting: boolean;
};

export function useIntersectionObserver(
  options?: IntersectionObserverInit
): useIntersectionObserverReturnType {
  const [observedElement, setObservedElement] = useState<HTMLElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!observedElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(observedElement);

    return () => {
      observer.disconnect();
    };
  }, [observedElement, options]);

  return { setObservedElement, isIntersecting };
}
