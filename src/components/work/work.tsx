import React, { FunctionComponent } from "react";

import css from "./work.module.scss";

type Props = {
	company: string;
	from: string;
	to: string;
	image: any;
	shade?: string;
};
const Work: FunctionComponent<Props> = ({
	company,
	from,
	to,
	shade = "",
	image,
}) => (
	<div className={css.base}>
		<div className="ft-sans">
			<p className={css.title}>{company}</p>
		</div>
		<div className={css.details}>
			<div className={css.year}>
				{from}
				<small> - </small>
				{to}
			</div>
			<div className={`${css.imageWrapper} ${css[shade as keyof typeof css]}`}>
				{image}
			</div>
		</div>
	</div>
);

export default Work;
