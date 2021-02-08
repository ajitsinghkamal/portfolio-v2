import { useLayoutEffect, useState, useCallback } from "react";
import { rafDebounce } from "./rafDebounce";

type IntersectionObserverCallback = (
	entries: IntersectionObserverEntry[],
	observer: IntersectionObserver
) => void;

type IntersectionObserverExtraOptions = {
	shouldDebounce?: boolean;
	shouldWaitForIdle?: boolean;
};

type IntersectionObserverOptions = IntersectionObserverExtraOptions &
	IntersectionObserverInit;

type Targets = string | string[] | HTMLElement | HTMLElement[];
function setupCallbackHandler(
	callback: IntersectionObserverCallback,
	config: IntersectionObserverExtraOptions
) {
	const observerIntersectionHandler: IntersectionObserverCallback = (
		entries
	) => {
		let _cb: any = callback;
		if (config.shouldDebounce) {
			_cb = rafDebounce(callback);
		} else if (config.shouldWaitForIdle) {
			_cb = rafDebounce(callback);
		}
		entries.forEach((entry: IntersectionObserverEntry) => {
			_cb(entry);
		});
	};
	return observerIntersectionHandler;
}

function observerTarget(
	target: string | Element,
	observer: IntersectionObserver
) {
	try {
		const targetEl: Element | null =
			typeof target === "string"
				? document.querySelector(target)
				: target;
		targetEl && observer.observe(targetEl);
	} catch (e) {
		console.error(e);
	}
}

function createObserver(
	callback: IntersectionObserverCallback,
	observerOptions: IntersectionObserverInit = {},
	extraConfig: IntersectionObserverExtraOptions
) {
	const modifiedCallback = setupCallbackHandler(callback, extraConfig);
	return new IntersectionObserver(modifiedCallback, observerOptions);
}
export default function useObserver(
	targets: Targets,
	callback: IntersectionObserverCallback,
	options: IntersectionObserverOptions = {}
) {
	const [
		observerInstance,
		setObserverInstance,
	] = useState<IntersectionObserver | null>(null);

	const attachObserver = useCallback((observer) => {
		if (Array.isArray(targets)) {
			targets.forEach((target: string | Element) =>
				observerTarget(target, observer)
			);
		} else {
			observerTarget(targets, observer);
		}
	}, []);

	useLayoutEffect(() => {
		const {
			shouldDebounce,
			shouldWaitForIdle,
			...observerOptions
		} = options;
		const observer = createObserver(callback, observerOptions, {
			shouldDebounce,
			shouldWaitForIdle,
		});
		setObserverInstance(observer);
		targets && attachObserver(observer);
	}, [callback, options]);

	useLayoutEffect(() => {
		return () => {
			observerInstance && observerInstance.disconnect();
		};
	}, []);

	return {
		visibilityObserver: observerInstance,
	};
}
