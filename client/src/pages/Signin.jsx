import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { React, useState } from 'react';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage('Por favor, complete todos los campos.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);

      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.message);
      } else {
        navigate('/');
      }

      setLoading(false);
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className='min-h-scareen mt-20 mb-20'>
      <div className='flex flex-col md:flex-row md:items-center p-3 max-w-3xl mx-auto gap-6'>
        {/* izquierda: logo - descripción */}
        <div className='flex-1'>
          <Link to='/' className='text-4xl font-bold dark:text-white '>
            <span className='py-1 px-2 me-1 bg-gradient-to-br from-green-400  to-teal-500 rounded-lg text-white'>Mononoke</span>
          </Link>

          <p className='text-sm mt-4'>
            <span className='font-semibold'>Este es un proyecto de prueba.</span>
            <br />
            Pódes ingresar con tu email o con Google.
          </p>
        </div>

        {/* derecha: formulario de registro */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Email' />
              <TextInput type='text' placeholder='nombre@ejemplo.com' id='email' onChange={handleChange} />
            </div>

            <div>
              <Label value='Contraseña' />
              <TextInput type='text' placeholder='***********' id='password' onChange={handleChange} />
            </div>

            <Button gradientDuoTone='greenToBlue' type='submit' disabled={loading}>
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Un momento...</span>
                </>
              ) : (
                'Iniciar sesión'
              )}
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5 justify-center'>
            <span>¿No tenés una cuenta?</span>

            <Link to='/sign-in' className='text-teal-500'>
              Iniciar sesión
            </Link>
          </div>

          <div className='flex justify-center'>
            {errorMessage && (
              <Alert className='mt-3' color='failure'>
                {errorMessage}
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
