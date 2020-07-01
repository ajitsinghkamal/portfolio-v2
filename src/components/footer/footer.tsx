import React, { FunctionComponent, useCallback } from "react";
import { useStaticQuery, graphql } from "gatsby";
import css from "./footer.module.scss";
import { useTheme, themeLabeler } from "@utils/themeContext";
import Button from "@widgets/button";

type Props = {
	cls?: string;
};

const Footer: FunctionComponent<Props> = ({ cls = "" }) => {
	const { theme, setTheme } = useTheme();
	const setThemeHandler = useCallback(() => setTheme(theme), []);

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
	return (
		<footer className={cls}>
			<div className={`${css.base}`}>
				<Button
					cls={`${css.footerEl}`}
					link={site.siteMetadata.emailLink}
					type="ghost"
				>
					Contact Me
				</Button>
				<Button
					type="ghost"
					cls={`${css.footerEl} ${css.btnMode}`}
					onClick={() => setTheme(theme)}
				>
					{themeLabeler(theme)}
				</Button>
				<Button
					cls={`${css.footerEl}`}
					link={site.siteMetadata.repoLink}
					type="ghost"
				>
					README.md
				</Button>
			</div>
		</footer>
	);
};

export default Footer;
