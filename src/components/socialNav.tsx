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
	margin-left: -0.5em;
	margin-top: 1.5em;
`;

const cssNavBtn = css`
	font-size: var(--ft-14);
	color: #f1f1f1;
	margin-right: 1em;
	&:hover {
		background: #f1f1f1;
		color: #000;
	}
`;
