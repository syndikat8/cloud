import React from 'react';
import TodoListTask from "./TodoListTask/TodoListTask";


const TodoListTasks = (props) => {

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

