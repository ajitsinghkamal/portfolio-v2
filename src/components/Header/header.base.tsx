import React, { FunctionComponent } from "react";
import css from "./header.module.scss";
import SOIcon from "../../assets/stackoverflow.svg";
import GitIcon from "../../assets/github.svg";
import LinIcon from "../../assets/linkedin.svg";
import CodepenIcon from "../../assets/codepen.svg";

type Props = {
	cls?: string;
};

const Header: FunctionComponent<Props> = ({ cls = "" }) => (
	<header className={`spacer ${cls} ${css.base}`}>
		<h1 className={css.title}>Ajit Singh Kamal</h1>
		<nav>
			<ul className={css.socialNav}>
				<li className={css.socialLink}>
					<SOIcon className={css.socialIcon} />
				</li>
				<li className={css.socialLink}>
					<GitIcon className={css.socialIcon} />
				</li>
				<li className={css.socialLink}>
					<LinIcon className={css.socialIcon} />
				</li>
				<li className={css.socialLink}>
					<CodepenIcon className={css.socialIcon} />
				</li>
			</ul>
		</nav>
	</header>
);

export default Header;
