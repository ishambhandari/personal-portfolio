import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl'
import '../App.css'
import avatar from '../assets/images/avatar.jpg'
import Education from '../component/Education.js'
import Experience from '../component/Experience.js'
import Skills from '../component/Skills.js'

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4} className='resume-left-col'>
                        <div style={{textAlign:'center'}}>
                            <img src={avatar} alt='avatar' style={{height:'200px', justifyContent:'left'}} className='avatar-img'/>

                        </div>
                        <div style={{fontFamily:'Arial', paddingLeft:'2rem'}}>
                        <h2 style={{paddingTop: '2em'}}> Isham Bhandari</h2>
                        <h4 style={{color:'grey'}}>Developer</h4>
                        <p>Hello!! I am Kathmandu based Python and Javascript developer. </p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        
                        <h5>Phone</h5>
                        <p>(+977) 9860479999</p>
                        <h5>Email</h5>
                        <p>ishambhandari007@gmail.com</p>
                        <h5>Location</h5>
                        <p>Shantinagar, Kathmandu</p>
                        <h5>Web</h5>
                        <p>test.com</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        </div>
                    </Cell>
                    <Cell col={8} className="resume-right-col">
                        <h2>Education</h2>
                        <Education startYear='2014' endYear='2015' schoolName='Chelsea International Academy' schoolDescription='Completed School leaving certification (SLC) qualification from the above listed institute.'/>
                        <Education startYear = '2015/16' endYear='2016/17' schoolName="St. Xavier's College" schoolDescription = 'Completed (+2) qualification.' />
                        <Education startYear = '2017/18' endYear='2020' schoolName='Islington College, London Metropolitant University ' schoolDescription= "Completed Bacholor's degree on Networking and Cyber Security. " />
                        <Education startYear = '2017/18' endYear='present (Expected Graduation 2021)' schoolName = 'Baneshwor Campus, Tribhuwan University' schoolDescription="Currently final year student majoring in Sociology and Political Science. " />
                        <hr  style={{ borderTop:'3px solid #e22947'}}/>
                        <h2>Experience</h2>
                        <Experience startYear='September 2019' endYear='November 2019' JobName='Internship at F1Soft' JobDescription='Big Data and Machine Learning' />
                        <hr  style={{ borderTop:'3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills skill='Python' progress='80'/>
                        <Skills skill='MySQL' progress='60'/>
                        <Skills skill='Javascript' progress='60'/>
                        <Skills skill ='Bash Scripting' progress='65' />
                        <h2>Additional Experience</h2>
                        <Experience startYear = '2017' endYear='2017' JobName='Asian Science Camp' JobDescription='Malaysia'/>
                    </Cell>
                </Grid>
                
            </div>
        )
    }
}
export default Resume