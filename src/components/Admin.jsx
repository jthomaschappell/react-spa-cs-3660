// TODO: Create boilerplate admin
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Admin() {
    const { isLoggedIn } = useContext(AuthContext);
    return (
        <div>
            <h1>Admin</h1>
        </div>
    );
}

export default Admin;