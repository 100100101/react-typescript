import React from 'react'
import { NavLink } from 'react-router-dom'
export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper deep-purple darken-1 px1">
      <span className="left">React + TypeScript</span>
      <ul className="right">
        <li>
          <NavLink to="/">Список дел</NavLink>
        </li>
        <li>
          <NavLink to="/about">Информация</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)
