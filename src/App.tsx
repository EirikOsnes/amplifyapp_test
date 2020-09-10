import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import RadarPlot from './components/RadarPlot';
import Form from './components/Form';
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react'

let radar_data = require('./radar-data.json');

function App() {
  console.log(radar_data);
  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div style={{height:"400px", width:"400px"}}>
          <RadarPlot data={radar_data}></RadarPlot>
        </div>
        
      </header>
      <AmplifySignOut/>
      <Form></Form>
    </div>
  );
}

export default withAuthenticator(App);
