import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Navbar.module.css';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import { Nullable } from '../../../Redax/redax-store';
import ChatIcon from '@mui/icons-material/Chat';


const Navigation: React.FC<NavigationPropsType> = (props) => {
  return (
    <nav className={s.nav}>
      <NavLink
        exact to={`/profile/`}
        activeClassName={s.active}
      >
        <PersonIcon fontSize="small" />
        Profile
      </NavLink>

      <NavLink
        to='/message'
        activeClassName={s.active}
      >
        <EmailIcon fontSize="small" />
        Message
      </NavLink>

      <NavLink
        to='/news'
        activeClassName={s.active}
      >
        <AnnouncementIcon fontSize="small" />
        News
      </NavLink>

      <NavLink
        to='/music'
        activeClassName={s.active}
      >
        <QueueMusicIcon fontSize="small" />
        Music
      </NavLink>

      <NavLink
        to='/setting'
        activeClassName={s.active}
      >
        <SettingsIcon fontSize="small" />
        Setting
      </NavLink>

      <NavLink
        to='/users'
        activeClassName={s.active}
      >
        <PeopleIcon fontSize="small" />
        Users
      </NavLink>

      <NavLink
        to='/chat'
        activeClassName={s.active}
      >
        <ChatIcon fontSize="small" />
        Chat
      </NavLink>
    </nav>
  )
}

export default Navigation;


// Types
type NavigationPropsType = {myId: Nullable<number>}