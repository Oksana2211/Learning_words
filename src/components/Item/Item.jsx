
import React, { useState, useRef, useEffect } from 'react';
import style from './style.module.scss'

export default function Item(props) {

    const { english, transcription, russian, index, activeCards, setId, handlNextCount } = props;

    const classItemActive = activeCards ? 'transcriptionActiv' : "transcription"
    const classButtonActive = activeCards ? 'buttonActiv' : "button"

    const ref = useRef();
    useEffect(() => ref.current.focus(), []);


    function transcriptionClose() {
        setId(index);
        handlNextCount()
    }

    return (

        <section className={style.card}>
            <div><h2>{english}</h2></div>
            <div><h3>{transcription}</h3></div>
            <div><h3 className={`style.transcription ${style[classItemActive]}`}>{russian}</h3></div>
            <div><button className={style[classButtonActive]} onClick={transcriptionClose} ref={ref}>Проверить</button></div>

        </section>
    )
}