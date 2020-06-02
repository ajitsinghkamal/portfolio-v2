import React, { FunctionComponent } from "react";
import Header from "@components/header/header.base";
import Nav from "@components/nav/nav.base";
import Footer from "@components/footer/footer.base";
import css from "./layout.module.scss";

const Layout: FunctionComponent = ({ children }) => {
	return (
		<>
			<div className={`fixed ${css.accent}`}></div>
			<Nav cls={`fixed ${css.sidebar}`} />
			<div className={css.page}>
				<Header cls={css.header} />
				<main>{children}</main>
			</div>
			<Footer cls={`fixed ${css.footer}`} />
		</>
	);
};

export default Layout;
