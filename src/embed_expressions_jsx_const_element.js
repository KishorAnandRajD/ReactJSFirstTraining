import React from 'react';

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}
const user={
  firstName:'Kishor',
  lastName: 'Anand'
};

const elementEmbedExpressions=(
  <h1>Hello, {formatName(user)}!</h1>
);

export default elementEmbedExpressions;
