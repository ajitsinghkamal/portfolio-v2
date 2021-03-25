import React, { RenderContextProvider } from "@utils/render-context";
import "@fontsource/b612-mono/400.css";
import "@fontsource/b612-mono/700.css";
import "./src/styles/index.scss";

console.log("in-browser-config");

export const wrapRootElement = ({ element }) => {
	return <RenderContextProvider>{element}</RenderContextProvider>;
};
