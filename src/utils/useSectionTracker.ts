import { useEffect, useRef } from "react";
import debounce from "./debounce";

export const getScrollPosition = (el: HTMLDivElement | null) => {
	if (typeof window === `undefined`) {
		return { x: 0, y: 0 };
	}

	const target = el ? el : document.body;
	const position = target.getBoundingClientRect();

	return { x: position.left, y: position.top };
};

const useSectionTracker = (
	sectionsToTrack: string[],
	onActiveCb: Function,
	offset: number = 100
) => {
	const pageRefs = sectionsToTrack.map(() => useRef<HTMLDivElement>(null));

	const onScroll = () => {
		for (let sectionIndex = 0; sectionIndex < pageRefs.length; sectionIndex++) {
			if (getScrollPosition(pageRefs[sectionIndex].current).y < offset) {
				onActiveCb(sectionsToTrack[sectionIndex]);
				break;
			}
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", debounce(onScroll));
		return () => {
			window.removeEventListener("scroll", debounce(onScroll));
		};
	});

	return pageRefs;
};

export default useSectionTracker;
