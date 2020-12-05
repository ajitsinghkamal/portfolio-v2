/** @jsx jsx */

import React, { PropsWithChildren } from "react";
import { jsx, Flex } from "theme-ui";
import { css } from "@emotion/react";

import { Button } from "@components";
import IconWave from "@assets/svgs/wave.svg";

type Link = {
	url: string;
	label: string;
	id: string;
};
type Props = {
	details: string;
	links: Link[];
	greeting: string;
	title: string;
};

function Banner({
	children,
	links,
	greeting,
	title,
}: PropsWithChildren<Props>) {
	return (
		<section sx={CssBase}>
			<h3>
				<span sx={{ mr: "1em" }}>
					<IconWave />
				</span>
				{greeting}
			</h3>
			<h1 sx={CssTitle}>{title}</h1>
			<p>{children}</p>
			{links && links.length && (
				<Flex
					sx={{
						mb: "1em",
					}}
				>
					{links.map((link) => (
						<Button
							link={link.url}
							key={link.id}
							styl={css({
								padding: 0,
								marginRight: "1.5em",
								fontSize: "1rem",
								opacity: 0.6,
							})}
						>
							{link.label}
						</Button>
					))}
				</Flex>
			)}
		</section>
	);
}

const CssBase = {
	height: "calc(100vh - 95px)",
	maxHeight: "900px",
	display: "flex",
	flexFlow: "column",
	justifyContent: "center",
	p: "8em 0",
};

const CssTitle = {
	fontSize: 6,
	color: "primary",
	mb: 0,
	lineHeight: "1.4",
	p: "0.5em 0",
};

export default Banner;
