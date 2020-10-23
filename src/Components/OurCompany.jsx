import React, { Component } from 'react';
import LaptopImage from '../images/laptop.png';

export default class OurCompany extends Component {
    render() {
        return (
            <div className="columns ml-5 mt-6 pt-6">
            <div className="column">
            <figure>
              <img src={LaptopImage} alt="laptop image"/>
            </figure>
            </div>
      
            <div className="column">
              <p className="has-text-danger is-size-7">OUR COMPANY</p>
            <span className="has-text-link is-size-3 has-text-weight-bold">Some Fine</span>
            <p className="has-text-link is-size-3 has-text-weight-bold">Word About Us</p>
            </div>
          </div>
        )
    }
}
