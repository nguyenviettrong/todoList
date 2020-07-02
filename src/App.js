import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './App.css';
import AddForm from './features/TodoList/Add/index'
import List from './features/TodoList/List/index'

class App extends React.Component {
    render () {
        return (
            <div className="container py-5 max-width-900">
	           <h1 className="text-center mb-2">Todo list</h1>  
	           <AddForm />
		       <List />
            </div>
        )
    }
}

export default App;
