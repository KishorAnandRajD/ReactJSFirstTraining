import React from 'react';
/*
Keys only make sense in the context of the surrounding array.

For example, if you extract a ListItem component, you should keep the key on the <ListItem /> elements in the array rather than on the root <li> element in the ListItem itself.

Example: Incorrect Key Usage
*/
function ListItem(props) {
  const value = props.value;
  return (
    // Wrong! There is no need to specify the key here:
    <li key={value.toString()}>
      {value}
    </li>
  );
}

function ListItemComponentMapKeyFunctionWrong(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Wrong! The key should have been specified here:
    <ListItem value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

//Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `ListItemComponentMapKeyFunctionWrong

// Please refer:
 //https://facebook.github.io/react/docs/lists-and-keys.html



export default ListItemComponentMapKeyFunctionWrong;
