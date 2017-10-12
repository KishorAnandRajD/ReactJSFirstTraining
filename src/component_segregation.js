import React from 'react';

function formatDate(date) {
  return date.toLocaleDateString();
}

/*
Extracting Components
Don't be afraid to split components into smaller components.

For example, consider this ComponentSegregation component:
*/
//=====================NO SEGREGATION [START]=========================
/*function ComponentSegregation(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
             src={props.author.avatarUrl}
             alt={props.author.name} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}*/
//==================NO SEGREGATION [END]==========================

/* It accepts author (an object), text (a string), and date (a date) as props, and describes a comment on a social media website.

This component can be tricky to change because of all the nesting, and it is also hard to reuse individual parts of it. Let's extract a few components from it.

First, we will extract Avatar: */
//=====================ONE SEGREGATION [START]=========================
/*function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}*/

/*
The Avatar doesn't need to know that it is being rendered inside a Comment. This is why we have given its prop a more generic name: user rather than author. (<Avatar user={props.author})

We recommend naming props from the component's own point of view rather than the context in which it is being used.

We can now simplify Comment a tiny bit:
*/
/*
function ComponentSegregation(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
} */
//=====================ONE SEGREGATION [END]=========================

//=====================TWO SEGREGATION [START]=========================
/*
Next, we will extract a UserInfo component that renders an Avatar next to user's name:
*/
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

//This lets us simplify Comment even further:

function ComponentSegregation(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}


//=====================TWO SEGREGATION [END]=========================
export default ComponentSegregation;
