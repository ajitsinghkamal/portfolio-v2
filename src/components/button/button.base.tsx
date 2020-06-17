import React, { FunctionComponent } from "react";
import css from "./button.module.scss";

type Props = {
	cls?: string;
};

const Button: FunctionComponent<Props> = ({ children }) => (
	<button className={css.base}>{children}</button>
);

export default Button;
