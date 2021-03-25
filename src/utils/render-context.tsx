import {
	createContext,
	useReducer,
	useEffect,
	useLayoutEffect,
	PropsWithChildren,
	useContext,
} from "react";

type RenderContextType = {
	mounted: boolean;
	loaded: boolean;
};

type ActionType = {
	type: string;
	[x: string]: any;
};

const initialState: RenderContextType = {
	mounted: false,
	loaded: false,
};
export const RenderContext = createContext<RenderContextType>(initialState);

function renderContextReducer(state: RenderContextType, action: ActionType) {
	switch (action.type) {
		case "mounted":
		case "loaded":
			return { ...state, [action.type]: action.payload };
		default:
			return state;
	}
}
function RenderContextProvider({ children }: PropsWithChildren<{}>) {
	const [state, dispatch] = useReducer(renderContextReducer, initialState);
	console.log(state);
	useLayoutEffect(() => {
		const onLoadHandler = () => {
			console.log("loaded");
			dispatch({ type: "loaded", payload: true });
		};
		window.addEventListener("load", onLoadHandler);
		return () => {
			window.removeEventListener("load", onLoadHandler);
		};
	}, []);

	useEffect(() => {
		dispatch({ type: "mounted", payload: true });
	}, []);
	return (
		<RenderContext.Provider value={state}>
			{children}
		</RenderContext.Provider>
	);
}

function useRenderContext() {
	const context = useContext(RenderContext);
	if (context === undefined) {
		throw new Error(
			"useRenderContext must be used within a RenderContextProvider"
		);
	}
	return context;
}
export { RenderContextProvider, useRenderContext };
