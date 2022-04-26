import React from 'react';
import SearchBar from '../../Searchbar/Searchbar';
import './home.css';
import Random3Item from './Random3Item.js';
const Home = () => {
  return (
    <>
      <SearchBar />
      <div className="App-body">
        <h1>Welcome to Buyducks!</h1>
        <p>
          Come and buy our ducks!<br />
          We are selling a large variabillity of ducks!<br />
          From classic yellow ducks to big wierd looking red duck!<br />
          Start now and buy our lovely ducks for a very fair price!
        </p>
        <div className='random-items'>
        <Random3Item/>
        </div>
      </div>
    </>
  );
}



export default Home;