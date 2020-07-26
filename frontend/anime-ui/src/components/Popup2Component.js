import React from 'react';
import FontAwesome from 'react-fontawesome';

class Popup2 extends React.Component {
    render() {

      return (
        <div className='popup'>
          <div className='popup_inner'>
          <strong><FontAwesome onClick={this.props.closePopup}>&times;</FontAwesome></strong>
          <div className="decades">
            <p >Try these according to decades</p>
          </div>
          <div className="row content overlay">
          
          <div className="col-12 col-sm-4">
            <p>Action</p>
            <ul className="">
              <li>Mononoke Hime</li>
              <li>One Piece</li>
              <li>Great Teacher Onizuka</li>
              <li>Rurouni Kenshin</li>
            </ul>
          </div>
          <div className="col-12 col-sm-4">
            <p>Adventure</p>
            <ul className="">
              <li>Fullmetal Alchemist Brotherhood</li>
              <li>Death Note</li>
              <li>Code Geass</li>
              <li>Clannad After Story</li>
              <li>Spirited Away</li>
            </ul>
          </div>
          <div className="col-12 col-sm-4">
            <p>Fantasy</p>
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

export default Popup2