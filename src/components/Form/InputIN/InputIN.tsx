import React from 'react';

type OnPropsType = {
    countValueInput: Array<string>
}

const InputIN = (props: OnPropsType) => {

    return <p>{props.countValueInput}</p>
}

export default InputIN;