import React, { FunctionComponent } from "react";
import css from "./button.module.scss";

type Props = {
	cls?: string;
};

const Button: FunctionComponent<Props> = ({ children, cls = "" }) => (
	<button className={`${cls} ${css.base}`}>{children}</button>
);

export default Button;
