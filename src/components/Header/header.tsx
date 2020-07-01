import React, { FunctionComponent } from "react";
import { useStaticQuery, graphql } from "gatsby";

import css from "./header.module.scss";
import Button from "@widgets/button";

import SOIcon from "@assets/stackoverflow.svg";
import GitIcon from "@assets/github.svg";
import CodepenIcon from "@assets/codepen.svg";

type Props = {
	cls?: string;
};

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
		<header className={`spacer ${cls} ${css.base}`}>
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
		</header>
	);
};

export default Header;
