import React from 'react'
// import girl from './girl.png'
// import boy from './boy.png'
import '../../Component/Hostel/Hostel.css'

export default function ChooseGender() {
    return (
        <div className="card-header" >
            <h1>Choose your Hostel</h1>
            <div className="card-container">
                <div className="card-girl">
                    <img  alt="girl" width="90rem" height="90rem" style={{marginTop:20}}></img>
                    <h3>Girls Hostel</h3>
                
                </div>
                <div className="card-boy">
                    <img  alt="boy" width="90rem" height="90rem" style={{marginTop:20}}></img>
                    <h3>Boys Hostel</h3>
                </div>
            </div>
        </div>
    )
}