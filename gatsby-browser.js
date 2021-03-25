import "@fontsource/b612-mono/400.css";
import "@fontsource/b612-mono/700.css";
import "./src/styles/index.scss";

import wrapWithProvider, { store } from "./src/state/provider";

console.log("in-browser-config");

export const wrapRootElement = wrapWithProvider;

export const onInitialClientRender = () => {
	store.dispatch({ type: "mounted", payload: true });
};
export const onRouteUpdate = () => {
	console.log("inaaa");
	store.dispatch({ type: "loaded", payload: true });
};
