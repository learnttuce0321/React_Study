import Counter from './components/Counter';
import Header from './components/Header'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import { useSelector } from 'react-redux';

function App() {

  const auth = useSelector(state => state.auth)
  return (
    <>
      <Header />
      {!auth.isAuth ? <Auth /> : <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
