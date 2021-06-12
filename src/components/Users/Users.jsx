import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';
import { setUsersAC } from '../../Redax/users-reducer';



class Users extends React.Component {

  componentDidMount() { 
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?count=${this.props.pageSize}&page=${this.props.currentPage}`)
    .then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUserCount(response.data.totalCount)
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?count=${this.props.pageSize}&page=${pageNumber}`)
    .then(response => {
      this.props.setUsers(response.data.items);
    })
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return <div>

      <div className={style.numberPages}>
        {pages.map(page => {
          return <span className={this.props.currentPage === page ? style.selected : ''}
                       id ={page.id}
                       onClick={ (e) => {this.onPageChanged(page)} } >{page}</span>
        })}
      </div>

      {
        this.props.users.map(user => <div key={user.id} className={style.user}>
          <div className={style.userAvatar}>
            <img className={style.photo}
              src={user.photos.large !== null ? user.photos.large : userPhoto}
              alt="Avatar" />

            {user.followed
              ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
              : <button onClick={() => this.props.follow(user.id)}>Follow</button>}
          </div>

          <div className={style.userInfo}>
            <div className={style.name}>
              <strong>{user.name}</strong>
              <div className={style.status}>{user.status}</div>
            </div>

            <div>
              <div className={style.location}>
                {/* <span >{user.location.country}</span>
              <span >{user.location.sity}</span> */}
              </div>
            </div>
          </div>

        </div>
        )
      }
    </div>
  }
}

export default Users;