import React from 'react'
import {connect} from 'react-redux'
import {getPublicJokes, deletePublicJoke} from '../actions/index'
import {withRouter, Link} from 'react-router-dom'
import {
    Card, CardBody, CardText, Button,
} from 'reactstrap'
import NavBar from '../components/NavBar'

function PublicJokes(props) {
    const {isLoading, errorMessage, publicJokes} = props

    if (isLoading) {
        return <p>Loading Jokes...</p>
    }
    
        return (
            <section className = 'public-jokes'>
                <NavBar />
                <h2>Public Jokes</h2>
                {publicJokes.map((joke) => {
                    return (
                        <Card key = {joke.id}>
                            <CardBody>
                                <CardText>{joke.joke}</CardText>
                                <Button outline color = 'primary' onClick = {() => {props.deletePublicJoke(joke.id)}}>✖</Button>
                            </CardBody>
                            
                        </Card>
                    )
                })}
                <Link to = '/addPublicJoke'><Button outline color = 'secondary'>Add joke!</Button></Link>
            </section>
        )
    
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        errorMessage: state.errorMessage,
        publicJokes: state.publicJokes
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