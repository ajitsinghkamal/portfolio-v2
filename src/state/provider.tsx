import { ReactNode } from "react";
import { Provider } from "react-redux";

import createStore from "./store";

export const store = createStore();

export default ({ element }: { element: ReactNode }) => {
	return <Provider store={store}>{element}</Provider>;
};
