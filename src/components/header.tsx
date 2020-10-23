/** @jsx jsx */

import React, { FunctionComponent } from "react";
import { useStaticQuery, graphql } from "gatsby";

import { jsx, css } from "@emotion/core";

import Button from "@widgets/button";

import SOIcon from "@assets/stackoverflow.svg";
import GitIcon from "@assets/github.svg";
import CodepenIcon from "@assets/codepen.svg";

type Props = {
	cls?: string;
};

const HeaderCss = css({
	display: "flex",
	alignItems: "baseline",
	zIndex: 3,
	paddingLeft: "2em",
	paddingRight: "2em",
	paddingBottom: "1.2em",
	justifyContent: "flexEnd",
	maxWidth: "1250px",
	margin: "0 auto",
	boxShadow: "0 1px 0 var(--c-shadow)",
});

const Header: FunctionComponent<Props> = ({ cls = "" }) => {
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
		<Header css={HeaderCss}>
			<nav>
				<ul className={css.socialNav}>
					<Button
						link={site.siteMetadata.codepenLink}
						cls={css.socialLink}
						type="ghost"
					>
						<CodepenIcon className={css.socialIcon} />
					</Button>
					<Button
						link={site.siteMetadata.stackoverLink}
						cls={css.socialLink}
						type="ghost"
					>
						<SOIcon className={css.socialIcon} />
					</Button>
					<Button
						link={site.siteMetadata.githubLink}
						cls={css.socialLink}
						type="ghost"
					>
						<GitIcon className={css.socialIcon} />
					</Button>
				</ul>
			</nav>
		</Header>
	);
};

export default Header;
