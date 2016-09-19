const App = React.createClass({

render() {
  return (

    <div className = "container">

      <h1>Tic Tac Toe</h1>

      <h2>Ready? Fight!</h2>

      <table>
        
        <tbody>
          
          <tr>
            <td id="one"></td>
            <td id="two"></td>
            <td id="three"></td>
          </tr>          
          <tr>
            <td id="four"></td>
            <td id="five"></td>
            <td id="six"></td>
          </tr>
          <tr>
            <td id="seven"></td>
            <td id="eight"></td>
            <td id="nine"></td>
          </tr>

        </tbody>

      </table>


    </div>

    )
}






})















ReactDOM.render (
  <App/>,
  document.getElementById('root')
  )