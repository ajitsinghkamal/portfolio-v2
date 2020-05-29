import React, { FunctionComponent } from "react";
import css from "./header.module.scss";

const Header: FunctionComponent = () => (
	<div className="spacer">
		<h1 className={css.title}>Ajit Singh Kamal</h1>
	</div>
);

export default Header;
