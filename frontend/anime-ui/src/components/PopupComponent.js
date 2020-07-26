import React from 'react';
import {Button} from 'reactstrap'
import FontAwesome from 'react-fontawesome';


class Popup extends React.Component {
    render() {
      const nintys = {0:"1990-1999",1:"Cowboy Bebop",3:"Mononoke Hime",4:"One Piece",5:"Great Teacher Onizuka",6:"Rurouni Kenshin"}
      const thou = {0:"2000-2009",1:"Fullmetal Alchemist Brotherhood",2:"Death Note",3:"Code Geass",4:"Clannad After Story",5:"Spirited Away",6:"Gintama"}

      const items = Object.keys(nintys).map((key, i) =>{
        return <div>
               <div className="">
               <li className="" key={i}>{nintys[key]}</li>
               </div>
               <div className="">
               <li className="" key={i}>{thou[key]}</li>
               </div>
               </div>
      
                
      });
      return (
        <div className='popup'>
          <div className='popup_inner'>
          <strong><FontAwesome onClick={this.props.closePopup}>&times;</FontAwesome></strong>
          <div className="decades">
            <p >Try these according to decades</p>
          </div>
          <div className="row content overlay">
          
          <div className="col-12 col-sm-4">
            <p>1990-1999</p>
            <ul className="">
              <li>Cowboy Bebop</li>
              <li>Mononoke Hime</li>
              <li>One Piece</li>
              <li>Great Teacher Onizuka</li>
              <li>Rurouni Kenshin</li>
            </ul>
          </div>
          <div className="col-12 col-sm-4">
            <p>1990-1999</p>
            <ul className="">
              <li>Fullmetal Alchemist Brotherhood</li>
              <li>Death Note</li>
              <li>Code Geass</li>
              <li>Clannad After Story</li>
              <li>Spirited Away</li>
            </ul>
          </div>
          <div className="col-12 col-sm-4">
            <p>2010-2019</p>
            <ul className="">
              <li>Steins;Gate</li>
              <li>Kimi no Na wa</li>
              <li>Hunter x Hunter</li>
              <li>One Punch Man</li>
              <li>Shingeki no Kyojin</li>
            </ul>
          </div>
          </div>
        </div>
        </div>
      );
    }
}

export default Popup