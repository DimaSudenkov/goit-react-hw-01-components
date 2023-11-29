import React from 'react'
import friendsCss from './friendList.module.css'

const FriendList = ({friends}) => {
  return (
    <ul className={friendsCss.friendList}>
      {friends.map((el) =>
        <li className={`${el.isOnline?friendsCss.itemTrue:friendsCss.itemFalse}`} key={el.id}>
          <span className={friendsCss.status}>{el.isOnline}</span>
          <img className="avatar" src={el.avatar} alt="avatar" width={75} />
          <p className={friendsCss.name}>{el.name}</p>
        </li>
      )}
    </ul>
  )
}

export default FriendList