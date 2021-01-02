import React from 'react';
import {Button} from 'reactstrap'
import LoadingIndicator from './LoadingComponent';
import { trackPromise } from 'react-promise-tracker';
import Popup from './PopupComponent'
import Popup2 from './Popup2Component'
import BasicAutoSuggest from './AutosuggestComponent'

class Form extends React.Component{

    constructor(props) {
        super(props);
        this.state = { 
            anime_name: '',
            result : {},
            heading: '',
            showPopup: false,
            showPopup2:false,
            suggestions: []
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

    handleChange(data) {
        this.setState({anime_name: data});
    };

    handleSubmit = async (event) => {
        event.preventDefault()

        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify({anime: this.state.anime_name})
        }
        console.log(this.state.anime_name)
        const response = await trackPromise(fetch('https://anime-house.herokuapp.com/recommender',requestOptions))
        
        const body = await response.json()
        console.log(body)
        this.setState({result:body, heading:"Recommended for you (Use the links for details)"})
        this.setState({ anime_name: '' })
    };

    render(){
        // const renderItems = Object.keys(this.state.result).map((key, i) =>{
        //     return <div key={i} className=""><li key={i} className="my-li"><h6><strong>{this.state.result[key][0]}</strong> <a href={this.state.result[key][1]} className="homepage_link" rel="noopener noreferrer" target="_blank" ><i className="fa fa-external-link"></i></a></h6></li></div>
                    
        // });

        const renderBody = Object.keys(this.state.result).map((key,i) => {
            return <tr key={i} className="" >
                <td><h6>{this.state.result[key][0]}</h6></td>
                <td><h6>{this.state.result[key][2]}</h6></td>
                <td><h6><a href={this.state.result[key][1]} className="homepage_link" rel="noopener noreferrer" target="_blank" ><i className="fa fa-external-link"></i></a></h6></td>
                </tr>
        })

        return(
            <div className="container ">
                <div className="col-12">
                    <br/><br/><br/><br/><br/><br/><br/>
                    
                    <div className="row">
                    
                    <h3>Enter An Anime You Love</h3>
                    
                    <h6><br/> AnimeHouse uses a special Machine Learning Algorithm to make recommendations for you, based on your Anime Input </h6>
                    {/* <h6>&#123; We use AI to make recommendations for you &#125; </h6> */}
                    <br/><br/>
                    <br/><br/>
                    <br></br>
                        <div className="">
                            <form onSubmit={this.handleSubmit}  method="POST">
                                {/* <input name="anime" type="text" placeholder="Anime Title"
                                onChange={this.handleChange}
                                value={this.state.anime_name}
                                required /> */}
                            <BasicAutoSuggest onChange={this.handleChange}/>
                             
                            <Button variant="dark" size="sm" className=" ">Search</Button>
                            <div>
                            <br/>
                            {this.state.heading === "Recommended for you (Use the links for details)" ?
                            <div className="card">
                                <div className="card-header bg-danger text-white"><h5><strong>{this.state.heading}</strong></h5></div>
                                <div className="card-body">
                                    {Object.keys(this.state.result)[0]=== "error" ? 
                                    <img alt="" className="card-pic" 
                                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/160111_libra_twins.png"/>
                                    :<img alt="" className="card-pic" 
                                    src="https://cdn.pixabay.com/photo/2015/01/11/07/07/moe-595960_960_720.png"/>
                                    }
                                
                                    <br/>
                                    <div className="card-text">
                                        {/* <ul className="my-ul">{renderItems}</ul> */}
                                        <table id="result-table">
                                            <thead>
                                            <td><h6><strong>Title</strong></h6></td>
                                            <td><h6><strong>Similarity%</strong></h6></td>
                                            <td><h6><strong>Links </strong></h6></td>
                                            </thead>
                                            <tbody>{renderBody}</tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            : null}
                            <LoadingIndicator/>
                        </div>
                                <div ><br/>
                                        <Button onClick={() => window.location.reload(false)} variant="dark" size="sm">Refresh</Button>
                                <br/><br/>
                                    <div className="not-sure">
                                        <h4 >Not sure what to choose?</h4>
                                        <h6>Try these options below</h6>
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
                                </div><br/><br/><br/><br/><br/>
                                <div>AnimeHouse &copy; 2020</div><br/><br/>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        );
    }
    
}

export default Form 