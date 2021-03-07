/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import IconLink from "@assets/svgs/link.svg";

//#region Types
type Props = {
	tech: string[];
	isPen: boolean;
	hasLink?: boolean;
};
//#endregion Types

function Strip({ tech = [], isPen, hasLink = true }: Props) {
	return (
		<div css={CssBase}>
			{tech.map((item) => (
				<span css={CssTech} key={item}>
					{item}
				</span>
			))}
			{hasLink && <span css={CssVisit}>Visit {isPen ? "Pen" : ""}</span>}
			{hasLink && <IconLink width={18} height={18} css={CssIcon} />}
		</div>
	);
}

//#region Styles
const CssBase = css`
	font-size: var(--ft-11);
	background: var(--dark);
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 6px 16px;
	color: var(--neutral);
	display: flex;
	align-items: center;
	transition: transform 0.3s, opacity 0.3s;
`;

const CssVisit = css`
	margin-left: auto;
`;

const CssTech = css`
	& + &:before {
		content: "+";
	}
`;

const CssIcon = css`
	align-self: flex-start;
	margin-left: 10px;
`;

//#endregion Styles

export default Strip;
