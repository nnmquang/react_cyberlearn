import React, { Component } from 'react'

export default class HandelEvent extends Component {

    //Định nghĩ hàm xử lý sự kiện khi người dùng click vào button clickme
    handleClick = (name) => {
        alert("Hello: " + name)
    }

    render() {
        return (
            <div>
              {/* <button onClick={this.handleClick}>Click me!</button> viet theo ES5*/}  
              <button onClick={() => {
                  alert("Hello Quang")
              }}>Click me!</button>

               <button onClick={() => {
                  this.handleClick("Quang")
              }}>Click me!</button>

            </div>
        )
    }
}
