import { UserProps } from "../types/user";

import { MdLocationPin } from "react-icons/md";

import { Link } from "react-router-dom";

import styles from "./User.module.css";

export default function User({login, avatar_url, followers, following, location}: UserProps) {

  return (
    <div className={styles.user}>
        <img src={avatar_url} alt={login} />
        <h2>{login}</h2>
        {location && ( 
            <p className={styles.location}>
                <MdLocationPin />
                <span>{location}</span>
            </p>
        )}
        <div className={styles.stats}>
            <div>
                <p>Seguidores:</p>
                <p className={styles.number}>{followers}</p>
            </div>
            <div>
                <p>Seguindo:</p>
                <p className={styles.number}>{following}</p>
            </div>
        </div>
        <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
    </div>
  )
}
