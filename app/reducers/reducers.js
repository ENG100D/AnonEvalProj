import { GETCLASSES, GETTEAMS, GETTEAMDATA } from 'actions';

// Initial state params
const INITIAL_STATE = {
	classes: [],
	teams: [],
	currClass: 0,
	currTeam: 0,

};

export var globalReducer = (state=INITIAL_STATE, action) => {
	switch(action.type) {
	case GETCLASSES:
		return {
			...state,
			classes: action.payload.data
		};
	case GETTEAMS:
		return {
			...state,
			teams: action.payload.data
		};
	default:
		console.log(action);
		return state;
	}

};
