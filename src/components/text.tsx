import React, { FunctionComponent } from "react";

type Props = {
	level?: number;
};
const Text: FunctionComponent<Props> = props => {
	const _tag = props.level ? `h${props.level}` : "p";
	return React.createElement(_tag, {}, props.children);
};

export default Text;
