import { Button, TextInput } from 'flowbite-react';
import React from 'react';
import { useSelector } from 'react-redux';

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-semibold text-3xl'>Perfil</h1>
      <form className='flex flex-col gap-4'>
        <div className='w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full'>
          <img src={currentUser.profilePicture} alt='foto_de_usuario' className='rounded-full w-full h-full border-4 border-gray-400' />
        </div>
        <TextInput type='text' id='username' placeholder='Nombre de usuario' defaultValue={currentUser.username} />
        <TextInput type='email' id='email' placeholder='tunombre@correo.com' defaultValue={currentUser.email} />
        <TextInput type='password' id='password' placeholder='Contraseña' />
        <Button type='submit' gradientDuoTone='greenToBlue' outline className='mb-40'>
          Actualizar
        </Button>
      </form>
      <div className='text-red-500 flex justify-between'>
        <span className='cursor-pointer'>Borrar cuenta</span>
        <span className='Cerrar sesión'>Borrar cuenta</span>
      </div>
    </div>
  );
}
