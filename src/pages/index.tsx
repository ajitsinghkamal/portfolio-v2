import React, { FunctionComponent, useRef, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "@layout/layout.base";
import SEO from "@components/seo";
import Work from "@components/work/work.base";
import IconWave from "../assets/wave.svg";
import IconWork from "../assets/work.svg";
import ImageMap from "@components/image/image.exports";

import { VisibilityContext } from "@utils/visbilityContext";
import useSectionTracker from "@utils/useSectionTracker";

const SECTIONS = [`about`, `work`, `contact`];
interface IWork {
	intro: string;
	name: string;
	from: string;
	to?: string;
	image: string;
}

const IndexPage: FunctionComponent = () => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						intro
						work {
							intro
							image
							name
							from
							to
						}
					}
				}
			}
		`
	);
	const content = useRef<HTMLDivElement>(null);

	const [activeSection, setActiveSection] = useState("");

	const refs = useSectionTracker(SECTIONS, setActiveSection, 100);

	return (
		<VisibilityContext.Provider
			value={{ active: activeSection, setActive: setActiveSection }}
		>
			<Layout passedRef={content}>
				<SEO title="Home" />

				<section className="spacer" ref={refs[0]}>
					<h3>
						<IconWave className="icon" />
						Hello Everyone!!
					</h3>
					<p>{site.siteMetadata.intro}</p>
				</section>
				<section className="spacer" ref={refs[1]}>
					<h3>
						<IconWork className="icon" />
						My Experiences
					</h3>
					{site.siteMetadata.work.map((work: IWork, index: number) => {
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
			</Layout>
		</VisibilityContext.Provider>
	);
};

export default IndexPage;
