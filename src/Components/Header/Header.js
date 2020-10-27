import React from 'react'
import './Header.css'
import logo from '../../logo.png'
import profilePic from '../../meer.jpg'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import TelegramIcon from '@material-ui/icons/Telegram'
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import { Avatar } from '@material-ui/core'

const Header = () => {
    return (
        <div className='header'>
            <div className='header__logo'>
                <img src={logo} alt='logo' />
            </div>
            <div className='header__search'>
                <input placeholder='Search' />
                <SearchIcon fontSize='small' />
            </div>
            <div className='header__links'>
                <HomeIcon />
                <TelegramIcon />
                <ExploreOutlinedIcon />
                <FavoriteBorderOutlinedIcon />
                <Avatar src={profilePic} />
            </div>
        </div>
    )
}

export default Header
