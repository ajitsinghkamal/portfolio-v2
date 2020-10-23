import { PALETTE } from "@styles/colors";
import { FONT_SCALE, FONT_FAMILY } from "@styles/typography";

const DARK_THEME = Object.freeze({
	primary: PALETTE.hsl(PALETTE.blue),
	highlight: PALETTE.hsl(PALETTE.blue, 0.5),
	highlight20: PALETTE.hsl(PALETTE.blue, 0.2),
	highlight10: PALETTE.hsl(PALETTE.blue, 0.1),
	secondary: PALETTE.hsl(PALETTE.violet),
	accent: PALETTE.hsl(PALETTE.orange),
	text: PALETTE.hsl(PALETTE.white),
	background: PALETTE.hsl(PALETTE.black),
});

const LIGHT_THEME = Object.freeze({
	primary: PALETTE.hsl(PALETTE.orange),
	highlight: PALETTE.hsl(PALETTE.orange, 0.5),
	highlight20: PALETTE.hsl(PALETTE.orange, 0.2),
	highlight10: PALETTE.hsl(PALETTE.orange, 0.1),
	secondary: PALETTE.hsl(PALETTE.black),
	accent: PALETTE.hsl(PALETTE.blue),
	text: PALETTE.hsl(PALETTE.black),
	background: PALETTE.hsl(PALETTE.white2),
});

const CONSTRAINTS = Object.freeze({
	maxWidth: 1250,
	gutter: 40,
});

/**
 * custom theme configuration
 * @link https://theme-ui.com/theme-spec/
 */
export default Object.freeze({
	colors: Object.freeze({
		modes: Object.freeze({
			dark: DARK_THEME,
			light: LIGHT_THEME,
		}),
	}),
	fonts: FONT_FAMILY,
	fontSizes: FONT_SCALE,
	lineHeights: Object.freeze({
		body: 1.5,
		heading: 1.125,
	}),
	sizes: CONSTRAINTS,
});
