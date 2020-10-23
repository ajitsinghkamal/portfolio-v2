/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { jsx } from "theme-ui";

import { Header } from "@components/index";
import Footer from "@components/footer";

const CssBase = {
	minHeight: '100vh',
	background: 'background',
	color: 'text',
	transition: 'color 0.3s, background 0.3s'
};

type Props = { passedRef?: React.Ref<HTMLDivElement> };

const Layout: FunctionComponent<Props> = ({ children, passedRef }) => {
	return (
		<div sx={CssBase}>
			<div className={`fixed ${css.accent}`}></div>
			<Header cls={`fixed ${css.header}`} />
			<div className={css.page}>
				<main className={css.content} ref={passedRef}>
					{children}
				</main>
			</div>
			<Footer cls={css.footer} />
		</div>
	);
};

export default Layout;
