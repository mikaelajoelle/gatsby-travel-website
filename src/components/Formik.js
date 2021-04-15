import React from 'react';
import { Formik, Form, useField, Field } from 'formik';
import styled from "styled-components";
 
 const MyTextInput = ({ label, ...props }) => {
   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
   // which we can spread on <input>. We can use field meta to show an error
   // message if the field is invalid and it has been touched (i.e. visited)
   const [field, meta] = useField(props);
   return (
     <>
       <label htmlFor={props.id || props.name}>{label}</label>
       <input className="text-input" {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </>
   );
 };
 
 const MySelect = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   return (
     <div>
       <label htmlFor={props.id || props.name}>{label}</label>
       <select {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </div>
   );
 };
 
 // And now we can use these
 const SignupForm = () => {
   return (
     <>
       <FormContainer>
        <FormHeading>How Can We Help ?</FormHeading>
       <Formik
         initialValues={{
           firstName: '',
           lastName: '',
           email: '',
           region: '', // added for our select
           message: '',
         }}
         
         onSubmit={(values, { setSubmitting, resetForm }) => {
           setTimeout(() => {
             alert(JSON.stringify(values, null, 2));
             setSubmitting(false);
             resetForm(true);
           }, 400);
         }}
       >
        <FormWrapper>
         <Form>
            <InputWrapper>
           <MyTextInput
             label="First Name"
             name="firstName"
             type="text"
             placeholder="First Name"
           />
 
           <MyTextInput
             label="Last Name"
             name="lastName"
             type="text"
             placeholder="Last Name"
           />
 
           <MyTextInput
             label="Email Address"
             name="email"
             type="email"
             placeholder="Email Address"
           />
 
           <MySelect label="Region:" name="region">
             <option value="region">Select a region</option>
             <option value="nort-america">North America</option>
             <option value="south-america">South America</option>
             <option value="europe">Europe</option>
             <option value="asia">Asia</option>
             <option value="africa">Africa</option>
             <option value="australia">Australia/Oceania</option>
             <option value="antarctica">Antarctica</option>
           </MySelect>

           </InputWrapper>

            <FieldWrapper>
           <Field
            className="form-control"
            component="textarea"
            name="message"
            rows="6"
            placeholder="Please share your message."
            />
            </FieldWrapper>
 
           <Button
           type="submit">
               Submit
           </Button>
         </Form>
         </FormWrapper>
       </Formik>
       </FormContainer>
     </>
   );
 };

 export default SignupForm

 const FormContainer = styled.div`
    min-height: 100vh;
    padding: 7rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1200px){
        padding: 7rem 5rem;
    }

    @media screen and (max-width: 600px){
        padding: 7rem 2rem;
    }
`

const FormHeading = styled.h2`
    font-size: clamp(1.2rem, 4vw, 2.5rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
    font-weight: 300;

    &::after{
        content: '';
        border-bottom: 1px solid #000;
        width: 60px;
        display: block;
        margin: 1rem auto 0 auto;
    }
`

const FormWrapper = styled.div`
    background: #fafafb;
    color: #000;
    padding: 5rem;
    border-radius: 10px;

    @media screen and (max-width: 600px){
        padding: 3rem;
    }
`

const FieldWrapper = styled.div`
    textarea{
        width: 100%;
        margin-bottom: 25px;
        padding: 10px 0 0 10px;
        border: 1px solid #d5d5d5;
    }
`

const InputWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    margin-bottom: 20px;

    label{
        padding-right: 10px;
    }

    select{
        border: 1px solid #d5d5d5;
        padding: 5px;
    }

    input{
        width: 300px;
        height: 35px;
        border: 1px solid #d5d5d5;
        padding-left: 10px;
    }
`

const Button = styled.button`
    border-radius: 4px;
    background: #f26a2e;
    white-space: no-wrap;
    padding: 10px 32px;
    color: #fff;
    font-size: 14px;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important!;
    border-radius: 50px;

    &:hover{
        background: #366bcc;
    }
`