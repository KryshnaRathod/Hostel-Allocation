import React  from 'react'

export default function ChooseHostel(props) {
    let gender = props.gender;
    return (
        <div className="container-hostel">
            <div>
               <h2>Choose a Hostel</h2> 
            </div>
            <div className="hostel-grid">
            <button className="hostel-button">{gender}1</button>
            <button className="hostel-button">{gender}2</button>
            <button className="hostel-button">{gender}3</button>
            <button className="hostel-button">{gender}4</button>
            <button className="hostel-button">{gender}5</button>
            <button className="hostel-button">{gender}6</button>
            </div>
        </div>
    )
}