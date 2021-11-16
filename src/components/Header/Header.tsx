import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { Avatar, Badge, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Nullable } from '../../Redax/redax-store';
import guestPhoto from '../../assets/images/user.svg';


// Material-ui
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
}));



const Header: React.FC<HeaderProps> = (props) => {
  const { isAuth, login, userPhoto, logout } = props

  return (
    <header className={styles.header}>
      <picture>
        <img alt='Logo' src='https://s.cdpn.io/3/kiwi.svg'></img>
      </picture>


        {isAuth
          ?
          <div className={styles.header__info || styles.user__info}>
            <span>{login}</span>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar src={userPhoto ? userPhoto : guestPhoto} alt={login ? login : ''} />
            </StyledBadge>

            <Button 
              onClick={logout} 
              variant="contained"
              size="small"
            >
              Выйти
            </Button>
          </div>
          :
          <Button variant="contained">
            <NavLink to={'/login/'} className={styles.userLogin}>Login</NavLink>
          </Button>
        }

    </header>
  )
}


export default Header;


// Types
type HeaderProps = {
  isAuth: Nullable<boolean>
  login: Nullable<string>
  userPhoto: Nullable<string>

  logout: () => void
}
