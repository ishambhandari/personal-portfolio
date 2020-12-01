import './App.css';
import {Layout, Navigation, Drawer, Content, Header } from 'react-mdl'
import Routes from './Routes.js'
import {Link} from 'react-router-dom'
import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import "@fortawesome/fontawesome-svg-core/styles.css";

class App extends React.Component {
  hideToggle() {
    let selectorId = document.querySelector('.mdl-layout');
    selectorId.MaterialLayout.toggleDrawer();
}
  render(){
  return (
    <div className="App">
      <div className="demo-big-content">
    <Layout>
        <Header className='navbar-link-color' title="Isham Bhandari"  scroll>
            <Navigation>
              <Link to='/personal-portfolio'>Home</Link>
              <Link to='/projects'>Projects</Link>
              <Link to='/resume'>Resume</Link>   
              <Link to='/contact'>Contact</Link> 

            </Navigation>
        </Header>
        <Drawer title="Isham Bhandari">
            <Navigation>
            <Link to='/personal-portfolio' onClick={() => this.hideToggle()}>Home</Link>
              <Link to='/projects' onClick={() => this.hideToggle()}>Projects</Link>
              <Link to='/resume' onClick={() => this.hideToggle()}>Resume</Link>     
              <Link to='/contact' onClick={() => this.hideToggle()}>Contact</Link> 

            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Routes />
        </Content>
    </Layout>
</div>
    </div>
  );
}
}

export default App;