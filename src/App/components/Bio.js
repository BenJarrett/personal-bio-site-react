import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function AboutMe() {
  return (
    <Container>
      <Row className="bio-container">
        <Col>
        <div className= "bio-styles">
          <h3>About Me</h3>
        <p>
        Doggo ipsum super chub doggorino shoober. Corgo he made many woofs you are doin me a concern shoob porgo ruff, yapper fat boi boof. smol borking doggo with a long snoot for pats very good spot. Long water shoob pupper ruff porgo big ol pupper, you are doing me a frighten vvv stop it fren. Corgo sub woofer fat boi pats very hand that feed shibe blop doggo very good spot, blop h*ck puggorino waggy wags snoot. fat boi lotsa pats doing me a frighten.
          </p>
    </div>
        </Col>
        <Col>
        <img className="bio-image" src="https://firebasestorage.googleapis.com/v0/b/personal-bio-site-d4958.appspot.com/o/IMG-2952.jpg?alt=media&token=1c178984-c29d-4cdc-a1cb-f98beca17162" alt="CSS icon"/>
        </Col>
      </Row>
    </Container>
  );
}
