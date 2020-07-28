import React from 'react';

class About extends React.Component{

    render(){
        return(
            <div className="container starting-txt">
                <div className="col-12">
                    
                    <br/><br/><br/>
                <h3>Hello About Page</h3>
                <p>AnimeHouse is a recommender-system responsive web application, based on the use of content-based 
                    <br/> machine-learning algorithms, natural language processing and several other data-preprocessing
                    tools. The<br/> web interface is built with ReactJS, which enables the client side communicate with the
                    server side, running<br/> with flask.
                </p>
                <p>Simply enter an anime you've seen and loved, to get recommendations, based on calculated similarities.<br/>
                If you're not sure of what to enter, you can simply try out the buttons at the bottom of the page to get the <br/>
                
                </p>
                <h4>Contributors</h4>
                <p>Dare</p>
                <p>Jade</p>
                <p>May</p>
                <p>Priya</p>
                </div>
            </div>
        )
    }
}

export default About