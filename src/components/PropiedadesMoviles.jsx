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

const PropiedadesMoviles = ({ parametros }) => (
	<div className="dockPropiedadesV">
		<table>
			<thead className="encabezadoDock">
				<tr>
					<th colspan="2">Propiedades DVR</th>
				</tr>
			</thead>
			<tbody className="cuerpoDock vertical">
				<tr>
					<td className="nombre">Patente</td>
					<td className="valor">PT1010</td>
				</tr>
				<tr>
					<td className="nombre">Device-ID</td>
					<td className="valor">PT1010</td>
				</tr>
				<tr>
					<td className="nombre">Group</td>
					<td className="valor">Grupo1</td>
				</tr>
				<tr>
					<td className="nombre">Tipo</td>
					<td className="valor">MDVR</td>
				</tr>
				<tr>
					<td className="nombre">Latitud</td>
					<td className="valor">-70.628611</td>
				</tr>
				<tr>
					<td className="nombre">Longitud</td>
					<td className="valor">-33.543056</td>
				</tr>
				<tr>
					<td className="nombre">Velocidad</td>
					<td className="valor">60 KM/H</td>
				</tr>
			</tbody>
		</table>
	</div>
);

PropiedadesMoviles.propTypes = {
	parametros: PropTypes.arrayOf(PropTypes.string)
};



export default connect(mapStateToProps, null)(PropiedadesMoviles);
