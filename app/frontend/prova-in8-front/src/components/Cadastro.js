import '../style/Cadastro.css';
import { useState } from 'react';
import axios from 'axios';
import Lista from './Lista';


function Cadastro() {

  const [state, setState] = useState({
    nome:'',
    email: '',
    nascimento: '',
    telefone: '',
  })

  const handleChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value
    })
  }

  const handleClick = () => {
    axios.post('http://localhost:3009/cadastrar', {
      nome: state.nome,
      email: state.email,
      nascimento: state.nascimento,
      telefone: state.telefone,
    })
    .then((response) => {console.log(response)})
    .catch((error) => {console.log(error)});

    setState({
      nome:'',
      email: '',
      nascimento: '',
      telefone: '',
    })
  }

  return(
    <>
    <div className="main-cadastro">
      <div className="container-cadastro">
        <header className="header-cadastro">
          <p className="h2-cadastro">CADASTRO</p>
        </header>
        <form className="form-cadastro">
          <label className="label-cadastro" htmlFor="input-nome"> Nome
            <input value={ state.nome } name="nome" onChange={ (e) => handleChange(e) } className="input-cadastro" id="input-nome" type='text' required />
          </label>
          <label className="label-cadastro"> E-mail
            <input value={ state.email} name="email" onChange={ (e) => handleChange(e) } className="input-cadastro" id="input-email" type='text' placeholder="email@email.com" required />
          </label>
          <label className="label-cadastro"> Nascimento
            <input value={ state.nascimento } name="nascimento" onChange={ (e) => handleChange(e) } type="text" className="input-cadastro date-mask" placeholder="dd/mm/aaaa" data-mask="00/00/0000" maxlength="10" autocomplete="off" required/>
          </label>
          <label className="label-cadastro"> Telefone
            <input value={ state.telefone } name="telefone" onChange={ (e) => handleChange(e) } className="cel-sp-mask input-cadastro" id="input-telefone" type="text" placeholder="(00) 00000-0000" required />
          </label>
        </form>
        <div className="button-div">
          <button onClick={ handleClick } type="submit" className="btn btn-primary btn-lg button-cadastro">CADASTRAR</button>
        </div>
      </div>
    </div>
    <Lista />
    </>
  )
}

export default Cadastro;