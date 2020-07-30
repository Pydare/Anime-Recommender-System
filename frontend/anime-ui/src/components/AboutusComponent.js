import React from 'react';

class About extends React.Component{

    render(){
        return(
            <div className="container starting-txt">
                <div className="col-12">
                    
                 <br/><br/><br/><br/>
                <h3>About Us</h3>
                <p>AnimeHouse is a recommender-system responsive web application, based on the use of content-based 
                    <br/> machine-learning algorithms, natural language processing and several other data-preprocessing
                    tools. The<br/> web interface is built with ReactJS, which enables the client side communicate with the
                    server, which runs on <br/>flask.
                
                <p>Simply enter an anime you've seen and loved, to get recommendations, based on calculated similarities.<br/>
                If you're not sure of what to enter, you can simply try out the buttons at the bottom of the page to get ideas <br/>
                </p>
                <p>If you're interested in the dataset used for the model, you can check <a href="https://www.kaggle.com/CooperUnion/anime-recommendations-database?select=rating.csv" rel="noopener noreferrer" target="_blank">here</a>.  
                The project is also open-sourced,<br/> click <a href="https://github.com/Pydare/Anime-Recommender-System" rel="noopener noreferrer" target="_blank">here</a> to see the github repository.
                </p>
                
                </p>
                <br/><br/><br/>
                <h4>Contributors</h4>
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-dark" href="https://github.com/Pydare" rel="noopener noreferrer" target="_blank"><i className="fa fa-github"></i> Github</a>
                        <a role="button" className="btn btn-primary" href="https://www.linkedin.com/in/joseph-adewumi-66ab3914b/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i> Linkedin</a>
                        <a role="button" className="btn btn-success" href="mailto:dareyadewumi650@gmail.com"><i className="fa fa-envelope-o"></i> Mail</a>
                    </div><br/><br/>
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-dark" href="https://github.com/" rel="noopener noreferrer" target="_blank"><i className="fa fa-github"></i> Github</a>
                        <a role="button" className="btn btn-primary" href="https://www.linkedin.com/in/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i> Linkedin</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Mail</a>
                    </div><br/><br/>
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-dark" href="https://github.com/" rel="noopener noreferrer" target="_blank"><i className="fa fa-github"></i> Github</a>
                        <a role="button" className="btn btn-primary" href="https://www.linkedin.com/in/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i> Linkedin</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Mail</a>
                    </div><br/><br/>
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-dark" href="https://github.com/" rel="noopener noreferrer" target="_blank"><i className="fa fa-github"></i> Github</a>
                        <a role="button" className="btn btn-primary" href="https://www.linkedin.com/in/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i> Linkedin</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Mail</a>
                    </div>
            </div>
            </div>
        )
    }
}

export default About