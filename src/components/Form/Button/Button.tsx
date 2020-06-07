import React from 'react';

type OnPropsType =  {
    click: () => void
}

const Button = (props: OnPropsType) => {

    return <button onClick={props.click}>send</button>
}

export default Button;