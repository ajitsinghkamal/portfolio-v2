/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { PropsWithChildren } from "react";

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
	return <section css={CssBase}>{children}</section>;
}

const CssBase = css`
	position: relative;
	h1 {
		margin-bottom: 0.5em;
		font-size: var(--ft-48);
	}
`;

export default Banner;
