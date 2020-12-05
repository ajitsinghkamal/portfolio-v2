/** @jsx jsx */

import React, { PropsWithChildren } from "react";
import { jsx } from "theme-ui";

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
				<IconWave />
				{greeting}
			</h3>
			<h1 sx={CssTitle}>{title}</h1>
			<p>{children}</p>
			{links && links.length && (
				<div sx={CssContact}>
					{links.map((link) => (
						<Button sx={CssLink} link={link.url} key={link.id}>
							{link.label}
						</Button>
					))}
				</div>
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
	fontSize: 4,
	color: "primary",
	mb: 0,
	lineHeight: "1.4",
	p: "0.5em 0",
};

const CssContact = {
	m: "1em -0.2em",
};

const CssLink = {
	mr: "2em",
};

export default Banner;
