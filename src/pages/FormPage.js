import React from 'react'
import {Button, Grid,Cell} from 'react-mdl'

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
            
            <form onSubmit={this.handleSubmit} className="form-class">
                <Grid>
                <Cell>
                <label style={{fontFamily:'Anton', fontSize:'2rem'}}>Name</label>
                </Cell>
                <Cell>
                <input type="name" placeholder='Full Name' value={this.state.name} onChange={this.handleChange} />
                </Cell>
                </Grid>
                <Grid>
                <Cell>
                <label style={{fontFamily:'Anton',fontSize:'2rem'}}  value={this.state.email} onChange={this.handleChange} >Email</label>
                </Cell>
                <Cell>
                <input type="email" placeholder='example@example.com'/>
                </Cell>
                </Grid>
                <Grid>
                <Cell>
                <label style={{fontFamily:'Anton', fontSize:'2rem'}}  value={this.state.message} onChange={this.handleChange} >Message</label>
                </Cell>
                <Cell>
                <textarea style={{width:'20rem', height:'15rem'}} placeholder='Type your message here'/>
                </Cell>
                </Grid>

                <Button raised colored type='submit' disabled={this.state.disabled} className="button">Send</Button>
                {this.state.emailSent === true && <p className="d-inline success-msg">Message Sent</p>}
                {this.state.emailSent === false && <p className="d-inline err-msg">Message Not Sent</p>}

            </form>
           
        )
    }
}
export default FormPage
