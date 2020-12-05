/** @jsx jsx */

import React from "react";
import { jsx, ThemeUICSSObject } from "theme-ui";

import ImageMap from "@component/image";

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

function WorkSection({ details }: Props) {
	return (
		<section className="spacer">
			{details.map((work: detail, index: number) => {
				const Image = ImageMap[work.image];
				return (
					<div sx={CssBase} key={work.name}>
						<div className="ft-sans">
							<p sx={CssTitle}>{work.name}</p>
						</div>
						<div sx={CssDetails}>
							<div sx={CssYear}>
								{work.from}
								<small> - </small>
								{work.to || "Current"}
							</div>
							<div sx={CssImageWrapper(index)}>
								<Image />
							</div>
						</div>
					</div>
				);
			})}
		</section>
	);
}

const CssBase: ThemeUICSSObject = {
	position: "relative",
	pt: "2em",
	pb: "3em",
};

const CssTitle: ThemeUICSSObject = {
	fontSize: 3,
	fontVariationSettings: `"wght" 730`,
	mb: "0.3em",
	position: "relative",
	zIndex: 1,
};
const CssYear: ThemeUICSSObject = {
	fontSize: 1,
	m: "0 0em 0.5em 0.2em",
	position: "relative",
	zIndex: 1,
	flex: "0 0 20%",
	fontVariant: "tabular-nums",
	small: {
		margin: "0 3px",
	},
};

const CssDetails = {
	display: "flex",
};

const CssImageWrapper = (tile: number) => ({
	flex: "1 0 80%",
	borderRadius: "10px",
	boxShadow: "0 0px 0 1px var(--c-shadow), -65px -58px 0px 0 var(--c-prim2)",
});

export default WorkSection;
