import React, { useState } from 'react';
import './Feed.css';
import Story from './Story/Story';
import meer from '../../meer.jpg';
import asif from '../../asif.jpg';
import tanvir from '../../tanvir.jpg';
import sajib from '../../sajib.jpg';
import FeedContent from './FeedContent';

const Feed = () => {
  const [stories, setStories] = useState([
    {
      imgUrl: meer,
      name: 'meer',
    },
    {
      imgUrl: asif,
      name: 'asif',
    },
    {
      imgUrl: tanvir,
      name: 'tanvir',
    },
    {
      imgUrl: sajib,
      name: 'sajib',
    },
  ]);
  return (
    <div className='feed'>
      <div className='feed__top'>
        {stories.map((story) => (
          <Story name={story.name} imgUrl={story.imgUrl} />
        ))}
      </div>
      <FeedContent />
    </div>
  );
};

export default Feed;
