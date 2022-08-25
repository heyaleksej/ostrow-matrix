import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
    value: string | null
    onChange: (newValue: string| null) => void
}

export function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false);
    let [index, setIndex] = useState<any>(props.value);

    const activateEditMode = () => {
        setEditMode(true);
        setIndex(props.value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(index);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setIndex(+e.currentTarget.value)
    }

    return editMode
        ? <input placeholder={'enter'}  type='checkbox' value={index} onChange={changeTitle} autoFocus onBlur={activateViewMode} />
        : <span  onClick={activateEditMode}> {props.value ? props.value : '_'} </span>
}
