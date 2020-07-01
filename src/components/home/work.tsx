import React, { FunctionComponent } from "react";
import ImageMap from "@components/image";
import Work from "@components/work";

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
		{details.map((work: detail, index: number) => {
			const Image = ImageMap[work.image];
			return (
				<Work
					key={`${index}_${work.name}`}
					company={work.name}
					from={work.from}
					to={work.to || `Current`}
					image={<Image />}
					shade={`backdrop${index + 1}`}
				>
					{work.intro}
				</Work>
			);
		})}
	</section>
);

export default WorkSection;
