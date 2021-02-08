import isClient from "./checkIfClient";
export function rafDebounce<F extends Function>(callee: F) {
	if (!isClient) {
		return;
	}
	let timeoutId: any = null;
	return (...args: any[]) => {
		timeoutId && window.cancelAnimationFrame(timeoutId);
		timeoutId = window.requestAnimationFrame(() => {
			callee(...args);
		});
	};
}
