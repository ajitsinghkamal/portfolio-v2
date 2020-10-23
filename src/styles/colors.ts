export const PALETTE = Object.freeze({
	orange: [33, 88, 43],
	black: [220, 7, 8],
	black2: [222, 11, 12],
	white: [0, 0, 75],
	white2: [0, 0, 97],
	grey: [0, 0, 13],
	grey2: [0, 0, 94],
	violet: [253, 98, 79],
	blue: [253, 85, 55],
	hsl: (channel: number[], alpha: number = 1) => {
		return `hsla(${channel[0]}, ${channel[1]}%, ${channel[2]}%, ${alpha})`;
	},
});
