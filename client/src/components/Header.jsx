import React from 'react';
import { Avatar, Button, Dropdown, Navbar, NavbarToggle, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';

export default function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  return (
    <Navbar>
      <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='py-1 px-2 me-1 bg-gradient-to-br from-green-400  to-teal-500 rounded-lg text-white'>Mononoke</span>
      </Link>
      <form className='outline-none '>
        <TextInput type='text' placeholder='Buscar...' rightIcon={AiOutlineSearch} className='hidden lg:inline ' />
      </form>
      <Button className='w-10 h-10 lg:hidden border-none' color='gray' pill>
        <AiOutlineSearch />
      </Button>

      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 sm:inline border-none' color='gray' pill onClick={() => dispatch(toggleTheme())}>
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>

        {currentUser ? (
          <Dropdown arrowIcon={false} inline label={<Avatar alt='user_avatar' img={currentUser.profilePicture} rounded />}>
            <Dropdown.Header className='text-center bg-teal-50 border-2'>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate mt-1'>{currentUser.email}</span>
            </Dropdown.Header>

            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Perfil</Dropdown.Item>
            </Link>

            <Dropdown.Divider />

            <Dropdown.Item>Cerrar sesión</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <Button className='me-1 p-0.5 bg-gradient-to-br from-green-400  to-teal-500 rounded-lg text-white' outline>
              Ingresar
            </Button>
          </Link>
        )}

        <NavbarToggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link className='dropdown-option' active={path === '/'} as={'div'}>
          <Link to='/'>Inicio</Link>
        </Navbar.Link>

        <Navbar.Link className='dropdown-option' active={path === '/about'} as={'div'}>
          <Link to='/about'>Sobre nosotros</Link>
        </Navbar.Link>

        <Navbar.Link className='dropdown-option' active={path === '/projects'} as={'div'}>
          <Link to='/projects'>Proyectos</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
