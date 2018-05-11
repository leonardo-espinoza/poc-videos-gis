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

/* Original Video size: 960x480 */
const StreamVideoCamara = ({ camara, parametros }) => (
	<div className="video">
		<video id={"camara_"+camara.id} width="480" height="auto" autoPlay loop >
			<source src={camara.source} type={camara.contentType} />
			<p>Este video no está soportado por el browser.</p>
		</video>
	</div>
);

StreamVideoCamara.propTypes = {
	parametros: PropTypes.arrayOf(PropTypes.string)
};



export default connect(mapStateToProps, null)(StreamVideoCamara);
