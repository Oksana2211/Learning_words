import React from "react"
import WordList from "./WordList";
import style from "./style.module.scss"
import NewWord from "../NewWord/NewWord"
// import distionaryArr from '../../components/data/.json'
import { useContext, useState } from "react";
import { Context } from "../Contex/Context";





export default function List() {

    const { words } = useContext(Context);

    return (
        <section className={style.conteuner}>
            <div className={style.cont}>
                <div className={`${style.list} ${style.listTitle}`}>
                    <div>English</div>
                    <div>Transcription</div>
                    <div>Russian</div>
                    <div>Редактировать/Удалить</div>
                </div>

                {words.map((item, index) => (
                    < WordList item={item} key={index} />
                ))}
            </div>
            <NewWord></NewWord>
        </section>
    );
}