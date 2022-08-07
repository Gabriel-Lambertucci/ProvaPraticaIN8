import '../style/Footer.css'

function Footer(props) {
  console.log(props);

  const { data0 } = props;
  
  return (
    <footer className="footer">
      <div className="div-footer">
        {console.log(data0)}
        <p>{data0 && data0.nome}</p>
        <p>{data0 && data0.email}</p>
        <p>{data0 && data0.telefone}</p>
        <p>Faculdade de Belo Horizonte</p>
      </div>
    </footer>
  )
}

export default Footer;