import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../redux/auth/auth-operartion';
import {
  selectAuthLoading,
  selectAuthError,
} from '../../redux/auth/auth-selectors';
import style from './RegistrationPage.module.css';

const RegistrationPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <main>
      {authLoading && <p>Loading...</p>}
      <RegistrationForm onSubmit={handleSignup} />
      {authError && <p className={style.text}>{authError}</p>}
    </main>
  );
};

export default RegistrationPage;
