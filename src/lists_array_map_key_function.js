import React from 'react';

function ListItemsArrayMapKeyFunction(props){
  const numbers=props.numbers;
  //The map() method creates a new array with the results of calling a function for every array element.

  //The map() method calls the provided function once for each element in an array, in order.

  const listItemsArrayMapElements=numbers.map((number)=>
   <li key={number.toString()}>{number}</li>);

  return(
    <ul>{listItemsArrayMapElements}</ul>
  );
}

//Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `ListItemsArrayMapFunction`. See https://fb.me/react-warning-keys for more information.

 //A "key" is a special string attribute you need to include when creating lists of elements.Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys:When you don't have stable IDs for rendered items, you may use the item index as a key as a last resort: Please refer:
 //https://facebook.github.io/react/docs/lists-and-keys.html



export default ListItemsArrayMapKeyFunction;
