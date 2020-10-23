import React, { Component } from 'react';
import GreyImage from '../images/grey_image.png';

export default class OurWork extends Component {
    render() {
        return (
            <>
            <div className="columns ml-5 mt-6 pt-6">
      <div className="column">
       <p className="has-text-link is-size-3 has-text-weight-bold">See some of our</p>
       <p className="has-text-link is-size-3 has-text-weight-bold">Creative work</p>
      </div>
    </div>

    <div className="columns ml-5">
      <div className="column">
        <figure>
          <img src={GreyImage} alt="greyImage"/>
        </figure>
      </div>
      <div className="column">
        <figure>
          <img src={GreyImage} alt="greyImage"/>
        </figure>
      </div>
      <div className="column">
        <figure>
          <img src={GreyImage} alt="greyImage"/>
        </figure>
      </div>
    </div>

    <div className="columns ml-5">
      <div className="column">
        <figure>
          <img src={GreyImage} alt="greyImage"/>
        </figure>
      </div>
      <div className="column">
        <figure>
          <img src={GreyImage} alt="greyImage"/>
        </figure>
      </div>
      <div className="column">
        <figure>
          <img src={GreyImage} alt="greyImage"/>
        </figure>
      </div>
    </div>
    </>
        )
    }
}
