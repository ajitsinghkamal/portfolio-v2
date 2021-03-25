import "@fontsource/b612-mono/400.css";
import "@fontsource/b612-mono/700.css";
import "./src/styles/index.scss";

import wrapWithProvider, { store } from "./src/state/provider";

export const wrapRootElement = wrapWithProvider;

window.addEventListener("load", () => {
	store.dispatch({ type: "loaded", payload: true });
});

export const onInitialClientRender = () => {
	store.dispatch({ type: "mounted", payload: true });
};
