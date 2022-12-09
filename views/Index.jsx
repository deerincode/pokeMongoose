const React = require('react')
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  }

class Index extends React.Component{
    render(){
        
        return(
            
            <div>
                <h1 style = {myStyle}>See All The Pokemon!</h1>

                <nav>
                    <a href ={`/pokemon/new`}>Add New Pokemon</a>
                </nav>
            
                <ul>
                    {this.props.pokemon.map((mon, i) => {
                        return (
                            <li>
                                <a href ={`/pokemon/${mon.id}`}>{mon.name[0].toUpperCase() + mon.name.slice(1)}
                                </a>
                            </li>
                        )
                    })}
                </ul>

                
                
            </div>
        )
    }
}

module.exports = Index