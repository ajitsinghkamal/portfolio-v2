import React, { useContext } from "react";

type IntersectionObserverOptions = {
	root?: Element | null;
	rootMargin?: string;
	threshold?: number[];
};

type VisibilityContextType = {
	active: string;
	setActive: (newVisible: string) => void;
};

const DEFAULT_OPTIONS: IntersectionObserverOptions = {
	root: null,
	rootMargin: `-130px 0px 130px 0px`,
};

export const setVisibilityObserver = (
	options: IntersectionObserverOptions,
	onVisible: (el: IntersectionObserverEntry) => void,
	onHidden?: (el: IntersectionObserverEntry) => void
) => {
	const callback = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((element: IntersectionObserverEntry) => {
			console.log(entries);
			if (element.isIntersecting) {
				onVisible && onVisible(element);
			} else {
				onHidden && onHidden(element);
			}
		});
	};
	const observer = new IntersectionObserver(callback, {
		...options,
		...DEFAULT_OPTIONS,
	});
	return observer;
};

export const VisibilityContext = React.createContext<
	VisibilityContextType | undefined
>(undefined);

export const useVisibility = () => {
	const context = useContext(VisibilityContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
