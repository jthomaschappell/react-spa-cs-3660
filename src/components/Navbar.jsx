// // // src/components/Navbar.jsx
// // import { Link } from 'react-router-dom';

import { Link } from 'react-router-dom';

function Navbar({ myUsername }) {
  console.log(`My username from navbar: ${myUsername}`);
  return (
    <nav className='navbar'>
      <ul>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/">Home</Link></li>
        {(myUsername === "") && <li><Link to="/login">Login</Link></li>}
        {(myUsername !== "") && <li><Link to="/login">Switch Accounts</Link></li>}
      </ul>
    </nav>
  );
}

export default Navbar;  