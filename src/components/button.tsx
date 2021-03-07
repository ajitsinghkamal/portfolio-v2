/** @jsx jsx */
import { jsx, css, SerializedStyles } from "@emotion/react";
import { PropsWithChildren } from "react";

//#region Types
type Props = {
	type?: "button" | "submit" | "reset" | undefined;
	link?: string;
	onClick?: () => void;
	wrapClass?: SerializedStyles;
};
//#endregion Types

function Button({
	onClick,
	children,
	link = "",
	type = "button",
	wrapClass,
	...rest
}: PropsWithChildren<Props>) {
	return link ? (
		<a
			{...rest}
			href={link}
			css={css`
				${CssBase};
				${wrapClass}
			`}
			rel="noreferrer noopener"
			target="_blank"
		>
			{children}
		</a>
	) : (
		<button
			onClick={onClick}
			css={css`
				${CssBase};
				${wrapClass}
			`}
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
	}
	`;

//#endregion Styles

export default Button;
