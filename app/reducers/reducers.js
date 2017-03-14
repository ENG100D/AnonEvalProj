// Initial state params
const INITIAL_STATE = {
	classes: [],
	teams: []
};

export var globalReducer = (state=INITIAL_STATE, action) => {
	switch(action.type) {
	default:
		console.log(action);
		return state;
	}

};
