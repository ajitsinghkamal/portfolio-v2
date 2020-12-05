/** @jsx jsx */
import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import { jsx, Flex, Box, ThemeUICSSObject } from "theme-ui";
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
						</Button>
						<Button link={site.siteMetadata.stackoverLink} styl={css(CssNav)}>
							<SOIcon />
						</Button>
						<Button link={site.siteMetadata.githubLink} styl={css(CssNav)}>
							<GitIcon />
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

const CssNav = {
	margin: "0 1.5em",
	padding: "0",
	fontSize: "1rem",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "32px",
	height: "32px",
};

//#endregion Styles

export default Header;
