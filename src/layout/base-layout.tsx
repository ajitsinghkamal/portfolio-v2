import React, { FunctionComponent } from "react";
import Header from "@components/Header/header";
import css from "./base-layout.module.scss";

const Layout: FunctionComponent = ({ children }) => {
	return (
		<div className={css.app}>
			<Header />
			<div>
				<main>{children}</main>
			</div>
		</div>
	);
};

export default Layout;
