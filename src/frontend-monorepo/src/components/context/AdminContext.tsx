import { useState, createContext } from 'react';

export type Admin = {
    name: string;
    email: string;
    email2: string;
    websiteDomain: string;
}


type AdminContextType = {
    admin: Admin | null;
    setAdmin: React.Dispatch<React.SetStateAction<Admin | null>>;
}

type AdminContextProviderProps = {
    children: React.ReactNode;
}

export const AdminContext = createContext({} as AdminContextType);

export const AdminContextProvider = ({ children }: AdminContextProviderProps) => {
    const [admin, setAdmin] = useState<Admin | null>(null)

    return (
    <AdminContext.Provider value={{ admin, setAdmin }}> 
        {children}
    </AdminContext.Provider>
    )
}
