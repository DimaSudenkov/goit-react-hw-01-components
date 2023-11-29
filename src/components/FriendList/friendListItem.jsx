import friendsCss from './friendList.module.css'
import React from 'react'


const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;

  return (
    <li className={`${isOnline?friendsCss.itemTrue:friendsCss.itemFalse}`}>
          <span className={friendsCss.status}>{isOnline}</span>
          <img className="avatar" src={avatar} alt="avatar" width={75} />
          <p className={friendsCss.name}>{name}</p>
    </li>
  )
}

export default FriendListItem