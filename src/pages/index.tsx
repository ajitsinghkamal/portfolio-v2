import React, { FunctionComponent, useRef, useLayoutEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "@layout/layout.base";
import SEO from "@components/seo";
import Work from "@components/work/work.base";
import IconWave from "../assets/wave.svg";
import IconWork from "../assets/work.svg";
import ImageMap from "@components/image/image.exports";

import {
	VisibilityContext,
	setVisibilityObserver,
} from "@utils/visbilityContext";
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
	const observer = useRef<IntersectionObserver | null>(null);

	//@mount
	useLayoutEffect(() => {
		observer.current = setVisibilityObserver(
			{ root: content.current },
			(el: IntersectionObserverEntry) => {
				setActiveSection(el.target.getAttribute("data-section") || "");
			}
		);
	}, []);

	return (
		<Layout ref={content}>
			<SEO title="Home" />
			<section className="spacer" data-section="home">
				<h3>
					<IconWave className="icon" />
					Hello Everyone!!
				</h3>
				<p>{site.siteMetadata.intro}</p>
			</section>
			<section className="spacer" data-section="work">
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
	);
};

export default IndexPage;
