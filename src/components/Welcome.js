// write code for Welcome component here
import React from 'react'
function Welcome(props){
  //const name="geet";
  return(
    <>
<h1>Hay {props.name}!</h1>
  <h2>welcome {props.h2}</h2>
</>
);
}
export default Welcome;
