import React from "react"
import { useContext, useState } from "react";
import style from './style.module.scss'
import iconPencil from '../../img/pencil.png'
import iconBasket from '../../img/trash_сan.png'
import iconTick from '../../img/iconTick.png'
import iconCancel from '../../img/iconCancel.png'
import { Context } from "../Contex/Context";




export default function WordList(props) {

    // const { words } = useContext(Context);
    // console.log(props)


    const english = props.item.english;
    const transcription = props.item.transcription;
    const russian = props.item.russian;

    const [deleted, setDeleted] = useState(true); //задаем состояние для кнопки удаления
    const [edit, setEdit] = useState(true); //задаем состояние для кнопки редактирования

    //добавим новые состояния для значений в инпутах
    const [newEnglish, setNewEnglish] = useState(english);
    const [newTranscription, setNewTranscription] = useState(transcription);
    const [newRussian, setNewRussian] = useState(russian);

    //создаем состояние для отслеживания ошибок в полях
    const [errors, setErrors] = useState({});

    //создаем функцию для кнопки удаления, которая будет менять ее состояние
    function deleteWord() {
        setDeleted(!deleted);
    }

    //создаем функцию для кнопки редактирования, которая будет менять ее состояние на edit - false и возвращает первоначальные значения
    function editWord() {
        setNewEnglish(english);
        setNewTranscription(transcription);
        setNewRussian(russian);
        setEdit(!edit);
    }


    //создаем функцию для сохранения изменений
    function saveChanges() {
        //проверка на пустые поля
        if (newEnglish === "" || newTranscription === "" || newRussian === "") {
            setErrors({
                english: newEnglish === "",
                transcription: newTranscription === "",
                russian: newRussian === "",
            });
            alert("Заполните все поля.");
            return;
        }


        //проверка на ввод английских слов
        if (!/^[a-zA-Z]+$/i.test(newEnglish)) {
            setErrors({
                ...errors,
                latin: true,
            });
            alert("Ошибка! Вводите только слова на латинице.");
            return;
        }

        //проверка на ввод русских слов
        if (!/^[а-яё]+$/i.test(newRussian)) {
            setErrors({
                ...errors,
                cyrillic: true,
            });
            alert("Ошибка! Вводите только слова на кириллице.");
            return;
        } setEdit(!edit); //возвращаем первоначальный вид кнопки редактировать
    }


    return (
        <>
            <div
                className={
                    deleted === true ? style.list : style.listNone
                }
            >
                {edit === true ? (
                    <div>{english}</div>
                ) : (
                    <input
                        className={
                            errors.english
                                ? `${style.inputCont} ${style.inputError}`
                                : style.inputCont
                        }
                        placeholder={english}
                        value={newEnglish}
                        onChange={(e) => {
                            setNewEnglish(e.target.value);
                            setErrors({ ...errors, english: false, latin: false }); //сбрасываем ошибку при изменении значения
                        }}
                    ></input>
                )}
                {edit === true ? (
                    <div>{newTranscription}</div>
                ) : (
                    <input
                        className={
                            errors.transcription
                                ? `${style.inputCont} ${style.inputError}`
                                : style.inputCont
                        }
                        placeholder={transcription}
                        value={newTranscription}
                        onChange={(e) => {
                            setNewTranscription(e.target.value);
                            setErrors({ ...errors, transcription: false }); //сбрасываем ошибку при изменении значения
                        }}
                    ></input>
                )}
                {edit === true ? (
                    <div>{newRussian}</div>
                ) : (
                    <input
                        className={
                            errors.russian
                                ? `${style.inputCont} ${style.inputError}`
                                : style.inputCont
                        }
                        placeholder={russian}
                        value={newRussian}
                        onChange={(e) => {
                            setNewRussian(e.target.value);
                            setErrors({ ...errors, russian: false, cyrillic: false }); // сбрасываем ошибку при изменении значения
                        }}
                    ></input>
                )}
                <div className={style.iconCont}>
                    <div>
                        {edit === true ? (
                            " "
                        ) : (
                            <div onClick={saveChanges}>
                                <button className={style.btn}><img className={style.icon1} src={iconTick} alt="icon еick" /></button>
                            </div>
                        )}
                        {edit === true ? (
                            <div onClick={editWord}>
                                <button className={style.btn}><img className={style.icon} src={iconPencil} alt="icon pensil" /></button>
                            </div>
                        ) : (
                            <div onClick={editWord}>
                                <button className={style.btn}><img className={style.icon1} src={iconCancel} alt="icon сancel" /></button>
                            </div>
                        )}
                    </div>{" "}
                    <div onClick={deleteWord}>
                        <button className={style.btn}><img className={style.icon} src={iconBasket} alt="icon delete" /></button>
                    </div>
                </div>
            </div>

        </>

    )
}



//     return (

//         <section className={style.list}>
//             <div>{props.item.english}</div>
//             <div>{props.item.transcription}</div>
//             <div>{props.item.russian}</div>
//             <div><button><img className={style.icon} src={iconPencil} alt="icon pensil" /></button>
//                 <button><img className={style.icon} src={iconBasket} alt="icon delete" /></button></div>
//         </section>

//     )
// }
