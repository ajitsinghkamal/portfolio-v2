import React, { FunctionComponent } from "react";
import Header from "@components/header/header.base";
import Nav from "@components/nav/nav.base";
import Footer from "@components/footer/footer.base";
import css from "./layout.module.scss";
import { ThemeContext } from "@utils/themeContext";
import { THEME } from "../constants";

const Layout: FunctionComponent = ({ children }) => {
	return (
		<ThemeContext.Provider value={THEME.DARK}>
			<div className={`fixed ${css.accent}`}></div>
			<Nav cls={`fixed ${css.sidebar}`} />
			<div className={css.page}>
				<Header cls={css.header} />
				<main>{children}</main>
			</div>
			<Footer cls={`fixed ${css.footer}`} />
		</ThemeContext.Provider>
	);
};

export default Layout;
