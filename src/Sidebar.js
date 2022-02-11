import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { AppContext } from './context'

const Sidebar = () => {
  const sidebarLinks = links.map((link) => {
    return (<li>
      <Link key={link.id} to={link.url}>{(link.text !== 'Random') ? link.text : "Home"}</Link>
    </li>
    )
  })

  const appData = useContext(AppContext);
  return (
    <nav className={appData.isSideBarOpen ? 'sidebar show-sidebar' : 'sidebar'} >
      <div className='nav-header'>
        <img src={logo} className='logo' alt='logo' />
        <button onClick={() => appData.closeSideBar()}>
          <FaTimes />
        </button>
      </div>
      <div className='links-container'>
        <ul className='links'>
          {sidebarLinks}
        </ul>

      </div>
      <ul className='social-icons'>
        {social.map((socialIcon) => {
          const { url, id, icon } = socialIcon;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Sidebar
