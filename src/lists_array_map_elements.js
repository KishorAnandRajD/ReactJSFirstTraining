import React from 'react';

const numbers=[1,2,3,4,5];
//The map() method creates a new array with the results of calling a function for every array element.

//The map() method calls the provided function once for each element in an array, in order.

const listItemsArrayMapElements=numbers.map((number)=> <li>{number}</li>);

export default listItemsArrayMapElements;
