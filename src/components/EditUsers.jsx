import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Formik, Form, Field} from 'formik';
import {useDispatch, useSelector} from 'react-redux'
import {edituser} from './../redux/usersSlice'
import * as Yup from 'yup';
import {useNavigate,useParams} from 'react-router-dom'

function EditUsers() {

  let dispatch = useDispatch()
  let navigate = useNavigate()
  let data = useSelector((state)=>state.users.usersData)
  let params = useParams()
  let [isValid,setIsValid] = useState(false)

  useEffect(()=>{
    if(params.id<data.length)
      setIsValid(true)
    else
      navigate('/dashboard')
  },[])

  const AddUserSchema = Yup.object().shape({
    firstName:Yup.string().required('First Name Required').min(2,'Too Short').max(50,'Too Long'),
    lastName:Yup.string().required('Last Name Required').min(2,'Too Short').max(50,'Too Long'),
    email:Yup.string().required('Email Required').email('Invalid Email'),
    mobile:Yup.string().required('Mobile Required').matches(/^\d{10}$/,"Enter Valid Mobile Number"),
    batch:Yup.string()
  })
  return <div>
   {
      isValid? <Formik
      initialValues={{
        firstName:data[params.id].firstName,
        lastName:data[params.id].lastName,
        email:data[params.id].email,
        mobile:data[params.id].mobile,
        batch:data[params.id].batch
      }}
  
      validationSchema={AddUserSchema}
  
      onSubmit={values =>{
        dispatch(edituser({id:params.id,data:values}))
        navigate('/dashboard')
      }}
      >
  
  {({ errors, touched }) => (
           <Form className='form-wrapper'>
             <Field name="firstName" type='text' placeholder='First Name' className='form-field'/>
             {errors.firstName && touched.firstName ? (
               <div className='error-message'>{errors.firstName}</div>
             ) : null}
             <Field name="lastName" type='text' placeholder='Last Name' className='form-field'/>
             {errors.lastName && touched.lastName ? (
               <div className='error-message'>{errors.lastName}</div>
             ) : null}
             <Field name="email" type="email"  placeholder='Email' className='form-field'/>
             {errors.email && touched.email ? <div className='error-message'>{errors.email}</div> : null}
  
             <Field name="mobile" type="text"  placeholder='Mobile' className='form-field'/>
             {errors.mobile && touched.mobile ? <div className='error-message'>{errors.mobile}</div> : null}
  
             <Field name="batch" type="text"  placeholder='Batch' className='form-field'/>
             {errors.batch && touched.batch ? <div className='error-message'>{errors.batch}</div> : null}
             <Button type="submit" variant='primary' className='button'>Submit</Button>
           </Form>
         )}
      </Formik>:<h1>Loading...</h1>
   }
  </div>
}

export default EditUsers