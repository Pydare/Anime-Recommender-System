import React from 'react';
import {Button} from 'reactstrap'
import FontAwesome from 'react-fontawesome';
import { trackPromise } from 'react-promise-tracker';


class Popup2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        button_val: '',
        result2: '',
        genreVisible: false
    };

  };

  onClick = async (event) => {
        event.preventDefault();
        this.setState({button_val: event.target.value})

        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify({genre: this.state.button_val})
        }

        const response = await trackPromise(fetch('http://127.0.0.1:5000/recommender/genre',requestOptions))
        
        const body = await response.json()
        this.setState({result2:body, genreVisible: !this.state.genreVisible})
        
    };

  render() {
    const renderGenres = Object.keys(this.state.result2).map((key, i) =>{
        return <div className=""><li className="" key={i}><h6>{this.state.result2[key]}</h6></li></div>
                
      });

    return (
      <div className='popup'>
        <div className='popup_inner'>
        <strong><FontAwesome onClick={this.props.closePopup}>&times;</FontAwesome></strong>
        <div className="decades">
          <p><strong>Select a Genre to see it's Top Anime (click on button twice)</strong></p>
        </div>
        <br/>
        <div className="row ">
          <div className="col-4 offset-1 col-sm-3 offset-md-1">
                <div className="row">
                <Button onClick={this.onClick} as="input" size="sm" type="submit" value="Action">Action</Button>
                </div>
                <div className="row ">
                <Button onClick={this.onClick} as="input" size="sm" type="submit" value="Comedy">Comedy</Button>
                </div>
                <div className="row ">
                <Button onClick={this.onClick} as="input"size="sm"  type="submit" value="Drama">Drama</Button>
                </div>
                <div className="row ">
                <Button onClick={this.onClick} as="input" size="sm" type="submit" value="Fantasy">Fantasy</Button>
                </div> 
                <div className="row ">
                <Button onClick={this.onClick} as="input" size="sm" type="submit" value="Horror">Horror</Button>
                </div> 
                <div className="row ">
                <Button onClick={this.onClick} as="input" size="sm" type="submit" value="Shounen">Shounen</Button>
                </div>  
                <div className="row ">
                <Button onClick={this.onClick} as="input" size="sm" type="submit" value="Romance">Romance</Button>
                </div> 
                <div className="row ">
                <Button onClick={this.onClick} as="input" size="sm" type="submit" value="Demon">Demon</Button>
                </div>         
          </div>    
          <div className="col-7 col-sm-8">
            <div className="row">
              {this.state.genreVisible && this.state.button_val === 'Action'?
              <ul className="my-ul-popup">{renderGenres}</ul>
              : null}
              {this.state.genreVisible && this.state.button_val === 'Comedy'?
              <ul className="my-ul-popup">{renderGenres}</ul>
              : null}
              {this.state.genreVisible && this.state.button_val === 'Drama'?
              <ul className="my-ul-popup">{renderGenres}</ul>
              : null}
              {this.state.genreVisible && this.state.button_val === 'Fantasy'?
              <ul className="my-ul-popup">{renderGenres}</ul>
              : null}
              {this.state.genreVisible && this.state.button_val === 'Horror'?
              <ul className="my-ul-popup">{renderGenres}</ul>
              : null}
              {this.state.genreVisible && this.state.button_val === 'Shounen'?
              <ul className="my-ul-popup">{renderGenres}</ul>
              : null}
              {this.state.genreVisible && this.state.button_val === 'Romance'?
              <ul className="my-ul-popup">{renderGenres}</ul>
              : null}
              {this.state.genreVisible && this.state.button_val === 'Demon'?
              <ul className="my-ul-popup">{renderGenres}</ul>
              : null}
              </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Popup2