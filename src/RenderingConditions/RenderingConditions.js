import React, { Component } from 'react'

export default class RenderingConditions extends Component {

    login = true;
    username = "QuangNguyen"

    renderContent = () => {
        if(this.login) {
            return <p>Hello {this.username}</p>
        }
        return <button>Đăng Nhập</button>
    }

    render() {
        return (
            <div>
               {/* {this.login === true ? <p>Hello {this.username}</p> : <button>Đăng Nhập</button>} */}
               {this.renderContent()}
            </div>
        )
    }
}

