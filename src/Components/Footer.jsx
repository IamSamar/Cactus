import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer  footer-color">
    <div className="container">
    <div className="columns">
      <div className="column is-full has-text-centered">
      <span className="has-text-white is-size-7 has-text-weight-bold">Logo</span>
      </div>
    </div>

    <div className="columns">
      <div className="column is-full has-text-centered">
      <span className="has-text-white is-size-5 has-text-danger has-text-weight-bold">CREATIVITY ABOVE</span>
      </div>
    </div>

    <div className="columns has-text-white is-centered">
      <div className="column is-1">
        Home
      </div>
      <div className="column is-1">
        About Us
      </div>
      <div className="column is-1">
        Portfolio
      </div>
      <div className="column is-1">
        Blog
      </div>
      <div className="column is-2">
        Contact us
      </div>
    </div>

    <div className="columns is-centered">
      <div className="column is-two-fifths">
        <span className="has-text-white">
        &#169;2020-Cactus Communications,All Right Reserved
        </span>
      </div>
    </div>

    <div className="columns is-centered">
      <div className="column is-1">
      <i class="fab fa-facebook-square fa-3x"></i>
      </div>
      <div className="column is-1">
      <i class="fab fa-twitter fa-3x"></i>
      </div>
      <div className="column is-1">
      <i class="fab fa-dribbble fa-3x"></i>
      </div>
    </div>
    </div>
    </footer>
        )
    }
}
