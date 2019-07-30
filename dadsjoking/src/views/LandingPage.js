import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'
import {getPublicJokes} from '../actions/index'
import NavBar from '../components/NavBar'


class LandingPage extends React.Component {
    
   
    render() {
        if (!this.props.isLoggedIn) {
        return (
            <section className = 'landing-page'>
                <NavBar />
                <h1>Dad Jokes</h1>
                <h2>Welcome to Dad Jokes</h2>
                <Link to = '/publicJokes'><Button outline color = 'primary'>Public Jokes!</Button></Link><br/>
                <Link to = '/privateJokes'><Button outline color = 'primary'>Private Jokes!</Button></Link><br/>
                <Link to = '/signup'><Button outline color = 'secondary'>Sign Up!</Button>{' '}</Link>
                <Link to = '/login'><Button outline color = 'secondary'>Log In</Button>{' '}</Link>
                
            </section>
        )}
        else {
            return (
                <section className = 'landing-page'>
                    <NavBar />
                    <h1>Dad Jokes</h1>
                    <h2>Welcome to Dad Jokes</h2>
                    <Link to = '/publicJokes'><Button outline color = 'primary'>Public Jokes!</Button></Link><br/>
                    <Link to = '/privateJokes'><Button outline color = 'primary'>Private Jokes!</Button></Link><br/>
                    </section>
            )}
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        isLoggedIn: state.isLoggedIn,
        errorMessage: state.errorMessage
    }
}

const mapDispatchToProps = {
    getPublicJokes
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)