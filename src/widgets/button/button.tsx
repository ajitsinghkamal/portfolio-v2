import React, { FunctionComponent } from "react";
import css from "./button.module.scss";

type Props = {
	cls?: string;
	type?: string;
	link?: string;
	onClick?: () => void;
};

const Button: FunctionComponent<Props> = ({
	children,
	cls = "",
	type = "",
	link = "",
	onClick,
}) =>
	link ? (
		<a
			href={link}
			className={`${cls} ${css.base} ${css.link} ${
				type ? css[type as keyof typeof css] : ""
			}`}
			rel="noreferrer noopener"
			target="_blank"
		>
			{children}
		</a>
	) : (
		<button
			onClick={onClick}
			className={`${cls} ${css.base} ${
				type ? css[type as keyof typeof css] : ""
			}`}
		>
			{children}
		</button>
	);
export default Button;
