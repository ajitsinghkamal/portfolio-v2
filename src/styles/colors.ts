export const PALETTE: Record<string, number[]> = Object.freeze({
	blk0: [220, 7, 8],
	ylw0: [51, 88, 87],
	ylw1: [48, 89, 50],
	ylw2: [35, 100, 91],
	grn0: [73, 49, 66],
	wht0: [0, 0, 79],
	vlt0: [253, 42, 61],
	blk1: [225, 29, 24],
	blk2: [225, 29, 13],
	blk3: [225, 19, 25],
	blk4: [224, 17, 26],
	red0: [14, 69, 58],
	red1: [13, 59, 66],
});

export const hsl = (channel: number[], alpha: number = 1) => {
	return `hsla(${channel[0]}, ${channel[1]}%, ${channel[2]}%, ${alpha})`;
};

export const generateGradients = (shade: string, alpha = 0.5) => {
	return new Array(4).fill(null).reduce((gradient, _, i) => {
		const colorKey = `${shade}${i + 1}`;
		if (PALETTE[colorKey]) {
			gradient[`muted${i}`] = hsl(PALETTE[`${shade}${i}`], alpha);
		}
		return generateGradients;
	}, {});
};
