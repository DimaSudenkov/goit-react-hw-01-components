import FriendItem from './friendListItem'
import React from 'react'
import friendsCss from './friendList.module.css'

const FriendList = ({friends}) => {
  return (
    <ul className={friendsCss.friendList}>
      {friends.map((el) => (
        <FriendItem
          key={el.id}
          friend={el}
        />
      ))}
    </ul>
  )
}

export default FriendList