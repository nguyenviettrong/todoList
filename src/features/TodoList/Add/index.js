import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../todoSlice';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { uuid } from 'uuidv4';

function AddTodo (props){
    const dispatch = useDispatch();
    return (
        <div className="">
            <Formik
                initialValues={{
                    name: '',
                    status: false,
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string().required('Name is required!'),
                })}
                onSubmit={(fields, {resetForm}) => {    
                    fields.id = uuid();
                    dispatch(addTodo(fields))
                    resetForm({ fields: '' })
                }}
                render={({ errors, touched }) => (
                    <Form>
                        <div className="form-group">
                            <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} placeholder="Please enter your title..." />
                            <ErrorMessage name="name" component="span" className="invalid-feedback" />
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-primary py-1 px-5">Add</button>
                        </div>
                    </Form>
                )}
            />
        </div>
    )
}
export default AddTodo;
