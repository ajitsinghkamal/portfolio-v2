import { PALETTE } from "@styles/colors";
import { FONT_SCALE, FONT_FAMILY } from "@styles/typography";

const DARK_THEME = Object.freeze({
	text: PALETTE.hsl(PALETTE.wht0),
	text50: PALETTE.hsl(PALETTE.wht0, 0.5),
	background: PALETTE.hsl(PALETTE.blk0),
	background50: PALETTE.hsl(PALETTE.blk0, 0.5),
	primary: PALETTE.hsl(PALETTE.vlt0),
	primary50: PALETTE.hsl(PALETTE.vlt0, 0.5),
	secondary: PALETTE.hsl(PALETTE.ylw0),
	secondary50: PALETTE.hsl(PALETTE.ylw0, 0.5),
});

const LIGHT_THEME = Object.freeze({
	text: PALETTE.hsl(PALETTE.blk0),
	text50: PALETTE.hsl(PALETTE.blk0, 0.5),
	background: PALETTE.hsl(PALETTE.wht0),
	background50: PALETTE.hsl(PALETTE.wht0, 0.5),
	primary: PALETTE.hsl(PALETTE.vlt0),
	primary50: PALETTE.hsl(PALETTE.vlt0, 0.5),
	secondary: PALETTE.hsl(PALETTE.ylw0),
	secondary50: PALETTE.hsl(PALETTE.ylw0, 0.5),
});

const CONSTRAINTS = Object.freeze({
	container: 1250,
	content: 750,
});

/**
 * custom theme configuration
 *
 */
export default {
	colors: {
		...DARK_THEME,
		modes: {
			light: LIGHT_THEME,
		},
	},
	fonts: FONT_FAMILY,
	fontSizes: FONT_SCALE,
	lineHeights: Object.freeze({
		body: 1.5,
		heading: 1.125,
	}),
	sizes: CONSTRAINTS,
	space: {
		gutter: 40,
	},
};
