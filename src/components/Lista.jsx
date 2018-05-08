import React from 'react';
import PropTypes from 'prop-types'

const Lista = ({ parametros }) => (
	<ul>
		{parametros.map((parametro, idx) => 
			<li key={idx}>{parametro}</li>
		)}
	</ul>
);

Lista.propTypes = {
	parametros: PropTypes.arrayOf(PropTypes.string)
};

export default Lista;
