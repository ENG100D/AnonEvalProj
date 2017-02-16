// Initial state params
const INITIAL_STATE = { all: [] };

export default function(state=INITIAL_STATE, action) {
	switch(action.type) {

	default:
		console.log(action);
		return state;
	}

}
