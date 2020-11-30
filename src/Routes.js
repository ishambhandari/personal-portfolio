import {Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
const Routes = () => (   
    <Switch>
        <Route exact path = '/' component={Home} />
        <Route exact path = '/projects' component={About} />
        <Route exact path = '/contact' component={Contact} />
        <Route exact path = '/resume' component={Resume} />

    </Switch>
)
export default Routes