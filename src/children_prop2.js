import React from 'react';
// IMPORTANT: This code doesn't show any output as they are referencing the CSS for color
/*
https://facebook.github.io/react/docs/composition-vs-inheritance.html
Sometimes you might need multiple "holes" in a component. In such cases you may come up with your own convention instead of using children:


*/
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function Contacts() {
  return <div className="Contacts" />;
}

function Chat() {
  return <div className="Chat" />;
}

/* React elements like <Contacts /> and <Chat /> are just objects, so you can pass them as props like any other data.
*/

function ChildrenPropSplitPane() {
  return (
    <SplitPane left={<Contacts />}  right={<Chat />} />
  );
}

export default ChildrenPropSplitPane;
