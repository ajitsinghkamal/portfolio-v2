import React from "react";

type IntersectionObserverOptions = {
	root?: Element | null;
	rootMargin?: string;
	threshold?: number[];
};

const DEFAULT_OPTIONS: IntersectionObserverOptions = {
	rootMargin: `0px`,
	threshold: [0, 1],
};

export const VisibilityContext = React.createContext<IntersectionObserver | null>(
	null
);

export const setVisibilityObserver = (
	options: IntersectionObserverOptions = {
		...DEFAULT_OPTIONS,
	},
	onVisible: (el: IntersectionObserverEntry) => void,
	onHidden?: (el: IntersectionObserverEntry) => void
) => {
	const callback = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((element: IntersectionObserverEntry) => {
			if (element.isIntersecting) {
				onVisible && onVisible(element);
			} else {
				onHidden && onHidden(element);
			}
		});
	};
	const observer = new IntersectionObserver(callback, options);
	return observer;
};
