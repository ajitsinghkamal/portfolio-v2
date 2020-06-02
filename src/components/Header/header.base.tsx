import React, { FunctionComponent } from "react";
import css from "./header.module.scss";

type Props = {
	cls?: string;
};

const Header: FunctionComponent<Props> = ({ cls = "" }) => (
	<header className={`spacer ${cls}`}>
		<h1 className={css.title}>Ajit Singh Kamal</h1>
	</header>
);

export default Header;
