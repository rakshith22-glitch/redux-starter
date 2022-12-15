import React from "react";


const Child = ({setCount}) => {

    const passUp = () => {
        let data = {
            "name" : "RAK",
            "place" : "Santa monica",
        }
    }


    return(
        <div>
           <button onClick={() => setCount(1)}>CLICK</button>
        </div>
    )
}


export default Child