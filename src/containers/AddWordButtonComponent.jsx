import { connect } from 'react-redux';
import AddWordButton from '../components/AddWordButton';
import { getChileanRegions } from '../actions/actions'
//import { performAction } from '../actions/actions'


const mapDistpatchToProps = (dispatch) => {
	let word = "Hola"
	return {
		//onClickButton: () => dispatch(performAction(word))
		onClickButton: () => dispatch(getChileanRegions())
	}
}

const AddWordButtonComponent = connect(null, mapDistpatchToProps)(AddWordButton);

export default AddWordButtonComponent;
