import React, {
	FunctionComponent,
	useState,
	useLayoutEffect,
	forwardRef,
	useRef,
} from "react";
import Header from "@components/header/header.base";
import Nav from "@components/nav/nav.base";
import Footer from "@components/footer/footer.base";
import css from "./layout.module.scss";
import { ThemeContext, themeToggle } from "@utils/themeContext";
import { DEFAULT_THEME } from "@src/constants";
import {
	VisibilityContext,
	setVisibilityObserver,
} from "@utils/visbilityContext";

const Layout = forwardRef(
	(props, ref: React.Ref<HTMLDivElement>) extends FunctionComponent => {
		const [theme, setTheme] = useState(DEFAULT_THEME);
		const [activeSection, setActiveSection] = useState("home");

		return (
			<ThemeContext.Provider value={{ theme, setTheme: themeToggle(setTheme) }}>
				<div className={`${css.base} ${theme}`}>
					<div className={`fixed ${css.accent}`}></div>
					<Nav cls={`fixed ${css.sidebar}`} />
					<div className={css.page}>
						<Header cls={css.header} />
						<main className={css.content} ref={ref}>
							{children}
						</main>
					</div>
					<Footer cls={`fixed ${css.footer}`} />
				</div>
			</ThemeContext.Provider>
		);
	}
);

export default Layout;
