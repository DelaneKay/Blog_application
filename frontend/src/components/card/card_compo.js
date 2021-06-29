import React from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const card_compo = () => {
    return (
        <Card  style={{height:500}}>
                <Card.Body className='container'>
                    <small className='container'>by</small>
                    <Card.Link className='container'>Kuda Sibanda</Card.Link>
                    <Card.Link>June 29, 2021</Card.Link>
                    <Card.Title className='container'>Card title</Card.Title>
                    <Card.Text className='container'>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                </Card.Body>
                <hr className='hr'/>
                    <span className='container'>
                        <Card.Link>Artificial Intelligence,</Card.Link>
                        <Card.Link>Robotics</Card.Link>
                    </span>
                    
            </Card>
    )
}

export default card_compo
