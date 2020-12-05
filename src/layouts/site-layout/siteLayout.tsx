/** @jsx jsx */
import React, { PropsWithChildren } from "react";
import { jsx } from "theme-ui";

import Header from "./siteLayoutHeader";
import Footer from "./siteLayoutFooter";

type Props = { passedRef?: React.Ref<HTMLDivElement> };

function SiteLayout({ children, passedRef }: PropsWithChildren<Props>) {
	return (
		<div sx={CssBase}>
			<div sx={CssAccent}></div>
			<Header />
			<div sx={CssPage}>
				<main sx={CssContent} ref={passedRef}>
					{children}
				</main>
			</div>
			{/* <Footer /> */}
		</div>
	);
}

//#region Styles
const CssBase = {
	minHeight: "100vh",
	bg: "background",
	color: "text",
	transition: "color 0.3s, background 0.3s",
};

const CssAccent = {
	right: 0,
	height: "7px",
	zIndex: 5,
	bg: "accent",
};

const CssPage = {
	width: "content",
	m: "0 auto",
	maxWidth: "90%",
	p: "5em 0 8em",
};

const CssContent = {
	p: "0.5em 2em 2em",
};

//#endregion Styles

export default SiteLayout;
