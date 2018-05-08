
export const PERFORM_ACTION = 'PERFORM_ACTION';
export const GET_CHILEAN_REGIONS = 'GET_CHILEAN_REGIONS';


export function performAction(param) {
	return {
		type: PERFORM_ACTION,
		param
	};
}

export function getChileanRegions() {
	return {
		type: GET_CHILEAN_REGIONS,
		payload: new Promise(resolve => fetch("https://apis.modernizacion.cl/dpa/regiones").then(response => {
			resolve(response.json());
		})) 
	};
}

