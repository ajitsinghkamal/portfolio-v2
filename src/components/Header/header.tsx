import React, { FunctionComponent } from "react";
import Text from "../text";
import css from "./header.module.scss";

type Props = {
	siteTitle?: string;
};

const Header: FunctionComponent<Props> = ({ siteTitle }) => (
	<header className={css.base}>
		<Text level={3}>{siteTitle}</Text>
	</header>
);

Header.defaultProps = {
	siteTitle: "Ajit Singh Kamal",
};

export default Header;
