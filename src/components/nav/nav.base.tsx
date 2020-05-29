import React, { FunctionComponent } from "react";
import css from "./nav.module.scss";

const Nav: FunctionComponent = () => (
	<nav>
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
);

export default Nav;
