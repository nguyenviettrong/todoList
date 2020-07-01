import React from 'react';
import './App.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import todoList from './constants/todoList.js'

class App extends React.Component {
    render() {
        var initialTodoList = [
            {
                id: 1,
                name: 'Học React JS',
                status: true
            },
            {
                id: 2,
                name: 'Học Node JS',
                status: false
            },
            {
                id: 3,
                name: 'Học PHP',
                status: false
            },
            {
                id: 4,
                name: 'Học Bootstrap 4',
                status: true
            },
            {
                id: 5,
                name: 'Học Java Scripts',
                status: true
            },
        ];
        var renderList = null;
        if (Array.isArray(initialTodoList) && initialTodoList.length) {
            renderList = initialTodoList.map((item, index) => {
                var checked = null;
                checked = item.status ? 'checked' : '';
                // console.log(checked)
                return (
                    <tr>
                        <th className="text-center">
                            {index + 1}
                        </th>
                        <th className="">
                            {item.name}
                        </th>
                        <th className="text-center">
                            <div className="custom-control custom-switch">
                              <input type="checkbox" checked={checked} onChange={this.handleChangeCb} className="custom-control-input" id={"toggleStatus-" + (index + 1)} name="toggleStatus" />
                              <label className="custom-control-label" for={"toggleStatus-" + (index + 1)}>Status</label>
                            </div>
                        </th>
                        <th className="text-center">
                            <i className="fa fa-pencil text-primary font-size-20 mr-3"></i>
                            <i className="fa fa-times text-danger font-size-20"></i>
                        </th>
                    </tr>
                )
            })
        }else{
            renderList = 
            <tr>
                <th colspan="4">
                    <div className="alert alert-danger px-2 py-1 m-0">Sorry data is empty!</div>
                </th>
            </tr>
        }
        return (
            <div className="container py-5 max-width-700">
                <Formik
                    initialValues={{
                        name: '',
                        status: '',
                    }}
                    validationSchema={Yup.object().shape({
                        name: Yup.string()
                            .required('Name is required'),
                        status: Yup.string()
                            .required('Status is required'),
                    })}
                    onSubmit={fields => {
                        {/*console.log(fields)*/}
                    }}
                    render={({ errors, touched }) => (
                        <Form>
                            {/*{console.log(errors,touched)}  */}
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                <ErrorMessage name="name" component="span" className="invalid-feedback" />
                            </div>
                            <div className="form-group text-center">
                                <button type="submit" className="btn btn-primary mr-2">Add</button>
                                <button type="reset" className="btn btn-warning">Reset</button>
                            </div>
                        </Form>
                    )}
                />
                <h1 className="text-center mt-5 mb-2">Todo list</h1>  
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
            </div>
        )
    }
}

export default App;
