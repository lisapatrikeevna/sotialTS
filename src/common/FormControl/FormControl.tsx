import React from "react";
import type {WrappedFieldMetaProps, WrappedFieldProps} from 'redux-form';
import {Checkbox, FormControlLabel, TextField} from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import withStyles from "@material-ui/core/styles/withStyles";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}
const validate = (values: any) => {
    const errors:any = {}
    const requiredFields:Array<string> = [
        'login',
        'password',
        'email',
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address'
    }
    return errors
}
export const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}
type someType={
    label:string
    validate?:boolean
}
const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#4b1668',
            background:'transparent!important',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#4b1668',
            background:'transparent!important',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#4b1668',
                background:'transparent!important',
            },
            '&:hover fieldset': {
                borderColor: '#d280f8',
                background:'transparent!important',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#d280f8',
                background:'transparent!important',
            },
        },
    },
})(TextField);
export const renderTextField: React.FC<WrappedFieldProps & someType> = ({
                              label,
                              input,
                              meta: { touched, invalid, error },
                              ...custom
                          }) => (
    <CssTextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}

        {...input}
        {...custom}
    />
)
export const renderCheckbox: React.FC<WrappedFieldProps & someType>  = ({ input, label }) => (
    <div>
        <FormControlLabel
            control={
                <Checkbox
                    checked={input.value ? true : false}
                    onChange={input.onChange}
                />
            }
            label={label}
        />
    </div>
)
type renderMaterialUiFromHelperType={
    touched: boolean
    error:string
}
const renderMaterialUiFromHelper = ({ touched, error }:renderMaterialUiFromHelperType  ) => {
    if (!(touched && error)) {
        return
    } else {
        return <FormHelperText>{touched && error}</FormHelperText>
    }
}
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

//https://redux-form.com/8.3.0/examples/fieldlevelvalidation/