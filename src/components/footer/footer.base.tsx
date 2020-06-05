import React, { FunctionComponent } from "react";
import { useStaticQuery, graphql } from "gatsby";
import css from "./footer.module.scss";
import { useTheme, themeLabeler } from "@utils/themeContext";

type Props = {
	cls?: string;
};

const Footer: FunctionComponent<Props> = ({ cls = "" }) => {
	const { theme, setTheme } = useTheme();
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						githubLink
					}
				}
			}
		`
	);
	return (
		<footer className={cls}>
			<div className={`ft-sans ${css.base}`}>
				<button className={css.footerEl}>Attributions</button>
				<a
					className={`${css.footerEl} ${css.footerLink}`}
					href={site.siteMetadata.githubLink}
					target="_blank"
					rel="noreferrer"
				>
					Repo
				</a>
				<button
					className={`${css.footerEl} ${css.btnMode}`}
					onClick={() => setTheme(theme)}
				>
					{themeLabeler(theme)}
				</button>
			</div>
		</footer>
	);
};

export default Footer;
