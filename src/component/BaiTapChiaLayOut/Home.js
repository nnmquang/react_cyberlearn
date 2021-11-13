import React, { Component } from 'react'
import Content from './Content'
import Footer from './Footer'
import HeaderDemo from './HeaderDemo'
import Navigation from './Navigation'

export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                   <div className="col-12">
                       <HeaderDemo/>
                   </div>
                </div>
                <div className="row">
                   <div className="col-4">
                       <Navigation/>
                   </div>
                   <div className="col-8">
                       <Content/>
                   </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                      <Footer/>
                </div>
                </div>
            </div>
        )
    }
}
