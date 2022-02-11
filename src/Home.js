import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext } from './context';

const Home = () => {
  const appData = useContext(AppContext);
  console.log(appData.isSideBarOpen);
  return (
    <>
      <button onClick={() => appData.openSideBar()}>
        <FaBars />
      </button>
      <button onClick={() => appData.openModal()}>Show Modal</button>
    </>
  )
}

export default Home
