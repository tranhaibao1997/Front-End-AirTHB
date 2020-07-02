import React from 'react';
import { Jumbotron, Button, Container } from 'react-bootstrap'
import ExpList from '../Experience/ExpList'

function Banner(props) {
    return (
        <>
            <Jumbotron>
                <div className="jumbotron-background-img">


                    <Container>

                        <div className="jumbotron-content">

                            <h1>Online Experiences</h1>
                            <p>
                                Unique activities to do from home, including cooking experiences with world-renowned chefs
  </p>

                        </div>

                    </Container>
                </div>
            </Jumbotron>
            <ExpList></ExpList>
        </>
    );
}

export default Banner;