import React from 'react';
import style from './style.module.scss'
import ErrorImg from "../../img/error.png"

export default function Error() {
  return (
    <div className={style.conteuner}>
      <img className={style.cont} src={ErrorImg} alt='Error' />
      <p className={style.text}>Ошибка! Вернитесь на главную страницу.</p>
    </div>

  )
}
