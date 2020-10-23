import React, { Component } from 'react';
import $ from "jquery";
import '../App.css';

export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        $(document).ready(function() {
            // Check for click events on the navbar burger icon
            $(".navbar-burger").click(function() {
                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                $(".navbar-burger").toggleClass("is-active");
                $(".navbar-menu").toggleClass("is-active");
            });
          });
    }
    render() {
        return (
            <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
    </a>
    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"  data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>
      <a class="navbar-item has-text-link">
        About Us
      </a>
      <a class="navbar-item has-text-link">
       Portfolio
      </a>
      <a class="navbar-item has-text-link">
       Blog
      </a>
      <a class="navbar-item has-text-link">
       Contact Us
      </a>
      <div class="navbar-item has-dropdown is-hoverable has-text-link pl-6 ml-6 is-hidden-mobile">
        <a class="navbar-link">
          EN
        </a>   
        <button className="button is-large contact-us is-hidden-mobile">
          Contact Us &nbsp;
          <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </button>     
      </div>
    </div>
  </div>
  </nav>
        )
    }
}
