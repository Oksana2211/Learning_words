import React from 'react'
import { useContext, useState } from "react";
import Item from "../Item/Item"
import buttRight from '../../img/button_right_icon.png'
import buttLeft from '../../img/button_left_icon.png'
import style from "./style.module.scss"
import { Context } from "../Contex/Context";


export default function Card() {

    const { words } = useContext(Context);
    const [id, setId] = useState(0)
    const [index, setIndex] = useState(0);
    const object = words[index];

    const handlNextItem = () => {
        setIndex((prevIndex) =>
            prevIndex === words.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlPrevItem = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? words.length - 1 : prevIndex - 1
        );
    };

    const [count, setCount] = useState(0);

    const handlNextCount = () => {
        setCount(count + 1);
    };


    return (
        <section className={style.conteuner}>
            <div className={style.cont}>
                <button onClick={handlPrevItem} className={style.btn}><img className={style.icon} src={buttLeft} alt="Left" /></button>

                < Item english={object.english}
                    transcription={object.transcription}
                    russian={object.russian}
                    index={object.id}
                    key={object.id}
                    activeCards={object.id === id}
                    setId={setId}
                    handlNextCount={handlNextCount} />

                <button onClick={handlNextItem} className={style.btn}><img className={style.icon} src={buttRight} alt="Right" /></button>
            </div>
            <p className={style.count}>Ты молодец, так держать!</p>
            <p className={style.count}>Изучено слов:{count} </p>
        </section>

    );
}


