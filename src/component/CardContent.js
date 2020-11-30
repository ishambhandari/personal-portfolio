import React from 'react'
import {Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl'
import '../App.css'
function CardContent(props){
    return (
        <div>
            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
            <CardTitle style={{color:'black',height:'200px',background:`url(${props.projectImg})`,backgroundSize:'350px', backgroundRepeat:'no-repeat' }}></CardTitle>

            <CardText>
                <h3>{props.projectTitle}</h3>
                {props.projectText}
            </CardText>
            <CardActions border>
            <a href ={props.projectLink} target="__blank" ><Button colored>Github</Button></a>
            </CardActions>
            <CardMenu style={{color:'#fff'}}></CardMenu>
            </Card>
            
        </div>
    )
}
export default CardContent