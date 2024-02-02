import React from 'react';
import style from './style.module.scss'
import { Link } from 'react-router-dom';
import libraryImg from '../../img/library.jpg'

export default function Home() {
    return (
        <section className={style.cont}>
            <div><img className={style.library_img} src={libraryImg} alt='library' /></div>
            <div className={style.content_block}>
                <div className={style.text_block}>
                    <h1>Привет, пользователь!</h1>
                    <p className={style.text}>Приступим к изучению иностранных слов..</p>
                </div>
                <div className={style.button_block} >
                    <Link to='/game'><button type='button' className={style.button_game}>Игра</button></Link>
                    <Link to='/words'><button className={style.button_list}>Список слов</button></Link>
                </div>

            </div>
        </section>
    )
} 