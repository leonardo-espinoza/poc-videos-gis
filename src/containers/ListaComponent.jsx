import { connect } from 'react-redux'
import Lista from '../components/Lista'

const mapStateToProps = (state) => {
	return {
    	parametros: state.myReducer
    }
}


const ListaComponent = connect(mapStateToProps, null)(Lista)

export default ListaComponent
