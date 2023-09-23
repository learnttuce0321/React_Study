import classes from './Auth.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import { login } from '../store/auth';

const user = {
    email: 'kdt8@naver.com',
    password: '1234'
}

const Auth = () => {

  const emailRef = useRef()
  const passwordRef = useRef()

  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const loginHandler = () => {
    const emailInput = emailRef.current
    const passwordInput = passwordRef.current

    const isUser = emailInput.value === user.email && passwordInput.value === user.password

    console.log(passwordInput === user.password)
    console.log(emailInput.value, passwordInput.value)

    if(isUser) {
      dispatch(login())
    } else {
      alert('로그인')
    }
  }
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailRef}/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={passwordRef}/>
          </div>
          <button onClick={loginHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
