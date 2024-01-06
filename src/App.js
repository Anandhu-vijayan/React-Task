import React from 'react';
import './App.css';
import img1 from './fortnite-pictures-b5kfcchwazwiz3cs 1.png'
import img2 from './Fortnite_20180630171046 1.png'
import img3 from './5daa24d7cc4a0a62650c6b28 1.png'
import img4 from './maxresdefault 1.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className="page-close-button">X</button>
      </header>
      <main className="App-main">
        <section className="content">
          <p className='text'>Epic Games: An ameriacn video game and software developer and publisher based in cary ,North Carolina </p>
          <img src={img1} alt="sample" className='img1' />
          <p className='text2'>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</p>
          <button className='button1'>Visit Website</button>
        </section>
        <section className="image-containers">
          <div className="image-container">
            <img src={img2} alt="sample" />
            <p className='text3'>Explore large, destructible environments where no two games are ever the same.</p>

          </div>
          <div className="image-container">
            <img src={img3} alt="sample" />
            <p className='text3'>Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale</p>

          </div>
          <div className="image-container">
            <img src={img4} alt="sample" />
            <p className='text3'>Discover even more ways to play across thousands of creator-made game genres</p>

          </div>
        </section>

        <section className="text-and-buttons">
          <h1 className='heading'>Our Contribution</h1>
          <p className='text3'>Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.</p>

        </section>

        <section className="image-containers">
          <div className="image-container">
            <h1 className='head1'>5M</h1>
            <p className='text4'>Daily User
              Engagements
            </p>

          </div>
          <div className="image-container">
            <h1 className='head1' >$500K</h1>
            <p className='text4'>Revenue Surge for an
              Platform
            </p>

          </div>
          <div className="image-container">
            <h1 className='head1'>10X</h1>
            <p className='text4'>ROAS on all our
              marketing campaigns</p>

          </div>
        </section>
        <section className="text-and-buttons">
          <h1 className='heading'>Interested in delving deeper into the project?</h1>
          <p className='text5'>If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at hello@abc.com or give us a call at +91 480 20802730.</p>

        </section>

        <div className="ButtonRow">
      <button>Ring us on Skype</button>
      <button>Contact Us</button>
    </div>
        <section className="text-and-buttons">
          <p>Text 2</p>

        </section>
        <section className="text-and-buttons">
          <p className="footer">© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p>
          
        </section>
      </main>
     
    </div>
  );
}

export default App;
