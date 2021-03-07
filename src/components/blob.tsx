/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import type { Mesh } from "three";
import * as THREE from "three";
import noise from "@utils/noise";

function Blob({ spikeFreq = 3, ...props }) {
	const mesh = useRef<Mesh>();
	const PerlinNoise = useMemo(() => new noise(0), []);
	useFrame(() => {
		const time = performance.now() * 0.0009;
		if (mesh.current && mesh.current.geometry.isBufferGeometry) {
			const position = mesh.current.geometry.getAttribute("position");

			for (let i = 0; i < position.array.length; i++) {
				const x = position.getX(i);
				const y = position.getY(i);
				const z = position.getZ(i);
				const vector = new THREE.Vector3(x, y, z);
				vector
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
		<mesh ref={mesh} {...props}>
			<sphereGeometry args={[1, 128, 128]} />
			<meshNormalMaterial />
		</mesh>
	);
}

export default function BackgroundWithBlob() {
	return (
		<Canvas
			css={css`
				position: relative;
				width: 100%;
				height: 100%;
			`}
		>
			<Blob position={[4, 1, 0]} scale={[3.5, 3.5, 1.5]} />
		</Canvas>
	);
}
