import React from 'react';

import './title.css';

const Title = (props) => {
    return (
       <h3>
       {props.text}
       </h3>
    )
}

export default Title;