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
class StreamVideoCamara extends React.Component {
	componentDidMount() {

	}

	render() {
		return (
			<div className="video" style={{ borderColor: ((this.props.camara.activo===true)? "#0090ea": "#222222") }}>
				<div className="cabeceraVideo">
					Cámara: {this.props.camara.id}
				</div>
				<video id={"camara_"+this.props.camara.id} width="480" height="auto" autoPlay loop >
					<source src={this.props.camara.source} type={this.props.camara.contentType} />
					<p>Este video no está soportado por el browser.</p>
				</video>
				<div className="pieVideo" />
			</div>
		);
	}
}

StreamVideoCamara.propTypes = {
	parametros: PropTypes.arrayOf(PropTypes.string)
};



export default connect(mapStateToProps, null)(StreamVideoCamara);
