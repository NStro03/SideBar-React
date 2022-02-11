import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext } from '../context';

const Home = () => {
  const { openSideBar, openModal } = useContext(AppContext);

  return (
    <main>
      <button onClick={openSideBar} className='sidebar-toggle'>
        <FaBars />
      </button>
      <button onClick={openModal} className='btn'>
        Show Modal
      </button>
    </main>
  )
}

export default Home
