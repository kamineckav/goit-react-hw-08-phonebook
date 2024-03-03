import { Route, Routes } from 'react-router-dom';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicPage from 'pages/PublicPage/PublicPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import PublicRoute from './PublicRoute/PublicRoute';
import SharedLayout from './SharedLayout/SharedLayout';
import { useDispatch } from 'react-redux';
import { current } from '../redux/auth/auth-operartion';
import { useEffect } from 'react';
export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route element={<PublicRoute />}>
            <Route index element={<PublicPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route path="/contacts" element={<PrivateRoute />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
