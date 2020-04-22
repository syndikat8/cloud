import React from 'react';
import Select from "./Select/Select";


class TodoListTask extends React.Component {

  state = {
    editeMode: false,
  }



  onPriorityModeL = () => {
     this.props.changePriority(this.props.task.id, "middle")
  };
  onPriorityModeM = () => {
    this.props.changePriority(this.props.task.id, "Height")

  }
  onPriorityModeH = () => {
    this.props.changePriority(this.props.task.id, "low")
  }


  activateEditMode = () => {
    this.setState({editeMode: true})
  }
  deActivateEditMode = () => {
    this.setState({editeMode: false})
  }
  onIsDoneChanged = (e) => {
    this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
  };
  onTitleChanged = (e) => {
    this.props.changeTitle(this.props.task.id, e.currentTarget.value);
  };
  onDeliteTask = () => {
    this.props.deliteTask(this.props.task.id)
  }

  render = () => {

    let changePriority
    if (this.props.task.priority === "low") {
      changePriority = <span onClick={this.onPriorityModeL}> priority: {this.props.task.priority}</span>
    } else if (this.props.task.priority === "middle") {
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
          : <span onClick={this.activateEditMode}> {this.props.task.title}</span>}
        {changePriority}
        <button className="delit" onClick={this.onDeliteTask}>Delete</button>
        <Select/>
      </div>
    );
  }
}


export default TodoListTask;

