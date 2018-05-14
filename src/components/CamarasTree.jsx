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

const CamarasTree = ({ parametros }) => (
	<div className="dockPropiedades">
		<div className="encabezadoDock">
			DVR / Cámaras
		</div>
		<ul className="cuerpoDock">
			<li>Grupo 1</li>
			<li>Grupo 2</li>
			<li>
				<ul>
					<li>Cámara 1</li>
					<li>Cámara 2</li>
					<li>Cámara 3</li>
				</ul>
			</li>
		</ul>
	</div>
);

CamarasTree.propTypes = {
	parametros: PropTypes.arrayOf(PropTypes.string)
};



export default connect(mapStateToProps, null)(CamarasTree);
