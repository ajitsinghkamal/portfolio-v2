/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useRef, useMemo, useState, useCallback } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import type { Mesh } from "three";
import { Vector3 } from "three";
import noise from "@utils/noise";

type Props = {
	spikeFreq?: number;
	afterObjectRender: () => void;
	[x: string]: any;
};

function Blob({ spikeFreq = 3, afterObjectRender, ...props }: Props) {
	const mesh = useRef<Mesh>();
	const PerlinNoise = useMemo(() => new noise(0), []);
	const [vector] = useState(() => new Vector3());

	useFrame(() => {
		const time = performance.now() * 0.0009;
		if (mesh.current && mesh.current.geometry.isBufferGeometry) {
			const position = mesh.current.geometry.getAttribute("position");
			for (let i = 0; i < position.array.length; i++) {
				vector
					.set(position.getX(i), position.getY(i), position.getZ(i))
					.normalize()
					.multiplyScalar(
						1 +
							0.3 *
								PerlinNoise.perlin3(
									vector.x * spikeFreq + time,
									vector.y * spikeFreq,
									vector.z * spikeFreq
								)
					);
				position.setXYZ(i, vector.x, vector.y, vector.z);
			}
			position.needsUpdate = true;
			mesh.current.geometry.computeVertexNormals();
		}
	});

	return (
		<mesh ref={mesh} {...props} onUpdate={afterObjectRender}>
			<sphereGeometry args={[1, 128, 128]} />
			<meshNormalMaterial />
		</mesh>
	);
}

export default function BackgroundWithBlob() {
	const [appeared, setAppearance] = useState(false);
	const afterObjectRender = useCallback(() => {
		!appeared && setAppearance(true);
	}, [appeared]);
	return (
		<Canvas
			css={css`
				position: relative;
				width: 100%;
				height: 100%;
				opacity: ${appeared ? "1" : "0"};
				transition: opacity 0.6s;
			`}
		>
			<Blob
				position={[4, 1, 0]}
				scale={[3.5, 3.5, 1.5]}
				afterObjectRender={afterObjectRender}
			/>
		</Canvas>
	);
}
