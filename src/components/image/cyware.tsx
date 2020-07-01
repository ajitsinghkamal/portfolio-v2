import React, { FunctionComponent } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import css from "./image.module.scss";

const CywareImage: FunctionComponent = () => {
	const img = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "cyware.png" }) {
				childImageSharp {
					fluid(maxWidth: 800) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<Img
			fluid={img.placeholderImage.childImageSharp.fluid}
			className={css.base}
		/>
	);
};

export default CywareImage;
