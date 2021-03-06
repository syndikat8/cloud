import React, {ChangeEvent} from 'react';
import Select from "./Select/Select";
import {TaskType} from "../../../../types/entities";

type StateType = {
  editeMode: boolean
}

type OnPropsType = {
  task: TaskType
  nowTime: string
  changePriority: (taskId: number, newPriority: string) => void
  deliteTask: (taskId: number) => void
  changeTitle: (taskId: number, newTitle: string) => void
  changeStatus: (taskId: number, isDone: boolean) => void
  changeSelect: (taskId: number, newPriority: string) => void
}

class TodoListTask extends React.Component<OnPropsType, StateType> {

  state = {
    editeMode: false,
  }

  onPriorityModeL = () => {
    this.props.changePriority(this.props.task.id, "Middle")
  }

  onPriorityModeM = () => {
    this.props.changePriority(this.props.task.id, "Height")
  }

  onPriorityModeH = () => {
    this.props.changePriority(this.props.task.id, "Low")
  }

  activateEditMode = () => {
    this.setState({editeMode: true})
  }

  deActivateEditMode = () => {
    this.setState({editeMode: false})
  }

  onIsDoneChanged = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
  }

  onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.changeTitle(this.props.task.id, e.currentTarget.value);
  }

  onDeliteTask = () => {
    this.props.deliteTask(this.props.task.id)
  }

  render = () => {

    let changePriority
    if (this.props.task.priority === "Low") {
      changePriority = <span onClick={this.onPriorityModeL} > priority: {this.props.task.priority}</span>
    } else if (this.props.task.priority === "Middle") {
      changePriority = <span onClick={this.onPriorityModeM}> priority: {this.props.task.priority}</span>
    } else {
      changePriority = <span onClick={this.onPriorityModeH}> priority: {this.props.task.priority}</span>
    }

    let taskIsDoneClass = this.props.task.isDone ? "todoList-task done" : "todoList-task";
    return (
      <div className={taskIsDoneClass}>
        <input
          type="checkbox"
          checked={this.props.task.isDone}
          onChange={this.onIsDoneChanged}/>
        <span>{this.props.task.id}: </span>
        {this.state.editeMode
          ? <input
            value={this.props.task.title}
            autoFocus={true}
            onBlur={this.deActivateEditMode}
            onChange={this.onTitleChanged}/>
          : <span
            className="backlight"
            onDoubleClick={this.activateEditMode}>
            {this.props.task.title}
            <span className="drop">
              <div>
               Created: {this.props.task.created}
               </div>
              <div>
                Updated: {this.props.task.updated}
              </div>
              <div>
               Finished: {this.props.task.finished}
            </div>
            </span>
        </span>}
        {changePriority}
        <button className="delit" onClick={this.onDeliteTask}>Delete</button>
        <Select
          id={this.props.task.id}
          changeSelect={this.props.changeSelect}/>
      </div>
    );
  }
}


export default TodoListTask;

