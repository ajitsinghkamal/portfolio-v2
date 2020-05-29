import React, { FunctionComponent } from "react";
import Header from "@components/header/header.base";
import Nav from "@components/nav/nav.base";
import css from "./layout.module.scss";

const Layout: FunctionComponent = ({ children }) => {
	return (
		<>
			<aside className={`fixed ${css.sidebar}`}>
				<Nav />
			</aside>
			<div className={css.page}>
				<div className={css.pageContent}>
					<header className={css.header}>
						<Header />
					</header>
					<main>{children}</main>
				</div>
			</div>
		</>
	);
};

export default Layout;
