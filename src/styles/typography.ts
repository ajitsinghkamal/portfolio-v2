const BASE_FONT_SIZE = 16;

function convertToRem(valueInPixel: number): string {
	return `${valueInPixel / BASE_FONT_SIZE}rem`;
}

export const FONT_SCALE = [12, 14, 16, 20, 24, 32, 48, 64].map(convertToRem);

export const FONT_FAMILY = Object.freeze({
	body:
		'muli, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
	heading: "jost, Georgia, serif",
	monospace: "Menlo, monospace",
});
