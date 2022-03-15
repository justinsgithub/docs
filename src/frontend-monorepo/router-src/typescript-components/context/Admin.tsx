import { useContext } from 'react';
import { AdminContext } from './AdminContext';

export const Admin = () => {
    const adminContext = useContext(AdminContext);
    const handleLogin = () => {
        if(adminContext) {
            adminContext.setAdmin({
                name: 'justin',
                email: 'justinaawd@gmail.com',
                email2: 'justinaawd@protonmail.com',
                websiteDomain: 'justintylers.com'
            })
        }
    }
    const handleLogout = () => {
        if (adminContext) {
            adminContext.setAdmin(null)
        }
    }
    return (
        <div> 
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>Admin name is {adminContext.admin?.name}</div>
            <div>Admin email is</div>
        </div>
    )
}
