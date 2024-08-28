import React from 'react';
import Divsection from '../divsection/Divsection'
import './Itemsdiv.css';

function Itemsdiv() {
  return (
    <div className="container">
      <div className="row">
        <Divsection
          imgurl="https://static.wixstatic.com/media/97e269_9f676d068f92479c96e29b02a2dd55d3~mv2.jpg/v1/fill/w_2500,h_1666,al_c/97e269_9f676d068f92479c96e29b02a2dd55d3~mv2.jpg"
          date="Aug 29, 2024"
          heading="Night Laser Show"
          tags="#, #"
          written="Hehe im keep getting Error."
        />
        <Divsection
          imgurl="https://img.freepik.com/premium-photo/singer-performing-live-concert_954932-2232.jpg"
          date="Aug 28, 2024"
          heading="Live Music"
          tags="#, #"
          written="I dont know what to write."
        />
        <Divsection
          imgurl="https://static.vecteezy.com/system/resources/previews/029/322/277/non_2x/ai-generative-dj-playing-and-mixing-music-in-nightclub-party-at-night-edm-dance-music-club-with-crowd-of-young-people-free-photo.jpg"
          date="Aug 27, 2024"
          heading="DJ Master"
          tags="#, #"
          written="Blah Blah Blah."
        />
        <Divsection
          imgurl="https://t3.ftcdn.net/jpg/02/88/91/82/360_F_288918240_MrTgGzNNPsc1VV5cX2XlBnozQDGfzTuC.jpg"
          date="Aug 26, 2024"
          heading="Best Night PArty"
          tags="#, #"
          written="Night best part unknown random words."
        />
      </div>
    </div>
  );
}

export default Itemsdiv;
