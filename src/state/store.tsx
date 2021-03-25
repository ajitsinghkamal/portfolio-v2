import { createStore as reduxCreateStore, Reducer } from "redux";

export type StateType = {
	mounted?: boolean;
	loaded?: boolean;
};

type ActionType = {
	type: string;
	[x: string]: any;
};

const reducer: Reducer<StateType | undefined, ActionType> = (
	state: StateType | undefined,
	action: ActionType
) => {
	switch (action.type) {
		case "mounted":
		case "loaded":
			return { ...state, [action.type]: action.payload };
		default:
			return state;
	}
};

const initialState = {
	mounted: false,
	loaded: false,
};

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
