import React, { Component } from 'react';
import Image_1 from '../images/image_1.png';

export default class DigitalAgency extends Component {
    render() {
        return (
            <div className="columns">
            <div className="column ml-5 mt-6 pt-6">
              <span className="is-size-1 has-text-link">The Spirit of</span> <br/>
              <span className="is-size-1 has-text-link">Digital Agency</span><br/>
              <button class="button is-danger is-rounded is-small mt-6">More About us</button>
            </div>
            <div className="column">
              <figure className="image is-square">
                <img src={Image_1} alt="image"/>
              </figure>
            </div>
          </div>
        )
    }
}
