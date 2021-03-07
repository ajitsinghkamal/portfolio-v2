import React, { PropsWithChildren } from "react";
import { cx, css } from "@emotion/css";

interface Link {
	url: string;
	label: string;
	id: string;
}

type Links = {
	prefix: string;
	urls: Link[];
};
type Props = {
	details: string;
	links: Links;
	greeting: string;
	title: string;
};

function Banner({ children }: PropsWithChildren<Props>) {
	return <section css={cx(CssBase)}>
		{children}
		</section>;
}

const CssBase = css`
	position: relative;
	display: flex;
	flex-flow: column;
	justify-content: center;
	padding: 8em 0;
`;

export default Banner;
