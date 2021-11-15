import React, { Component } from 'react'
import Body1 from './Body1'
import Footer1 from './Footer1'
import Header1 from './Header1'

export default class Home1 extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Header1/>
                    </div>
                </div>
                <Body1/>
                <div className="row">
                <div className="col-md-12">
                      <Footer1/>
                </div>
                </div>
            </div>
        )
    }
}
