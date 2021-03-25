/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import Loadable from "@loadable/component";
import { useSelector } from "react-redux";
const LoadableBgBlob = Loadable(() => import("./blob"));

export default function Background() {
	const loaded = useSelector((state) => state.loaded);

	return (
		<div
			css={css`
				position: fixed;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				height: 100%;
				background-image: linear-gradient(
					105.3deg,
					rgba(30, 39, 107, 1) 21.8%,
					rgba(77, 118, 221, 1) 100.2%
				);
			`}
		>
			{loaded && <LoadableBgBlob />}
		</div>
	);
}
