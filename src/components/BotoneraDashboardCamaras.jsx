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

const BotoneraDashboardCamaras = ({ parametros }) => (
	<div className="barraHorizontalBotonera">
		<div className="botoneraIzquierda">
			<div class="boton glass">Botón 1</div>
			<div class="boton glass">Botón 2</div>
			<div class="boton glass">Botón 3</div>
		</div>
		<div className="botoneraDerecha">
			<div class="boton glass">Botón A</div>
			<div class="boton glass">Botón B</div>
			<div class="boton glass">Botón C</div>
		</div>
		<div className="infoUsuario">
			<div class="info glass">
				Leonardo A. Espinoza<br/>
				9:45<br />
				14/05/2018
			</div>
		</div>
	</div>
);

BotoneraDashboardCamaras.propTypes = {
	parametros: PropTypes.arrayOf(PropTypes.string)
};



export default connect(mapStateToProps, null)(BotoneraDashboardCamaras);
