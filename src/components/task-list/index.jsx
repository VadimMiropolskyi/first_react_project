import React from 'react';

import './task-list.css';

const TaskList = ({taskArr}) => {
    return(
        <div>
            <ul>
                {taskArr.map((task, index) => {
                    return (
                    <li className="task-list" key={index * 5 + 'b'}>{task}
                    <div><i className="material-symbols-outlined">edit</i></div>
                    <div><i className="material-symbols-outlined">delete</i></div>
                    </li>
                    )
                })}
        
            </ul>
        </div>
    )
}

export default TaskList;