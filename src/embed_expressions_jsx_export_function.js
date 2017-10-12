import React from 'react';

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}
const user={
  firstName:'Kishor',
  lastName: 'Anand'
};

function getGreeting(user){
  if(user){
    return <h1>Hello, {formatName(user)}!</h1>;
  }else{
    return <h1>Hello, STRANGER!</h1>;
  }
}


export default getGreeting;
