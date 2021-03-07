import { PropsWithChildren } from "react";
import Pen from "./pen";
import { css, cx } from "@emotion/css";
import ThreejsGif from "../images/threejs-pen.gif";

interface Portfolio {
	name: string;
	from: string;
	to: string;
}

type Props = {
	portfolio: Portfolio[];
};

function WorkSection({ portfolio }: PropsWithChildren<Props>) {
	return (
		<section className={cssWork}>
			{portfolio.map((gig: Portfolio) => {
				return gig.from === "gif" ? (
					<div className={cx(cssGig, cssGif)} key={gig.from}>
						<img src={ThreejsGif} />
					</div>
				) : gig.from === "ww-codepen" ? (
					<div className={cx(cssGig, cssPen)} key={gig.from}>
						<Pen />
					</div>
				) : (
					<div className={cssGig} key={gig.name}>
						<div className={cssYrWrap}>
							<small className={cssYr}>{gig.from}</small>
							<small className={cssYr}>
								{gig.to || "Current"}
							</small>
						</div>
						<p
							className={css`
								font-size: ${gig.name && gig.name.length < 20
									? "var(--ft-28)"
									: "var(--ft-20)"};
							`}
						>
							{gig.name}
						</p>
					</div>
				);
			})}
		</section>
	);
}

const cssWork = css`
	margin-top: 5em;
	display: flex;
	flex-flow: row wrap;
	margin: 5em -0.5em 1em;
`;
const cssGig = css`
	position: relative;
	padding: 1em;
	background: rgba(0, 0, 0, 0.4);
	overflow: hidden;
	height: 150px;
	flex: 1 0 calc(33% - 2em);
	margin: 0.5em;
	min-width: 240px;
	max-width: 300px;
`;

const cssPen = css`
	padding: 0;
`;
const cssGif = css`
	padding: 0;
	& > img {
		margin: 0;
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`;

const cssYrWrap = css`
	margin: 0;
	font-size: var(--ft-16);
	font-variant: tabular-nums;
`;
const cssYr = css`
	&:first-child:after {
		content: "-";
		margin: 0 5px;
	}
`;
export default WorkSection;
