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
                <p>If you're interested in the dataset used for the model, you can check <a href="https://www.kaggle.com/CooperUnion/anime-recommendations-database?select=rating.csv" rel="noopener noreferrer" target="_blank"><strong>here</strong></a>.  
                The project is also open-sourced,<br/> click <a href="https://github.com/Pydare/Anime-Recommender-System" rel="noopener noreferrer" target="_blank"><strong>here</strong></a> to see the github repository.
                </p>
                
                </p>
                <br/><br/><br/>
                <h4>Contributors</h4>
                    <div className="btn-group" role="group">
                        <a href="https://github.com/Pydare" rel="noopener noreferrer" target="_blank"><i className="fa fa-github icon-ok"></i></a>
                        <a href="https://www.linkedin.com/in/joseph-adewumi-66ab3914b/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin icon-ok"></i></a>
                        <a  href="mailto:mail@mail.net"><i className="fa fa-envelope-o icon-ok"></i></a>
                    </div><br/><br/>
                    <div className="btn-group" role="group">
                        <a  href="https://github.com/" rel="noopener noreferrer" target="_blank"><i className="fa fa-github icon-ok"></i></a>
                        <a  href="https://www.linkedin.com/in/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin icon-ok"></i></a>
                        <a  href="mailto:mail@mail.net"><i className="fa fa-envelope-o"></i></a>
                    </div><br/><br/>
                    <div className="btn-group" role="group">
                        <a  href="https://github.com/" rel="noopener noreferrer" target="_blank"><i className="fa fa-github icon-ok icon-ok"></i></a>
                        <a  href="https://www.linkedin.com/in/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin icon-ok"></i></a>
                        <a  href="mailto:mail@mail.net"><i className="fa fa-envelope-o"></i></a>
                    </div><br/><br/>
                    <div className="btn-group" role="group">
                        <a  href="https://github.com/" rel="noopener noreferrer" target="_blank"><i className="fa fa-github icon-ok"></i></a>
                        <a  href="https://www.linkedin.com/in/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin icon-ok"></i></a>
                        <a  href="mailto:mail@mail.net"><i className="fa fa-envelope-o"></i></a>
                    </div><br/><br/><br/><br/><br/>
                    <div>AnimeHouse &copy; 2020</div><br/><br/>
            </div>
            </div>
        )
    }
}

export default About