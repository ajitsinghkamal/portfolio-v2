import React, { FunctionComponent } from "react";
import css from "./nav.module.scss";

type Props = {
	cls?: string;
	active: string;
};

const Nav: FunctionComponent<Props> = ({ cls = "", active }) => (
	<aside className={cls}>
		{active}
		<nav className={`ft-sans ${css.base}`}>
			<ul className={css.navList}>
				<li className={css.navListItem}>
					<span>About</span>
				</li>
				<li className={css.navListItem}>
					<span>Work</span>
				</li>
				<li className={css.navListItem}>
					<span>Contact</span>
				</li>
			</ul>
		</nav>
	</aside>
);

export default Nav;
