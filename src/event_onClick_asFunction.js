import React from 'react';

function EventOnClickAsFunction(){
  function handleClick(e){
    //e.preventDefault();// To prevent execution of code on FIRST load of page
    //Here, e is a synthetic event. React defines these synthetic events according to the W3C spec, so you don't need to worry about cross-browser compatibility
    console.log('The link was clicked.');
  }

  return(
    <a href="#" onClick={handleClick}> Click Me </a>
  );
}

export default EventOnClickAsFunction;
