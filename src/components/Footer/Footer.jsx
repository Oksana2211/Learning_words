import React from "react"
import style from "./style.module.scss"

export default function Footer() {
    return (
        <section className={style.cont}>
            <div><nav><a className={style.nav} href="url"> О нас</a></nav></div>
            <div></div>
            <div><nav><a className={style.nav} href="url">Контактная информация</a></nav></div>
        </section>
    )
}