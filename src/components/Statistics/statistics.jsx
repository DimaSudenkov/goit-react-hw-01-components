import React from 'react'
import css from './statistics.module.css'

const Statistics = ({ title, stats, id }) => {
  
  return (
    <section className={css.data}>
      {title && <h2 className={css.title}>{title}</h2>}
      
      <ul className={css.statList}>
        {stats.map((el) =>
          <li key={el.id} className={css.item} >
            <span className={css.label}>{el.label}</span><br />
            <span className={css.percentage}>{el.percentage}</span></li>
        )}
        </ul>
    </section>
  )
}

export default Statistics