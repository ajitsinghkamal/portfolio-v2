export default function debounce<F extends Function>(
	callee: F,
	wait = 100,
	immediate: boolean = false
) {
	let timeoutId: any = null;
	return (...args: any[]) => {
		const callNow = immediate && !timeoutId;
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			timeoutId = null;
			if (!immediate) {
				callee(...args);
			}
		}, wait);
		if (callNow) {
			callee(...args);
		}
	};
}
