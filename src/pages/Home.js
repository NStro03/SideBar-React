import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext } from '../context';

const Home = () => {
  const appData = useContext(AppContext);
  console.log(appData.isSideBarOpen);
  return (
    <main>
      <button onClick={() => appData.openSideBar()} className='sidebar-toggle'>
        <FaBars />
      </button>
      <button onClick={() => appData.openModal()} className='btn'>
        Show Modal
      </button>
    </main>
  )
}

export default Home
