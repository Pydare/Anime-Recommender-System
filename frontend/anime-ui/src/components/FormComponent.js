import React from 'react';
import axios from 'axios';

class Form extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          anime_name: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleChange(event) {
        this.setState({anime_name: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();

        const post = { anime_name: this.state.name }
        axios.post(`http://127.0.0.1:5000/recommender/${this.state.anime_name}`, post)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ anime_name: '' })
    }
    
    render(){

        return(

            <form onSubmit={this.handleSubmit}>
                <span className="formtext">Form</span>
                <input type="text" placeholder="Enter Anime Name"
                onChange={this.handleChange}
                value={this.state.anime_name}
                required />
                <button>Go</button>
            </form>
        );
    }
    
}

export default Form 