import React from 'react'
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'
import "../App.css"
import FormPage from './FormPage.js'
import {FaPhone} from 'react-icons/fa'
import { MdEmail} from 'react-icons/md'
import {ImLocation2} from 'react-icons/im'
class Contact extends React.Component{
    render(){
        return(
            <div className='contact-body'>
                <Grid>
                <h2  className="contact-grid contact-info">Contact Me</h2> 
                <hr className="hr"/>
                </Grid>
        <Grid >
                <FormPage />
                </Grid>
               <Grid className='contact-grid'>
    

                    <List>
                   
                        <ListItem>
                        <MdEmail className='contact-icon-p' />

                            <ListItemContent className="personal-detail">ishambhandari007@gmail.com</ListItemContent>
                        </ListItem>
                       
                        
                        <ListItem>
                      <FaPhone className='contact-icon-p' />
                        <ListItemContent className="personal-detail">(+977) 9860479999</ListItemContent>
                        </ListItem>
                      
                        <ListItem>
                        <ImLocation2 className ='contact-icon-p'/>
                            <ListItemContent className="personal-detail">Shantinagar, Kathmandu</ListItemContent>
                        </ListItem>
                       
                    </List>


                
                </Grid> 
            </div>
        )
    }
}
export default Contact