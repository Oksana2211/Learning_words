import { createContext } from "react";
import { useState, useEffect } from "react";
import GET from "../../services/GET";

export const Context = createContext();

export function ContextComponent({ children }) {
  const [words, setWords] = useState([false]);
  const value = { words, setWords };


  useEffect(() => {
    getApi();
  }, []);

  async function getApi() {
    const wordApi = await GET.getWord();
    setWords(wordApi);

  }

  if (!words) return <h1>Loading...</h1>;

  return <Context.Provider value={value}>{children}</Context.Provider>;
}


