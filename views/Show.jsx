const React = require('react')
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  }

class Show extends React.Component{
    render(){

        return( 
            <div>
                <h1 style = {myStyle}>Gotta Catch 'Em All!</h1>
                <h2>{this.props.mon.name[0].toUpperCase() + this.props.mon.name.slice(1)}</h2>
                <img src={`${this.props.mon.img}.jpg`}></img>
                <br></br>
                <a href ={`/pokemon`}>Back</a>
                
            </div>
        )
    }
}

module.exports = Show