import React, {useEffect, useState} from 'react';
import Cards from './Cards';

function Apicall() {
    
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const res = await fetch('https://api.github.com/users');
        setUsers(await res.json());
        console.log(setUsers)
    }

    useEffect(() => {
       getUsers();
    }, [])
    
    return (
      <div  className="Container">
         { users.map((value, index) => {
              return(
                <Cards 
                key={index}
                picture={value.avatar_url}
                name={value.login}
                link={value.url}
               />
              )
            })}
      </div>
            )
}

export default Apicall
