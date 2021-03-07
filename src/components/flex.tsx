import React, { PropsWithChildren } from "react";
import { css, cx } from "@emotion/css";

function Flex({
	children,
	wrapClass,
	...rest
}: PropsWithChildren<PropTypeWithWrappingClass>) {
	return (
		<div
			{...rest}
			className={cx(
				wrapClass,
				css`
					display: flex;
				`
			)}
		>
			{children}
		</div>
	);
}

export default Flex;
