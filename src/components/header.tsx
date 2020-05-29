import React, { FunctionComponent } from "react";
import Text from "./text";

type Props = {
	siteTitle?: string;
};

const Header: FunctionComponent<Props> = ({ siteTitle }) => (
	<header>
		<Text level={3}>{siteTitle}</Text>
	</header>
);

Header.defaultProps = {
	siteTitle: "Ajit Singh Kamal",
};

export default Header;
