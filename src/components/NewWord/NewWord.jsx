import React from "react"
import { useContext, useState } from "react";
import style from './style.module.scss'
import { Context } from "../Contex/Context";




export default function NewWord() {

    const [form, setForm] = useState({
        word: "",
        translation: "",
        pronunciation: "",
        tags: "",
    });

    const [invalid, setInvalid] = useState({
        word: false,
        translation: false,
        pronunciation: false,
        tags: false,
    });

    const [success, setSuccess] = useState(false);



    const { words, setWords } = useContext(Context);
    console.log(words);

    const formInvalid =
        invalid.word ||
        invalid.translation ||
        invalid.pronunciation ||
        invalid.tags;

    const isFormValidInitially =
        form.tags.trim() &&
        form.word.trim() &&
        form.pronunciation.trim() &&
        form.translation.trim();

    if (!words) {
        return <p>Loading</p>;
    }
    const nextId = Number(words[words.length - 1].id) + 1;

    const wordData = {
        id: nextId,
        english: form.word.trim(),
        russian: form.translation.trim(),
        transcription: form.pronunciation.trim(),
        tags: form.tags.trim(),
    };

    const wordClassName = invalid.word ? "wordInvalid" : "";
    const translationClassName = invalid.translation ? "wordInvalid" : "";
    const pronunciationClassName = invalid.pronunciation
        ? "wordInvalid"
        : "";
    const tagsClassName = invalid.tags ? "wordInvalid" : "";




    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });

        if (e.target.value.trim()) {
            setInvalid({ ...invalid, [e.target.name]: false });
        } else if (!e.target.value.trim()) {
            setInvalid({ ...invalid, [e.target.name]: true });
        }
    }


    function handleSubmit(e) {
        e.preventDefault();
        if (!form.tags.trim()) {
            setInvalid((prev) => ({ ...prev, tags: true }));
        }
        if (!form.translation.trim()) {
            setInvalid((prev) => ({ ...prev, translation: true }));
        }
        if (!form.pronunciation.trim()) {
            setInvalid((prev) => ({ ...prev, pronunciation: true }));
        }
        if (!form.word.trim()) {
            setInvalid((prev) => ({ ...prev, word: true }));
        }
        if (!formInvalid && isFormValidInitially) {
            console.log(JSON.stringify(wordData));
            //Добавление новой карточки
            fetch("http://itgirlschool.justmakeit.ru/api/words", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(wordData),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    console.log(response);
                    setWords([...words, { ...wordData }]);
                    setSuccess(true);
                    setTimeout(() => setSuccess(false), 5000);
                    setForm({
                        word: "",
                        translation: "",
                        pronunciation: "",
                        tags: "",
                    });
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    }


    return (
        <section className={style.newWord}>
            <h2 className={style.wordTitle}>Заполните данные карточки:</h2>
            <form>
                <div className={style.wordInput}>
                    <label htmlFor="word">Слово: </label>
                    <input
                        type="text"
                        name="word"
                        id="word"
                        value={form.word}
                        onChange={(e) => handleChange(e)}
                        className={style[wordClassName]}
                    />
                </div>
                <div className={style.wordInput}>
                    <label htmlFor="pronunciation">Транскрипция: </label>
                    <input
                        type="text"
                        name="pronunciation"
                        id="pronunciation"
                        value={form.pronunciation}
                        onChange={(e) => handleChange(e)}
                        className={style[pronunciationClassName]}
                    />
                </div>
                <div className={style.wordInput}>
                    <label htmlFor="translation">Перевод: </label>
                    <input
                        type="text"
                        name="translation"
                        id="translation"
                        value={form.translation}
                        onChange={(e) => handleChange(e)}
                        className={style[translationClassName]}
                    />
                </div>
                <div className={style.wordInput}>
                    <label htmlFor="tags">Теги: </label>
                    <input
                        type="text"
                        name="tags"
                        id="tags"
                        value={form.tags}
                        onChange={(e) => handleChange(e)}
                        className={style[tagsClassName]}
                    />
                </div>
                {formInvalid && (
                    <div>
                        <p className={style.errorMessage}>Заполните все поля!</p>
                    </div>
                )}
                {success && (
                    <div>
                        <p className={style.errorMessage}>Слово добавлено!</p>
                    </div>
                )}
                <button className={style.btnSave}
                    onClick={handleSubmit}
                    disabled={formInvalid}>
                    Сохранить
                </button>
            </form>
        </section>

    )
}

