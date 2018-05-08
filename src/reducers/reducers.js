import { combineReducers } from 'redux'
import { PERFORM_ACTION } from '../actions/actions'


function myReducer(state, action) {
	if (typeof state === "undefined") {
		//return { myReducer: [] }
		return []
	}

	switch (action.type) {
	case PERFORM_ACTION:
		//return Object.assign({}, state, { myReducer: state.myReducer.concat([action.param]) });
		return state.concat([action.param])
	case 'GET_CHILEAN_REGIONS_PENDING':
		return state;
	case 'GET_CHILEAN_REGIONS_FULFILLED':
		return state.concat(action.payload.map(region => region.nombre + '( lat: ' + region.lat + ', lng: ' + region.lng + ' )'));
	case 'GET_CHILEAN_REGIONS_REJECTED':
		return state;
	default:
		return state;
	}
}

const combinedReducer = combineReducers({
  myReducer
})

export default combinedReducer;
