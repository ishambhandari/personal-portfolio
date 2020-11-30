import React from 'react'
import {Button, Grid,Cell} from 'react-mdl'
import call from '../assets/images/call.png'
import mail from '../assets/images/mail.png'
import github from '../assets/images/github.png'
import linkedin from '../assets/images/linkedin.png'
import avatar from '../assets/images/avatar.jpg'
import '../App.css'

class FormPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            email:'',
            message:'',
            disabled : false,
            emailSent:null,

        }
    }
    handleChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value 
        const name = target.name 
        this.setState({
            [name]:value 
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            disabled:true,
            emailSent: true
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <div className='main-div'>
            <div className='container'>
                <div className='contact-box'>
                    
                    <div className='left' >  
                    <img src = {avatar} style={{height:'100%', width:'100%'}} />
                    
                    </div>
                    
                   
                 <div className='right'>
                <h2>Contact Me</h2>
                <label value={this.state.name }></label>
                <input type="text" className="field" placeholder="Your Name" onChange={this.handleChange }required />
				<label value={this.state.email }></label>
                <input type="text" className="field" placeholder="Your Email" onChange={this.handleChange }required />
				{/* <label value={this.state.name }></label>
                <input type="text" className="field" placeholder="Phone" onChange={this.handleChange }required /> */}
				<label value={this.state.name }></label>
                <textarea placeholder="Message" class="field" onChange={this.handleChange }required></textarea>
				<button className="btn" disabled={this.state.disabled}>Send</button>
                    </div>
                    
                </div>
                </div>
                {this.state.emailSent === true && <p className="d-inline success-msg">Message Sent</p>}

            </div>
            </form>
        )
    }
}
export default FormPage
{/* <form onSubmit={this.handleSubmit} className="form-class">
                <Grid >
                <Cell>
                <label style={{ fontSize:'2rem'}} value={this.state.name }>Name</label>
                </Cell>
                <Cell>
                <input type="name" placeholder='Full Name'   />
                </Cell>
                </Grid>
                <Grid>
                <Cell>
                <label style={{fontSize:'2rem'}}  value={this.state.email} onChange={this.handleChange } >Email</label>
                </Cell>
                <Cell>
                <input type="email" placeholder='example@example.com' required/>
                </Cell>
                </Grid>
                <Grid>
                <Cell>
                <label style={{ fontSize:'2rem'}}  value={this.state.message } onChange={this.handleChange} >Message</label>
                </Cell>
                <Cell>
                <textarea style={{width:'20rem', height:'15rem'}} placeholder='Type your message here' required/>
                </Cell>
                </Grid>

                <Button raised colored type='submit' >Send</Button>
            
                {this.state.emailSent === false && <p className="d-inline err-msg">Message Not Sent</p>}

            </form>
            */}