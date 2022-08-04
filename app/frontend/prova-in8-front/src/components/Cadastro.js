import '../style/Cadastro.css'


function Cadastro() {
  return(
    <div className="main-cadastro">
      <header className="header-cadastro">
        <h2 className="h2-cadastro">CADASTRO</h2>
      </header>
      <form className="form-cadastro">
        <label className="label-cadastro" htmlFor="input-nome"> Nome
          <input className="input-cadastro" id="input-nome" type='text' />
        </label>
        <label className="label-cadastro"> E-mail
          <input className="input-cadastro" id="input-email" type='text' />
        </label>
        <label className="label-cadastro"> Nascimento
          <input className="input-cadastro" id="input-nascimento" type='date' />
        </label>
        <label className="label-cadastro"> Telefone
          <input className="input-cadastro" id="input-telefone" type='tel' />
        </label>
      </form>
      <div className="button-div">
        <button type="button" className="button-cadastro">CADASTRAR</button>
      </div>
    </div>
  )
}

export default Cadastro;