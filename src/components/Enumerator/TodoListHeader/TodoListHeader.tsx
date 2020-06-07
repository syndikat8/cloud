import React, {ChangeEvent, KeyboardEvent} from 'react';

type StateType = {
    error: boolean
    title: string
}

type OnPropsType = {
    addTask: (newTitle: string) => void
}

class TodoListHeader extends React.Component<OnPropsType, StateType> {

    state: StateType = {
        error: false,
        title: "",

    };

    onAddTaskClick = () => {
        let newTitle = this.state.title;
        this.setState({title: ""});
        if (newTitle === "") {
            this.setState({error: true})
        } else {
            this.setState({error: false})
            this.props.addTask(newTitle)
        }
    };

    onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            error: false,
            title: e.currentTarget.value
        })
    };

    onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            this.onAddTaskClick()
        }

    };

    render = () => {

        let classNameInput = this.state.error ? "error" : "";

        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input
                        type="text"
                        placeholder="New task name"
                        className={classNameInput}
                        onChange={this.onTitleChanged}
                        onKeyPress={this.onKeyPress}
                        value={this.state.title}
                    />
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;

