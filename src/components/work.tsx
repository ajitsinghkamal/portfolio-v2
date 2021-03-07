import { PropsWithChildren } from "react";
import Pen from "./pen";
import { css, cx } from "@emotion/css";
import ThreejsGif from "../images/threejs-pen.gif";
import Strip from "./strip";

interface Portfolio {
	name: string;
	from: string;
	to: string;
	tech: string[];
	link?: string;
}

type Props = {
	portfolio: Portfolio[];
};

function WorkSection({ portfolio }: PropsWithChildren<Props>) {
	return (
		<section className={cssWork}>
			{portfolio.map((gig: Portfolio) => {
				return gig.from === "gif" ? (
					<a
						target="_blank"
						referrerPolicy="no-referrer"
						className={cx(cssGig, cssGif)}
						key={gig.from}
						href={gig.link}
					>
						<img src={ThreejsGif} alt={gig.name} />
						<Strip tech={gig.tech} isPen={true} />
					</a>
				) : gig.from === "ww-codepen" ? (
					<a
						target="_blank"
						referrerPolicy="no-referrer"
						className={cx(cssGig, cssPen)}
						key={gig.from}
						href={gig.link}
					>
						<Pen />
						<Strip tech={gig.tech} isPen={true} />
					</a>
				) : (
					<a
						className={cssGig}
						key={gig.name}
						href={gig.link}
						target="_blank"
						referrerPolicy="no-referrer"
					>
						<div className={cssYrWrap}>
							<small className={cssYr}>{gig.from}</small>
							<small className={cssYr}>
								{gig.to || "Current"}
							</small>
						</div>
						<p
							className={css`
								font-size: ${gig.name && gig.name.length < 14
									? "var(--ft-28)"
									: "var(--ft-20)"};
							`}
						>
							{gig.name}
						</p>
						<Strip
							tech={gig.tech}
							isPen={false}
							hasLink={!!gig.link}
						/>
					</a>
				);
			})}
		</section>
	);
}

const cssWork = css`
	display: flex;
	flex-flow: row wrap;
	margin: 3em -0.5em 1em;
`;
const cssStrip = css`
	opacity: 0;
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
	color: inherit;
	text-decoration: none;
	& > div:last-child {
		transform: translateY(100%);
		opacity: 0;
	}

	&:hover {
		> div:last-child {
			transform: translateY(0);
			opacity: 1;
		}
	}
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
