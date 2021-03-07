import React, { PropsWithChildren } from "react";
import { cx, css } from "@emotion/css";

import Header from "./siteLayoutHeader";
import Background from "../../components/bg";

type Props = { passedRef?: React.Ref<HTMLDivElement> };

function SiteLayout({ children, passedRef }: PropsWithChildren<Props>) {
	return (
		<>
			<Background />
			<div className={cx(CssBase)}>
				<Header />
				<main className={cx(CssContent)} ref={passedRef}>
					{children}
				</main>
				{/* <Footer /> */}
			</div>
		</>
	);
}

//#region Styles
const CssBase = css`
	position: relative;
	height: 100vh;
	transition: color 0.3s, background 0.3s;
`;

const CssContent = css`
	width: var(--container);
	margin: 0 auto;
	max-width: 90%;
	padding: 5em 0 2em;
`;

//#endregion Styles

export default SiteLayout;
