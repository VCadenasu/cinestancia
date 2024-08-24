import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Película 1</Card.Title>
          <Card.Text>
            Descripción 1
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Plataforma</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Película 2</Card.Title>
          <Card.Text>
            Descripción 2{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Plataforma</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Película 3</Card.Title>
          <Card.Text>
            Descripción 3
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Plataforma</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;