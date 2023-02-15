
import React from 'react';
import  ReactDOM  from 'react-dom/client';
import './index.css'

let currDate = new Date();
currDate = currDate.getHours();
let greeting ='';
let cssstyle={};

if(currDate>=5 && currDate<12){
  greeting='good Morning';
  cssstyle.color='green';
}
else if(currDate>=12 && currDate<18){
  greeting='good afternoon';
  cssstyle.color='red';
}
else if(currDate>=18 && currDate<19){
  greeting='good evening';
  cssstyle.color='orange';
}
else{
  greeting='good night';
  cssstyle.color='black';
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

  <div className='box'>
  <h1 className='hello'>Hello sir,<span style={cssstyle}>{greeting}</span></h1>
  </div>

  </>,document.getElementById('root')
);
