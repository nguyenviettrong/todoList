import React, {useCallback} from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { removeTodo,toggleStatus,editTodo } from '../todoSlice';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

function AddTodo (props){
    const dispatch = useDispatch();
    const initialTodoList = useSelector(state => state.todos);
 
    function handleRemove(id){
        dispatch(removeTodo(id))
    }

    function handleToggleStatus(id){
        dispatch(toggleStatus(id))
    }

    function handleEdit(todo){
        dispatch(editTodo(todo))
    }

    // console.log(initialTodoList);
    var renderList = null;
    if (Array.isArray(initialTodoList) && initialTodoList.length) {
        renderList = initialTodoList.map((item, index) => {
            var checked,statusLabel = null;
            checked = item.status ? 'checked' : '';
            statusLabel = item.status ? 'Done' : 'Doing';

            return (
                <tr>
                    <th className="text-center align-middle">
                        {index + 1}
                    </th>
                    <th className="align-middle">
                        {item.name}
                    </th>
                    <th className="text-center align-middle">
                        <div className="custom-control custom-switch">
                          <input type="checkbox" checked={checked} onChange={(e) => handleToggleStatus(item.id)} className="custom-control-input" id={"toggleStatus-" + (index + 1)} name="toggleStatus" />
                          <label className="custom-control-label" for={"toggleStatus-" + (index + 1)}>{statusLabel}</label>
                        </div>
                    </th>
                    <th className="text-center align-middle">
                        <i className="fa fa-pencil text-secondary font-size-18 mr-3" onClick={(e) => handleEdit(item)}></i>
                        <i className="fa fa-times text-danger font-size-20" onClick={(e) => handleRemove(item.id)}></i>
                    </th>
                </tr>
            )
        })
    }else{
        renderList =    <tr>
                            <th colspan="4">
                                <div className="alert alert-danger px-2 py-1 m-0">Sorry data is empty!</div>
                            </th>
                        </tr>
    }
    return (
        <div className="table-responsive">
            <table className="table table-bordered m-0">
                <tr>
                    <th className="w-5 text-center">#</th>
                    <th className="w-60 text-center">Name</th>
                    <th className="w-20 text-center">Status</th>
                    <th className="w-15 text-center">Action</th>
                </tr>
                {renderList}
            </table>
        </div>
    )
}
export default AddTodo;
