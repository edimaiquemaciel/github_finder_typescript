import { useState } from "react";
import Search from "../components/Search";
import { UserProps } from "../types/user";
import Error from "../components/Error";

import User from "../components/User";
import Loader from "../components/Loader";


export default function Home() {
    const [user, setUser] = useState<UserProps | null>(null);
    const [erro, setErro] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const loadUser = async(userName: string) => {
        setIsLoading(true);
        setUser(null);
        setErro(false);
        const res = await fetch(`http://api.github.com/users/${userName}`);

        const data = await res.json();

        setIsLoading(false);

        if(res.status === 404){
          setErro(true);
          return;
        }
        
        const {avatar_url, login, location, followers, following} = data;

        const userData: UserProps = {
          avatar_url, 
          login, 
          location, 
          followers, 
          following,
        }

        setUser(userData);
        
    }
  return (
    <div>
        <Search loadUser={loadUser} />
        {isLoading && <Loader />}
        {user && <User {...user} />}
        {erro && <Error /> }
    </div>
  )
}
