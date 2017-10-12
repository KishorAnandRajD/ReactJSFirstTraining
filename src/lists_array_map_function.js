import React from 'react';

function ListItemsArrayMapFunction(props){
  const numbers=props.numbers;
  //The map() method creates a new array with the results of calling a function for every array element.

  //The map() method calls the provided function once for each element in an array, in order.

  const listItemsArrayMapElements=numbers.map((number)=> <li>{number}</li>);

  return(
    <ul>{listItemsArrayMapElements}</ul>
  );
}

//Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `ListItemsArrayMapFunction`. See https://fb.me/react-warning-keys for more information.

export default ListItemsArrayMapFunction;
