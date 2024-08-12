import './Header.css'
import { Navbar } from '../Commons/Navbar/Navbar'
import logo from './../../../../public/images/logo.svg'
import { Container } from '../Commons/Container/Container'

export const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <a href="#" className="header__logo">
            <img src={logo} />
          </a>
          <Navbar className="header__navbar"/>
        </div>
      </Container>
    </header>
  )
}
