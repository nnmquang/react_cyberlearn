import React from 'react'

const school = "Cycberlearn";
const student1 = {            //Những biến ko liên quan đến binding thì sẽ đặt ngoài function
    name: 'Trung Nguyen',
    age: '25'
}

export default function DataBindingRFC() {

    const name = 'Quang Cycberlean';
    const renderInforVirus = () => {
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


    return (
        <div>
            <h1>React functional component data binding</h1>
            <hr />
            <h1 className="text-danger">{name}</h1>

            <h1>name: {student1.name} age:{student1.age} school: {school}</h1>

            <h3>Info Virus</h3>
            {renderInforVirus()}
        </div>
    )
}
