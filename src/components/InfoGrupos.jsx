import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CamarasTree from './CamarasTree'
import PropiedadesMoviles from './PropiedadesMoviles'

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

const InfoGrupos = ({ parametros }) => (
	<div className="espacioPropiedades">
		<CamarasTree />
		<PropiedadesMoviles />
	</div>
);

InfoGrupos.propTypes = {
	parametros: PropTypes.arrayOf(PropTypes.string)
};



export default connect(mapStateToProps, null)(InfoGrupos);
