import React from 'react';
import ReactDOM from 'react-dom';
import { Provider,useDispatch, useSelector } from 'react-redux';
import AddForm from './features/TodoList/Add/index'
import List from './features/TodoList/List/index'
import './App.css';

function App (props){
    return (
        <div className="container py-5 max-width-900">
           <h1 className="text-center mb-2">Todo list</h1>  
           <AddForm/>
	       <List />
        </div>
    )
}

export default App;
