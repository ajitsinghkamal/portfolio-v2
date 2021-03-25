/** @jsx  jsx */
import { jsx, css } from "@emotion/react";
import React, { PropsWithChildren } from "react";

import Header from "./siteLayoutHeader";
import { Seo, Bg } from "@components";

import { MDXProvider } from "@mdx-js/react";

type Props = { passedRef?: React.Ref<HTMLDivElement> };

const shortcodes = { Seo };
function SiteLayout({ children, passedRef }: PropsWithChildren<Props>) {
	return (
		<React.Fragment>
			<Bg />
			<div css={CssBase}>
				<Header />
				<main css={CssContent} ref={passedRef}>
					<MDXProvider components={shortcodes}>
						{children}
					</MDXProvider>
				</main>
			</div>
		</React.Fragment>
	);
}

//#region Styles
const CssBase = css`
	position: relative;
	height: 100vh;
	transition: color 0.3s, background 0.3s;
	display: flex;
	flex-direction: column;
`;

const CssContent = css`
	width: var(--container);
	margin: 0 auto;
	max-width: 90%;
	padding: 0em 0 1em;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

//#endregion Styles

export default SiteLayout;
