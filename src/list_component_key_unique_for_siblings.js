import React from 'react';
/*
Keys Must Only Be Unique Among Siblings
Keys used within arrays should be unique among their siblings. However they don't need to be globally unique. We can use the same keys when we produce two different arrays:
*/
function ListItemUniqueKeySiblingsBlog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );

  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}
//A good rule of thumb is that elements inside the map() call need keys

// Please refer:
 //https://facebook.github.io/react/docs/lists-and-keys.html



export default ListItemUniqueKeySiblingsBlog;
