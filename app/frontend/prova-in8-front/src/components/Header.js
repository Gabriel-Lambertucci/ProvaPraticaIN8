import logo from '../icones/logo-in8-dev.svg';
import '../style/Header.css';

function Header() {
  

  return (
    <header className="header">
      <div className="div1-header">
        <img className="img-header" src={ logo } alt="IN8 logo"></img>
        <nav className="nav-header">
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
    </header>
  )
}

export default Header;