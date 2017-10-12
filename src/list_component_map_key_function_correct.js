import React from 'react';
/*
Keys only make sense in the context of the surrounding array.

For example, if you extract a ListItem component, you should keep the key on the <ListItem /> elements in the array rather than on the root <li> element in the ListItem itself.

Example:Correct Key Usage
*/
function ListItem(props) {
  const value = props.value;
  return (
    // Correct! There is no need to specify the key here:
    <li >
      {value}
    </li>
  );
}

function ListItemComponentMapKeyFunctionCorrect(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! The key should have been specified inside the array:
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

/* JSX allows embedding any expressions in curly braces so we could inline the map() result:
The above function can also be written as below. One declaration [const listItems] is removed 
function ListItemComponentMapKeyFunctionCorrect(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}
*/

//A good rule of thumb is that elements inside the map() call need keys

// Please refer:
 //https://facebook.github.io/react/docs/lists-and-keys.html



export default ListItemComponentMapKeyFunctionCorrect;
