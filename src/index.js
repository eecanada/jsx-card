import React from 'react';
import ReactDOM from 'react-dom';

const buttonWords = {
  text:'click me!!'
}

const App = () => {
  const buttonText = 'click me!';
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{ color: 'white', backgroundColor: 'blue' }}>
        {buttonWords.text}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
