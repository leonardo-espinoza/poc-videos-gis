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
	<div className="dockPropiedadesV">
		<div className="encabezadoDock">
			DVR / Cámaras
		</div>
		<div className="cuerpoDock"> 
			Cliente X
			<ul>
				<li>Grupo 1</li>
				<li>Grupo 2</li>
				<li>Grupo 3
					<ul>
						<li>PT1010</li>
						<li>NB3467</li>
						<li>XX7654</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
);

CamarasTree.propTypes = {
	parametros: PropTypes.arrayOf(PropTypes.string)
};



export default connect(mapStateToProps, null)(CamarasTree);
