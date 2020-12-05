/** @jsx jsx */

import React, { PropsWithChildren } from "react";
import { jsx, useThemeUI } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

import { Button } from "@components";

type Props = {};

function Footer(props: Props) {
	const context = useThemeUI();
	const { theme, colorMode, setColorMode } = context;

	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						repoLink
						emailLink
					}
				}
			}
		`
	);

	const changeTheme = () => {
		if (!setColorMode) {
			return;
		} else if (colorMode === "light") {
			setColorMode("dark");
		} else {
			setColorMode("light");
		}
	};
	return (
		<footer {...props}>
			<div sx={CssRoot}>
				<Button
					sx={CssContactBtn}
					link={site.siteMetadata.emailLink}
					type="ghost"
				>
					Contact Me
				</Button>
				<Button type="ghost" sx={CssContactBtn} onClick={changeTheme}>
					{colorMode}
				</Button>
				<Button
					sx={CssContactBtn}
					link={site.siteMetadata.repoLink}
					type="ghost"
				>
					README.md
				</Button>
			</div>
		</footer>
	);
}

//#region Styles
const CssRoot = {
	maxWidth: "container",
	margin: "0 auto",
	padding: "8px gutter",
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	width: "100%",
	right: "0",
	background: "background",
	transition: "color 0.3s, background 0.3s, box-shadow 0.3s",
	zIndex: 2,
	bottom: 0,
};

const CssContactBtn = {
	fontSize: 1,
	transition: "color 0.3s, opacity 0.3s",
	lineHeight: "26px",
	display: "block",
	m: "0 20px",
	opacity: "0.6",
	fontVariationSettings: `"wght" 450`,
	"&:hover": {
		opacity: "0.8",
	},
};

//#endregion Styles

export default Footer;
