import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Card from 'react-bootstrap/Card';

import Show from './component/Show';

import Netflix from './netflix';


// import {netflix,date,time} from './list';

import DateAndTime from './component/DateAndTime';





// const map = netflix.map(names => names);

function ncards(netflix){
  return(
    
      <Show className = "" year = {netflix.year} title={netflix.title} imgSrc = {netflix.image}/>
    
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
    <h1>Hello world</h1>

    {/* <div  className="container"  style={{textAlign:'centre' , alignItem:'centre'}}>
    <DateAndTime   className="date" date = {date} time = {time}/>
    </div> */}
    
    <h2>Top Netflix shows</h2>
    <div className = "" style={{display:'flex' , flexWap:'wrap'}}>
    {Netflix.map(ncards)}

    {/* <Card style = {{width:'18rem'}}>
      <Show className = "card" keys = {map[1].key} names={map[1].value}/>
    </Card>

    <Card style = {{width:'18rem'}}>
      <Show className = "card" keys = {map[2].key} names={map[2].value}/>
    </Card>

    <Card style = {{width:'18rem'}}>
      <Show className = "card" keys = {map[3].key} names={map[3].value}/>
    </Card>

    <Card style = {{width:'18rem'}}>
      <Show className = "card" keys = {map[4].key} names={map[4].value}/>
    </Card> */}
    
    
  </div>
  </>
  
  
);


