import { GETCLASSES, GETTEAMS, GETTEAMDATA, SETCURRCLASS, SETCURRTEAM } from 'actions';

// Initial state params
const INITIAL_STATE = {
	classes: [],
	teams: [],
	currClass: '',
	currTeam: 0,
	students: []
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
	case SETCURRCLASS:
		return {
			...state,
			currClass: action.payload.classItem
		};
	case SETCURRTEAM:
		return {
			...state,
			currTeam: action.payload.teamItem
		};
	case GETTEAMDATA:
		var arr = Object.values(action.payload.data);
		
		return {
			...state,
			students: arr
		}
	default:
		return state;
	}

};
