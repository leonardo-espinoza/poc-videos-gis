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

const DockAlertas = ({ parametros }) => (
	<div className="dockPropiedadesH">
		<table>
			<thead className="encabezadoDock">
				<tr>
					<th>Patente Móvil</th>
					<th>Nombre</th>
					<th>Hora/Momento</th>
					<th>Descripción</th>
					<th>Tipo</th>
				</tr>
			</thead>
			<tbody className="cuerpoDock">
				<tr>
					<td style={{ textAlign: 'left' }}>NB3467</td>
					<td style={{ textAlign: 'left' }}>Alerta 1</td>
					<td style={{ textAlign: 'center' }}>14/05/2018 9:34:12</td>
					<td style={{ textAlign: 'left' }}>Descripcion de Alerta 1.</td>
					<td style={{ textAlign: 'center' }}>Tipo 1</td>
				</tr>
				<tr>
					<td style={{ textAlign: 'left' }}>PT1010</td>
					<td style={{ textAlign: 'left' }}>Alerta 2</td>
					<td style={{ textAlign: 'center' }}>13/05/2018 19:30:00</td>
					<td style={{ textAlign: 'left' }}>Descripción de Alerta 2.</td>
					<td style={{ textAlign: 'center' }}>Tipo 2</td>
				</tr>
				<tr>
					<td style={{ textAlign: 'left' }}>NB3467</td>
					<td style={{ textAlign: 'left' }}>Alerta 3</td>
					<td style={{ textAlign: 'center' }}>13/05/2018 15:30:00</td>
					<td style={{ textAlign: 'left' }}>Descripción de Alerta 3</td>
					<td style={{ textAlign: 'center' }}>Tipo 1</td>
				</tr>
			</tbody>
		</table>
	</div>
);

DockAlertas.propTypes = {
	parametros: PropTypes.arrayOf(PropTypes.string)
};



export default connect(mapStateToProps, null)(DockAlertas);
