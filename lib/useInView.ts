import { useEffect, useState, RefObject } from "react";

export function useInView(
    ref: RefObject<HTMLElement>,
    options?: IntersectionObserverInit
) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.3,
                ...options,
            }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [ref, options]);

    return isVisible;
}
