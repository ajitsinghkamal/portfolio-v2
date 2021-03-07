import { PropsWithChildren } from "react";
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
	return <section className={cx(CssBase)}>{children}</section>;
}

const CssBase = css`
	position: relative;
	h1 {
		margin-bottom: 0.5em;
		font-size: var(--ft-48);
	}
`;

export default Banner;
