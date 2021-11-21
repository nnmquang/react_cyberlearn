import React, { Component } from 'react'
import Child from './Child'
import style from './Styling.module.css'
import './Styling.css'


export default class Styling extends Component {
    render() {
        //Lưu ý : viết dưới dạng thuộc tính document.getElementById(''id).style.backgroundColor
        const styleText = {
            color : 'pink',
            padding : '15px',
            backgroundColor : 'black'
        }
        return (
            <div>
                <Child />
                <p className="txt">hello Quang</p>
                <span className={style.txtStyle}>Hello Quang Kute</span>

                <p style={styleText}>Nguyen Ngoc Minh Quang</p>
            </div>
        )
    }
}

