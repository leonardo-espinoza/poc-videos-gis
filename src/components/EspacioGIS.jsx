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


const EspacioGIS = ({ parametros }) => (
	<div className="espacioGIS">
		<div id="cameraMap" />
	</div>
);

EspacioGIS.propTypes = {
	parametros: PropTypes.arrayOf(PropTypes.string)
};



export default connect(mapStateToProps, null)(EspacioGIS);
