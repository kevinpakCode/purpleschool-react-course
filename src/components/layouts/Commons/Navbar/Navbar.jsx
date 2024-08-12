import './Navbar.css'
import { NumBadge } from '../../../commons/Badge/NumBadge'

export const Navbar = ({className}) => {
  let cl = 'navbar'
  if(className) cl +=` ${className}`

  return (
    <nav className={cl}>
      <ul className="navbar__list">
        <li className="navbar__list-item">
          <a href="#" className="navbar__list-item-link navbar__list-item-link--active">Поиск фильмов</a>
        </li>
        <li className="navbar__list-item">
          <a href="#" className="navbar__list-item-link">
            Мои фильмы
            <NumBadge value={2}/>
          </a>
        </li>
        <li className="navbar__list-item">
          <a href="#" className="navbar__list-item-link">
            Войти
            <img src="./../../../images/icons/login.svg" />
          </a>
        </li>
      </ul>
    </nav>
  )
}
