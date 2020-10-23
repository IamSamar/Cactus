import React, { Component } from 'react';
import CodeEditorIcon from '../images/code-96.png';
import BriefCase from '../images/brief-96.png';

export default class GetInTouch extends Component {
    render() {
        return (
            <div className="columns">
            <div className="column ml-5 mt-6 pt-6 is-5">
              <span className="is-size-1 has-text-link">Anything you</span> <br/>
              <span className="is-size-1 has-text-link">need,we've</span><br/>
              <span className="is-size-1 has-text-link">got you covered</span><br/>
              <button class="button is-danger is-rounded is-small mt-6">Get in Touch</button>
            </div>
          
            <div className="column is-one-fifth ml-5 mt-6 pt-6 is-2">
              <div className="shadow pl-4 width">
              <img src={BriefCase}></img>
              <div className="pt-5">
              <p>Web 	&#38; Graphic</p>
              <p>Design</p>
              </div>
              </div>
            </div>
            <div className="column is-one-fifth ml-5 mt-6 pt-6 is-2">
              <div className="shadow pl-4 width">
            <img src={CodeEditorIcon}></img>
            <div className="pt-5">
              <p>Web 	&#38; App</p>
              <p>Development</p>
              </div>
              </div>
            </div>
            </div>
        )
    }
}
