import React, { Component } from 'react'
import Banner1 from './Banner1'
import Item1 from './Item1'

export default class Body1 extends Component {
    render() {
        return (
            <div classname="container">
                <Banner1/>
                <div className="row">
                    <div className="col-3">
                         <Item1/>
                    </div>
                    <div className="col-3">
                         <Item1/>
                    </div>
                    <div className="col-3">
                         <Item1/>
                    </div>
                    <div className="col-3">
                         <Item1/>
                    </div>
                </div>
            </div>
            
        )
    }
}
