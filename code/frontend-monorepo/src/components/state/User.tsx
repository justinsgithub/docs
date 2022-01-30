import { useState } from 'react';

type Admin = {
    name: string;
    email: string;
    email2: string;
}

export const User = () => {
    //const [user, setUser] = useState<Admin | null>(null);
    const [user, setUser] = useState<Admin>({} as Admin); // type assersion IF 100% CONFIDENT

    const handleLogin = () => {
        setUser({
            name: 'justin',
            email: 'justinaawd@gmail.com',
            email2: 'justinaawd@protonmail.com'
        })
    }

    /*
    const handleLogout = () => {
        setUser(null)
    }*/

    return (
        <div> 
            <button onClick={handleLogin}>Login</button>
            {/*<button onClick={handleLogout}>Logout</button>
            <div>User name is{user?.name}</div>
            <div>User email is{user?.email}</div>*/}
            <div>User name is{user.name}</div>
            <div>User email is{user.email}</div>
        </div>
    )
}
