import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Work from "./homeWork";

function Home() {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
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
		<>
			<Work details={site.siteMetadata.work} />
		</>
	);
}

export default Home;
