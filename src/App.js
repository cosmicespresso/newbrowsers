import React from 'react';
import './App.css';


function twitterShare() {
  const text = 'An exploration of different browsing interfaces made by @kallirroi';
  const url = 'http://newbrowsers.now.sh/'
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
}

function App() {
  return (
    <div className="App">
      <section className='top'>
        <img src="screenshot.png" alt="prototype stills" width="70%"/>
      </section>
      
      <header>What if browsers looked different?</header>
      
      <section>
        <img src="screenshot.png" alt="prototype stills" width="70%"/>
      </section>
      
      <section className='text-columns'>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada. Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Sed arcu non odio euismod lacinia. Id cursus metus aliquam eleifend mi in nulla. Nascetur ridiculus mus mauris vitae ultricies leo.</div>
        <div>  </div>
      </section>

      <section className='mixed-columns'>

        <div className='left'>
          <header>prototype n.1</header>

          <div>Download the Mac OS executable <a href="https://www.dropbox.com/s/30agddw3fxqw1vo/NEW%20BROWSERS%20prototype%201.zip?dl=1" rel="noopener noreferrer" target="_blank">here</a>.</div>
          <div>View and fork the code on <a href="https://github.com/Kallirroi/newbrowsers_prototype1" rel="noopener noreferrer" target="_blank">Github</a>.</div>
          <div>Share on <a href={twitterShare()} rel="noopener noreferrer" target="_blank" >Twitter</a>.</div>
          <div className='credit'>*demo still on the right is using <a href="https://www.are.na/" rel="noopener noreferrer" target="_blank">Are.na</a></div>
        </div>
        
        <div>
          <img src="desktop-arena.png" alt="prototype stills" width="100%" />
        </div>
      
      </section>

      <section className='text-columns small'>
        <div>Made by <a href="https://kalli-retzepi.com/" rel="noopener noreferrer" target="_blank">Kalli Retzepi</a>.</div>
        <div>More prototypes will be posted soon - until then, stay safe.</div>
      </section>

    </div>
  );
}

export default App;
