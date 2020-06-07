import React from 'react';
import TodoListTask from "./TodoListTask/TodoListTask";
import {TaskType} from "../../../types/entities";

type OnPropsType = {
    tasks: Array<TaskType>
    nowTime: string
    changePriority: (taskId: number, newPriority: string) => void
    deliteTask: (taskId: number) => void
    changeTitle: (taskId: number, newTitle: string) => void
    changeStatus: (taskId: number, isDone: boolean) => void
    changeSelect: (taskId: number, newPriority: string) => void
}

const TodoListTasks = (props: OnPropsType) => {

    let taskElements = props.tasks.map(task => {
      return <TodoListTask
        nowTime={props.nowTime}
        key={task.id}
        changePriority={props.changePriority}
        deliteTask={props.deliteTask}
        changeTitle={props.changeTitle}
        changeStatus={props.changeStatus}
        changeSelect={props.changeSelect}
        task={task}
      />
    });
    return (
      <div className="todoList-tasks">
        {taskElements}
      </div>
    );
}

export default TodoListTasks;