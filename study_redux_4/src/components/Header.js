import classes from './Header.module.css';
import { useDispatch } from 'react-redux';
import { logout } from '../store/auth';
const Header = () => {
  
  const dispatch = useDispatch()

  const logoutHandler = () => {
    if(window.confirm('로그아웃?')) {
      dispatch(logout())
    }
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
