import React, { Component } from 'react';
import MyButton from '../utilities/button/MyButtons';

import './Divsection'

class Divsection extends Component {
  render() {
    const { imgurl, date, heading, tags, written } = this.props;

    return (
      <div className="div-section">
        <img src={imgurl} alt="section" className="img-fluid" />
        <div className="date">{date}</div>
        <p className="heading">{heading}</p>
        <h3 className="tags">{tags}</h3>
        <p className="written">{written}</p>
        <MyButton b_name="Download Now" b_class="primary" b_type="button" />
      </div>
    );
  }
}

export default Divsection;
