import React, {
	FunctionComponent,
	useState,
	useLayoutEffect,
	forwardRef,
	ReactNode,
	useRef,
} from "react";
import Header from "@components/header/header.base";
import Nav from "@components/nav/nav.base";
import Footer from "@components/footer/footer.base";
import css from "./layout.module.scss";
import { ThemeContext, themeToggle } from "@utils/themeContext";
import { DEFAULT_THEME } from "@src/constants";
import { useVisibility, setVisibilityObserver } from "@utils/visbilityContext";

type Props = { passedRef?: React.Ref<HTMLDivElement> };

const Layout: FunctionComponent<Props> = ({ children, passedRef }) => {
	const [theme, setTheme] = useState(DEFAULT_THEME);
	return (
		<ThemeContext.Provider value={{ theme, setTheme: themeToggle(setTheme) }}>
			<div className={`${css.base} ${theme}`}>
				<div className={`fixed ${css.accent}`}></div>
				<Header cls={`fixed ${css.header}`} />
				<div className={css.page}>
					<main className={css.content} ref={passedRef}>
						{children}
					</main>
				</div>
				<Footer cls={css.footer} />
			</div>
		</ThemeContext.Provider>
	);
};

export default Layout;
