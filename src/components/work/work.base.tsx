import React, { FunctionComponent } from "react";

import css from "./work.module.scss";

type Props = {
	company: string;
	from: string;
	to: string;
	image: any;
};
const Work: FunctionComponent<Props> = ({
	company,
	from,
	to,
	children,
	image,
}) => (
	<div className={`spacer ${css.base}`}>
		<div className="ft-sans">
			<p className={css.year}>
				{from}
				<small> - </small>
				{to}
			</p>
			<p className={css.title}>{company}</p>
		</div>
		<p>{children}</p>
		<div>{image}</div>
	</div>
);

export default Work;
