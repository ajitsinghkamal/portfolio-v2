/** @jsx jsx */

import React, { PropsWithChildren } from "react";
import { jsx, Flex, Theme, ThemeUICSSObject } from "theme-ui";
import Img, { FluidObject } from "gatsby-image";

type Props = {
	name: string;
	from: string;
	to?: string;
	shade?: number;
	image?: FluidObject;
};

function WorkSection({
	name,
	from,
	to,
	image,
	shade = 0,
}: PropsWithChildren<Props>) {
	return (
		<section className="spacer">
			<div sx={CssBase}>
				<p sx={CssTitle}>{name}</p>
				<Flex>
					<div sx={CssYear}>
						{from}
						<small> - </small>
						{to || "Current"}
					</div>
					<div
						sx={{
							flex: "1 0 80%",
							borderRadius: "10px",
							overflow: "hidden",
							boxShadow: (theme) =>
								`-65px -58px 0px 0 ${
									theme.colors ? theme.colors[`muted${shade}`] : "transparent"
								}`,
						}}
					>
						{image && <Img fluid={image} />}
					</div>
				</Flex>
			</div>
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
	fontFamily: "heading",
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

export default WorkSection;
