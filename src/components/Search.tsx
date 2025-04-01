type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
}

import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";

import styles from "./Search.module.css";

export default function Search({loadUser}: SearchProps) {

    const [userName, setUserName] = useState("");
    const {search, search_container} = styles;

    const handleKeyDown = (e: KeyboardEvent) => {
      if(e.key === "Enter"){
        loadUser(userName);
      }
    }
  return (
    <div className={search}>
        <h2>Busque por um usuário:</h2>
        <p>Conheça seus melhores repositórios</p>
        <div className={search_container}>
            <input type="text" placeholder="Digite o nome do usuário" onKeyDown={handleKeyDown} onChange={(e) => setUserName(e.target.value)}/>
            <button onClick={() => loadUser(userName)}><BsSearch /></button>
        </div>
    </div>
  )
}
