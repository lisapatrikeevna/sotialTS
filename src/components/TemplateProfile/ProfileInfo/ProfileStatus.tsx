import React, {ChangeEvent, useEffect, useState} from "react";

type propsType = {
    status: string
    updateStatus?: (status: string) => void
}

export const ProfileStatus = (props: propsType) => {
    let [editMode, setEditMode] = useState(false);
    let [value, setValue] = useState(props.status);
    useEffect(()=>{
        setValue(props.status)
    },[props.status])
    
    const onEditMode = () => {
        setEditMode(true)
    }
    const offEditMode = () => {
        setEditMode(false)
        if(props.updateStatus) {
            props.updateStatus(value)
        }
    }

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode ?
                <span onDoubleClick={onEditMode}>
                    {props.status || 'dont have status'}
                 </span>  :
                <input value={value} autoFocus
                       onChange={onChangeStatus}
                       onBlur={offEditMode}
                />
            }
        </div>);
}
