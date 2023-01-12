import React from 'react';
import Input from '../input';
import TaskList from '../task-list';


export default function AddTask({taskArr}) {
    return(
        <div>
            <Input/>
            <TaskList taskArr={taskArr}></TaskList>
        </div>
    )
}