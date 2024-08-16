import React from 'react';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiUser } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function DashSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item active={tab === 'profile'} icon={HiUser} label={'User'} labelColor='dark' onClick={() => handleNavigation('/dashboard?tab=profile')}>
            Perfil
          </Sidebar.Item>

          <Sidebar.Item className='cursor-pointer' icon={HiArrowSmRight}>
            Cerrar sesión
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
