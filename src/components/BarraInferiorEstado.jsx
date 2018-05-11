import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return {
    	parametros: state.myReducer
    }
}
const mapDistpatchToProps = (dispatch) => {
	let word = "Hola"
	return {
		//onClickButton: () => dispatch(performAction(word))
		onClickButton: () => dispatch(getChileanRegions())
	}
}

const BarraInferiorEstado = ({ parametros }) => (
	<div className="barraHorizontalBottom">
		Barra Inferior Estado
	</div>
	/*<ul>
		{parametros.map((parametro, idx) => 
			<li key={idx}>{parametro}</li>
		)}
	</ul>*/
);

BarraInferiorEstado.propTypes = {
	parametros: PropTypes.arrayOf(PropTypes.string)
};



export default connect(mapStateToProps, null)(BarraInferiorEstado);
