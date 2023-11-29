import React from 'react'
import css from './profile.module.css'
import user from "./user.json";

const statsName = Object.keys(user.stats);

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
          <span className={css.label}>{statsName[0]}</span>
        <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>{statsName[1]}</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>{statsName[2]}</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  )


export default Profile