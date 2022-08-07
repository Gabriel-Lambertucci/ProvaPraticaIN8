import logo from '../icones/logo-in8-dev.svg';
import hamburger0 from '../icones/hamburguer-aberto0.svg';
import hamburger from '../icones/hamburguer.svg'
import '../style/Header.css';
import { useState } from 'react';

function Header() {

  const [state, setState] = useState({
    menuClass: 'notShow menu-mobile',
    iconClass: 'closed',
    navClass: 'notShow'
  })

  const handleClickMobileButton = () => {
    setState({
      menuClass: 'menu-mobile',
    iconClass: 'notShow',
    navClass: 'nav-header'
    })
  }

  const handleClickMobileButtonOpen = () => {
    setState({
      menuClass: 'notShow menu-mobile',
      iconClass: 'closed',
      navClass: 'notShow nav-header'
    })
  }

  const hanburgerString = 'hamburgerClosed'

  return (
    <header className="header">
      {window.screen.width > 500 ?
      <>
        <div className="div1-header">
          <img className="img-header" src={ logo } alt="IN8 logo"></img>
          <nav className= 'nav-header'>
            <ul className="ul-header">
              <li id='li-1' className="li-header">cadastro</li>
              <li className="li-header">lista</li>
              <li className="li-header">sobre mim</li>
            </ul>
          </nav>
          </div>
          <div className="div2-header">
          <h2 id='h2-div2-header'>ESTÁGIO</h2>
          <h4 id='h4-div2-header'>PROVA DE SELEÇÃO</h4>
        </div>
      </> :
      <>
      <div className="div1-header">
        <div className={state.menuClass}>
          <button type="button" onClick={ handleClickMobileButtonOpen }><img className="hamburger hamburger0" src={ hamburger0 } alt="icon" ></img> </button>
          <nav className={state.navClass}>
            <ul className="ul-header">
              <li id='li-1' className="li-header">lista</li>
              <li className="li-header">sobre mim</li>
              <li className="li-header">cadastro</li>
            </ul>
          </nav>
        </div>
        <button type="button" onClick={ handleClickMobileButton }><img className={`${state.iconClass} ${hanburgerString}`} src={hamburger} alt="icon"></img></button>
        <img className="img-header" src={ logo } alt="IN8 logo"></img>
        </div>
        <div className="div2-header">
        <h2 id='h2-div2-header'>ESTÁGIO</h2>
        <h4 id='h4-div2-header'>PROVA DE SELEÇÃO</h4>
      </div>
    </>
    }
    </header>
  )
}

export default Header;