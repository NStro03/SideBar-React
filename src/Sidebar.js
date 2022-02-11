import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { AppContext } from './context'

const Sidebar = () => {
  const sidebarLinks = links.map((link) => {
    return (
      <li key={link.id}>
        <Link to={link.url}>{link.text}</Link>
      </li>
    )
  })

  const { isSideBarOpen, closeSideBar } = useContext(AppContext);
  return (
    <aside className={isSideBarOpen ? 'sidebar show-sidebar' : 'sidebar'} >
      <div className='sidebar-header'>
        <img src={logo} className='logo' alt='logo' />
        <button className='close-btn' onClick={closeSideBar}>
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
    </aside>
  )
}

export default Sidebar
