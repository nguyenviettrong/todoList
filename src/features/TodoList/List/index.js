import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

function AddTodo (props){
    const dispatch = useDispatch();
    const initialTodoList = useSelector(state => state.todos);
    
    var renderList = null;
    if (Array.isArray(initialTodoList) && initialTodoList.length) {
        renderList = initialTodoList.map((item, index) => {
            var checked = null;
            checked = item.status ? 'checked' : '';
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
                          <input type="checkbox" checked={checked} onChange="" className="custom-control-input" id={"toggleStatus-" + (index + 1)} name="toggleStatus" />
                          <label className="custom-control-label" for={"toggleStatus-" + (index + 1)}>Status</label>
                        </div>
                    </th>
                    <th className="text-center align-middle">
                        <i className="fa fa-pencil text-primary font-size-20 mr-3"></i>
                        <i className="fa fa-times text-danger font-size-20"></i>
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
