import Button from "./button";
import { css } from "@emotion/css";

interface SocialLink {
	url: string;
	label: string;
}

type Props = {
	navData: SocialLink[];
};
export default function Social({ navData }: Props) {
	return (
		<nav className={cssNav}>
			{navData.map((item: SocialLink) => (
				<Button link={item.url} key={item.label} wrapClass={cssNavBtn}>
					{item.label}
				</Button>
			))}
		</nav>
	);
}

const cssNav = css`
	margin-left: -0.3em;
	margin-top: 0.5em;
`;

const cssNavBtn = css`
	font-size: var(--ft-14);
	color: #f1f1f1;
	margin-right: 1em;
	opacity: 0.8;
	display: inline-block;
	transition: background 0.3s, color 0.3s, opacity 0.3s;
	&:hover {
		background: #f1f1f1;
		color: #000;
		opacity: 1;
	}
`;
