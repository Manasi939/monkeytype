

import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Nav from './component/Nav';
import Nws from './component/Nws';
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'

export default class App extends Component {
  state={
    progress:0
   }
   setProgress=(progress)=>{
        this.setState({progress:progress})
   }
  render() {
   
    return (
      <Router>
      <div  className="App">
  <Nav/>
  <LoadingBar
    color='#f11946'
    progress={this.state.progress}
   
  />
  <Routes>
      <Route exact path="/" element={<Nws setProgress={this.setProgress} key="general" category="general" sizee="8"/>}/>
      <Route exact path="/business" element={<Nws setProgress={this.setProgress}  key="business" category="business" sizee="8"/>}/>
      <Route exact path="/sports" element={<Nws setProgress={this.setProgress} key="sports" category="sports" sizee="8"/>}/>
  </Routes> 
  
</div>
</Router>
    )
  }


}




