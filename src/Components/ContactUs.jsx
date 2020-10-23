import React, { Component } from 'react'

export default class ContactUs extends Component {
    render() {
        return (
            <>
            <div className="columns ml-5">
            <div className="column">
              <p className="has-text-danger is-size-7">CONTACT US</p>
            </div>
          </div>
      
          <div className="columns ml-5">
            <div className="column">
              <p className="has-text-link is-size-3 has-text-weight-bold">Get in Touch</p>
            </div>
          </div>
      
          <div className="columns ml-5">
            <div className="column is-4">
              <input className="input" type="email" placeholder="youremail.com"/>
            </div>
            <div className="column is-4">
              <input className="input" type="text" placeholder="Subject"/>
            </div>
          </div>
      
          <div className="columns ml-5">
            <div className="column is-8">
            <textarea class="textarea" placeholder="10 lines of textarea" rows="2" placeholder="Message here">
      
            </textarea>
            </div>
          </div>
      
          <div className="columns is-centered ml-5 is-mobile">
            <div className="column is-half">
              <button class="button is-danger is-rounded is-small ml-6 mb-6">Send Message</button>
            </div>
          
          </div>
          </>
        )
    }
}
