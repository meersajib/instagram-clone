import React, { useState } from 'react';
import './FeedContent.css';
import { Avatar } from '@material-ui/core';
import meer from '../../meer.jpg';
import asif from '../../asif.jpg';
import tanvir from '../../tanvir.jpg';
import sajib from '../../sajib.jpg';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import TelegramIcon from '@material-ui/icons/Telegram';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const FeedContent = () => {
  const [favorite, setFavorite] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [stories, setStories] = useState([
    {
      imgUrl: meer,
      name: 'Meer Sajib',
      imgCap:
        'If someone not interested to be part of your happiness then enjoy alone.',
    },
    {
      imgUrl: asif,
      name: 'Asif Adnan',
      imgCap:
        'If someone not interested to be part of your happiness then enjoy alone.',
    },
    {
      imgUrl: tanvir,
      name: 'Tanvir Raj',
      imgCap:
        'If someone not interested to be part of your happiness then enjoy alone.',
    },
    {
      imgUrl: sajib,
      name: 'Minhajul I. Mahim',
      imgCap:
        'If someone not interested to be part of your happiness then enjoy alone.',
    },
  ]);
  const onFavorite = () => {
    if (favorite === true) {
      setFavorite(false);
    } else {
      setFavorite(true);
    }
  };
  const onBookmark = () => {
    if (bookmark === true) {
      setBookmark(false);
    } else {
      setBookmark(true);
    }
  };

  return (
    <>
      {stories.map((story) => (
        <div className='feedContent'>
          <div className='feedContent__top'>
            <Avatar src={story.imgUrl} />
            <p>{story.name}</p>
          </div>
          <img style={{ maxWidth: '100%' }} src={story.imgUrl} alt='feed-img' />
          <div className='feedContent__bottom'>
            <div className='feedContent__bottom--left'>
              <span onClick={onFavorite}>
                {favorite ? (
                  <FavoriteIcon className='feedContent__bottom--active' />
                ) : (
                  <FavoriteBorderIcon fontWeight="fontWeightLight" className='feedContent__bottom--inActive' />
                )}
              </span>
              <ChatBubbleOutlineOutlinedIcon />
              <TelegramIcon />
              <span
                style={{ color: '#262626', fontWeight: 400, fontSize: '14px' }}
                className='flex'>
                <Avatar className='feedContent__smallIcon' src={story.imgUrl} />
                Liked by sayed_hasan and 1 other.
              </span>
            </div>
            <div className='feedContent__bottom--right'>
              <span onClick={onBookmark}>
                {bookmark ? (
                  <BookmarkIcon className='feedContent__bottom--inActive' />
                ) : (
                  <BookmarkBorderIcon />
                )}
              </span>
            </div>
          </div>
          <div
            style={{
              padding: '10px',
              borderBottom: '1px solid rgba(239,239,239,1)',
            }}>
            <p>
              <strong>{story.name}</strong>{' '}
              {story.imgCap}
            </p>
            <small>2 Hours Ago</small>
          </div>
          <div className='feedContent__comment'>
            <textarea placeholder='Add a comment...'></textarea>
            <button>Post</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeedContent;
