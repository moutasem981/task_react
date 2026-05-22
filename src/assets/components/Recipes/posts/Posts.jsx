import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import style from './posts.module.css';


export default function Posts(props) {
  return <>
  <Container className={style.card}>

 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image_url} />
      <Card.Body>
        <Card.Title>{props.publisher}</Card.Title>
        <Card.Text>
          {props.id}
        </Card.Text>
        <Button variant="primary"> {props.title}</Button>
      </Card.Body>
    </Card>
     </Container>

  </>
  
}
