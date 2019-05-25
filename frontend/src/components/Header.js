import React from 'react';

const Header = () => {
  return (
    <header className="App-header">
      <div className="wrapper">
        <div className="logo"></div>
        <h1 className="App-title">
          <a href="/">Bookstore Message Board</a>
        </h1>
        <p className="App-subtitle">
          Message Board
        </p>
        <p className="App-description">
        Hey You! We have that book you like.
          <br /><br />
          Today is your Bookstore day. Don't miss the chance to come in and tell us how great we are.
          <br /><br />
          Come in & visit the Books! We promise we're not playing Christmas music yet ;).
          <br /><br />
          If you feel cold, no need to come, just post us a message and we'll be happy to help :).
        </p>
      </div>
    </header>
  )
}

export default Header;
