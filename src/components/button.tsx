import React, { PropsWithChildren } from "react";
import { css, cx } from "@emotion/css";

//#region Types
type Props = {
	type?: "button" | "submit" | "reset" | undefined;
	link?: string;
	onClick?: () => void;
} & PropTypeWithWrappingClass;
//#endregion Types

function Button({
	onClick,
	children,
	link = "",
	type = "button",
	wrapClass = "",
	...rest
}: PropsWithChildren<Props>) {
	return link ? (
		<a
			{...rest}
			href={link}
			className={cx(CssBase, wrapClass)}
			rel="noreferrer noopener"
			target="_blank"
		>
			{children}
		</a>
	) : (
		<button
			onClick={onClick}
			className={cx(CssBase, wrapClass)}
			type={type}
			{...rest}
		>
			{children}
		</button>
	);
}

//#region Styles
const CssBase = css`
	font-size: var(--ft-18);
	padding: 0.5em;
	cursor: pointer;
	text-decoration: none;
	background: none;
	transition: background 0.3s, color 0.3s, opacity 0.3s;
	&:hover {
		color: var(--primary),
		opacity: 1,
	}`;

//#endregion Styles

export default Button;
