import React, { Component } from 'react'
import HeaderDemo from '../component/Demo/Header'
export default class DataBinding extends Component {

     //Tạo một thuộc tính
     name = 'QuangNguyen';
     //Thuộc tính object student
     student = {
         name: 'Quang Nguyen',
         age: '20'
     }

     //Binding Phương thức (Hàm của lớp đối tượng)
     //Tất cả các hàm render đều phải trả về component (jsx)
    renderImage = () => {
        return <img src="https://file1.dangcongsan.vn/data/0/images/2021/09/22/giangkpts/virus.jpg?dpi=150&quality=100&w=780" alt="covid.jpg" />
    }

    renderMultiComponent = () => {
        // return <HeaderDemo/>
        return <nav className="navbar navbar-expand navbar-light bg-dark">
            <div className="nav navbar-nav">
                <a className="nav-item nav-link active" href="zing.vn">Home <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="zing.vn">Home</a>
            </div>
        </nav>

    }
    //Render nội dung là component chứa thông tin object
    renderInforVirus = () => {
        const virus = {
            id: 'Covid-19',
            name: 'corona',
            alias: 'SARs-CoV-2',
            img: 'https://file1.dangcongsan.vn/data/0/images/2021/09/22/giangkpts/virus.jpg?dpi=150&quality=100&w=780'

        }

        return <div className="card text-white bg-primary w-50 h-50">
            <img className="card-img-top" src={virus.img} alt="virus.jpg" />
            <div className="card-body">
                <h4 className="card-title">{virus.name}</h4>
                <p className="card-text">{virus.alias}</p>
            </div>
        </div>

    }

    

    render() {
         //Biến của hàm render => không sử dụng được cho các hàm khác
         const school = "Cycberlearn";
         const student1 = {            //sử dụng biến cục bộ 31, ko có this
            name: 'Trung Nguyen',
            age: '25'
        }

        return (
            <div>
                <h1>React class component data binding</h1>
                <hr />
                <h1>hello {this.name} - School {school}</h1>
                <h1>Binding Object</h1>
                <h1>name {this.student.name} - age {this.student.age}</h1>
                <h1>name {student1.name} - age {student1.age}</h1>  
                <h3>Binding function</h3> 
                {this.renderImage()}
                {this.renderMultiComponent()}
                {this.renderInforVirus()}
            </div>
        )
    }
}
