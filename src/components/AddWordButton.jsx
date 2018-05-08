import React from 'react'
import PropTypes from 'prop-types'


const nextWord = () => "Hola"
const clickNextButton = () => {
	let word = nextWord()
	console.log("Dispatch! " + word)
}

const AddWordButton = ({onClickButton}) => (
	<button onClick={onClickButton} >WORD</button>
)

AddWordButton.propTypes = {
	onClickButton: PropTypes.func.isRequired
}

export default AddWordButton
