import React from 'react';
import '../../App.css';
import TodoListHeader from "./TodoListHeader/TodoListHeader";
import TodoListTasks from "./TodoListTasks/TodoListTasks";
import TodoListFooter from "./TodoListFooter/TodoListFooter";
import {restore, save} from "../../localStorge";
import {TaskType, UpdateTaskType} from '../../types/entities';

type StateType = {
    tasks: Array<TaskType>
    filterValue: string
    nowTime: string
}

class Enumerator extends React.Component<{}, StateType> {

    componentDidMount() {
        this.restoreState()
        setInterval(() => {
            this.setState({
                nowTime: new Date().toLocaleTimeString()
            })
        }, 1000)
    }

    nextTaskId = 0;

    state: StateType = {
        tasks: [
            {created: "", updated: "", finished: "", id: 1, isDone: true}
        ],
        filterValue: "All",
        nowTime: new Date().toLocaleTimeString(),
    };

    saveState = () => {
        save(this.state)
    }
    restoreState = () => {
        let state = this.state
        let stateAsString = restore()
        if (stateAsString) {
            state = JSON.parse(stateAsString);
        }
        this.setState(state, () => {
            this.state.tasks.forEach(task => {
                if (task.id >= this.nextTaskId) {
                    this.nextTaskId = task.id + 1;
                }
            })
        })
    }

    addTask = (newTitle: string) => {
        let newTask = {
            id: this.nextTaskId,
            title: newTitle,
            isDone: false,
            priority: "Low",
            created: this.state.nowTime,
            updated: "",
            finished: "",
        };
        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        }, () => {
            this.saveState()
        })
    };

    changeFilter = (newFilterValue: string) => {
        this.setState({
            filterValue: newFilterValue
        }, () => {
            this.saveState()
        })
    };

    changeTask = (taskId: number, obj: UpdateTaskType, update: any) => {
        let newTasks = this.state.tasks.map(t => {
            if (t.id !== taskId) {
                return t;
            } else {
                return {...t, ...obj, ...update}
            }
        });
        this.setState({
            tasks: newTasks
        }, () => {
            this.saveState()
        })
    };

    changeStatus = (taskId: number, isDone: boolean) => {
        let byClickOnCheked = isDone ? this.state.nowTime : "Чего отжал? Не сделал?!"
        this.changeTask(taskId, {isDone: isDone}, {finished: byClickOnCheked})
    };

    changeTitle = (taskId: number, newTitle: string) => {
        this.changeTask(taskId, {title: newTitle}, {updated: this.state.nowTime})

    };

    changePriority = (taskId: number, newPriority: string) => {
        this.changeTask(taskId, {priority: newPriority}, {updated: this.state.nowTime})
    };
    changeSelect = (taskId: number, newPriority: string) => {
        this.changeTask(taskId, {priority: newPriority}, {updated: this.state.nowTime})
    };


    deliteTask = (taskId: number) => {
        this.setState(({tasks}) => {
            const idx = tasks.findIndex((el) => el.id === taskId)
            const newTasks = [
                ...tasks.slice(0, idx),
                ...tasks.slice(idx + 1),
            ]
            return {
                tasks: newTasks
            }
        }, () => {
            this.saveState()
        })
    }


    render = () => {

        return (
            <div className="enumerator">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask}/>
                    <TodoListTasks
                        nowTime={this.state.nowTime}
                        changeSelect={this.changeSelect}
                        changePriority={this.changePriority}
                        deliteTask={this.deliteTask}
                        changeTitle={this.changeTitle}
                        changeStatus={this.changeStatus}
                        tasks={this.state.tasks.filter(t => {
                            switch (this.state.filterValue) {
                                case "All":
                                    return true;
                                case "Completed":
                                    return t.isDone;
                                case "Active":
                                    return !t.isDone;
                            }
                        })}/>
                    <TodoListFooter filterValue={this.state.filterValue}
                                    changeFilter={this.changeFilter}
                    />
                </div>
            </div>
        );
    }
}

export default Enumerator;

