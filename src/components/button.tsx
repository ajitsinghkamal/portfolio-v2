/** @jsx jsx */

import React, { PropsWithChildren } from "react";
import { ThemeUICSSObject, jsx } from "theme-ui";


type Props = {
	cls?: string;
	type?: string;
	link?: string;
	onClick?: () => void;
};

function Button({
	children,
	cls = "",
	type = "",
	link = "",
	onClick,
	...rest
}: PropsWithChildren<Props>) {
	return link ? (
		<a
			{...rest}
			href={link}
			sx={CssBase(type)}
			rel="noreferrer noopener"
			target="_blank"
			className={`${cls} ${
				type || ""
			}`}
		>
			{children}
		</a>
	) : (
		<button
			{...rest}
			onClick={onClick}
			sx={CssBase(type)}
			className={`${cls} ${
				type || ""
			}`}
		>
			{children}
		</button>
	);
}

//#region Styles
const CssBase = (type: string):ThemeUICSSObject => ({
	borderRadius: '100px',
	fontSize: 1,
	color: 'text',
	fontVariationSettings: `"wght" 650`,
	p: '0.75em 2.5em',
	textDecoration: 'none',
	background: type === 'ghost' ? 'none' : "primary",
	'&:hover': {
		opacity: '0.5',
		transition: 'opacity 0.3s',
	}
})

//#endregion Styles

	
export default Button;
