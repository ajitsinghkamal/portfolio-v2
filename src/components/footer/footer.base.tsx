import React, { FunctionComponent } from "react";
import css from "./footer.module.scss";

type Props = {
	cls?: string;
};

const Footer: FunctionComponent<Props> = ({ cls = "" }) => (
	<footer className={cls}>
		<div className={`ft-sans ${css.base}`}>
			<button className={css.footerEl}>Attributions</button>
			<a
				className={`${css.footerEl} ${css.footerLink}`}
				href="https://github.com/AjitsinghKamal/portfolio-v2"
				target="_blank"
				rel="noreferrer"
			>
				Repo
			</a>
			<button className={`${css.footerEl} ${css.btnMode}`}>Switch Theme</button>
		</div>
	</footer>
);

export default Footer;
