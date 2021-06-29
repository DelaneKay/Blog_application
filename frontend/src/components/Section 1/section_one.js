import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardGroup } from 'react-bootstrap'
import Card_Temp from '../card/card_compo'

const section_one = () => {
    return (
        <CardGroup className="container" id='group' >
            <Card style={{height:500}}>
                <Card.Img variant="top" src="holder.js/100px160" />
            </Card>
            <Card_Temp/>
        </CardGroup>
    )
}

export default section_one
