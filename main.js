const App = React.createClass({

  getInitialState() {
    return {
      clickCounter: 0,
      gameArray: {}
    }
  },


  addImage (e) {

    let black = "<img src='http://bookriotcom.c.presscdn.com/wp-content/uploads/2013/07/x.png' alt='' height='100' width='100'/>"
    let red = "<img src='https://4.bp.blogspot.com/-eGTrVsnjTKU/Vtv0gRps6JI/AAAAAAAAAFI/GHuO3wjcL3U/s1600/player2.png' alt=''  height='100' width='100' />"
    let id = e.target.id;

    console.log('target id: ',id)
    this.state.clickCounter +=1
    console.log('clickCounter; ',this.state.clickCounter)
    var value = 0
    if (this.state.clickCounter%2) {
      document.getElementById(e.target.id).innerHTML = black
      value = 1  
      document.getElementById("gameOver").innerHTML=document.getElementById('player2').value + " goes next."

    } else {
      document.getElementById(e.target.id).innerHTML = red
      value = 2
      document.getElementById("gameOver").innerHTML=document.getElementById('player1').value + " goes next."

    }

    this.state.gameArray[id]=value 
    console.log(this.state.gameArray)

    let {gameArray} = this.state
    console.log(gameArray)

    if (gameArray.one === gameArray.two && gameArray.one === gameArray.three && gameArray.one === 1){
      document.getElementById('gameOver').innerHTML="Game Over! Well done " + document.getElementById('player1').value
    } else if (gameArray.four === gameArray.five && gameArray.four ===gameArray.six && gameArray.four === 1){
      document.getElementById('gameOver').innerHTML="Game Over! Well done " + document.getElementById('player1').value
    } else if (gameArray.seven === gameArray.eight && gameArray.nine ===gameArray.seven && gameArray.seven === 1){
      document.getElementById('gameOver').innerHTML="Game Over! ell done " + document.getElementById('player1').value
    } else if (gameArray.one === gameArray.four && gameArray.seven ===gameArray.one && gameArray.one === 1){
      document.getElementById('gameOver').innerHTML="Game Over! ell done " + document.getElementById('player1').value
    } else if (gameArray.two === gameArray.five && gameArray.eight ===gameArray.two && gameArray.two === 1){
      document.getElementById('gameOver').innerHTML="Game Over! ell done " + document.getElementById('player1').value
    } else if (gameArray.three === gameArray.six && gameArray.nine ===gameArray.three && gameArray.three === 1){
      document.getElementById('gameOver').innerHTML="Game Over! ell done " + document.getElementById('player1').value
    } else if (gameArray.one === gameArray.five && gameArray.nine ===gameArray.one && gameArray.one === 1){
      document.getElementById('gameOver').innerHTML="Game Over! ell done " + document.getElementById('player1').value
    } else if (gameArray.three === gameArray.five && gameArray.seven ===gameArray.three && gameArray.three === 1){
      document.getElementById('gameOver').innerHTML="Game Over! Well done " + document.getElementById('player1').value
    } else if (gameArray.one === gameArray.two && gameArray.one === gameArray.three && gameArray.one === 2){
      document.getElementById('gameOver').innerHTML="Game Over! Well done " + document.getElementById('player2').value
    } else if (gameArray.four === gameArray.five && gameArray.four ===gameArray.six && gameArray.four === 2){
      document.getElementById('gameOver').innerHTML="Game Over! Well done " + document.getElementById('player2').value
    } else if (gameArray.seven === gameArray.eight && gameArray.nine ===gameArray.seven && gameArray.seven === 2){
      document.getElementById('gameOver').innerHTML="Game Over! Well done " + document.getElementById('player2').value
    } else if (gameArray.one === gameArray.four && gameArray.seven ===gameArray.one && gameArray.one === 2){
      document.getElementById('gameOver').innerHTML="Game Over! Well done " + document.getElementById('player2').value
    } else if (gameArray.two === gameArray.five && gameArray.eight ===gameArray.two && gameArray.two === 2){
      document.getElementById('gameOver').innerHTML="Game Over! Well done " + document.getElementById('player2').value
    } else if (gameArray.three === gameArray.six && gameArray.nine ===gameArray.three && gameArray.three === 2){
      document.getElementById('gameOver').innerHTML="Game Over! Well done " + document.getElementById('player2').value
    } else if (gameArray.one === gameArray.five && gameArray.nine ===gameArray.one && gameArray.one === 2){
      document.getElementById('gameOver').innerHTML="Game Over! Well done " + document.getElementById('player2').value
    } else if (gameArray.three === gameArray.five && gameArray.seven ===gameArray.three && gameArray.three === 2){
      document.getElementById('gameOver').innerHTML="Game Over! Well done " + document.getElementById('player2').value
    }


  },

  reset (e) {
  } ,

  unhide(e) {
    e.preventDefault();
    console.log('submitted')
    document.getElementById("table").removeAttribute("hidden")
    document.getElementById("gameOver").removeAttribute("hidden")
    document.getElementById("gameOver").innerHTML=document.getElementById('player1').value + " goes first."
  },

  render() {

    return (

      <div className = "container">

      <h1>Tic Tac Toe</h1>

      <h2>Ready? Fight!</h2>

      <form action="" className="form-inline" >
      <label htmlFor="players">Player 1:  </label>
      <input htmlFor="players" ref="player1" type="text" className="form-control" id="player1" defaultValue="Bob"  required/>
      <img src="http://bookriotcom.c.presscdn.com/wp-content/uploads/2013/07/x.png" alt="" height='100' width='100' />
      <h2>Vs.</h2>
      <label htmlFor="players">Player 2:  </label>
      <input ref="player2" htmlFor="players" type="text" className="form-control" id="player2" defaultValue="Sue"  required/>
      <img src="https://4.bp.blogspot.com/-eGTrVsnjTKU/Vtv0gRps6JI/AAAAAAAAAFI/GHuO3wjcL3U/s1600/player2.png" alt=""  height='100' width='100' />
      <hr/><button htmlFor="players" className="btn btn-lg btn-success" type="submit" onClick={this.unhide}>Submit Names</button>
      <button htmlFor="players" className="btn btn-lg btn-warning" type="submit" onClick={this.reset}>Reset Game</button>
      </form>
      <hr/>
      <h1 className= "unhide" id="gameOver" hidden> Keep Playing!</h1>
      <hr/>
      <table id="table" className = "unhide" hidden>

      <tbody>

      <tr>
      <td onClick={this.addImage} height="100px" width="100px" id="one"></td>
      <td onClick={this.addImage} height="100px" width="100px" id="two"></td>
      <td onClick={this.addImage} height="100px" width="100px" id="three"></td>
      </tr>          
      <tr>
      <td onClick={this.addImage} height="100px" width="100px" id="four"></td>
      <td onClick={this.addImage} height="100px" width="100px" id="five"></td>
      <td onClick={this.addImage} height="100px" width="100px" id="six"></td>
      </tr>
      <tr>
      <td onClick={this.addImage} height="100px" width="100px" id="seven"></td>
      <td onClick={this.addImage} height="100px" width="100px" id="eight"></td>
      <td onClick={this.addImage} height="100px" width="100px" id="nine"></td>
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