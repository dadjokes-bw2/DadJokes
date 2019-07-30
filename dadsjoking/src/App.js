import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {LandingPage, LoginPage, SignUpPage, PublicJokes, AddJoke} from './views'
import {Route} from 'react-router-dom'
import {getPublicJokes} from './actions/index'


class App extends React.Component {
  componentDidMount() {
    this.props.getPublicJokes()
}
  render(){
    return (
    <div className="App">
      
      <Route exact path = '/' component = {LandingPage} />
      
      
      <Route exact path = '/login' component = {LoginPage} />
      <Route exact path = '/signup' component = {SignUpPage} />
      <Route path = '/publicJokes' component = {PublicJokes} />
      <Route path = '/addJoke' component = {AddJoke} />
    </div>
  );}
}

const mapDispatchToProps = {
  getPublicJokes
}

export default connect(null, mapDispatchToProps)(App)
