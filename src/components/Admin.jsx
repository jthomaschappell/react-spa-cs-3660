import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Button, Card, Container } from 'react-bootstrap';
import Logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

function Admin() {
    const { isLoggedIn, token, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const delayedLogout = () => {
        console.log("Delayed logout called");
        logout();
    }

    return (
        <Container className="mt-4 d-flex justify-content-center">
            <Card style={{ width: '400px' }}>
                <Card.Body>
                    <div className="text-center mt-4 mb-4">
                        <img className="rounded-4" src={Logo} alt="Binder Logo" style={{ width: "250px", height: 'auto', border: "1px solid #CCD5AE" }} />

                        <h1 className="mb-4 mt-4">Admin</h1>
                        <p>Welcome, {token?.username}</p>
                        <Button onClick={delayedLogout}>Logout</Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Admin;