/** @jsx jsx */

import React, { PropsWithChildren } from "react";
import { jsx } from "theme-ui";
import { SerializedStyles } from "@emotion/react";

type Props = {
	type?: string;
	link?: string;
	styl?: SerializedStyles;
	onClick?: () => void;
};

function Button({
	type = "",
	link = "",
	onClick,
	children,
	styl,
}: PropsWithChildren<Props>) {
	return link ? (
		<a
			css={styl}
			href={link}
			sx={CssBase}
			rel="noreferrer noopener"
			target="_blank"
		>
			{children}
		</a>
	) : (
		<button css={styl} onClick={onClick} sx={CssBase}>
			{children}
		</button>
	);
}

//#region Styles
const CssBase = {
	borderRadius: "10px",
	fontSize: 2,
	color: "text",
	p: "0.5em 1.5em",
	textDecoration: "none",
	bg: "none",
	transition: "background 0.3s, color 0.3s, opacity 0.3s",
	"&:hover": {
		color: "primary",
		opacity: 1,
	},
};

//#endregion Styles

export default Button;
