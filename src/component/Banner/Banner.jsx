import React from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap'
import ExpList from '../Experience/ExpList'

function Banner(props) {
    return (
        <>
            <Jumbotron>
                <div className="jumbotron-background-img">


                    <Container>


                        <Row>
                            <Col lg={4}>
                                <div className="jumbotron-content">
                                <h1 style={{fontSize:"80px"}}>Online Experiences</h1>
                                <p style={{fontSize:"24px"}}>
                                    Unique activities to do from home, including cooking experiences with world-renowned chefs
  </p>
                                </div>
                 
                            </Col>
                            <Col lg={9}>
                            </Col>
                        </Row>




                    </Container>
                </div>
            </Jumbotron>
            <ExpList></ExpList>
        </>
    );
}

export default Banner;