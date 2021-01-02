import React from 'react';
import FontAwesome from 'react-fontawesome';


class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
          <strong><FontAwesome name="" onClick={this.props.closePopup}>&times;</FontAwesome></strong>
          <div className="decades">
            <p><strong>Top Anime of these Decades (Click on Anime for details)</strong></p>
          </div>
          <div className="row content overlay">
          
          <div className="col-12 col-sm-4">
            <br/>
            <p><strong>1990-1999</strong></p>
            <ul className="my-ul-popup">
              <a href="https://myanimelist.net/anime/1/Cowboy_Bebop" className="decade_link" rel="noopener noreferrer" target="_blank" ><li>Cowboy Bebop</li></a>
              <a href="https://myanimelist.net/anime/164/Mononoke_Hime" className="decade_link" rel="noopener noreferrer" target="_blank" ><li>Mononoke Hime</li></a>
              <a href="https://myanimelist.net/anime/21/One_Piece" className="decade_link" rel="noopener noreferrer" target="_blank" ><li>One Piece</li></a>
               <a href="https://myanimelist.net/anime/245/Great_Teacher_Onizuka" className="decade_link" rel="noopener noreferrer" target="_blank" ><li>Great Teacher Onizuka</li></a>
              <a href="https://myanimelist.net/anime/523/Tonari_no_Totoro" className="decade_link" rel="noopener noreferrer" target="_blank" ><li>Tonari no Totoro</li></a>
            </ul>
          </div>
          <div className="col-12 col-sm-4">
            <br/>
            <p><strong>2000-2009</strong></p>
            <ul className="my-ul-popup">
              <a href="https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood" className="decade_link" rel="noopener noreferrer" target="_blank" ><li>Fullmetal Alchemist Brotherhood</li></a>             
              <a href="https://myanimelist.net/anime/1535/Death_Note" className="decade_link" rel="noopener noreferrer" target="_blank" ><li>Death Note</li></a>
              <a href="https://myanimelist.net/anime/1575/Code_Geass__Hangyaku_no_Lelouch" className="decade_link" rel="noopener noreferrer" target="_blank" ><li>Code Geass Hangyaku no Lelouch</li></a>
             <a href="https://myanimelist.net/anime/2167/Clannad" className="decade_link" rel="noopener noreferrer" target="_blank" > <li>Clannad After Story</li></a>
              <a href="https://www.imdb.com/title/tt0245429/" className="decade_link" rel="noopener noreferrer" target="_blank" ><li>Spirited Away</li></a>
            </ul>
          </div>
          <div className="col-12 col-sm-4">
            <br/>
            <p><strong>2010-2019</strong></p>
            <ul className="my-ul-popup">
              <a href="https://myanimelist.net/anime/9253/Steins_Gate" className="decade_link" rel="noopener noreferrer" target="_blank" ><li>Steins;Gate</li></a>
              <a href="https://myanimelist.net/anime/32281/Kimi_no_Na_wa" className="decade_link" rel="noopener noreferrer" target="_blank" ><li>Kimi no Na wa</li></a>
              <a href="https://myanimelist.net/anime/136/Hunter_x_Hunter" className="decade_link" rel="noopener noreferrer" target="_blank" ><li>Hunter x Hunter</li></a>
              <a href="https://myanimelist.net/anime/30276/One_Punch_Man" className="decade_link" rel="noopener noreferrer" target="_blank" ><li>One Punch Man</li></a>
              <a href="https://myanimelist.net/anime/16498/Shingeki_no_Kyojin" className="decade_link" rel="noopener noreferrer" target="_blank" ><li>Shingeki no Kyojin</li></a>
            </ul>
          </div>
          </div>
        </div>
        </div>
      );
    }
}

export default Popup