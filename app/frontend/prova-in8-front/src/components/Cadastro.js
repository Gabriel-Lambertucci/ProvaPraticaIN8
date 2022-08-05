import '../style/Cadastro.css'


function Cadastro() {
  return(
    <div className="main-cadastro">
      <div className="container-cadastro">
        <header className="header-cadastro">
          <p className="h2-cadastro">CADASTRO</p>
        </header>
        <form className="form-cadastro">
          <label className="label-cadastro" htmlFor="input-nome"> Nome
            <input className="input-cadastro" id="input-nome" type='text' required />
          </label>
          <label className="label-cadastro"> E-mail
            <input className="input-cadastro" id="input-email" type='text' placeholder="email@email.com" required />
          </label>
          <label className="label-cadastro"> Nascimento
            <input type="text" className="input-cadastro date-mask" placeholder="dd/mm/aaaa" data-mask="00/00/0000" maxlength="10" autocomplete="off" required/>
          </label>
          <label className="label-cadastro"> Telefone
            <input className="cel-sp-mask input-cadastro" id="input-telefone" type="text" placeholder="(00) 00000-0000" required />
          </label>
        </form>
        <div className="button-div">
          <button type="button" className="btn btn-primary btn-lg button-cadastro">CADASTRAR</button>
        </div>
      </div>
    </div>
  )
}

export default Cadastro;