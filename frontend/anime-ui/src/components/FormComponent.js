import React from 'react';
import {Button} from 'reactstrap'
import LoadingIndicator from './LoadingComponent';
import { trackPromise } from 'react-promise-tracker';
import Popup from './PopupComponent'
import Popup2 from './Popup2Component'


class Form extends React.Component{

    constructor(props) {
        super(props);
        this.state = { 
            anime_name: '',
            result : {},
            heading: '',
            showPopup: false,
            showPopup2:false
        };
    
    this.handleChange = this.handleChange.bind(this);
    };
    
    togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }

      togglePopup2() {
        this.setState({
          showPopup2: !this.state.showPopup2
        });
      }

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
        const response = await trackPromise(fetch('http://127.0.0.1:5000/recommender',requestOptions))
        
        const body = await response.json()
        this.setState({result:body, heading:"Results"})
        
        this.setState({ anime_name: '' })
    };

    render(){
        const renderItems = Object.keys(this.state.result).map((key, i) =>{
            return <div className=""><li className="my-li" key={i}><h6>{this.state.result[key]}</h6></li></div>
                    
          });

        return(
            <div className="container starting-txt">
                <div className="col-12">
                    <br/><br/><br/><br/><br/><br/><br/>
                    <div className="row">
                    <h3>Enter An Anime You Love</h3>
                    
                    <h6>&#123; AnimeHouse uses a special Machine Learning Algorithm to make recommendations for you, based on your Anime Input &#125;</h6>
                    {/* <h6>&#123; We use AI to make recommendations for you &#125; </h6> */}
                    <br/>
                    <br/><br/>
                    <br></br>
                        <div className="">
                            <form onSubmit={this.handleSubmit}  method="POST">
                                <input type="text" placeholder="Anime Title (Lower Cases)"
                                onChange={this.handleChange}
                                value={this.state.anime_name}
                                required />
                            <Button variant="dark" size="sm" className=" ">Search</Button>
                            <div>
                            <br/>
                            <h5>{this.state.heading}</h5>
                            <ul className="my-ul">{renderItems}</ul>
                            <LoadingIndicator/>
                        </div>
                                <div >
                                        <Button onClick={() => window.location.reload(false)} variant="dark" size="sm">Refresh</Button>
                                <br/><br/>
                                    <div className="not-sure">
                                        <h4 >Not sure what to choose?</h4>
                                        <h6>Try these buttons below</h6>
                                    </div>
                                    <Button onClick={this.togglePopup.bind(this)} variant="dark" size="sm" className=" ">Best of Decades</Button>
                                    {this.state.showPopup ? 
                                        <Popup
                                            closePopup={this.togglePopup.bind(this)}
                                        />
                                        : null
                                    }
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <Button onClick={this.togglePopup2.bind(this)} variant="dark" size="sm" className=" ">Best of Genres</Button>
                                    {this.state.showPopup2 ? 
                                        <Popup2  
                                            closePopup={this.togglePopup2.bind(this)}
                                        />
                                        : null
                                    }
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        );
    }
    
}

export default Form 