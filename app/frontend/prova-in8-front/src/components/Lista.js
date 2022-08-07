import '../style/Lista.css'
import icon from "../icones/topo-pag.svg"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Footer';

function Lista() {

  const [state, setState] = useState({
    data0: null,
    data1: null,
    data2: null,
    data3: null,
  })

  useEffect(() => {
    axios.get('http://localhost:3009/users')
    .then(({data}) => {
      console.log(data);
      setState({
        data0: data[0],
        data1: data[1],
        data2: data[2],
        data3: data[3]
      })
    })
  }, []);

  return (
    <>
    <div className="div-lista">
      <h2 className="h2-lista"> LISTA DE CADASTRO </h2>
      <table className="table-lista">
        <tr className="tr titles">
          <th className="th tdb" />
          <th className="th tdb tw">NOME</th>
          <th className="th tdb tw">E-MAIL</th>
          <th className="th tdb tw">NASCIMENTO</th>
          <th className="th tw">TELEFONE</th>
        </tr>
        <tr className="tr">
          <td className="td tdb numeros">1</td>
          <td className="td tdb tw">{ state.data0 ? state.data0.nome : null  }</td>
          <td className="td tdb tw">{ state.data0 && state.data0.email  }</td>
          <td className="td tdb tw">{ state.data0 && state.data0.nascimento }</td>
          <td className="td tw">{ state.data0 && state.data0.telefone  }</td>
        </tr>
        <tr className="tr">
          <td className="td tdb numeros">2</td>
          <td className="td tdb tw">{ state.data1 && state.data1.nome  }</td>
          <td className="td tdb tw">{ state.data1 && state.data1.email  }</td>
          <td className="td tdb tw">{ state.data1 && state.data1.nascimento }</td>
          <td className="td tw">{ state.data1 && state.data1.telefone  }</td>
        </tr>
        <tr className="tr">
          <td className="td tdb numeros">3</td>
          <td className="td tdb tw">{ state.data2 && state.data2.nome  }</td>
          <td className="td tdb tw">{ state.data2 && state.data2.email  }</td>
          <td className="td tdb tw">{ state.data2 && state.data2.nascimento }</td>
          <td className="td tw">{ state.data2 && state.data2.telefone  }</td>
        </tr>
        <tr id="last-tr" className="tr">
          <td className="td tdb numeros">4</td>
          <td className="td tdb tw">{ state.data3 && state.data3.nome  }</td>
          <td className="td tdb tw">{ state.data3 && state.data3.email  }</td>
          <td className="td tdb tw">{ state.data3 && state.data3.nascimento }</td>
          <td className="td tw">{ state.data3 && state.data3.telefone  }</td>
        </tr>
      </table>
      <img className="img-lista" src={ icon } alt="logo" />
    </div>
    <Footer data0={ state.data0 } />
    </>
  )
};

export default Lista;