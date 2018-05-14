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

const AlertasList = ({ parametros }) => (
	<div className="dockPropiedades">
		<table>
			<thead className="encabezadoDock">
				<tr>
					<th>Alarmas</th>
					<th>Hora</th>
				</tr>
			</thead>
			<tbody className="cuerpoDock">
				<tr>
					<td className="nombre">Alarma 1</td>
					<td className="valor">9:34:12</td>
				</tr>
				<tr>
					<td className="nombre">Alarma 2</td>
					<td className="valor">19:30:00</td>
				</tr>
			</tbody>
		</table>
	</div>
);

AlertasList.propTypes = {
	parametros: PropTypes.arrayOf(PropTypes.string)
};



export default connect(mapStateToProps, null)(AlertasList);
