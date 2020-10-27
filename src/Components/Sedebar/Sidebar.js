import React, { useState } from 'react';
import './Sidebar.css';
import meer from '../../meer.jpg';
import asif from '../../asif.jpg';
import tanvir from '../../tanvir.jpg';
import sajib from '../../sajib.jpg';
import { Avatar } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import axios from '../../axios'

const Sidebar = () => {
  const { register, handleSubmit } = useForm();
  const [followers, setFollowers] = useState([
    {
      imgUrl: meer,
      name: 'Meer Sajib',
      followStatus: 'Follows you',
    },
    {
      imgUrl: asif,
      name: 'Asif Adnan',
      followStatus: 'Follows you',
    },
    {
      imgUrl: tanvir,
      name: 'Tanvir Raj',
      followStatus: 'Follows you',
    },
    {
      imgUrl: sajib,
      name: 'Minhajul I. Mahim',
      followStatus: 'Follows you',
    },
  ]);
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('picture', data.picture[0]);

    const res = await fetch('http://localhost:8000/picture', {
      method: 'POST',
      body: formData,
    }).then((res) => res.json());
    alert(JSON.stringify(res));
  };
  return (
    <div className='sidebar'>
      <div className='sidebar__userSection'>
        <Avatar src={meer} />
        <div>
          <small>
            <strong>meersajib</strong>
          </small>
          <p className='muted__text'>Meer Sajib</p>
        </div>
      </div>
      <div className='sidebar__followers--head'>
        <h4 className='muted__text'>Suggestions for you</h4>
        <p>See all</p>
      </div>
      <>
        {followers.map((follower) => (
          <div className='sidebar__followers--list'>
            <div className='sidebar__followers--listLeft'>
              <Avatar src={follower.imgUrl} />
              <div>
                <small>
                  <strong>{follower.name}</strong>
                </small>
                <p className='muted__text'>{follower.followStatus}</p>
              </div>
            </div>
            <div className='sidebar__followers--listRight'>
              <a href=''>Follow</a>
            </div>
          </div>
        ))}
      </>
      <div className='sidebar__upload'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input ref={register} name='picture' type='file' />
          <textarea
            ref={register}
            name='caption'
            className='sidebar__textarea'
            placeholder='Caption for image'></textarea>
          <button type='submit'>Post</button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
