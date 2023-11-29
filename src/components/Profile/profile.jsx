import React from 'react'
import css from './profile.module.css'


const Profile = ({ username, tag, location, avatar, stats }) => (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar}
          alt="User avatar"
        className="avatar"
      width={50}/>
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

    <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  )

export default Profile