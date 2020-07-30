import React from 'react';
import FontAwesome from 'react-fontawesome';


class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
          <strong><FontAwesome onClick={this.props.closePopup}>&times;</FontAwesome></strong>
          <div className="decades">
            <p><strong>Top Anime of these Decades</strong></p>
          </div>
          <div className="row content overlay">
          
          <div className="col-12 col-sm-4">
            <br/>
            <p><strong>1990-1999</strong></p>
            <ul className="my-ul-popup">
              <li><a href="https://cowboybebop.fandom.com/wiki/Cowboy_Bebop" rel="noopener noreferrer" target="_blank">Cowboy Bebop</a></li>
              <li>Mononoke Hime</li>
              <li>One Piece</li>
              <li>Great Teacher Onizuka</li>
              <li>Tonari no Totoro</li>
            </ul>
          </div>
          <div className="col-12 col-sm-4">
            <br/>
            <p><strong>2000-2009</strong></p>
            <ul className="my-ul-popup">
              <li>Fullmetal Alchemist Brotherhood</li>
              <li>Death Note</li>
              <li>Code Geass Hangyaku no Lelouch</li>
              <li>Clannad After Story</li>
              <li>Spirited Away</li>
            </ul>
          </div>
          <div className="col-12 col-sm-4">
            <br/>
            <p><strong>2010-2019</strong></p>
            <ul className="my-ul-popup">
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