import React from "react"
import { Link } from 'react-router-dom';
import style from "./style.module.scss"
import Menu from "../Menu/Menu"
import Logo from "../../img/Logo.png"


export default function Header() {
    return (
        <section className={style.cont}>
            <div className={style.logo}><Link to='/'><img className={style.logoIcon} src={Logo} alt='Logo' /></Link></div>
            <Menu />
            <div><p>+79017287587</p></div>
        </section>
    )
}