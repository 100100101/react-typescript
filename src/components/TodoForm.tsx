import React from 'react'
export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper deep-purple darken-1 px1">
      <a href="/" className="brand-logo">
        React + TypeScript
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <a href="/">Список дел</a>
        </li>
        <li>
          <a href="/">Информация</a>
        </li>
      </ul>
    </div>
  </nav>
)
