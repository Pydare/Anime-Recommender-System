import React from 'react';

class Form extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            anime_name: '',
            result : {}
        };
    
        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
      };
    
    handleChange(event) {
        this.setState({anime_name: event.target.value});
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify({anime: this.state.anime_name})
        }
        const response = await fetch('http://127.0.0.1:5000/recommender',requestOptions)
        
        const body = await response.json()
        this.setState({result:body})
        console.log(this.state.result)
        
        this.setState({ anime_name: '' })
    };

    render(){
        const renderItems = Object.keys(this.state.result).map((key, i) =>{
            return <li key={i}>{this.state.result[key]}</li>
          });
        return(
            <div className="row">
                <form onSubmit={this.handleSubmit}  method="POST">
                    <span className="formtext">Form</span>
                    <input type="text" placeholder="Enter Anime Name"
                    onChange={this.handleChange}
                    value={this.state.anime_name}
                    required />
                    <button>Go</button>
                </form>
                <div>
                    <ul>{renderItems}</ul>
                </div>
                
            </div>
            
        );
    }
    
}

export default Form 