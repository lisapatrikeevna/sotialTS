import React from 'react'
import { Field, reduxForm } from 'redux-form'
//@ts-ignore
const required = value => (value || typeof value === 'number' ? undefined : 'Required')
// const maxLength = max => value =>
//     value && value.length > max ? `Must be ${max} characters or less` : undefined
// const maxLength15 = maxLength(15)
// export const minLength = min => value =>
//     value && value.length < min ? `Must be ${min} characters or more` : undefined
// export const minLength2 = minLength(2)
// const number = value =>
//     value && isNaN(Number(value)) ? 'Must be a number' : undefined
// const minValue = min => value =>
//     value && value < min ? `Must be at least ${min}` : undefined
// const minValue13 = minValue(13)
// const email = value =>
//     value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
//         ? 'Invalid email address'
//         : undefined
// const tooYoung = value =>
//     value && value < 13
//         ? 'You do not meet the minimum age requirement!'
//         : undefined
// const aol = value =>
//     value && /.+@aol\.com/.test(value)
//         ? 'Really? You still use AOL for your email?'
//         : undefined
// const alphaNumeric = value =>
//     value && /[^a-zA-Z0-9 ]/i.test(value)
//         ? 'Only alphanumeric characters'
//         : undefined
// export const phoneNumber = value =>
//     value && !/^(0|[1-9][0-9]{9})$/i.test(value)
//         ? 'Invalid phone number, must be 10 digits'
//         : undefined
//
// const renderField = ({
//                          input,
//                          label,
//                          type,
//                          meta: { touched, error, warning }
//                      }) => (
//     <div>
//         <label>{label}</label>
//         <div>
//             <input {...input} placeholder={label} type={type} />
//             {touched &&
//             ((error && <span>{error}</span>) ||
//                 (warning && <span>{warning}</span>))}
//         </div>
//     </div>
// )
//
// const FieldLevelValidationForm = props => {
//     const { handleSubmit, pristine, reset, submitting } = props
//     return (
//         <form onSubmit={handleSubmit}>
//             <Field
//                 name="username"
//                 type="text"
//                 component={renderField}
//                 label="Username"
//                 validate={[required, maxLength15, minLength2]}
//                 warn={alphaNumeric}
//             />
//             <Field
//                 name="email"
//                 type="email"
//                 component={renderField}
//                 label="Email"
//                 validate={email}
//                 warn={aol}
//             />
//             <Field
//                 name="age"
//                 type="number"
//                 component={renderField}
//                 label="Age"
//                 validate={[required, number, minValue13]}
//                 warn={tooYoung}
//             />
//             <Field
//                 name="phone"
//                 type="number"
//                 component={renderField}
//                 label="Phone number"
//                 validate={[required, phoneNumber]}
//             />
//             <div>
//                 <button type="submit" disabled={submitting}>
//                     Submit
//                 </button>
//                 <button type="button" disabled={pristine || submitting} onClick={reset}>
//                     Clear Values
//                 </button>
//             </div>
//         </form>
//     )
// }

// export default reduxForm({
//     form: 'fieldLevelValidation' // a unique identifier for this form
// })(FieldLevelValidationForm)




// import React from 'react'
// import { Field, reduxForm } from 'redux-form'
// import TextField from '@material-ui/core/TextField'
// import Checkbox from '@material-ui/core/Checkbox'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import FormControl from '@material-ui/core/FormControl'
// import Select from '@material-ui/core/Select'
// import InputLabel from '@material-ui/core/InputLabel'
// import FormHelperText from '@material-ui/core/FormHelperText'
// import Radio from '@material-ui/core/Radio'
// import RadioGroup from '@material-ui/core/RadioGroup'
// import asyncValidate from './asyncValidate'

// const validate = values => {
//     const errors = {}
//     const requiredFields = [
//         'firstName',
//         'lastName',
//         'email',
//         'favoriteColor',
//         'notes'
//     ]
//     requiredFields.forEach(field => {
//         if (!values[field]) {
//             errors[field] = 'Required'
//         }
//     })
//     if (
//         values.email &&
//         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//     ) {
//         errors.email = 'Invalid email address'
//     }
//     return errors
// }

// const renderTextField = ({
//                              label,
//                              input,
//                              meta: { touched, invalid, error },
//                              ...custom
//                          }) => (
//     <TextField
//         label={label}
//         placeholder={label}
//         error={touched && invalid}
//         helperText={touched && error}
//         {...input}
//         {...custom}
//     />
// )

// const renderCheckbox = ({ input, label }) => (
//     <div>
//         <FormControlLabel
//             control={
//                 <Checkbox
//                     checked={input.value ? true : false}
//                     onChange={input.onChange}
//                 />
//             }
//             label={label}
//         />
//     </div>
// )

// const radioButton = ({ input, ...rest }) => (
//     <FormControl>
//         <RadioGroup {...input} {...rest}>
//             <FormControlLabel value="female" control={<Radio />} label="Female" />
//             <FormControlLabel value="male" control={<Radio />} label="Male" />
//             <FormControlLabel value="other" control={<Radio />} label="Other" />
//         </RadioGroup>
//     </FormControl>
// )

// const renderFromHelper = ({ touched, error }) => {
//     if (!(touched && error)) {
//         return
//     } else {
//         return <FormHelperText>{touched && error}</FormHelperText>
//     }
// }
//
// const renderSelectField = ({
//                                input,
//                                label,
//                                meta: { touched, error },
//                                children,
//                                ...custom
//                            }) => (
//     <FormControl error={touched && error}>
//         <InputLabel htmlFor="age-native-simple">Age</InputLabel>
//         <Select
//             native
//             {...input}
//             {...custom}
//             inputProps={{
//                 name: 'age',
//                 id: 'age-native-simple'
//             }}
//         >
//             {children}
//         </Select>
//         {renderFromHelper({ touched, error })}
//     </FormControl>
// )
//
// const MaterialUiForm = props => {
//     const { handleSubmit, pristine, reset, submitting, classes } = props
//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <Field
//                     name="firstName"
//                     component={renderTextField}
//                     label="First Name"
//                 />
//             </div>
//             <div>
//                 <Field name="lastName" component={renderTextField} label="Last Name" />
//             </div>
//             <div>
//                 <Field name="email" component={renderTextField} label="Email" />
//             </div>
//             <div>
//                 <Field name="sex" component={radioButton}>
//                     <Radio value="male" label="male" />
//                     <Radio value="female" label="female" />
//                 </Field>
//             </div>
//             <div>
//                 <Field
//                     classes={classes}
//                     name="favoriteColor"
//                     component={renderSelectField}
//                     label="Favorite Color"
//                 >
//                     <option value="" />
//                     <option value={'ff0000'}>Red</option>
//                     <option value={'00ff00'}>Green</option>
//                     <option value={'0000ff'}>Blue</option>
//                 </Field>
//             </div>
//             <div>
//                 <Field name="employed" component={renderCheckbox} label="Employed" />
//             </div>
//             <div />
//             <div>
//                 <Field
//                     name="notes"
//                     component={renderTextField}
//                     label="Notes"
//                     multiline
//                     rowsMax="4"
//                     margin="normal"
//                 />
//             </div>
//             <div>
//                 <button type="submit" disabled={pristine || submitting}>
//                     Submit
//                 </button>
//                 <button type="button" disabled={pristine || submitting} onClick={reset}>
//                     Clear Values
//                 </button>
//             </div>
//         </form>
//     )
// }
//
// export default reduxForm({
//     form: 'MaterialUiForm', // a unique identifier for this form
//     validate,
//     asyncValidate
// })(MaterialUiForm)