import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../todoSlice';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function AddTodo (props){
    const dispatch = useDispatch();
    return (
        <div className="">
            <Formik
                initialValues={{
                    name: '',
                    status: '',
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string().required('Name is required!'),
                })}
                onSubmit={fields => {
                    {/*console.log(fields)*/}
                    dispatch(addTodo(fields))
                }}
                render={({ errors, touched }) => (
                    <Form>
                        <div className="form-group">
                            <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} placeholder="Please enter your title..." />
                            <ErrorMessage name="name" component="span" className="invalid-feedback" />
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-primary mr-2">Add</button>
                            <button type="reset" className="btn btn-warning">Reset</button>
                        </div>
                    </Form>
                )}
            />
        </div>
    )
}
export default AddTodo;
