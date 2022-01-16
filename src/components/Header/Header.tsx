import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { Avatar, Badge, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import guestPhoto from '../../assets/images/user.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuth, getLogin, getUserPhoto } from '../../Redax/selectors/auth.selectors';
import { logout } from '../../Redax/reducers/auth-reducer';


// Material-ui
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
}));


const Header: React.FC = (props) => {
  const dispatch = useDispatch()

  const isAuth = useSelector(getIsAuth)
  const userPhoto = useSelector(getUserPhoto)
  const login = useSelector(getLogin)
  console.log(userPhoto)

  const fetchLogout = () => {
    dispatch(logout)
  }

  return (
    <header className={styles.header}>
      {/* Logo */}
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
              onClick={fetchLogout} 
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

