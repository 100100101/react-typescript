import React from 'react'
import { useHistory } from 'react-router-dom'
export const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <React.Fragment>
      <h1>Страница информации</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        consequatur dicta harum, itaque iusto labore natus pariatur repellat
        suscipit veniam?
      </p>
      <button className="btn" onClick={() => history.push('/')}>
        Обратно к списку дел
      </button>
    </React.Fragment>
  )
}
