import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./style.module.scss"

export default function Menu() {
  return (
    <div>
      <nav className={style.nav}>
        <NavLink to='/' className={style.item}>Главная</NavLink>
        <NavLink to='/game' className={style.item}>Игра</NavLink>
        <NavLink to='/words' className={style.item}>Список слов</NavLink>
      </nav>
    </div>
  )
}
