import React from 'react'
import {Grid, Cell} from 'react-mdl'
import '../App.css'
import avatar from '../assets/images/avatar.jpg'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'


class Home extends React.Component{
    render(){
        return(
            <div style={{width:'100%', margin: 'auto'}}>
                <Grid className='navbar-link-color home-grid'>
                    <Cell col={12}>
                        <img src={avatar} className='avatar-img' alt={avatar} />
                    </Cell>
                    <div className='banner-text'>
                        <h1>Developer</h1>
                        <hr />
                        {/* <Cell> */}
                        <div className='p-tag'>
                        {/* <p> HTML/CSS| Django | React | Bash Scripting | MySQL | PostGreSQl </p> */}
                       
                        <span> Django</span> 
                        <span> React</span>
                        <span> Bash scripting</span>    
                        <span> MySQL</span>
                        <span> PostGreSQl </span>
                        </div>
                        {/* </Cell> */}
                        <div className='social-icons'>
                            {/* Linkedin */}
                            <a href='https://www.linkedin.com/in/isham-bhandari-40977816a/' target='__blank' rel='noopener noreferer'>
                            <FaLinkedinIn className="p-icons"/>
                            </a>
                            {/* Github */}
                            <a href='https://github.com/ishambhandari' target='__blank' rel='noopener noreferer'>
                            <FaGithub className='p-icons' />
                            </a>
                        </div>
        
                    </div>

                </Grid>
            </div>
        )
    }
}
export default Home