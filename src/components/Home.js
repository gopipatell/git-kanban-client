import React from 'react';
import LoginButton from './LoginButton';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../ThemeUtil';

function Home() {
  theme.resetTheme();

  return (

    <div >
        <div class="position-relative overflow-hidden p-3 p-md-5 text-center homepage">
          <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-4 font-weight-normal text-dark">
            <FontAwesomeIcon className="mr-3 text-dark" icon={['fab', 'trello']} />
              Git Kanban
            </h1>
            <p class="lead font-weight-normal">When Open Source Meets Kanban <span role="img" aria-label="heart">🧡</span></p>
            <p class="text-capitalize">
            Manage your projects feature backlog efficiently. Sync repositories from Github and Start managing Kanban board with one click.</p>
            <LoginButton/>
          </div>
          <div class="product-device shadow-sm d-none d-md-block"></div>
          <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
          <div class="product-device shadow-sm d-none d-md-block"></div>
          <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

            <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
              <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                <div class="my-3 py-3">
                  <h2 class="display-5">Sync Github Projects</h2>
                </div>
                <div class="bg-light p-3 box-shadow mx-auto">
                  <img src="https://i.pinimg.com/originals/dc/ef/3a/dcef3abedf0e0761203aaeb85886a6f3.jpg" alt="sync" width="200" height="200"/>
                </div>
              </div>
              <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div class="my-3 p-3">
                  <h2 class="display-5">Track your backlog</h2>
                </div>
                <div class="bg-dark box-shadow mx-auto mb-4">
                <img src="https://cdn2.iconfinder.com/data/icons/online-gaming/512/online_gaming_progress-512.png" height="250" alt="backlog" />
                </div>
              </div>
            </div>

            <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
              <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div class="my-3 p-3">
                  <h2 class="display-5">Get things done</h2>
                </div>
                <div class="bg-dark box-shadow mx-auto p-4">
                  <img src="https://www.androidpolice.com/wp-content/cache/wp-appbox/a32f0c784daf6ebdee8d1d2aa88cf1b5/ai-ad558b8d3a18effc498879622379f140" alt="things done" width="200"/>
                </div>
              </div>
              <div class="bg-secondary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                <div class="my-3 py-3">
                  <h2 class="display-5">Collaborate with team</h2>
                </div>
                <div class="bg-light box-shadow mx-auto p-4">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZBb1olXBUg3ALXOQWESZrNT3OWbMujCX_-EnEkvSLm1BoQdMJiQ" height="180" alt="team" />
                </div>
              </div>
            </div>


  </div>
  );
}

export default Home;
