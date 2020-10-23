import React, { Component } from 'react'

export default class OurNews extends Component {
    render() {
        return (
           <>
           <div className="columns ml-5">
      <div className="column">
        <span className="has-text-danger is-size-7">BLOG STORIES</span>
      </div>
    </div>

    <div className="columns ml-5">
      <div className="column">
        <span className="has-text-link is-size-3 has-text-weight-bold">Check Our News</span>
      </div>
    </div>

    <div className="columns ml-5">
      <div className="column is-2">
      <div className="shadow pl-4 new-adventure red-background">
        <p className="pt-6 is-size-7">New adventure</p>
        <p className="is-size-7"> 17 March 2019</p>
      </div>
      </div>

      <div className="column is-2">
      <div className="shadow pl-4 new-adventure has-text-black">
        <p className="pt-6 is-size-7">New adventure</p>
        <p className="is-size-7"> 17 March 2019</p>
      </div>
      </div>

      <div className="column is-2">
      <div className="shadow pl-4 new-adventure has-text-black">
        <p className="pt-6 is-size-7">New adventure</p>
        <p className="is-size-7"> 17 March 2019</p>
      </div>
      </div>

      <div className="column is-2">
      <div className="shadow pl-4 new-adventure has-text-black">
        <p className="pt-6 is-size-7">New adventure</p>
        <p className="is-size-7"> 17 March 2019</p>
      </div>
      </div>
    </div>
           </>
        )
    }
}
