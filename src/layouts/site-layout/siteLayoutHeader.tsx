/** @jsx jsx */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { jsx } from "theme-ui";

import { Button } from "@components";

import SOIcon from "@assets/svgs/stackoverflow.svg";
import GitIcon from "@assets/svgs/github.svg";
import CodepenIcon from "@assets/svgs/codepen.svg";

type Props = {};

function Header(props: Props) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						codepenLink
						stackoverLink
						githubLink
					}
				}
			}
		`
	);
	return (
		<header sx={CssRoot}>
			<nav>
				<ul sx={CssSocialNav}>
					<Button
						link={site.siteMetadata.codepenLink}
						sx={CssNavLink}
						type="ghost"
					>
						<CodepenIcon sx={CssNavIcon} />
					</Button>
					<Button
						link={site.siteMetadata.stackoverLink}
						sx={CssNavLink}
						type="ghost"
					>
						<SOIcon sx={CssNavIcon} />
					</Button>
					<Button
						link={site.siteMetadata.githubLink}
						sx={CssNavLink}
						type="ghost"
					>
						<GitIcon sx={CssNavIcon} />
					</Button>
				</ul>
			</nav>
		</header>
	);
}

//#region Styles
const CssRoot = {
	display: "flex",
	alignItems: "baseline",
	justifyContent: "flexEnd",
	zIndex: 3,
	px: "2em",
	pb: "1.2em",
	m: "0 auto",
	maxWidth: "container",
	boxShadow: "0 1px 0 var(--c-shadow)",
	width: "100%",
	right: "0",
	top: "0",
	background: "background",
	transition: "color 0.3s, background 0.3s",
};

const CssSocialNav = {
	m: 0,
	display: "flex",
};

const CssNavLink = {
	m: "0 1.5em",
};

const CssNavIcon = {
	color: "text",
	height: "1.6em",
	width: "2em",
	transition: "color 0.3s",
};
//#endregion Styles

export default Header;
