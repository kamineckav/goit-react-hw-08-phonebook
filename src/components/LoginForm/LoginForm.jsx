import { useState, useId } from 'react';

import style from './LoginForm.module.css';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const LoginForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    ...INITIAL_STATE,
  });

  const handleChange = e => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  const reset = () => {
    setState({ ...INITIAL_STATE });
  };

  const emailId = useId();
  const passwordId = useId();

  const { password, email } = state;

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.title}>Welcome</div>
      <div className={style.block}>
        <input
          value={email}
          id={emailId}
          onChange={handleChange}
          type="email"
          name="email"
          className={style.input}
          placeholder="Email "
          required
        />
      </div>
      <div className={style.block}>
        <input
          value={password}
          id={passwordId}
          onChange={handleChange}
          type="password"
          name="password"
          className={style.input}
          placeholder="Password "
          required
        />
      </div>
      <button className={style.submit} type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
