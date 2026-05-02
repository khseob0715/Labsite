import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


import TopNav from './components/TopNav';
import Footer from './components/Footer';

import {
  Home,
  Publication,
  PublicationDetail,
  Team,
  Research,
  Project,
  Course,
  News,
  Gallery,
  JoinUs,
  ProfessorProfile
} from "./pages";



import { transitions, positions, Provider as AlertProvider, types } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'



import './App.css';

// optional configuration
const options = {
  // you can also just use 'top center' or 'middle'
  position: positions.BOTTOM_RIGHT,
  timeout: 2000,
  offset: '0px',
  // you can also just use 'scale'
  transition: transitions.FADE
}

function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <TopNav />
          <div id="layoutSidenav_content" style={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto', position: 'relative', zIndex: 1 }}>
            <main style={{ flex: '1 0 auto' }}>
            <Switch>

              <Route path="/" exact component={Home} />
              <Route path="/publication" exact component={Publication} />
              <Route path="/publication/:id" component={PublicationDetail} />
              <Route path="/team" exact component={Team} />
              <Route path="/team/:slug" component={ProfessorProfile} />
              <Route path="/research" exact component={Research} />
              <Route path="/project" exact component={Project} />
              <Route path="/course" exact component={Course} />
              <Route path="/news" exact component={News} />
              <Route path="/gallery" exact component={Gallery} />
              <Route path="/join-us" exact component={JoinUs} />
      
              {/* 정의되지 않은 주소(예: /index)로 접근 시 메인 화면으로 자동 이동 */}
              <Redirect from="*" to="/" />
       
            </Switch>


          </main>
            <Footer />
          </div>
        </div>
      </Router>
    </AlertProvider>
  );
}

export default App;
