import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import {CssWorkSectionImage} from "@styles/utilities";


function RedImage() {
	const img = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "red.jpg" }) {
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
			className={CssWorkSectionImage}
		/>
	);
};

export default RedImage;
