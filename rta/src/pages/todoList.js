import React from 'react';
import Task from '../components/task';

import tasksService from "../service/taskService";
let test = new tasksService();
console.log(test);
function Tasks (){
    return (
        test.taskService.get.map(test => {
           return <Task 
                name = {test.name}
            />
        })
    )
}

function TodoList () {
    return (
        <div>
            Add new task:
            <Task />
            <Tasks />
        </div>
    );
}

export default TodoList;