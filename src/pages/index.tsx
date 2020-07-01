import React, { FunctionComponent } from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "@layout/layout";
import SEO from "@components/seo";
import { AboutSection, WorkSection } from "@components/home";

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

	return (
		<Layout>
			<SEO title="Home" />
			<AboutSection details={site.siteMetadata.intro} />
			<WorkSection details={site.siteMetadata.work} />
		</Layout>
	);
};

export default IndexPage;
