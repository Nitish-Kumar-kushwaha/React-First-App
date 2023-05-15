import React from "react";




function DateAndTime(props){

    const date = props.date;
    const time = props.time;

    return<>
    <div >
    <h3 style={{padding:'50px'}}> {`Date: ${date}`}</h3> 
    <h3 style={{padding:'50px'}}> {`Date: ${time}`}</h3>
    </div>

    

    </>

}

export default DateAndTime;