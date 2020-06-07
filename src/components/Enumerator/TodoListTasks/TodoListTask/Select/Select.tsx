import React, {ChangeEvent} from 'react';

type StateType = {
    options: Array<{ option: string, id: number }>
    value: string
}

type OnPropsType = {
    changeSelect: (taskId: number, newPriority: string) => void
    id: number
}

class Select extends React.Component<OnPropsType, StateType> {

    state: StateType = {
        options: [
            {option: "Low", id: 1},
            {option: "Middle", id: 2},
            {option: "Height", id: 3},
        ],
        value: "Height"
    }

    handlerChange = (e: ChangeEvent<HTMLSelectElement>) => {
        this.setState({value: e.target.value})
        this.props.changeSelect(this.props.id, e.currentTarget.value)
    }

    render = () => {

        let options = this.state.options.map(o => <option key={o.id} value={o.option}> {o.option}</option>)
        return (
            <select
                value={this.state.value}
                onChange={this.handlerChange}>
                {options}
            </select>
        );
    }
}

export default Select;

