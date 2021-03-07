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
				<div
					className={css`
						display: flex;
						align-items: center;
					`}
				>
					<IconWave />
					<span
						className={css`
							margin-left: 1em;
							font-size: var(--ft-14);
						`}
					>
						{site.siteMetadata.greeting}
					</span>
				</div>
			</div>
		</header>
	);
}

//#region Styles
const CssRoot = css`
	width: 100%;
`;

const CssContainer = css`
	margin: 0 auto;
	width: var(--container);
	display: flex;
	max-width: 90%
	justify-content: space-between;
	height: 80px;
	align-items: center;
`;

//#endregion Styles

export default Header;
