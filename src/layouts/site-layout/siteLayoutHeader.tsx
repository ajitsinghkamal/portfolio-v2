/** @jsx jsx */
import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import { jsx, Flex, Box, ThemeUICSSObject, CSSObject } from "theme-ui";
import { css } from "@emotion/react";

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
		<Box sx={CssRoot} as="header">
			<Flex sx={CssContainer}>
				<nav>
					<Flex as="ul">
						<Button link={site.siteMetadata.codepenLink} styl={css(CssNav)}>
							<CodepenIcon />
							<span>codepen</span>
						</Button>
						<Button link={site.siteMetadata.stackoverLink} styl={css(CssNav)}>
							<SOIcon />
							<span>stackoverflow</span>
						</Button>
						<Button link={site.siteMetadata.githubLink} styl={css(CssNav)}>
							<GitIcon />
							<span>git</span>
						</Button>
					</Flex>
				</nav>
			</Flex>
		</Box>
	);
}

//#region Styles
const CssRoot: ThemeUICSSObject = {
	zIndex: 3,
	py: "1.2em",
	width: "100%",
	position: "fixed",
	right: "0",
	top: "0",
	left: "0",
};

const CssContainer = {
	m: "0 auto",
	maxWidth: "container",
	justifyContent: "flex-end",
};

const CssNav: CSSObject = {
	margin: "0 1.5em",
	padding: "0",
	fontSize: "1rem",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "32px",
	height: "32px",
	position: "relative",
	"& > span": {
		position: "absolute",
		top: 0,
		opacity: 0,
		left: "50%",
		fontSize: "0.875rem",
		transform: "translate(-50%, 20px)",
		transition: "transform 0.2s, opacity 0.3s",
	},
	"&:hover > span": {
		opacity: 1,
		transform: "translate(-50%, 30px)",
	},
};

//#endregion Styles

export default Header;
