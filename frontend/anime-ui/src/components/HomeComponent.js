import React from 'react';
import Form from './FormComponent';
//import Navbarclass from './NavbarComponent';

class Home extends React.Component{

    render(){

        return(
            <div className="container starting-txt">
                
                <div className="row">
                    <Form />
                </div>
            </div>
        );
    }
}

export default Home