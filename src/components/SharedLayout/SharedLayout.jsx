import NavbarMenu from '../../components/Navbar/NavbarMenu/NavbarMenu';
import { Outlet } from 'react-router-dom';
const SharedLayout = () => {
  return (
    <>
      <NavbarMenu />
      <Outlet />
    </>
  );
};

export default SharedLayout;
