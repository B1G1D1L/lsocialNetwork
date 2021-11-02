import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { Avatar, Badge, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
}));



const Header = (props) => {


  return (
    <header className={styles.header}>
      <picture>
        <img alt='Logo' src='https://s.cdpn.io/3/kiwi.svg'></img>
      </picture>


        {props.isAuth
          ?
          <div className={styles.header__info || styles.user__info}>
            <span>{props.login}</span>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar alt={props.login} src={props.userPhoto} />
            </StyledBadge>

            <Button 
              onClick={props.logout} 
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