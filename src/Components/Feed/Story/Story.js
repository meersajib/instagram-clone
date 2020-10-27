import React from 'react';
import './Story.css';
import { Avatar } from '@material-ui/core';

const Story = ({name, imgUrl}) => {
    
    return (
      <div className='story'>
        <div className='story__body'>
          <Avatar src={imgUrl} />
          <p>{name}</p>
        </div>
      </div>
    );
};

export default Story;
