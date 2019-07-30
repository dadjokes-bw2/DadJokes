import React from 'react'
import {connect} from 'react-redux'
import {getPublicJokes, deletePublicJoke} from '../actions/index'
import {withRouter, Link} from 'react-router-dom'
import {
    Card, CardBody, CardText, Button,
} from 'reactstrap'
import NavBar from '../components/NavBar'

function PublicJokes(props) {
    const {isLoading, errorMessage, jokes} = props

    if (isLoading) {
        return <p>Loading Jokes...</p>
    }
    
        return (
            <section className = 'public-jokes'>
                <NavBar />
                <h2>Public Jokes</h2>
                {jokes.map((joke) => {
                    return (
                        <Card key = {joke.id}>
                            <CardBody>
                                <CardText>{joke.joke}</CardText>
                                <Button outline color = 'primary' onClick = {() => {props.deletePublicJoke(joke.id)}}>✖</Button>
                                <Button outline color = 'primary' >✏</Button>
                            </CardBody>
                            
                        </Card>
                    )
                })}
                <Link to = '/addJoke'><Button outline color = 'secondary'>Add joke!</Button></Link>
            </section>
        )
    
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        errorMessage: state.errorMessage,
        jokes: state.jokes
    }
}

const mapDispatchToProps = {
    getPublicJokes,
    deletePublicJoke
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(PublicJokes))