// write code for Welcome component here
import React from 'react'
function Welcome(props){
  //const name="geet";
  return(
    <div>
<h1>Hey! {props.name}</h1>
{props.children}
</div>
);
};

export default Welcome;
