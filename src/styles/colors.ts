export const PALETTE = Object.freeze({
	blk0: [220, 7, 8],
	ylw0: [51, 88, 87],
	ylw1: [48, 89, 50],
	ylw2: [35, 100, 91],
	grn0: [73, 49, 66],
	wht0: [0, 0, 79],
	vlt0: [253, 42, 61],
	red0: [14, 69, 58],
	red1: [13, 59, 66],
	hsl: (channel: number[], alpha: number = 1) => {
		return `hsla(${channel[0]}, ${channel[1]}%, ${channel[2]}%, ${alpha})`;
	},
});
