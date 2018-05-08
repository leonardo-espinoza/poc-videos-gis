Pasos para Instalar un ambiente SPA React/Redux
===============================================

### 1. GIT inicialización

Iniciar git repo.

```C
git init
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

Agregar un `.gitignore`.

Realizar primer *commit*.

```C
git add .
git commit -m "Commit inicial"
```


### 2. `npm` inicialización

Iniciar proyecto con `npm`.

```C
npm init
```


### 3. Webpack (y webpack-server)

```C
npm install webpack webpack-server --save-dev
```


### 4. CSS y Style loaders

```C
npm install style-loader css-loader --save-dev
```

### 5. Babel

```C
npm install babel-core babel-loader babel-preset-es2015 --save-dev
```


### 6. React

```C
npm install babel-preset-react --save-dev

npm install react react-dom --save
```


### 7. Redux

```C
npm install redux react-redux --save
```

### 8. Iniciando Redux

#### Escribir actions (actions.js)

```javascipt
export const PERFORM_ACTION = 'PERFORM_ACTION';

export function performAction(param) {
	return {
		type: PERFORM_ACTION,
		param
	};
}
```

#### Escribir reducers (reducers.js)

```javascipt
import { combineReducers } from 'redux'
import { PERFORM_ACTION } from '../actions/actions'


function myReducer(state, action) {
	if (typeof state === "undefined") {
		//return { myReducer: [] }
		return []
	}

	switch (action.type) {
	case PERFORM_ACTION:
		//return Object.assign({}, state, { myReducer: state.myReducer.concat([action.param]) });
		return state.concat([action.param])
	default:
		return state;
	}
}

const combinedReducer = combineReducers({
  myReducer
})

export default combinedReducer;
```

#### Crear store uniendo reducers (configureStore.js)

```javascipt
import { createStore } from 'redux';
import combinedReducer from './reducers/reducers';

//let store = createStore(combinedReducer, { myReducer: [] });
let store = createStore(combinedReducer);

export default store;
```

#### Uniendo React con Redux mediante *Provider*

```javascript
const app = document.getElementById('app');

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	, app);
```

#### Creando Componentes naturales de React y Componentes Contenedores de "Redux-React"

```javascript
import { connect } from 'react-redux';
import Lista from '../components/Lista';

const mapStateToProps = (state) => {
	return {
    	parametros: state.myReducer
    }
}


const ListaComponent = connect(mapStateToProps, null)(Lista)

export default ListaComponent
```



```javascript
import { connect } from 'react-redux';
import AddWordButton from '../components/AddWordButton';
import { performAction } from '../actions/actions';


const mapDistpatchToProps = (dispatch) => {
	let word = "Hola"
	return {
		onClickButton: () => dispatch(performAction(word))
	}
}

const AddWordButtonComponent = connect(null, mapDistpatchToProps)(AddWordButton);

export default AddWordButtonComponent;
```


### 9. Agregando *redux-promise-middleware*

```C
npm install redux-promise-middleware --save
```

