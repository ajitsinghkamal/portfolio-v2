import { Canvas } from "react-three-fiber";
import { css } from "@emotion/css";

import Blob from "./blob";

export default function Background() {
	return (
		<div
			className={css`
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
			<Canvas
				className={css`
					position: relative;
					width: 100%;
					height: 100%;
				`}
			>
				<Blob position={[4, 1, 0]} scale={[3.5, 3.5, 1.5]} />
			</Canvas>
		</div>
	);
}
