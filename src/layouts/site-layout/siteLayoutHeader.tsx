import { useStaticQuery, graphql } from "gatsby";
import { css } from "@emotion/css";

import IconWave from "@assets/svgs/wave.svg";

function Header() {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						greeting
					}
				}
			}
		`
	);
	return (
		<header className={CssRoot}>
			<div className={CssContainer}>
				<div>
					<span
						className={css`
							margin-right: 1em;
						`}
					>
						<IconWave />
					</span>
				</div>
			</div>
		</header>
	);
}

//#region Styles
const CssRoot = css`
	position: fixed;
	right: 0;
	top: 0;
	left: 0;
	z-index: 1;
	width: 100%;
`;

const CssContainer = css`
	margin: 0 auto;
	max-width: var(--container);
	display: flex;
	justify-content: space-between;
	height: 80px;
	align-items: center;
`;

//#endregion Styles

export default Header;
