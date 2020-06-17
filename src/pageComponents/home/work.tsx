import React, { FunctionComponent } from "react";
import ImageMap from "@components/image/image.exports";
import Work from "@components/work/work.base";

import css from "./work.module.scss";

type detail = {
	intro: string;
	name: string;
	from: string;
	to?: string;
	image: string;
};

type Props = {
	details: detail[];
};

const WorkSection: FunctionComponent<Props> = ({ details }) => (
	<section className="spacer">
		<h3 className={css.title}>WORK</h3>
		{details.map((work: detail, index: number) => {
			const Image = ImageMap[work.image];
			return (
				<Work
					key={`${index}_${work.name}`}
					company={work.name}
					from={work.from}
					to={work.to || `Current`}
					image={<Image />}
				>
					{work.intro}
				</Work>
			);
		})}
	</section>
);

export default WorkSection;
