import React from "react";

export const requiredFields = (value: string) => {
    if (value) {
        return undefined
    }
    return 'Field is required!'
}
export const maxLength = (max: number) => (value: string) => {
    return value && value.length > max ? `Must be ${max} characters or less` : undefined
}

export const minLength = (min: number) => (value: string) =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined

export const required = (value: string) => (value || typeof value === 'number' ? undefined : 'Required')

export const validate = (values: any) => {
    const errors:any = {}
    const requiredFields:Array<string> = [
        'login',
        'password',
        'email',
    ]
    requiredFields.forEach(field => {
        //debugger
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    if (values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) ) {
        errors.email = 'Invalid email address'
    }
    return errors
}

//https://redux-form.com/8.3.0/examples/fieldlevelvalidation/