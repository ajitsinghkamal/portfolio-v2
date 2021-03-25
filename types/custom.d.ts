import {
	useSelector as useReduxSelector,
	TypedUseSelectorHook,
} from "react-redux";
import { StateType } from "../src/state/store";
declare module "*.svg" {
	const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	export default content;
}

declare module "*.gif" {
	const value: any;
	export default value;
}

declare module "react-redux" {
	interface DefaultRootState extends StateType {}
}
