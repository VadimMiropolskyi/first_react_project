import React from 'react';
import Title from '../title';
import AddTask from '../add-task';

import './main.css';

const Main = ({taskArr}) => {
    return (
       <div className='main_div'>
      <Title text='Today tasks list'></Title>
      <AddTask taskArr={taskArr}></AddTask>
      <Title text='Left___tasks'></Title>
       </div>
    )
}

export default Main;