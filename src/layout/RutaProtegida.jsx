import useAuth from '../hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'
import Header from '../components/Header';



const RutaProtegida = () => {

  const { auth, cargando } = useAuth();

  if (cargando) return 'cargando....';

  return (
    <>
      <Header />
      {auth?.id ?
        (
          <main className='min-h-screen'>
            <Outlet />
          </main>
        ) : <Navigate to={"/"} />
      }
    </>
  )
}

export default RutaProtegida